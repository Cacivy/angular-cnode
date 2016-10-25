import { Component, OnInit, HostListener } from '@angular/core';

import { EventBus } from '../../util/event-bus'
import { getScrollTop, getWindowHeight, getScrollHeight } from '../../util/dom'
import { StoreService } from '../../service/store.service'

@Component({
	selector: 'app-head',
	templateUrl: './head.component.html',
	styleUrls: ['./head.component.css']
})

export class HeadComponent implements OnInit {

	// isScroll: boolean = false

	check(i) {
		this.storeService.index = i
		EventBus.emit('indexChange', this.storeService.tabs[i].val)
	}

	constructor(private storeService: StoreService) {

	}

	// @HostListener('window:scroll', ['$event'])
	// scroll(event) {
	// 	var scrollHeight = getScrollHeight()
	// 	var ScrollTop = getScrollTop()
	// 	var WindowHeight = getWindowHeight()
		
	// }

	ngOnInit() {

	}
}
