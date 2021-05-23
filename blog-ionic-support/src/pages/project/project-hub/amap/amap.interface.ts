export interface AMapSearchResult_Interface {
  info: string;// 成功状态说明,成功返回'OK'
  poiList: AMapPoiList_Interface;
}

export interface AMapPoiList_Interface {
  count: number;// 查询结果总数
  pageIndex: number;// 页码
  pageSize: number;// 单页结果数
  pois: Array<AMapPoi_Interface>;
}

export interface AMapPoi_Interface {
  id: string;// 全局唯一ID
  name: string;// 名称
  type: string;// 兴趣点类型
  location: any;// 兴趣点经纬度
  address: string;// 地址
  distance: number;// 离中心点距离，仅周边查询返回
  tel: string;// 电话
  [index: string]: any;
}