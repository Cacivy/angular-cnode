import { Component, OnInit } from '@angular/core';

import { TopicParam } from '../../class/param'
import { Topic } from '../../class/topic'

import { TopicService } from '../../service/topic.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  topics: Topic[]

  constructor(
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.topicService.getTopics(new TopicParam()).then(data => {
      this.topics = data
    })
  }

}
