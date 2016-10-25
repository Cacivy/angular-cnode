import { Component, OnInit, SimpleChanges } from '@angular/core';

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

export class ContentComponent implements OnInit {

  topics: Topic[] = []
  // page: number = 1
  isRequest: boolean = false

  constructor(
    private topicService: TopicService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.getTopics()

    EventBus.on('indexChange', (val) => {
      this.getTopics(1, val)
    })

    EventBus.on('nextPage', (tab) => {
      if (this.isRequest) {
        return
      }
      this.storeService.page++
      this.getTopics(this.storeService.page, tab)
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  getTopics(page?: number, tab?: string) {
    if (this.isRequest) {
      return
    }
    this.isRequest = true
    let startTime:number = new Date().valueOf()
    this.topicService.getTopics(new TopicParam(page, tab)).then((data: Topic[]) => {
      if (page === 1) {
        setTimeout(() => {
          this.topics = data
        }, this.topics.length? 500 - (startTime - new Date().valueOf())/1000 : 0)
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
