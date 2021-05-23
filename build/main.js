webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/project/project.module": [
		153
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageModule", function() { return ProjectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_hub_password_manager_password_manager__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_hub_bj_bj__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_hub_amap_amap__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_hub_amap_amap_choose_city_amap_choose_city__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_hub_amap_amap_place_search_amap_place_search__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__project_hub_amap_amap_place_search_setting_amap_place_search_setting__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// page-project







var ProjectPageModule = /** @class */ (function () {
    function ProjectPageModule() {
    }
    ProjectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__project__["a" /* ProjectPage */],
                __WEBPACK_IMPORTED_MODULE_3__project_hub_password_manager_password_manager__["a" /* PasswordManagerPage */],
                __WEBPACK_IMPORTED_MODULE_4__project_hub_bj_bj__["a" /* BJPage */],
                __WEBPACK_IMPORTED_MODULE_5__project_hub_amap_amap__["a" /* AMapPage */],
                __WEBPACK_IMPORTED_MODULE_6__project_hub_amap_amap_choose_city_amap_choose_city__["a" /* AMapChooseCityPage */],
                __WEBPACK_IMPORTED_MODULE_7__project_hub_amap_amap_place_search_amap_place_search__["a" /* AMapPlaceSearchPage */],
                __WEBPACK_IMPORTED_MODULE_8__project_hub_amap_amap_place_search_setting_amap_place_search_setting__["a" /* AMapPlaceSearchSettingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__project__["a" /* ProjectPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__project__["a" /* ProjectPage */],
                __WEBPACK_IMPORTED_MODULE_3__project_hub_password_manager_password_manager__["a" /* PasswordManagerPage */],
                __WEBPACK_IMPORTED_MODULE_4__project_hub_bj_bj__["a" /* BJPage */],
                __WEBPACK_IMPORTED_MODULE_5__project_hub_amap_amap__["a" /* AMapPage */],
                __WEBPACK_IMPORTED_MODULE_6__project_hub_amap_amap_choose_city_amap_choose_city__["a" /* AMapChooseCityPage */],
                __WEBPACK_IMPORTED_MODULE_7__project_hub_amap_amap_place_search_amap_place_search__["a" /* AMapPlaceSearchPage */],
                __WEBPACK_IMPORTED_MODULE_8__project_hub_amap_amap_place_search_setting_amap_place_search_setting__["a" /* AMapPlaceSearchSettingPage */]
            ]
        })
    ], ProjectPageModule);
    return ProjectPageModule;
}());

//# sourceMappingURL=project.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_hub_bj_bj__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_hub_amap_amap__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectPage = /** @class */ (function () {
    function ProjectPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.projects = [
            // {
            //   title: "财务管理系统",
            //   page: PasswordManagerPage
            // },
            {
                title: "皇帝那些事儿",
                page: __WEBPACK_IMPORTED_MODULE_2__project_hub_bj_bj__["a" /* BJPage */]
            },
            {
                title: "高德地图",
                page: __WEBPACK_IMPORTED_MODULE_3__project_hub_amap_amap__["a" /* AMapPage */]
            }
        ];
    }
    ProjectPage.prototype.clickItem = function (index) {
        var item = this.projects[index];
        this.navCtrl.push(item.page);
    };
    ProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-project',template:/*ion-inline-start:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/project/project.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>项目</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of projects;let i = index" (click)="clickItem(i)" detail-push>\n      <ion-label color="primary">{{item.title}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/project/project.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ProjectPage);
    return ProjectPage;
}());

