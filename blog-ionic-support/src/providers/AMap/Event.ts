/** 给实例绑定事件回调函数，同一个类型、同一个回调函数、同一个上下文只会绑定一次
 * @param type (String) 事件类型
 * @param function (Function) 回调函数
 * @param context (Object) 事件上下文，缺省为实例本身
 * @param once (Boolean) 是否只执行一次
 * @returns Object: 当前实例
 */
export interface on {
  (type: String, func: Function, context?: Object, once?: Boolean): Object
}

/** 移除当前实例的某一个事件回调
 * @param type (String) 事件类型
 * @param function (Function) 事件回调函数
 * @param context (Object) 事件上下文，缺省为当前实例
 * @returns Object: 当前实例
 */
export interface off {
  (type: String, func: Function, context?: Object): Object
}

/** 判断当前实例是否已经绑定了某个事件回调
 * @param type (String) 事件类型
 * @param function (Function) 事件回调函数
 * @param context (Object) 事件上下文
 * @returns Boolean:
 */
export interface hasEvents {
  (type: String, func: Function, context: Object): Boolean
}

/** 清除当前实例某一类型的全部事件回调
 * @param type (String) 事件类型，如果此参数为空，清除实例上的所有绑定的事件回调
 * @returns Object: 当前实例
 */
export interface clearEvents {
  (type?: String): Object
}

/** 模拟触发当前实例的某个事件
 * @param type (String) 事件类型
 * @param data (Object) 事件回调时返回的数据，模拟的事件体应该完整，否则可能导致报错
 * @returns Object: 当前实例
 */
export interface emit {
  (type: String, data: Object): Object
}

export interface MapsEvent {
  lnglat: any; // (AMap.LngLat):发生事件时光标所在处的经纬度坐标
  pixel: any; // (AMap.Pixel):发生事件时光标所在处的像素坐标。
  type: string; // 事件类型
  target: Object; // 发生事件的目标对象，不同类型返回target不同。例如，事件对象是Marker，则target表示目标对象为Marker，事件对象是其他，则随之改变。
}

export enum AMap_Map_Event {
  mousemove = "mousemove",//鼠标在地图上移动时触发
  zoomchange = "zoomchange",//地图缩放级别更改后触发
  mapmove = "mapmove",//地图平移时触发事件
  mousewheel = "mousewheel",//鼠标滚轮开始缩放地图时触发
  zoomstart = "zoomstart",//缩放开始时触发
  mouseover = "mouseover",//鼠标移入地图容器内时触发
  mouseout = "mouseout",//鼠标移出地图容器时触发
  dblclick = "dblclick",//鼠标左键双击事件
  click = "click",//鼠标左键单击事件
  zoomend = "zoomend",//缩放结束时触发
  moveend = "moveend",//地图移动结束后触发，包括平移，以及中心点变化的缩放。如地图有拖拽缓动效果，则在缓动结束后触发
  mouseup = "mouseup",//鼠标在地图上单击抬起时触发
  mousedown = "mousedown",//鼠标在地图上单击按下时触发
  rightclick = "rightclick",//鼠标右键单击事件
  movestart = "movestart",//地图平移开始时触发
  dragstart = "dragstart",//开始拖拽地图时触发
  dragging = "dragging",//拖拽地图过程中触发
  dragend = "dragend",//停止拖拽地图时触发。如地图有拖拽缓动效果，则在拽停止，缓动开始前触发
  hotspotout = "hotspotout",//鼠标移出热点时触发
  hotspotover = "hotspotover",//鼠标滑过热点时触发
  touchstart = "touchstart",//触摸开始时触发事件，仅适用移动设备
  complete = "complete",//地图资源加载完成后触发事件
  hotspotclick = "hotspotclick",//鼠标点击热点时触发
  touchmove = "touchmove",//拖拽地图过程中触发，仅适用移动设备
  touchend = "touchend",//触摸结束时触发事件，仅适用移动设备
  resize = "resize",//地图容器尺寸改变事件
}