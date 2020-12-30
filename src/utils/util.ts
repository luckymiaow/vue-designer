/*
 * @Description: 
 * @Autor: luckymiaow
 * @Date: 2020-12-29 11:40:10
 * @LastEditors: luckymiaow
 * @LastEditTime: 2020-12-29 15:05:10
 */

/**
 * @description: 获取屏幕得dpi
 * @return {arrDPI}
 * @author: luckymiaow
 */
export function getDPI(): number[]{
  let arrDPI: any[] = new Array;
  let wid: any = window;
  if (wid.screen.deviceXDPI) {
      arrDPI[0] = wid.screen.deviceXDPI;
      arrDPI[1] = wid.screen.deviceYDPI;
  } else {
      let tmpNode: any = document.createElement("BUTTON");
      tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
      document.body.appendChild(tmpNode);
      arrDPI[0] = parseInt(tmpNode.offsetWidth);
      arrDPI[1] = parseInt(tmpNode.offsetHeight);
      tmpNode.parentNode.removeChild(tmpNode);
      console.log(1)
  }
  return arrDPI;
}
/**
 * px转换为mm
 * @param value
 * @returns {number}
 */
export function  pxConversionMm(value: number): number {
    
    var inch: number = value / getDPI()[0];
    var c_value: number = inch * 25.4;
    return c_value;
}
/**
 * mm转换为px
 * @param value
 * @returns {number}
 */
export function mmConversionPx(value: number): number{
    let inch: number = value/25.4;
    var c_value: number = inch *getDPI()[0];
    return c_value;
}