//# sourceMappingURL=project.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BJPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BJPage = /** @class */ (function () {
    function BJPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BJPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bj',template:/*ion-inline-start:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/project/project-hub/bj/bj.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>皇帝那些事</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-slides direction="vertical" pager=true>\n    <ion-slide class="slide1">\n      <img class="bj_background" src="assets/images/background/01.jpg" />\n      <div class="bj_text1">皇帝</div>\n      <div class="bj_line"></div>\n      <div class="bj_text2">那些事儿</div>\n    </ion-slide>\n    <ion-slide class="slide2">\n      <img class="bj_background" src="assets/images/background/02.jpg" />\n    </ion-slide>\n    <ion-slide class="slide3">\n      <img class="bj_background" src="assets/images/background/03.jpg" />\n      <div class="bj_text">&nbsp;&nbsp;&nbsp;&nbsp;令人羡慕的皇帝其实是个高危职业，有27.4%的皇帝活不过30岁，54.1%的皇帝死于非命，超过一半的皇帝因为战争、下毒、行刺以及谋权篡位而死。死法最的奇葩的当属东晋孝武帝，他是被自己的妃嫔捂死在被子里。</div>\n    </ion-slide>\n    <ion-slide class="slide4">\n      <img class="bj_background" src="assets/images/background/04.jpg" />\n    </ion-slide>\n    <ion-slide class="slide5">\n      <img class="bj_background" src="assets/images/background/05.jpg" />\n      <div class="bj_text">&nbsp;&nbsp;&nbsp;&nbsp;当上皇帝就几乎意味着减寿。在已知寿命的寿命的304位皇帝中，平均年龄为39.92岁，另有13人根据父亲生年和死亡时间推断确定不超过40岁。寿命和在位时间最长的三位分别是，最短的三位分别是。寿命最长的5位与寿命最短的5位.在位时间和寿命的关联度。</div>\n    </ion-slide>\n    <ion-slide class="slide6">\n      <img class="bj_background" src="assets/images/background/06.jpg" />\n    </ion-slide>\n    <ion-slide class="slide7">\n      <img class="bj_background" src="assets/images/background/07.jpg" />\n      <div class="bj_text">&nbsp;&nbsp;&nbsp;&nbsp;想当上皇帝确实是不太简单，可以说是一件拼爹的事。在全部360位皇帝中，有196个皇帝的爹就是皇帝，剩下大多数皇帝的爹也是割据军阀和封建贵族，只有6个皇帝的爹是普通老百姓，真正的白手起家。</div>\n    </ion-slide>\n    <ion-slide class="slide8">\n      <img class="bj_background" src="assets/images/background/08.jpg" />\n    </ion-slide>\n    <ion-slide class="slide9">\n      <img class="bj_background" src="assets/images/background/09.jpg" />\n      <div class="bj_text">&nbsp;&nbsp;&nbsp;&nbsp;在已知出生地的313位皇帝中，除了少部分在东北、华南和蒙古地区，大多数出生于黄河流域和长江流域，尤其集中于黄河中下游地区。（黄河和长江真的是中华民族两大母亲河呀！）</div>\n    </ion-slide>\n    <ion-slide class="slide10">\n      <img class="bj_background" src="assets/images/background/10.jpg" />\n    </ion-slide>\n    <ion-slide class="slide11">\n      <img class="bj_background" src="assets/images/background/11.jpg" />\n      <div class="bj_text">&nbsp;&nbsp;&nbsp;&nbsp;在住处的选择上，皇帝也有比较高的一致性。皇帝喜欢以今天的西安、洛阳、北京、南京为都城，西安尤甚。即使不在这四座城市，也大部分分布在黄河与长江流域。</div>\n    </ion-slide>\n    <ion-slide class="slide12">\n      <img class="bj_background" src="assets/images/background/12.jpg" />\n    </ion-slide>\n    <ion-slide class="slide13">\n      <img class="bj_background" src="assets/images/background/13.jpg" />\n      <div class="bj_text">&nbsp;&nbsp;&nbsp;&nbsp;而在三百六十位皇帝中，姓“刘”和姓“李”的皇帝最多，分别有55位和46位，占到了总数的28.0%，最少的是“段”和“武”，只有一位，分别是北凉的段业和周（唐）朝的武则天，值得一提的是，武则天也是唯一跨越性别壁垒的存在。</div>\n    </ion-slide>\n    <ion-slide class="slide14">\n      <img class="bj_background" src="assets/images/background/14.jpg" />\n    </ion-slide>\n    <ion-slide class="slide15">\n      <img class="bj_background" src="assets/images/background/15.jpg" />\n      <div class="bj_text">&nbsp;&nbsp;&nbsp;&nbsp;而这些皇帝的登基方式又不尽相同，除了最普遍的通过“皇位继承”，这一部分大约是54.4%，比较多的还有群臣拥立、帝国建立等，而权臣拥立的皇帝是第四多。</div>\n    </ion-slide>\n    <ion-slide class="slide">\n      <img class="bj_background" src="assets/images/background/16.jpg" />\n    </ion-slide>\n    <ion-slide class="slide">\n      <img class="bj_background" src="assets/images/background/17.jpg" />\n    </ion-slide>\n    <ion-slide class="slide">\n      <img class="bj_background" src="assets/images/background/18.jpg" />\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/project/project-hub/bj/bj.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], BJPage);
    return BJPage;
}());

