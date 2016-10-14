import { Component, OnInit, HostListener } from '@angular/core';

import { Tab } from '../../class/tab'
import { EventBus } from '../../util/event-bus'
import { getScrollTop, getWindowHeight, getScrollHeight } from '../../util/dom'

@Component({
	selector: 'app-head',
	templateUrl: './head.component.html',
	styleUrls: ['./head.component.css']
})

export class HeadComponent implements OnInit {

	tabs: Tab[] = [
		{
			text: '全部',
			val: ''
		},
		{
			text: '精华',
			val: 'good'
		},
		{
			text: '分享',
			val: 'share'
		},
		{
			text: '问答',
			val: 'ask'
		},
		{
			text: '招聘',
			val: 'job'
		}
	]

	activeIndex: number = 0

	// isScroll: boolean = false

	check(i) {
		this.activeIndex = i;
		EventBus.emit('indexChange', this.tabs[i].val)
	}

	constructor() {
	}

	@HostListener('window:scroll', ['$event'])
	doSomething(event) {
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
			EventBus.emit('nextPage', this.tabs[this.activeIndex].val)
		}
	}

	ngOnInit() {

	}
}