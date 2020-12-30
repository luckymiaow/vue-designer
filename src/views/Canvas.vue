<!--
 * @Description: 
 * @Autor: luckymiaow
 * @Date: 2020-12-29 09:15:01
 * @LastEditors: luckymiaow
 * @LastEditTime: 2020-12-29 16:54:41
-->

<template>
  <div class="canvas">
    <canvas id="canvas" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {getDPI,pxConversionMm,mmConversionPx} from '@/utils/util';
import {paper} from '@/utils/config';


@Component({

})
export default class Canvas extends Vue {
  private content: any = {}; //画布上下文
  private canvasWidth: number = 0;
  private canvasHeight: number = 0;

  /**
   * @description: 初始化画布
   * @param {*}
   * @return {*}
   * @author: luckymiaow
   */
  initCanvas(width: number,height: number): void {
      const canvas: any = document.querySelector('#canvas'  );
      canvas.width = width;
      canvas.height = height;
      this.content = canvas.getContext('2d');
  }

  /**
   * @description: 绘制网格
   * @param {*}
   * @return {*}
   * @author: luckymiaow
   */
  drawGrid(gridSize: number): void{
    let ctx: any = this.content;
		let canvasHeight = ctx.canvas.height;
		let canvasWidth = ctx.canvas.width;
		/*3.画多少条X轴方向的线 横线的条数  画布高度*/
		let xLineTotal: number = Math.floor(canvasHeight / gridSize);
		for (let i: number = 0; i <= xLineTotal - 1; i++) {
			ctx.beginPath();
			ctx.moveTo(0, i * gridSize - 0.5);
			ctx.lineTo(canvasWidth, i * gridSize - 0.5);
			ctx.strokeStyle = '#C39054';
			ctx.stroke();
    }
    
		let yLineTotal: number = Math.floor(canvasWidth / gridSize);
		for (let i: number = 1; i <= yLineTotal - 1; i++) {
			ctx.beginPath();
			ctx.moveTo(i * gridSize - 0.5, 0);
			ctx.lineTo(i * gridSize - 0.5, canvasHeight);
			ctx.strokeStyle = '#C39054';
			ctx.stroke();
		}
  }

  /**
   * @description: 设置画板
   * @param {*}
   * @return {*}
   * @author: luckymiaow
   */
  design(){
    let whidth: number = 500;
    let height: number = 400;
    this.initCanvas(whidth,height);
  }

  mounted(){
    this.design();
   // this.drawGrid(10);
    
  }

}
</script>