//# sourceMappingURL=bj.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AMapChooseCityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sx_tip__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AMapChooseCityPage = /** @class */ (function () {
    function AMapChooseCityPage(navCtrl, navParams, tip) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tip = tip;
        this.country = {
            province_index: -1,
            province: [],
            city_index: -1,
            city: [],
            district_index: -1,
            district: [],
            street_index: -1,
            street: [] // 街道
        };
    }
    AMapChooseCityPage.prototype.ionViewDidLoad = function () {
        this.callback = this.navParams.get("callback");
        this.initAMapDistrict();
        this.search();
    };
    AMapChooseCityPage.prototype.initAMapDistrict = function () {
        this.amapDistrict = new AMap.DistrictSearch({
            subdistrict: 1,
            showbiz: false //最后一级返回街道信息
        });
    };
    AMapChooseCityPage.prototype.selectChange = function (level) {
        this.clearDataOnChange(level);
        var index = this.country[level + '_index'];
        if (index != -1) {
            var district = this.country[level][index];
            this.search(district.adcode);
        }
    };
    // adcode = 100000 表示 中国
    AMapChooseCityPage.prototype.search = function (adcode) {
        var _this = this;
        if (adcode === void 0) { adcode = '100000'; }
        this.tip.presentLoading();
        this.amapDistrict.search(adcode, function (status, result) {
            _this.tip.dismissLoading();
            if (status == 'complete') {
                console.log(result);
                var data = result.districtList[0];
                if (data.districtList && data.districtList.length > 0) {
                    var firstLevel = data.districtList[0].level;
                    _this.country[firstLevel] = data.districtList;
                }
            }
        });
    };
    AMapChooseCityPage.prototype.clickConfirm = function () {
        var name = '';
        var district;
        if (this.country.province_index != -1) {
            district = this.country.province[this.country.province_index];
            name += district.name;
        }
        if (this.country.city_index != -1) {
            district = this.country.city[this.country.city_index];
            name += district.name;
        }
        if (this.country.district_index != -1) {
            district = this.country.district[this.country.district_index];
            name += district.name;
        }
        if (this.country.street_index != -1) {
            district = this.country.street[this.country.street_index];
            name += district.name;
        }
        if (district) {
            if (this.callback) {
                this.callback(name, district);
            }
            this.navCtrl.pop();
        }
        else {
            this.tip.alert('请选择');
        }
    };
    AMapChooseCityPage.prototype.clearDataOnChange = function (level) {
        switch (level) {
            case 'province':
                {
                    this.country.city_index = -1;
                    this.country.city = [];
                }
            case 'city':
                {
                    this.country.district_index = -1;
                    this.country.district = [];
                }
            case 'district':
                {
                    this.country.street_index = -1;
                    this.country.street = [];
                }
            case 'street':
                {
                }
        }
    };
    AMapChooseCityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-amap-choose-city',template:/*ion-inline-start:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/project/project-hub/amap/amap-choose-city/amap-choose-city.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>下属行政区查询</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="clickConfirm()">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>省市区</ion-label>\n      <ion-select [(ngModel)]="country.province_index" cancelText="取消" okText="确定" (ionChange)="selectChange(\'province\')">\n        <ion-option value="-1">--请选择--</ion-option>\n        <ion-option *ngFor="let item of country.province;let i = index" [value]="i">{{item.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>地级市</ion-label>\n      <ion-select [(ngModel)]="country.city_index" cancelText="取消" okText="确定" (ionChange)="selectChange(\'city\')">\n        <ion-option value="-1">--请选择--</ion-option>\n        <ion-option *ngFor="let item of country.city;let i = index" [value]="i">{{item.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>区县</ion-label>\n      <ion-select [(ngModel)]="country.district_index" cancelText="取消" okText="确定" (ionChange)="selectChange(\'district\')">\n        <ion-option value="-1">--请选择--</ion-option>\n        <ion-option *ngFor="let item of country.district;let i = index" [value]="i">{{item.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label>街道</ion-label>\n      <ion-select [(ngModel)]="country.street_index" cancelText="取消" okText="确定" (ionChange)="selectChange(\'street\')">\n        <ion-option value="-1">--请选择--</ion-option>\n        <ion-option *ngFor="let item of country.street;let i = index" [value]="i">{{item.name}}</ion-option>\n      </ion-select>\n    </ion-item> -->\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/project/project-hub/amap/amap-choose-city/amap-choose-city.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_sx_tip__["a" /* TipProvider */]])
    ], AMapChooseCityPage);
    return AMapChooseCityPage;
}());

