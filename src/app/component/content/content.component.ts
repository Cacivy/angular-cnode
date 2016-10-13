import { Component, OnInit } from '@angular/core';

import { TopicParam } from '../../class/param'
import { Topic } from '../../class/topic'

import { TopicService } from '../../service/topic.service'
import { EventBus } from '../../util/event-bus'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  topics: Topic[] = []
  page: number = 1
  isRequest: boolean = false

  constructor(
    private topicService: TopicService
  ) {

  }

  ngOnInit() {
    this.getTopics()

    EventBus.on('indexChange', (val) => {
      this.getTopics(1, val)
    })

    EventBus.on('nextPage', (tab) => {
      this.page++
      this.getTopics(this.page, tab)
    })
  }

  getTopics(page?: number, tab?: string) {
    if (this.isRequest) {
      return
    }
    this.isRequest = true
    this.topicService.getTopics(new TopicParam(page, tab)).then((data: Topic[]) => {
      if (page > 1) {
        // 调试发现topics会改变，但是视图不改变
        data.forEach((x: Topic) => {
          this.topics.push(x)
        })
        // this.topics = this.topics.concat(data)
      } else {
        // 正常，视图改变
        this.topics = data
      }
      this.isRequest = false
    })
  }

}
