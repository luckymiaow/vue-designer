<!--
 * @Description: 
 * @Autor: luckymiaow
 * @Date: 2020-12-29 17:01:48
 * @LastEditors: luckymiaow
 * @LastEditTime: 2020-12-30 20:48:30
-->
<template>
  <div class="Content"  @mousemove="mousemove($event)" @mouseup="mouseup($event)" ref="pageContent"> 
    <div class="box" v-for="(item,index) in componentsData" :key="index" :style="setStyle(item.position)" 
    @mousedown="mousedown($event,index)" ref="box" @click="setAttr(index)">
        <component :is="item.component" :styleData="setStyle(item.style)" ></component>
      </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator'
import {toolData ,ItoolData} from '@/tool-component/tool-component-list'

@Component({
})
export default class Content extends Vue {
  @Prop({
      type: Array,
      default: []
  }) componentsData!: ItoolData[] ;
  private clientX!: number;
  private clientY!: number;
  private offsetLeft!: number;
  private offsetTop!: number;
  private currentId: number = -1;
  /**
   * @description: 更新样式表
   * @param {*} style
   * @return {*}
   * @author: luckymiaow
   */
  setStyle(style: any): any{
    let results: any = {};
    for(let key  in style){
        if(key=='width' || key == 'height' || key == 'top' || key == 'left' || key ==   'padding' || key == 'margin' || key == 'border-width'){
          results[key] = style[key] + 'px';
        }else{
          results[key] = style[key];
        }
    }
    return results;
  }
  
  /**
   * @description: 点下鼠标
   * @param {*}
   * @return {*}
   * @author: luckymiaow
   */
  mousedown(e: any, index: number): void{
    this.clientX = e.clientX;
    this.clientY = e.clientY;
    let box: any = this.$refs.box;
    this.offsetLeft = box[index].offsetLeft;
    this.offsetTop = box[index].offsetTop;
    this.currentId = index;
  }
  /**
   * @description: 组件移动过程
   * @param {*}
   * @return {*}
   * @author: luckymiaow
   */
  mousemove(e: any): void{
    if(this.currentId != -1){
      const x = e.clientX;
      const y = e.clientY;
      let nx = x-(this.clientX-this.offsetLeft)
      let ny = y-(this.clientY-this.offsetTop)
      let pageContent: any = this.$refs.pageContent;
      let width = pageContent.offsetWidth - this.componentsData[this.currentId].style.width 
      let height = pageContent.offsetHeight - this.componentsData[this.currentId].style.height
      nx = Math.min(Math.max(0, nx), width)
      ny = Math.min(Math.max(0, ny), height)
      this.componentsData[this.currentId].position.top = ny
      this.componentsData[this.currentId].position.left = nx
    }
  }
  /**
   * @description: 松开鼠标
   * @param {*}
   * @return {*}
   * @author: luckymiaow
   */
  mouseup(): void{
    this.currentId = -1;
  }
  
  /**
   * @description: 设置属性
   * @param {*}
   * @return {*}
   * @author: luckymiaow
   */
  setAttr(index: number): any{
    this.$emit('setAttr', index);
  }

  beforeMount() {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Content{
  width: 100%;
  height: 100%;
}

</style>
