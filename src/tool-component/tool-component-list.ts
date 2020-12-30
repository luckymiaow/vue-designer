/*
 * @Description: 
 * @Autor: luckymiaow
 * @Date: 2020-12-30 09:38:28
 * @LastEditors: luckymiaow
 * @LastEditTime: 2020-12-30 21:12:22
 */

import { inflate } from "zlib";

/**
 * @description: 工具箱数据模型
 * @param {*}
 * @return {*}
 * @author: luckymiaow
 */
export interface ItoolData{
  component: string,
  type: string,
  title: string,
  style: IStyleData,
  position: IPosition
}
/**
 * @description: 样式接口
 * @param {*}
 * @return {*}
 * @author: luckymiaow
 */
export interface IStyleData{
  'width': number,
  'height': number,
  'color': string,
  'padding': number,
  'margin': number,
  'border-width': number,
  'background-color': string
}

/**
 * @description: 位置接口
 * @param {*}
 * @return {*}
 * @author: luckymiaow
 */
export interface IPosition{
  top: number,
  left: number
  'z-index': number
  position: string
}

/**
 * @description: 默认样式
 * @param {*}
 * @return {*}
 * @author: luckymiaow
 */
const defaultStyleData = {
  'width':100,
  'height':40,
  'color': '#111',
  'padding': 0,
  'margin': 0,
  'border-width': 1,
  'background-color':'#fff'
};

/**
 * @description: 默认位置
 * @param {*}
 * @return {*}
 * @author: luckymiaow
 */
const defaultIPosition = {
    position: 'absolute',
    top:0,
    left:0,
    'z-index':1,
};
export const toolData: ItoolData[] =
[
  {
    component: "v-text",
    type:"text",
    title:"文本框",
    style:{...defaultStyleData},
    position:{...defaultIPosition}
  },
  {
    component: "v-button",
    type:"",
    title:"按钮",
    style:{...defaultStyleData},
    position:{...defaultIPosition}
  }
];
