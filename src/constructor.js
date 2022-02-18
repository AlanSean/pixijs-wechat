import { DOMParser } from './xmldom/xmldom'
// import HTMLElement from './HTMLElement'

// export class HTMLImageElement extends HTMLElement {
//   constructor() {
//     super('img')
//   }
// }
// export class HTMLCanvasElement extends HTMLElement {
//   constructor() {
//     super('canvas')
//   }
// }

export const HTMLCanvasElement = wx.createCanvas().constructor
export const HTMLImageElement = wx.createImage().constructor
export const CanvasRenderingContext2D = wx.createCanvas().getContext('2d').constructor
export const WebGLRenderingContext = wx.createCanvas().getContext('webgl').constructor
export const XMLDocument = new DOMParser().parseFromString('123', 'text/xml').constructor
export { DOMParser }
