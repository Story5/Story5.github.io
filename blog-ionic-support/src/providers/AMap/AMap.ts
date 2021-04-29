import { Injectable } from '@angular/core';
import { on } from './Event';
declare var AMapLoader;
declare var AMap;

export const AMapKey_Web = "74a3f771f653930fd8f39c23dcf0f51e";
export const AMapJSAPI_Version = "2.0";

@Injectable()
export class AMapProvider {
  map: any;
  constructor() {
  }
  
  initAMap(container, loaded?: Function, complete?: Function) {
    AMapLoader.load({
      key: AMapKey_Web, //首次调用load必须填写key
      version: AMapJSAPI_Version,     //JSAPI 版本号
      plugins: [
        'AMap.Scale',
        'AMap.ToolBar',
        'AMap.Geolocation',
        'AMap.CitySearch',
        'AMap.DistrictSearch',
        'AMap.PlaceSearch',
      ]  //同步加载的插件列表
    }).then((AMap) => {
      // 构造地图对象的方法一：使用地图容器ID创建
      let map = new AMap.Map(container, {
        zooms: [3, 20],//设置地图级别范围
        zoom: 11
      });
      map.addControl(new AMap.Scale({
        position: "LT"
      }));
      map.addControl(new AMap.ToolBar({
        position: "RT"
      }))
      map.addControl(new AMap.Geolocation())
      this.map = map;

      if (loaded) {
        loaded(map);
      }

      map.on('complete', function () {
        // 地图图块加载完成后触发
        if (complete) {
          complete(map);
        }
      });
    }).catch((e) => {
      console.error(e);  //加载错误提示
    });
  }

  // 销毁地图，并清空地图容器
  destroy() {
    if (this.map) {
      this.map.destroy();
    }
  }

  // 绑定事件
  // map.on('click', function (ev:MapsEvent) {
  //   // 触发事件的对象
  //   var target = ev.target;

  //   // 触发事件的地理坐标，AMap.LngLat 类型
  //   var lnglat = ev.lnglat;

  //   // 触发事件的像素坐标，AMap.Pixel 类型
  //   var pixel = ev.pixel;

  //   // 触发事件类型
  //   var type = ev.type;

  //   alert('您在[ ' + ev.lnglat.getLng() + ',' + ev.lnglat.getLat() + ' ]的位置点击了地图！');
  // });

  on: on = (eventName, eventHandler) => {
    if (this.map) {
      this.map.on(eventName, eventHandler);
    }
    return this;
  }

  // 解绑事件
  // map.off('click', clickHandler);        
  off(eventName, eventHandler) {
    if (this.map) {
      this.map.off(eventName, eventHandler);
    }
  }



  fun() {
    var position = [117.814000, 30.929658]
    /******* 构造矢量圆形 */
    var circle = new AMap.Circle({
      center: position, // 圆心位置
      radius: 300,  //半径
      strokeColor: "#F33",  //线颜色
      strokeOpacity: 1,  //线透明度
      strokeWeight: 0,  //线粗细度
      fillColor: "#ee2200",  //填充颜色
      fillOpacity: 0.35 //填充透明度
    });
    this.map.add(circle)

    /******* 点标记 */
    var marker = new AMap.Marker({
      position: position//位置
    })
    this.map.add(marker);//添加到地图
    // map.remove(marker);
    // 使用clearMap方法删除所有覆盖物
    // map.clearMap();

    /******* 给点标记添加点击事件功能与信息窗体 */
    var infoWindow = new AMap.InfoWindow({ //创建信息窗体
      isCustom: true,  //使用自定义窗体
      content: '<div>信息窗体</div>', //信息窗体的内容可以是任意html片段
      offset: new AMap.Pixel(16, -45)
    });
    var onMarkerClick = function (e) {
      infoWindow.open(this.map, e.target.getPosition());//打开信息窗体
      //e.target就是被点击的Marker
    }
    marker.on('click', onMarkerClick);//绑定click事件
  }

  /** 类 AMap.LngLat 方法
   * @param lnglat1 AMap.LngLat
   * @param lnglat2 AMap.LngLat
   */
  distance(lnglat1, lnglat2) {
    // var lnglat1 = new AMap.LngLat(116, 39);
    // var lnglat2 = new AMap.LngLat(117, 39);
    if (lnglat1 instanceof AMap.LngLat) {
      if (lnglat2 instanceof AMap.LngLat) {
        //计算lnglat1到lnglat2之间的实际距离(m)
        let distance = lnglat1.distance(lnglat2);
        return distance;
      } else {
        throw 'lnglat1 不是 AMap.LngLat 类型';
      }
    } else {
      throw 'lnglat1 不是 AMap.LngLat 类型';
    }
  }
}

export interface AMap_district_interface {
  citycode:Array<any>;
  adcode:string;
  name:string;
  center:Array<number>;
  level:string;
  districtList?:Array<AMap_district_interface>
}
