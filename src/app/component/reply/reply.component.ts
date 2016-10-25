import { Component, OnInit, Input } from '@angular/core';

import {Reply} from '../../class/topic'

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  constructor() { }

  @Input()
  reply: Reply

  ngOnInit() {
  }

}
