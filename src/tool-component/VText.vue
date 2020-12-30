<!--
 * @Description: 
 * @Autor: luckymiaow
 * @Date: 2020-12-29 18:01:52
 * @LastEditors: luckymiaow
 * @LastEditTime: 2020-12-30 15:48:46
-->
<template>
  <div class="text">
    <textarea name="" id="" :style="styleData" >

    </textarea>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VText extends Vue {
    @Prop({
      type: Object,
      default: {}
    }) styleData!: Object ;
    
}
</script>

<style scoped lang="scss">

</style>
