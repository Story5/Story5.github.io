webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BJPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(194);
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
    function BJPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.gridArray = [
            [
                {
                    t1: "自",
                    t2: "由",
                    selected: false
                },
                {
                    t1: "爱",
                    t2: "国",
                    selected: false
                },
                {
                    t1: "富",
                    t2: "强",
                    selected: false
                }
            ],
            [
                {
                    t1: "平",
                    t2: "等",
                    selected: false
                },
                {
                    t1: "诚",
                    t2: "信",
                    selected: false
                },
                {
                    t1: "民",
                    t2: "主",
                    selected: false
                }
            ],
            [
                {
                    t1: "公",
                    t2: "正",
                    selected: false
                },
                {
                    t1: "敬",
                    t2: "业",
                    selected: false
                },
                {
                    t1: "文",
                    t2: "明",
                    selected: false
                }
            ],
            [
                {
                    t1: "法",
                    t2: "治",
                    selected: false
                },
                {
                    t1: "友",
                    t2: "善",
                    selected: false
                },
                {
                    t1: "和",
                    t2: "谐",
                    selected: false
                }
            ]
        ];
        this.selected = [];
    }
    BJPage.prototype.ionViewDidLoad = function () {
        // this.playMusic();
        this.initEcharts6();
        this.initEcharts10();
    };
    BJPage.prototype.listen = function () {
        //--创建页面监听，等待微信端页面加载完毕 触发音频播放
        document.addEventListener('DOMContentLoaded', function () {
            var audio = document.getElementById("bj_audio_id");
            audio.play();
        });
        document.addEventListener("WeixinJSBridgeReady", function () {
            var audio = document.getElementById("bj_audio_id");
            audio.play();
        }, false);
        //--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
        document.addEventListener('touchstart', function () {
            var audio = document.getElementById("bj_audio_id");
            audio.play();
        });
    };
    BJPage.prototype.playMusic = function () {
        var url = "../assets/images/bg_music.mp3";
        var audio = new Audio(url);
        audio.loop = true;
        audio.autoplay = true;
        audio.play();
        //--创建页面监听，等待微信端页面加载完毕 触发音频播放
        document.addEventListener('DOMContentLoaded', function () {
            audio.play();
        });
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
        //--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
        document.addEventListener('touchstart', function () {
            audio.play();
        });
    };
    BJPage.prototype.initEcharts6 = function () {
        echarts.init(document.getElementById('echarts_6')).setOption({
            legend: {
                // type: "scroll",
                top: "bottom",
            },
            tooltip: {
                show: false
            },
            toolbox: {
                show: false
            },
            series: {
                type: 'pie',
                name: "中国皇帝寿命图",
                data: [
                    {
                        name: '31-40岁',
                        value: 60,
                        itemStyle: {
                            color: '#33688e'
                        }
                    },
                    {
                        name: '21-30岁',
                        value: 55,
                        itemStyle: {
                            color: '#357799'
                        }
                    },
                    {
                        name: '51-60岁',
                        value: 54,
                        itemStyle: {
                            color: '#3a86a5'
                        }
                    },
                    {
                        name: '41-50岁',
                        value: 52,
                        itemStyle: {
                            color: '#4096af'
                        }
                    },
                    {
                        name: '11-20岁',
                        value: 34,
                        itemStyle: {
                            color: '#4ea4b9'
                        }
                    },
                    {
                        name: '61-70岁',
                        value: 32,
                        itemStyle: {
                            color: '#67b5bf'
                        }
                    },
                    {
                        name: '1-10岁',
                        value: 13,
                        itemStyle: {
                            color: '#80c1c9'
                        }
                    },
                    {
                        name: '71岁及以上',
                        value: 10,
                        itemStyle: {
                            color: '#96cece'
                        }
                    },
                ],
                label: {
                    show: true,
                    // position:"inside",
                    // align:"left",
                    // verticalAlign:"top",
                    formatter: "{c}",
                },
                labelLine: {
                    show: true,
                    length: 3,
                    // length2:3,
                    smooth: true
                }
            }
        });
    };
    BJPage.prototype.initEcharts10 = function () {
        echarts.init(document.getElementById('echarts_10')).setOption({
            legend: {
                // type: "scroll",
                top: "bottom",
            },
            tooltip: {
                show: false
            },
            toolbox: {
                show: false
            },
            series: {
                type: 'pie',
                name: "中国皇帝皇位获取途径图",
                data: [
                    {
                        name: '皇位继承',
                        value: 196,
                        itemStyle: {
                            color: '#2F5A85'
                        }
                    },
                    {
                        name: '帝国建立',
                        value: 39,
                        itemStyle: {
                            color: '#386D94'
                        }
                    },
                    {
                        name: '群臣拥立',
                        value: 36,
                        itemStyle: {
                            color: '#377FA0'
                        }
                    },
                    {
                        name: '权臣拥立',
                        value: 31,
                        itemStyle: {
                            color: '#3A8EB0'
                        }
                    },
                    {
                        name: '篡位',
                        value: 25,
                        itemStyle: {
                            color: '#489EB7'
                        }
                    },
                    {
                        name: '皇位争夺',
                        value: 16,
                        itemStyle: {
                            color: '#5EACBE'
                        }
                    },
                    {
                        name: '自立为帝',
                        value: 10,
                        itemStyle: {
                            color: '#74BAC5'
                        }
                    },
                    {
                        name: '政变称帝',
                        value: 5,
                        itemStyle: {
                            color: '#8DC7CE'
                        }
                    },
                    {
                        name: '册封',
                        value: 2,
                        itemStyle: {
                            color: '#AFDAD5'
                        }
                    }
                ],
                label: {
                    show: true,
                    // position:"inside",
                    // align:"left",
                    // verticalAlign:"top",
                    formatter: "{c}",
                },
                labelLine: {
                    show: true,
                    length: 3,
                    // length2:3,
                    smooth: true
                }
            }
        });
    };
    BJPage.prototype.clickItem = function (row, col) {
        var num = row * 3 + col;
        if (this.selected.length == 0) {
            this.selected.push(num);
        }
        else if (this.selected.length == 1) {
            if (this.selected[0] == num) {
                this.selected = [];
            }
            else {
                this.selected.push(num);
            }
        }
        else if (this.selected.length == 2) {
            if (this.selected[0] == num) {
                this.selected.splice(0, 1);
            }
            else if (this.selected[1] == num) {
                this.selected.splice(1, 1);
            }
            else {
                this.presentAlert("只能选择2项,请去掉已选项再勾选");
                return;
            }
        }
        var cols = this.gridArray[row];
        var item = cols[col];
        item.selected = !item.selected;
    };
    BJPage.prototype.presentAlert = function (subTitle) {
        var alert = this.alertCtrl.create({
            title: "提示",
            subTitle: subTitle,
            buttons: ['知道了']
        });
        alert.present();
    };
    BJPage.prototype.clickButton = function () {
        if (this.selected.length == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], this.selected);
        }
        else {
            this.presentAlert("请选满2项后查看");
        }
    };
    BJPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bj',template:/*ion-inline-start:"/Users/story5/Story5/01 Project/01 Github/baojun/src/pages/bj/bj.html"*/'<ion-content>\n  <ion-slides direction="vertical" pager=true shouldEnableKeyboard=true effect="fade" initialSlide="0">\n    <ion-slide class="slide_1">\n      <!-- <div></div> -->\n      <div class="bj_text_area">\n        <div class="bj_text1">皇帝</div>\n        <div class="bj_line"></div>\n        <div class="bj_text2">那些事儿</div>\n      </div>\n    </ion-slide>\n    <ion-slide class="slide_2">\n      <div class="bj_slide_area">\n        <div class="bj_text">\n          &nbsp;&nbsp;&nbsp;&nbsp;古今多少事，都付笑谈中。皇帝这一古代特殊职业在过去两千多年的历史中占据着特殊地位，引起人们的遐想。作为为皇帝立传的史书又告诉我们哪些皇帝的八卦呢？\n          <br />\n          <br />\n          &nbsp;&nbsp;&nbsp;&nbsp;我们统计了自公元前二二一年秦始皇称帝起至公元一九一一年爱新觉罗溥仪退位，两千一百三十一年时间里共计三百六十位帝王的资料，得出了下列结论。\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide class="slide_3">\n      <div class="bj_slide_area">\n        <div class="bj_text">\n          &nbsp;&nbsp;&nbsp;&nbsp;令人羡慕的皇帝其实是个高危职业，有27.4%的皇帝活不过30岁，54.1%的皇帝死于非命，超过一半的皇帝因为战争、下毒、行刺以及谋权篡位而死。死法最奇葩的当属东晋孝武帝，他是被自己的妃嫔捂死在被子里。\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide class="slide_4">\n      <div class="bj_slide_area">\n        <div class="bj_title">中国皇帝死因图(除正常死亡)</div>\n        <img class="bj_img" src="assets/images/background/4_img.jpg" />\n        <div class="bj_grid_title">死法</div>\n        <ion-grid class="bj_grid">\n          <ion-row>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #2C7F9F"></div>\n              <span class="bj_col_title">被杀</span>\n            </ion-col>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #8FC4CE"></div>\n              <span class="bj_col_title">因伤而死</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #51ADBB"></div>\n              <span class="bj_col_title">猝死</span>\n            </ion-col>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #88C7CE"></div>\n              <span class="bj_col_title">幽禁而死</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #9ED4D0"></div>\n              <span class="bj_col_title">困厄而死</span>\n            </ion-col>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #399FB5"></div>\n              <span class="bj_col_title">郁郁而终</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #BAE3D9"></div>\n              <span class="bj_col_title">失踪</span>\n            </ion-col>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #2A8FAD"></div>\n              <span class="bj_col_title">自杀</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #BAE4D9"></div>\n              <span class="bj_col_title">吓死</span>\n            </ion-col>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #6EBAC5"></div>\n              <span class="bj_col_title">纵欲而死</span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-slide>\n    <ion-slide class="slide_5">\n      <div class="bj_slide_area">\n        <div class="bj_text">\n          &nbsp;&nbsp;&nbsp;&nbsp;我们对中国古代皇帝寿命进行统计，发现当上皇帝就几乎意味着减寿。在已知寿命的寿命的304位皇帝中，平均年龄为39.92岁，另有13人根据父亲生年和死亡时间推断确定不超过40岁。在位时间和寿命的关联度呈现正相关度分布。\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide class="slide_6">\n      <div class="bj_slide_area">\n        <div class="bj_title">\n          中国皇帝寿命图\n        </div>\n        <div class="bj_echarts_area">\n          <div id="echarts_6" class="bj_echarts_container"></div>\n        </div>\n        <div class="bj_count_area">\n          <div class="bj_count_title">数量</div>\n          <div class="bj_count_line"></div>\n          <div class="bj_count_value">310</div>\n          <div class="bj_count_des">寿命分段（颜色）和数量总和（大小）。视图按寿命分段进行筛选，这会排除 Null。</div>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide class="slide_7">\n      <div class="bj_slide_area">\n        <div class="bj_text">\n          &nbsp;&nbsp;&nbsp;&nbsp;想当上皇帝确实是不太简单，可以说是一件拼爹的事。在全部360位皇帝中，有196个皇帝的爹就是皇帝，剩下大多数皇帝的爹也是割据军阀和封建贵族，只有6个皇帝的爹是普通老百姓，真正的白手起家。\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide class="slide_8">\n      <div class="bj_slide_area">\n        <div class="bj_title">中国皇帝出身图</div>\n        <img class="bj_img" src="assets/images/background/8_img.jpg" />\n        <div class="bj_grid_title">父亲身份</div>\n        <ion-grid class="bj_grid">\n          <ion-row>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #3B7D9E"></div>\n              <span class="bj_col_title">皇帝</span>\n            </ion-col>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #8AC8CF"></div>\n              <span class="bj_col_title">太子</span>\n            </ion-col>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #499BBB"></div>\n              <span class="bj_col_title">官宦</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #397DA3"></div>\n              <span class="bj_col_title">贵族</span>\n            </ion-col>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #5BADBC"></div>\n              <span class="bj_col_title">皇子</span>\n            </ion-col>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #A9D1CE"></div>\n              <span class="bj_col_title">平民</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #75B8CA"></div>\n              <span class="bj_col_title">部落首领</span>\n            </ion-col>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #3887AF"></div>\n              <span class="bj_col_title">割据军阀</span>\n            </ion-col>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #A8D2CF"></div>\n              <span class="bj_col_title">前朝权臣</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: white"></div>\n              <span class="bj_col_title"></span>\n            </ion-col>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: white"></div>\n              <span class="bj_col_title"></span>\n            </ion-col>\n            <ion-col>\n              <div class="bj_col_box" style="background-color: #BCE4D9"></div>\n              <span class="bj_col_title">诸侯</span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <div class="bj_bottom_title">父亲身份与数量平均值。颜色显示有关父亲身份的详细信息。大小显示数量平均值。标记按父亲身份与数量平均值进行标记。视图按父亲身份进行筛选，这会排除不详。</div>\n      </div>\n    </ion-slide>\n    <ion-slide class="slide_9">\n      <div class="bj_slide_area">\n        <div class="bj_text">\n          &nbsp;&nbsp;&nbsp;&nbsp;而这些皇帝的登基方式又不尽相同，除了最普遍的通过“皇位继承”，这一部分大约是54.4%，比较多的还有群臣拥立、帝国建立等，而权臣拥立的皇帝是第四多。</div>\n      </div>\n    </ion-slide>\n    <ion-slide class="slide_10">\n      <div class="bj_slide_area">\n        <div class="bj_title">\n          中国皇帝皇位获取途径图\n        </div>\n        <div class="bj_echarts_area">\n          <div id="echarts_10" class="bj_echarts_container"></div>\n        </div>\n        <div class="bj_count_area">\n          <div class="bj_count_title">数量</div>\n          <div class="bj_count_line"></div>\n          <div class="bj_count_value">360</div>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide class="slide_11">\n      <div class="bj_slide_area">\n        <div class="bj_text">\n          &nbsp;&nbsp;&nbsp;&nbsp;中国古代版图面积较大，单纯按照南北划分，我们常识会认为北方出身的皇帝更多，即便通过统计结果也证实了北方皇帝更多，但我们希望对南北进行更加细致的划分，增加华北、华南、华东、西南、满洲、蒙古等地区，统计结果表明在已知出生地的313位皇帝中，除了少部分在东北、华南和蒙古地区，大多数出生于黄河流域和长江流域，尤其集中于黄河中下游地区。\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide class="slide_12">\n    </ion-slide>\n    <ion-slide class="slide_13">\n      <div class="bj_slide_area">\n        <div class="bj_text">\n          &nbsp;&nbsp;&nbsp;&nbsp;在住处的选择上，皇帝也有比较高的一致性。皇帝喜欢以今天的西安、洛阳、北京、南京为都城，西安尤甚。即使不在这四座城市，也大部分分布在黄河与长江流域。</div>\n      </div>\n    </ion-slide>\n    <ion-slide class="slide_14">\n    </ion-slide>\n    <ion-slide class="slide_15">\n      <div class="bj_slide_area">\n        <div class="bj_text">\n          &nbsp;&nbsp;&nbsp;&nbsp;而在三百六十位皇帝中，姓“刘”和姓“李”的皇帝最多，分别有55位和46位，占到了总数的28.0%，最少的是“段”和“武”，只有一位，分别是北凉的段业和周（唐）朝的武则天，值得一提的是，武则天也是唯一跨越性别壁垒的存在。\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide class="slide_16">\n    </ion-slide>\n    <ion-slide class="slide_17">\n      <div class="bj_slide_area">\n        <div class="bj_text">\n          &nbsp;&nbsp;&nbsp;&nbsp;在统计的三百六十位皇帝中，使用最多的褒谥是“文”“武”“明”。\n          <br />\n          &nbsp;&nbsp;&nbsp;&nbsp;“闵”“厉”则是用得较多的贬谥。</div>\n      </div>\n    </ion-slide>\n    <ion-slide class="slide_18">\n    </ion-slide>\n    <ion-slide class="slide_19">\n      <div class="bj_slide_area">\n        <div class="bj_text1">如<br />果<br />皇<br />帝<br />生<br />在<br />现<br />在</div>\n        <div class="bj_text2">\n          哪<br />些\n          <div class="bj_text2_point">核<br />心<br />价<br />值<br />观</div>\n          最<br />匹<br />配<br />他<br />们<br />?\n        </div>\n        <div class="bj_line"></div>\n        <ion-grid class="bj_grid">\n          <ion-row class="bj_row" *ngFor="let cols of gridArray;let i = index">\n            <ion-col class="bj_col" *ngFor="let item of cols;let j = index" (click)="clickItem(i,j)">\n              <div class="col_background" [class.selected]="item.selected"></div>\n              <div class="col_text_area">\n                <div class="col_text">{{item.t1}}</div>\n                <div class="col_space"></div>\n                <div class="col_text">{{item.t2}}</div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <button class="bj_button" ion-button clear color="dark" (click)="clickButton()">查看</button>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <audio id="bj_audio_id" src="assets/images/bg_music.mp3" loop autoplay></audio>\n</ion-content>'/*ion-inline-end:"/Users/story5/Story5/01 Project/01 Github/baojun/src/pages/bj/bj.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], BJPage);
    return BJPage;
    var _a, _b;
}());

