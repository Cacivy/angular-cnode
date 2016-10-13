import { Component, OnInit, SimpleChange } from '@angular/core';

import { Tab } from '../../class/tab'

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

	changeLog: string[]
	ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
		for (let propName in changes) {
			let chng = changes[propName];
			let cur = JSON.stringify(chng.currentValue);
			let prev = JSON.stringify(chng.previousValue);
			this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
			console.log(this.changeLog)
		}
	}

}
