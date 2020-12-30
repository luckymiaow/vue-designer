<!--
 * @Description: 
 * @Autor: luckymiaow
 * @Date: 2020-12-29 18:01:52
 * @LastEditors: luckymiaow
 * @LastEditTime: 2020-12-30 14:08:50
-->

<template>
  <div class="v-button" >
      <button :style="styleData">按钮</button>
  </div>
</template>

<script lang="ts">


import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VButton extends Vue {
    @Prop({
      type: Object,
      default: {}
    }) styleData!: Object ;
    

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
