import { Component, OnInit, OnDestroy } from '@angular/core';

import { TopicParam } from '../../class/param'
import { Topic } from '../../class/topic'

import { TopicService } from '../../service/topic.service'
import { StoreService } from '../../service/store.service'
import { EventBus } from '../../util/event-bus'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit, OnDestroy {

  topics: Topic[] = []
  isRequest: boolean = false

  constructor(
    private topicService: TopicService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.getTopics()

    EventBus.on('indexChange', (val) => {
      if (this.isRequest) {
        return
      }
      this.storeService.page = 1
      this.getTopics()
    })

    EventBus.on('nextPage', (tab) => {
      if (this.isRequest) {
        return
      }
      this.storeService.page++
      this.getTopics()
    })
  }

  ngOnDestroy() {
    this.topics = []
    this.storeService.page = 1
    EventBus.remove('indexChange')
    EventBus.remove('nextPage')
  }

  getTopics() {
    if (this.isRequest) {
      return
    }
    const {page, index, tabs} = this.storeService
    let tab = tabs[index].val
    this.isRequest = true
    let startTime:number = new Date().valueOf()
    this.topicService.getTopics(new TopicParam(page, tab)).then((data: Topic[]) => {
      if (page === 1) {
        setTimeout(() => {
          this.topics = data
        }, this.topics.length? 500 - (new Date().valueOf() - startTime)/1000 : 0)
      } else {
        this.topics = this.topics.concat(data)
      }
      
      this.isRequest = false
    })
  }

  scroll(el) {
    console.log(el)
  }

}