//# sourceMappingURL=amap-choose-city.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AMapPlaceSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_AMap_AMap__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sx_tip__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__amap_place_search_setting_amap_place_search_setting__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AMapPlaceSearchPage = /** @class */ (function () {
    function AMapPlaceSearchPage(navCtrl, navParams, amap, tip) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.amap = amap;
        this.tip = tip;
        this.title = "关键字搜索";
        this.city = "全国";
        this.pageSize = 50;
        this.searchText = "";
    }
    AMapPlaceSearchPage.prototype.ionViewDidLoad = function () {
        this.title = this.navParams.get("name");
        this.city = this.navParams.get("adcode");
        this.placeSearch = this.createPlaceSearchInstance(this.pageSize);
    };
    AMapPlaceSearchPage.prototype.clickSettings = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__amap_place_search_setting_amap_place_search_setting__["a" /* AMapPlaceSearchSettingPage */], {
            pageSize: this.pageSize,
            callback: function (pageSize) {
                _this.pageSize = pageSize;
                _this.placeSearch = _this.createPlaceSearchInstance(_this.pageSize);
            }
        });
    };
    AMapPlaceSearchPage.prototype.onClear = function (e) {
        this.onCancel(e);
    };
    AMapPlaceSearchPage.prototype.onCancel = function (e) {
        this.searchText = "";
        if (this.placeSearch) {
            this.placeSearch.clear();
        }
    };
    AMapPlaceSearchPage.prototype.onInput = function (e) {
        this.search(this.searchText);
    };
    AMapPlaceSearchPage.prototype.search = function (searchText) {
        var _this = this;
        if (this.searchText.length == 0) {
            return;
        }
        if (!this.placeSearch) {
            this.tip.alert("高德PlaceSearch组件生成失败");
            return;
        }
        //关键字查询
        this.placeSearch.search(searchText, function (status, result) {
            if (status == "complete") {
                // 当status为complete时，result为SearchResult；
                _this.searchResult = result;
            }
            else if (status == "error") {
                // 当status为error时，result为错误信息info；
                _this.tip.alert("error:", JSON.stringify(result));
            }
            else if (status == "no_data") {
                // 当status为no_data时，代表检索返回0结果 相关示例
                console.error("no_data:", JSON.stringify(result));
            }
            else {
                _this.tip.alert("出错");
            }
        });
    };
    AMapPlaceSearchPage.prototype.clickDownload = function () {
        var _this = this;
        if (!this.searchResult) {
            this.tip.alert("搜索数据错误");
            return;
        }
        console.log(this.searchResult);
        if (this.searchResult.info != "OK") {
            this.tip.alert("info数据错误");
            return;
        }
        var poiList = this.searchResult.poiList;
        console.log("count:", poiList.count);
        console.log("pageSize:", poiList.pageSize);
        console.log("pageIndex:", poiList.pageIndex);
        var first = (poiList.pageIndex - 1) * poiList.pageSize + 1;
        var end = poiList.pageIndex * poiList.pageSize;
        var fileName = this.searchText + first + "-" + end;
        this.tip.alertTemplate("请选择输出excel格式", undefined, "xls", function () {
            _this.exportToXLS(poiList.pois, fileName, "xls");
        }, "xlsx", function () {
            _this.exportToXLS(poiList.pois, fileName, "xlsx");
        });
    };
    AMapPlaceSearchPage.prototype.exportToXLS = function (poiList, fileName, type) {
        if (fileName === void 0) { fileName = "SheetJS"; }
        if (type === void 0) { type = "xlsx"; }
        var data = [
            ["序号", "名称", "省市区", "地级市", "区县", "地址", "电话", "类别"]
        ];
        poiList.forEach(function (element, index) {
            data.push([
                index + 1, element.name, element.pname, element.cityname, element.adname, element.pname + element.cityname + element.adname + element.address, element.tel, element.type
            ]);
        });
        console.log(data);
        /* generate worksheet */
        var ws = XLSX.utils.aoa_to_sheet(data);
        /* generate workbook and add the worksheet */
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        XLSX.writeFile(wb, fileName + "." + type);
    };
    /** 构造地点查询类
     * @param pageSize : 10, // 单页显示结果条数,默认值：10,取值范围：1-50,超出取值范围按最大值返回
     */
    AMapPlaceSearchPage.prototype.createPlaceSearchInstance = function (pageSize) {
        if (pageSize === void 0) { pageSize = 10; }
        var placeSearch = new AMap.PlaceSearch({
            pageSize: pageSize,
            pageIndex: 1,
            city: this.city,
            citylimit: true,
            map: this.amap.map,
            panel: "panel",
            autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
        return placeSearch;
    };
    AMapPlaceSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-amap-place-search',template:/*ion-inline-start:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/project/project-hub/amap/amap-place-search/amap-place-search.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>{{title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="clickSettings()">\n        <ion-icon name="settings"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-searchbar [(ngModel)]="searchText" showCancelButton="true" cancelButtonText="取消"\n    placeholder="请输入关键字搜索" (ionInput)="onInput($event)" (ionClear)="onClear($event)" (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <div id="panel"></div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>单页显示结果条数({{pageSize}})</ion-title>\n    <ion-buttons end>\n      <button *ngIf="this.searchResult?.info == \'OK\'" ion-button icon-only (click)="clickDownload()">\n        <ion-icon name="download"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/project/project-hub/amap/amap-place-search/amap-place-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_AMap_AMap__["a" /* AMapProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sx_tip__["a" /* TipProvider */]])
    ], AMapPlaceSearchPage);
    return AMapPlaceSearchPage;
}());

