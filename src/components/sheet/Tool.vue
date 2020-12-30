<!--
 * @Description: 
 * @Autor: luckymiaow
 * @Date: 2020-12-29 17:01:48
 * @LastEditors: luckymiaow
 * @LastEditTime: 2020-12-30 13:11:32
-->
<template>
  <div class="Tools" >
    <div class="drop"  draggable="true" @dragstart="drag($event,item)"  v-for="(item,index) in toolData" :key="index">
      <div class="component">{{item.title}}</div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator'
import {toolData ,ItoolData} from '@/tool-component/tool-component-list'

@Component({
})
export default class Tool extends Vue {
  private toolData: ItoolData[] = toolData

  drag(ev: any, toolComponent: ItoolData): void
  {
    this.$emit('drag', ev,toolComponent);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Tools{
  display: flex;
  .component{
    height: 30px;
    border: 1px dashed #999;
    text-align: center;
    line-height: 30px;
    margin: 0 20px;
    padding: 0 10px;
  }
}

</style>
