import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EventBus } from '../../util/event-bus'
import { StoreService } from '../../service/store.service'
import { getScrollTop, getWindowHeight, getScrollHeight } from '../../util/dom'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(private storeService: StoreService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
	scroll(event) {
		var scrollHeight = getScrollHeight()
		var ScrollTop = getScrollTop()
		var WindowHeight = getWindowHeight()
    
    if (location.pathname === '/' && scrollHeight - (ScrollTop + WindowHeight) <= 100 ) {
			EventBus.emit('nextPage', this.storeService.tabs[this.storeService.index].val)
		}
		if (ScrollTop > WindowHeight && !this.storeService.showToTop) {
			this.storeService.showToTop = true
		} else if (ScrollTop < WindowHeight && this.storeService.showToTop) {
			this.storeService.showToTop = false
		}
	}
  
  toTop() {
    document.body.scrollTop = 0
  }
}
