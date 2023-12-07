<template>

  <img :src="imageDataBase64">

<!--    <div class="container text-center">-->
<!--      <div class="row justify-content-center">-->
<!--        <div class="col">-->
<!--          <canvas ref="coverCanvas" id="coverCanvas" width="1000" height="500" @mousedown="beginDrawing" @mousemove="keepDrawing"-->
<!--                  @mouseup="stopDrawing">-->
<!--            <p>-->
<!--              Draw your own cover image!-->
<!--            </p>-->
<!--          </canvas>-->
<!--        </div>-->
<!--        <div class="col col-sm-2">-->
<!--          <label for="brushSize" class="form-label">Brush size</label>-->
<!--          <input type="range" class="form-range" min="1" max="10" id="brushSize">-->
<!--          <button @click="saveImageData" type="submit" class="btn btn-primary m-3">Save Cover</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

</template>

<script>
export default {
  name: 'CoverImage',
  props: {
    imageDataBase64: String
  }
  // data() {
  //   return {
  //     x: 0,
  //     y: 0,
  //     isDrawing: false,
  //     canvas: null,
  //     imageData: '',
  //   }
  // },
  // methods: {
  //   drawLine(x1, y1, x2, y2) {
  //     this.canvas.beginPath();
  //     this.canvas.strokeStyle = 'black';
  //     this.canvas.lineCap = 'round';
  //     this.canvas.lineJoin = 'round';
  //     this.canvas.lineWidth = 10;
  //     this.canvas.moveTo(x1, y1);
  //     this.canvas.lineTo(x2, y2);
  //     this.canvas.stroke();
  //     this.canvas.closePath();
  //   },
  //
  //   beginDrawing(event) {
  //     this.x = event.offsetX;
  //     this.y = event.offsetY;
  //     this.isDrawing = true;
  //   },
  //
  //   keepDrawing(event) {
  //     if (this.isDrawing === true) {
  //       this.drawLine(this.x, this.y, event.offsetX, event.offsetY);
  //       this.x = event.offsetX;
  //       this.y = event.offsetY;
  //     }
  //   },
  //
  //   stopDrawing(event) {
  //     if (this.isDrawing === true) {
  //       this.drawLine(this.x, this.y, event.offsetX, event.offsetY);
  //       this.x = 0;
  //       this.y = 0;
  //       this.isDrawing = false;
  //     }
  //   },
  //
  //   saveImageData() {
  //     this.imageData = this.$refs.coverCanvas.toDataURL();
  //     // console.log(this.imageData)
  //   },
  // },
  // mounted() {
  //   this.canvas = this.$refs.coverCanvas.getContext('2d')
  // }
}
</script>