//# sourceMappingURL=amap-place-search.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AMapPlaceSearchSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AMapPlaceSearchSettingPage = /** @class */ (function () {
    function AMapPlaceSearchSettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.optionList = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
        this.pageSize = 10;
    }
    AMapPlaceSearchSettingPage.prototype.ionViewDidLoad = function () {
        this.pageSize = this.navParams.get("pageSize");
        this.callback = this.navParams.get("callback");
    };
    AMapPlaceSearchSettingPage.prototype.selectChange = function () {
    };
    AMapPlaceSearchSettingPage.prototype.clickConfirm = function () {
        if (this.callback) {
            this.callback(this.pageSize);
            this.navCtrl.pop();
        }
    };
    AMapPlaceSearchSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-amap-place-search-setting',template:/*ion-inline-start:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/project/project-hub/amap/amap-place-search-setting/amap-place-search-setting.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>搜索设置</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="clickConfirm()">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>单页显示结果条数</ion-label>\n      <ion-select [(ngModel)]="pageSize" cancelText="取消" okText="确定"\n        (ionChange)="selectChange()">\n        <ion-option *ngFor="let item of optionList" [value]="item">{{item}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/project/project-hub/amap/amap-place-search-setting/amap-place-search-setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AMapPlaceSearchSettingPage);
    return AMapPlaceSearchSettingPage;
}());

//# sourceMappingURL=amap-place-search-setting.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>首页</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-lines>\n    <ion-item text-wrap>\n       本人Story5于20180809日开始在github托管维护博客\n    </ion-item>\n    <ion-item text-wrap>\n       该博客由ionic框架开发支持,相应源码在github开源\n    </ion-item>\n    <ion-item text-wrap>\n       博客内容更新中,敬请期待\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticlePage = /** @class */ (function () {
    function ArticlePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ArticlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article',template:/*ion-inline-start:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/article/article.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>文章</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/article/article.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ArticlePage);
    return ArticlePage;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinePage = /** @class */ (function () {
    function MinePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mine',template:/*ion-inline-start:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/mine/mine.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>我的</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/mine/mine.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], MinePage);
    return MinePage;
}());

//# sourceMappingURL=mine.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_AMap_AMap__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sx_tip__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_article_article__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_project_project_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mine_mine__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// @ionic-native


// providers


// pages


// 首页

// 文章

// 项目

