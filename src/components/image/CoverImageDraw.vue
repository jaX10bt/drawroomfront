<template>
<!--  <div class="row justify-content-center">-->
    <div>
      <canvas ref="coverCanvas" id="coverCanvas" width="900" height="500" @mousedown="beginDrawing"
              @mousemove="keepDrawing"
              @mouseup="stopDrawing">
        <p>
          Draw your own cover image!
        </p>
      </canvas>
    </div>
<!--    <div class="col col-sm-2">-->
<!--      <label for="brushSize" class="form-label">Brush size</label>-->
<!--      <input type="range" class="form-range" min="1" max="10" id="brushSize">-->
<!--      <button @click="setAndEmitImageData" type="submit" class="btn btn-primary m-3">Save Cover</button>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
export default {
  name: 'CoverDraw',
  props: {
    imageDataBase64: String
  },
  data() {
    return {
      x: 0,
      y: 0,
      isDrawing: false,
      canvas: null,
      imageData: '',
    }
  },
  methods: {
    drawLine(x1, y1, x2, y2) {
      this.canvas.beginPath();
      this.canvas.strokeStyle = 'black';
      this.canvas.lineCap = 'round';
      this.canvas.lineJoin = 'round';
      this.canvas.lineWidth = 10;
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

    setAndEmitImageData() {
      this.imageData = this.$refs.coverCanvas.toDataURL();
      this.emitImageData();
    },

    emitImageData() {
      this.$emit('event-emit-image-data', this.imageData)
    },

    setImageBase() {
      const image = new Image();
      image.src = this.imageDataBase64;
      image.addEventListener("load", () => {
        this.canvas.drawImage(image, 0, 0, 900, 500);
      });
    },
  },
  mounted() {
    this.canvas = this.$refs.coverCanvas.getContext('2d');
    this.setImageBase()
  }
}
</script>