//# sourceMappingURL=bj.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultPage = /** @class */ (function () {
    function ResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selected = [];
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        this.selected = this.navParams.data;
        this.src = this.getImage();
    };
    ResultPage.prototype.getImage = function () {
        var num1 = this.selected[0];
        var num2 = this.selected[1];
        var b1 = 1 << num1;
        var b2 = 1 << num2;
        var b = b1 ^ b2;
        var str = b.toString(2);
        console.log("str:", str);
        console.log("join:", Array(12 - str.length + 1).join('0'));
        var str_12 = Array(12 - str.length + 1).join('0') + str;
        return "assets/images/result/" + str_12 + ".jpg";
    };
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"/Users/story5/Story5/01 Project/01 Github/baojun/src/pages/result/result.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>测试结果</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="bj_content">\n      <img class="result_img" [src]="src">\n      <img class="bj_qrcode" src="assets/images/qrcode.png">\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/story5/Story5/01 Project/01 Github/baojun/src/pages/result/result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bj_bj__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_result_result__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_bj_bj__["a" /* BJPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_result_result__["a" /* ResultPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    iconMode: "ios",
                    backButtonText: "返回"
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_bj_bj__["a" /* BJPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_result_result__["a" /* ResultPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_bj_bj__ = __webpack_require__(193);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_bj_bj__["a" /* BJPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/story5/Story5/01 Project/01 Github/baojun/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/story5/Story5/01 Project/01 Github/baojun/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map