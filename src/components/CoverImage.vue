<template>
  <div class="container text-center justify-content-center">

    <canvas ref="coverCanvas" id="coverCanvas" width="800" height="500" @mousedown="beginDrawing" @mousemove="keepDrawing"
            @mouseup="stopDrawing">
      <p>
        Draw your own cover image!
      </p>
    </canvas>
    <br>
    <button @click="saveImageData" type="submit" class="btn btn-primary m-3">Save Cover</button>

  </div>
</template>

<script>
export default {
  name: 'CoverImage',
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
      let ctx = this.canvas;
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
    },

    beginDrawing(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.isDrawing = true;
    },

    keepDrawing(e) {
      if (this.isDrawing === true) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = e.offsetX;
        this.y = e.offsetY;
      }
    },

    stopDrawing(e) {
      if (this.isDrawing === true) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = 0;
        this.y = 0;
        this.isDrawing = false;
      }
    },

    saveImageData() {
      this.imageData = this.$refs.coverCanvas.toDataURL();
      // console.log(this.imageData)
    },
  },
  mounted() {
    this.canvas = this.$refs.coverCanvas.getContext('2d')
  }
}
</script>