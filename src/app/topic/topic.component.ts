import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TopicService } from '../topic.service';
import { Topic } from '../class/topic'

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topic: Topic

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.topicService.getTopicDetail(id).then(data => {
        this.topic = data
      })
    })
  }

}
