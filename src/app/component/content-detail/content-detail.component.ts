import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Topic } from '../../class/topic'

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})


export class ContentDetailComponent implements OnInit {

  tabs = {
    share: '分享',
    ask: '问答',
    job: '招聘'
  }

  @Input()
  topic: Topic

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getTab(tab: string) {
    return this.tabs[tab]
  }

  gotoDetail(): void {
    let link = ['/topic', this.topic.id];
    this.router.navigate(link);
  }

}
