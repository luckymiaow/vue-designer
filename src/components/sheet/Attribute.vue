<!--
 * @Description: 
 * @Autor: luckymiaow
 * @Date: 2020-12-29 17:01:48
 * @LastEditors: luckymiaow
 * @LastEditTime: 2020-12-30 21:08:20
-->
<template>
  <div class="Attribute" >
      <div class="row" v-for="(item,key) in attrData.style" :key="key">
        <label :for="key">{{key}}：</label><input type="text" :id="key" v-model="attrData.style[key]">
      </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue ,Watch} from 'vue-property-decorator'
import {ItoolData} from '@/tool-component/tool-component-list'

@Component({
})
export default class Attribute extends Vue {
  @Prop({
      type: Object,
      default:{}
  }) attrData!: ItoolData[] ;
 @Watch('attrData', { deep: true })
	handleWatch(){
	  console.log('监听上面数组的内容',this.attrData)
  } 


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
