import { Injectable } from '@angular/core';

import { Tab } from '../class/tab'

@Injectable()
export class StoreService {

  constructor() { }

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

  index: number = 0

  page: number = 0

  showToTop: boolean = false

}
