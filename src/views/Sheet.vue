<!--
 * @Description: 
 * @Autor: luckymiaow
 * @Date: 2020-12-29 16:53:39
 * @LastEditors: luckymiaow
 * @LastEditTime: 2020-12-30 20:53:04
-->
<template>
  <div class="Sheet">
    <div class="tool">
      <SheetTool @drag="drag"></SheetTool>
    </div>
    <div class="content" @drop="drop($event)" @dragover="allowDrop($event)" ref="Container">
      <!-- 这里是内容 -->
      <SheetContent :componentsData = "componentsData" @setAttr="setAttr"></SheetContent>
    </div>
    <div class="attribute">
      <!-- 这里是属性栏 -->
      <Attribute :attrData = "attrData"></Attribute>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SheetTool from '@/components/sheet/Tool';
import SheetContent from '@/components/sheet/Content';
import Attribute from '@/components/sheet/Attribute';
import {ItoolData} from '@/tool-component/tool-component-list'
@Component({
  components: {
    SheetTool,
    SheetContent,
    Attribute
  },
})
export default class Sheet extends Vue {
  private componentsData: ItoolData[] = []; //内容数据
  private componentsSnapshot: any = []; //快照
  private snapshotLength: any = 10; //快照
  private tmpToolComponent!: ItoolData; //临时数据点
  private attrData: any = {};//属性
  /**
   * @description: 开始拖动，获取工具
   * @param {*}
   * @return {*}
   * @author: luckymiaow
   */
  drag(ev: any,toolComponent:ItoolData): void
  {
    this.tmpToolComponent = JSON.parse(JSON.stringify(toolComponent)) ;
  }

  /** 
   * @description: 松开拖拽
   * @param {*}
   * @return {*}
   * @author: luckymiaow
   */
  drop(ev: any): void
  {
    this.componentsData.push(this.tmpToolComponent);
    this.setAttr(this.componentsData.length-1)//松开就打开属性
  }

  /**
   * @description: 拖拽的过程
   * @param {*}
   * @return {*}
   * @author: luckymiaow
   */
  allowDrop(ev: any): void
  {
    let pageContainer:any = this.$refs.Container;
    let top: number = ev.offsetY;
    let left: number = ev.offsetX;
    let width = this.tmpToolComponent.style.width + this.tmpToolComponent.style.padding + this.tmpToolComponent.style['border-width']*2;
    let height = this.tmpToolComponent.style.height + this.tmpToolComponent.style.padding+ this.tmpToolComponent.style['border-width']*2;
    top = top > pageContainer.offsetHeight - height  ? pageContainer.offsetHeight - height : top
    left = left > pageContainer.offsetWidth- width ? pageContainer.offsetWidth - width: left
    this.tmpToolComponent.position.top = top
    this.tmpToolComponent.position.left = left
    ev.preventDefault();
  }

  /**
   * @description: 当前属性配置点
   * @param {*}
   * @return {*}
   * @author: luckymiaow
   */
  setAttr(index: number): void{
    this.attrData = this.componentsData[index];
  }

  /**
   * @description: 设置快照
   * @param {*}
   * @return {*}
   * @author: luckymiaow
   */
  setSnapshot(): void{
    this.componentsSnapshot.unshift (JSON.parse(JSON.stringify(this.componentsData)));
    if(this.componentsSnapshot.length >= this.snapshotLength){
      this.componentsSnapshot.pop()
    }
  }
}
</script>

<style lang="scss">
.Sheet{
  width: 100%;
  height: (100vh)-10;
  display: flex;
  .tool{
    width: 20%;
  }
  .content{
    width: 60%;
    border:1px solid #999 ;
    position: relative;
  }
  .attribute{
    width: 20%;
  }
}
</style>