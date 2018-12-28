import { Component } from '@angular/core';

// 首页
import { HomePage } from '../home/home';
// 文章
import { ArticlePage } from '../article/article';
// 我的
import { MinePage } from '../mine/mine';
// 支持
import { ProjectPage } from '../project/project';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ArticlePage;
  tab3Root = ProjectPage;
  tab4Root = MinePage;

  constructor() {

  }
}
