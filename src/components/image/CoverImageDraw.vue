<template>
  <div class="image-wrap">
    <div>
      <canvas ref="imageCanvas" id="imageCanvas" width="900" height="500" @mousedown="beginDrawing"
              @mousemove="keepDrawing"
              @mouseup="stopDrawing">
        <p>Draw your own cover image!</p>
      </canvas>
      <button class="btn button-inline-clear text-custom-light" @click="clearCanvas">Clear</button>
    </div>
    <div class="card limit-width">
      <label for="brushSize" class="form-label">Brush</label>
      <input v-model="brushSize" @change="updateBrushSize" type="range" class="form-range" min="1" max="10" id="brushSize"/>
    </div>
    <div class="card limit-width">
      <label for="colorControl" class="form-label">Color</label>
      <input v-model="color" @change="updateColor" type="color" class="form-control form-control-color" id="colorControl">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoverImageDraw',
  props: {
    imageDataBase64: String,
  },
  data() {
    return {
      x: 0,
      y: 0,
      brushSize: 1,
      color: "#000000",
      isDrawing: false,
      canvas: null,
      imageData: '',
    }
  },
  methods: {
    setImageBase() {
      const image = new Image();
      image.src = this.imageDataBase64;
      image.addEventListener("load", () => {
        this.canvas.drawImage(image, 0, 0, 900, 500);
      });
    },

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
        this.setAndEmitImageData();
      }
    },

    updateBrushSize() {
      this.canvas.lineWidth = this.brushSize;
    },

    updateColor() {
      this.canvas.strokeStyle = this.color;
    },

    clearCanvas() {
      this.canvas.clearRect(0, 0, 900, 500);
    },

    setAndEmitImageData() {
      this.imageData = this.$refs.imageCanvas.toDataURL();
      this.emitImageData();
    },

    emitImageData() {
      this.$emit('event-emit-image-data', this.imageData)
    },

  },
  mounted() {
    this.canvas = this.$refs.imageCanvas.getContext('2d');
    this.setImageBase()
    this.updateBrushSize()
    this.updateColor()
  }
}
</script>