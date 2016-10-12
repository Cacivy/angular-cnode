import { Component, OnInit } from '@angular/core';

import { Tab } from '../class/tab'

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

	check(i) {
		this.activeIndex = i;
	}

	constructor() { }

	ngOnInit() {
	}

}