// 我的

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                // 首页
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                // 文章
                __WEBPACK_IMPORTED_MODULE_10__pages_article_article__["a" /* ArticlePage */],
                // 我的
                __WEBPACK_IMPORTED_MODULE_12__pages_mine_mine__["a" /* MinePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'ios',
                    pageTransition: 'ios-transition',
                    swipeBackEnabled: true,
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/project/project.module#ProjectPageModule', name: 'project-page', segment: 'project', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__pages_project_project_module__["ProjectPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                // 首页
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                // 文章
                __WEBPACK_IMPORTED_MODULE_10__pages_article_article__["a" /* ArticlePage */],
                // 我的
                __WEBPACK_IMPORTED_MODULE_12__pages_mine_mine__["a" /* MinePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__providers_AMap_AMap__["a" /* AMapProvider */],
                __WEBPACK_IMPORTED_MODULE_6__providers_sx_tip__["a" /* TipProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordManagerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordManagerPage = /** @class */ (function () {
    function PasswordManagerPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.disable = false;
        this.time = 4;
    }
    PasswordManagerPage.prototype.clickRandom = function () {
        this.zhenzhen = "";
        this.jiejie = "";
        this.disable = true;
        var random = Math.random();
        var fix = random.toFixed(3);
        var str = fix.substr(2);
        this.password = str;
        this.settime();
    };
    PasswordManagerPage.prototype.clickShowPassword = function () {
        this.presentPrompt();
    };
    PasswordManagerPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '请先输入各自的3位密码',
            inputs: [
                {
                    name: 'zhenzhen',
                    placeholder: '请在这里输入小珍珍的3位数密码',
                    type: 'password'
                },
                {
                    name: 'jiejie',
                    placeholder: '请在这里输入小节节的3位数密码',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确认',
                    handler: function (data) {
                        _this.zhenzhen = data.zhenzhen;
                        _this.jiejie = data.jiejie;
                    }
                }
            ]
        });
        alert.present();
    };
    // 倒计时
    PasswordManagerPage.prototype.settime = function () {
        var _this = this;
        if (this.time == 0) {
            this.password = "";
            this.time = 4;
            this.disable = false;
            return;
        }
        else {
            this.time--;
        }
        setTimeout(function () {
            _this.settime();
        }, 1000);
    };
    PasswordManagerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password-manager',template:/*ion-inline-start:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/project/project-hub/password-manager/password-manager.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>财务管理系统</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n  <button class="sx_button" ion-button round color="danger" [disabled]="disable" (click)="clickRandom()">生成小珍珍的3位数随机密码</button>\n  <br/>\n  <button class="sx_button" ion-button round [disabled]="disable" (click)="clickRandom()">生成小节节的3位数随机密码</button>\n\n  <div class="sx_password_area" *ngIf="password">\n    <div text-center>您的3位数密码是:</div>\n    <div ion-text text-center class="sx_password" color="primary">{{password}}</div>\n    <div text-center>\n      密码将于\n      <span ion-text class="sx_time" color="danger"> {{time}} </span>\n      秒后消失,请记住您的密码\n    </div>\n  </div>\n\n  <br/>\n  <button class="sx_button" ion-button round color="dark" [disabled]="disable" (click)="clickShowPassword()">输入各自密码显示取款密码</button>\n\n  <div class="sx_password_area" *ngIf="zhenzhen && jiejie">\n    <div text-center>你们的取款密码是:</div>\n    <div ion-text text-center class="sx_password" color="primary">{{zhenzhen}}{{jiejie}}</div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/project/project-hub/password-manager/password-manager.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PasswordManagerPage);
    return PasswordManagerPage;
}());

//# sourceMappingURL=password-manager.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_project_project_hub_amap_amap__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        // rootPage:any = TabsPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_project_project_hub_amap_amap__["a" /* AMapPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_article__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mine_mine__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_project__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 首页

// 文章

// 我的

// 支持

var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__article_article__["a" /* ArticlePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__project_project__["a" /* ProjectPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__mine_mine__["a" /* MinePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="文章" tabIcon="document"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="项目" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="我的" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_AMap_AMap__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__amap_choose_city_amap_choose_city__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__amap_place_search_amap_place_search__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AMapPage = /** @class */ (function () {
    function AMapPage(navCtrl, amap) {
        this.navCtrl = navCtrl;
        this.amap = amap;
        this.city = {
            adcode: '100000',
            name: '中国',
        };
    }
    AMapPage.prototype.ionViewDidLoad = function () {
        this.initAMap();
    };
    AMapPage.prototype.initAMap = function () {
        var _this = this;
        this.amap.initAMap('container', function (map) {
            //初始化地图时，若center属性缺省，地图默认定位到用户所在城市的中心
            // this.city.adcode = map.getAdcode();
            map.getCity(function (result) {
                console.log("getCity:", JSON.stringify(result));
                _this.city.adcode = result.citycode;
                _this.city.name = result.province;
            });
        });
    };
    AMapPage.prototype.clickChooseCity = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__amap_choose_city_amap_choose_city__["a" /* AMapChooseCityPage */], {
            callback: function (name, district) {
                _this.city.adcode = district.adcode;
                _this.city.name = name;
                _this.amap.map.setCenter(district.center);
            }
        });
    };
    AMapPage.prototype.clickSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__amap_place_search_amap_place_search__["a" /* AMapPlaceSearchPage */], {
            adcode: this.city.adcode,
            name: this.city.name
        });
    };
    AMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-amap',template:/*ion-inline-start:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/project/project-hub/amap/amap.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>高德地图</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="clickSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div id="container"></div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>{{city.name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="clickChooseCity()">\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/story5/Story5/01Projects/Github/Story5.github.io/blog-ionic-support/src/pages/project/project-hub/amap/amap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_AMap_AMap__["a" /* AMapProvider */]])
    ], AMapPage);
    return AMapPage;
}());

