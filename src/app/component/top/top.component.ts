import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../service/store.service'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }
  
  toTop() {
    document.body.scrollTop = 0
  }
}
