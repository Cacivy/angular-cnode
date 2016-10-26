import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TopicService } from '../../service/topic.service';
import { Topic } from '../../class/topic'
var Prism = require('prismjs')

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

  @HostListener('window:load', ['$event'])
  load() {
    let doms = document.getElementsByTagName('pre')
    for (let i = 0; i < doms.length; i++) {
      doms[i].className += 'language-javascript'
      doms[i].innerHTML = Prism.highlight(doms[i].innerText, Prism.languages.javascript)
    }
  }
}