//# sourceMappingURL=amap.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AMapKey_Web */
/* unused harmony export AMapJSAPI_Version */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AMapProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AMapKey_Web = "74a3f771f653930fd8f39c23dcf0f51e";
var AMapJSAPI_Version = "2.0";
var AMapProvider = /** @class */ (function () {
    function AMapProvider() {
        var _this = this;
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
        this.on = function (eventName, eventHandler) {
            if (_this.map) {
                _this.map.on(eventName, eventHandler);
            }
            return _this;
        };
    }
    AMapProvider.prototype.initAMap = function (container, loaded, complete) {
        var _this = this;
        AMapLoader.load({
            key: AMapKey_Web,
            version: AMapJSAPI_Version,
            plugins: [
                'AMap.Scale',
                'AMap.ToolBar',
                'AMap.Geolocation',
                'AMap.CitySearch',
                'AMap.DistrictSearch',
                'AMap.PlaceSearch',
            ] //同步加载的插件列表
        }).then(function (AMap) {
            // 构造地图对象的方法一：使用地图容器ID创建
            var map = new AMap.Map(container, {
                zooms: [3, 20],
                zoom: 11
            });
            map.addControl(new AMap.Scale({
                position: "LT"
            }));
            map.addControl(new AMap.ToolBar({
                position: "RT"
            }));
            map.addControl(new AMap.Geolocation());
            _this.map = map;
            if (loaded) {
                loaded(map);
            }
            map.on('complete', function () {
                // 地图图块加载完成后触发
                if (complete) {
                    complete(map);
                }
            });
        }).catch(function (e) {
            console.error(e); //加载错误提示
        });
    };
    // 销毁地图，并清空地图容器
    AMapProvider.prototype.destroy = function () {
        if (this.map) {
            this.map.destroy();
        }
    };
    // 解绑事件
    // map.off('click', clickHandler);        
    AMapProvider.prototype.off = function (eventName, eventHandler) {
        if (this.map) {
            this.map.off(eventName, eventHandler);
        }
    };
    AMapProvider.prototype.fun = function () {
        var position = [117.814000, 30.929658];
        /******* 构造矢量圆形 */
        var circle = new AMap.Circle({
            center: position,
            radius: 300,
            strokeColor: "#F33",
            strokeOpacity: 1,
            strokeWeight: 0,
            fillColor: "#ee2200",
            fillOpacity: 0.35 //填充透明度
        });
        this.map.add(circle);
        /******* 点标记 */
        var marker = new AMap.Marker({
            position: position //位置
        });
        this.map.add(marker); //添加到地图
        // map.remove(marker);
        // 使用clearMap方法删除所有覆盖物
        // map.clearMap();
        /******* 给点标记添加点击事件功能与信息窗体 */
        var infoWindow = new AMap.InfoWindow({
            isCustom: true,
            content: '<div>信息窗体</div>',
            offset: new AMap.Pixel(16, -45)
        });
        var onMarkerClick = function (e) {
            infoWindow.open(this.map, e.target.getPosition()); //打开信息窗体
            //e.target就是被点击的Marker
        };
        marker.on('click', onMarkerClick); //绑定click事件
    };
    /** 类 AMap.LngLat 方法
     * @param lnglat1 AMap.LngLat
     * @param lnglat2 AMap.LngLat
     */
    AMapProvider.prototype.distance = function (lnglat1, lnglat2) {
        // var lnglat1 = new AMap.LngLat(116, 39);
        // var lnglat2 = new AMap.LngLat(117, 39);
        if (lnglat1 instanceof AMap.LngLat) {
            if (lnglat2 instanceof AMap.LngLat) {
                //计算lnglat1到lnglat2之间的实际距离(m)
                var distance = lnglat1.distance(lnglat2);
                return distance;
            }
            else {
                throw 'lnglat1 不是 AMap.LngLat 类型';
            }
        }
        else {
            throw 'lnglat1 不是 AMap.LngLat 类型';
        }
    };
    AMapProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AMapProvider);
    return AMapProvider;
}());

