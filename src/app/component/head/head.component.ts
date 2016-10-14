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

	@HostListener('window:scroll', ['$event'])
	scroll(event) {
		// if (this.isScroll) {
		// 	return
		// }
		// // 函数节流
		// this.isScroll = true
		// setTimeout(() => {
		// 	this.isScroll = false
		// }, 100)
		var scrollHeight = getScrollHeight()
		var ScrollTop = getScrollTop()
		var WindowHeight = getWindowHeight()
		if (scrollHeight - (ScrollTop + WindowHeight) <= 50) {
			EventBus.emit('nextPage', this.storeService.tabs[this.storeService.index].val)
		}
		if (ScrollTop > WindowHeight && !this.storeService.showToTop) {
			this.storeService.showToTop = true
		} else if (ScrollTop < WindowHeight && this.storeService.showToTop) {
			this.storeService.showToTop = false
		}
	}

	ngOnInit() {

	}
}
