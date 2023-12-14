<template>
  <div>
    <div class="image-wrap">

      <div class="card">
        <label for="brushSize" class="form-label">Brush</label>
        <input v-model="brushSize" @change="updateBrushSize" type="range" class="form-range" min="1" max="10" id="brushSize"/>
      </div>

      <div class="card">
        <label for="colorControl" class="form-label">Color</label>
        <input v-model="color" @change="updateColor" type="color" class="form-control form-control-color" id="colorControl">
      </div>

      <button @click="addPost" type="submit" class="btn btn-primary button-inline">
        Post
      </button>

    </div>
    <div class="image-wrap" ref="canvasParent" @mousedown="beginDrawing" @mousemove="keepDrawing" @mouseup="stopDrawing">
      <canvas ref="imageCanvas" id="imageCanvas" width="600" height="100"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostImageDraw',
  data() {
    return {
      x: 0,
      y: 0,
      brushSize: 1,
      color: "#000000",
      isDrawing: false,
      canvas: null,
      imageData: '',
      newPost: {
        userId: sessionStorage.getItem('userId'),
        postImageData: ''
      }
    }
  },
  methods: {
    drawLine(x1, y1, x2, y2) {
      this.canvas.beginPath();
      this.canvas.strokeStyle = this.color;
      this.canvas.lineWidth = this.brushSize;
      this.canvas.lineCap = 'round';
      this.canvas.lineJoin = 'round';
      this.canvas.moveTo(x1, y1);
      this.canvas.lineTo(x2, y2);
      this.canvas.stroke();
      this.canvas.closePath();
    },

    beginDrawing(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
      this.isDrawing = true;
    },

    keepDrawing(event) {
      if (this.isDrawing === true) {
        this.drawLine(this.x, this.y, event.offsetX, event.offsetY);
        this.x = event.offsetX;
        this.y = event.offsetY;
      }
    },

    stopDrawing(event) {
      if (this.isDrawing === true) {
        this.drawLine(this.x, this.y, event.offsetX, event.offsetY);
        this.x = 0;
        this.y = 0;
        this.isDrawing = false;
        this.setImageData();
      }
    },

    updateBrushSize() {
      this.canvas.lineWidth = this.brushSize;
    },

    updateColor() {
      this.canvas.strokeStyle = this.color;
    },

    setImageData() {
      this.newPost.postImageData = this.$refs.imageCanvas.toDataURL();
    },

    clearCanvas() {
      this.canvas.clearRect(0, 0, 600, 100);
    },

    emitUpdateFeed() {
      this.$emit('event-update-feed')
    },

    addPost() {
      this.$http.post("/post", this.newPost
      ).then(response => {
        // this.newPost = response.data
        this.clearCanvas()
        this.emitUpdateFeed()
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

  },
  mounted() {
    this.canvas = document.getElementById('imageCanvas');
    this.canvas = this.$refs.imageCanvas.getContext('2d');
    this.updateBrushSize()
    this.updateColor()
  }
}
</script>