//# sourceMappingURL=AMap.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SX_DEBUG */
/* unused harmony export sxalert */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SX_DEBUG = false;
function sxalert(msg) {
    if (SX_DEBUG) {
        alert("debug模式:" + msg);
    }
    console.log(msg);
}
var TipProvider = /** @class */ (function () {
    function TipProvider(platform, modalCtrl, alertCtrl, actionSheetCtrl, loadingCtrl, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.appName = "溫馨提示";
        this.duration = 200;
        platform.ready().then(function () {
        });
    }
    TipProvider.prototype.errorAlert = function (error, replaceMsg) {
        if (replaceMsg === void 0) { replaceMsg = "请求失败"; }
        var msg = error ? error : replaceMsg;
        return this.alert(msg);
    };
    TipProvider.prototype.alert = function (message, confirmText, confirmHandler) {
        if (confirmText === void 0) { confirmText = "确认"; }
        if (confirmHandler === void 0) { confirmHandler = function (param) { }; }
        return this.confirmAlert(message, confirmText, confirmHandler);
    };
    TipProvider.prototype.confirmAlert = function (message, confirmText, confirmHandler) {
        if (confirmText === void 0) { confirmText = "确认"; }
        if (confirmHandler === void 0) { confirmHandler = function (param) { }; }
        return this.alertTemplate(message, undefined, undefined, undefined, confirmText, confirmHandler);
    };
    TipProvider.prototype.confirmAlertWithCancel = function (message, confirmText, cancelHandler, confirmHandler) {
        if (confirmText === void 0) { confirmText = "确认"; }
        if (cancelHandler === void 0) { cancelHandler = function (param) { }; }
        return this.alertTemplate(message, undefined, undefined, cancelHandler, confirmText, confirmHandler);
    };
    /** 通用alert模版
     * @param {string} message
     * @param {string} [subTitle]
     * @param {string} [cancelText="取消"]
     * @param {*} [cancelHandler]
     * @param {string} [confirmText="确认"]
     * @param {*} [comfirmHandler]
     * @memberof SxTipProvider
     */
    TipProvider.prototype.alertTemplate = function (message, subTitle, cancelText, cancelHandler, confirmText, comfirmHandler) {
        if (cancelText === void 0) { cancelText = "取消"; }
        if (confirmText === void 0) { confirmText = "确认"; }
        var options = {
            title: this.appName,
            message: message,
            buttons: [
                {
                    text: confirmText,
                    handler: comfirmHandler
                }
            ],
            enableBackdropDismiss: false
        };
        if (subTitle) {
            Object.assign(options, {
                subTitle: subTitle
            });
        }
        if (cancelHandler) {
            options.buttons.unshift({
                text: cancelText,
                handler: cancelHandler
            });
        }
        var alert = this.alertCtrl.create(options);
        alert.present();
        return alert;
    };
    TipProvider.prototype.showProgressAlert = function (title, content, cancelText, cancelHandler) {
        var buttons = [{ text: cancelText, handler: cancelHandler }];
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: content,
            buttons: buttons,
            enableBackdropDismiss: false
        });
        alert.present();
        return alert;
    };
    TipProvider.prototype.setLoadingContent = function (content) {
        if (this.loader) {
            this.loader.setContent(content);
        }
    };
    TipProvider.prototype.setLoadingDuration = function (dur) {
        if (this.loader) {
            this.loader.setDuration(dur);
        }
    };
    TipProvider.prototype.presentLoadingNeedDismiss = function (content) {
        if (content === void 0) { content = "正在加载..."; }
        if (!this.loader) {
            this.loader = this.loadingCtrl.create({
                spinner: "bubbles",
                content: content
            });
            return this.loader.present();
        }
    };
    TipProvider.prototype.presentLoading = function (content, duration) {
        if (content === void 0) { content = "正在加载..."; }
        if (duration === void 0) { duration = 5000; }
        if (!this.loader) {
            this.loader = this.loadingCtrl.create({
                spinner: "bubbles",
                content: content,
                duration: duration
            });
            return this.loader.present();
        }
    };
    TipProvider.prototype.dismissLoading = function () {
        if (this.loader) {
            this.loader.dismiss();
            this.loader = null;
        }
        if (this.refresher) {
            this.refresher.complete();
            this.refresher = null;
        }
        if (this.infiniteScroll) {
            this.infiniteScroll.complete();
            this.infiniteScroll = null;
        }
    };
    TipProvider.prototype.infiniteScrollComplete = function () {
        if (this.infiniteScroll) {
            this.infiniteScroll.complete();
            this.infiniteScroll = null;
        }
    };
    TipProvider.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: this.duration,
            position: "bottom"
        });
        toast.onDidDismiss(function () {
            console.log("Dismissed toast");
        });
        toast.present();
    };
    TipProvider.prototype.presentModalController = function (component, data) {
        var modal = this.modalCtrl.create(component, data);
        modal.present();
        return modal;
    };
    TipProvider.prototype.presentActionSheet = function (title, buttons) {
        if (buttons === void 0) { buttons = []; }
        buttons.push({
            text: "取消",
            role: "cancel",
            handler: function () {
                console.log("Cancel clicked");
            }
        });
        var actionSheet = this.actionSheetCtrl.create({
            title: title,
            buttons: buttons
        });
        actionSheet.present();
    };
    TipProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], TipProvider);
    return TipProvider;
}());

//# sourceMappingURL=sx-tip.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map