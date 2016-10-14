import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Topic } from '../class/topic'
import { TopicParam } from '../class/param'
import { Util } from '../util/util'

const apiPrefix = 'https://cnodejs.org/api/v1'
const api = {
  topics: apiPrefix + '/topics',
  topic: apiPrefix + '/topic'
}

@Injectable()
export class TopicService {
  index: number = 0

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getTopics(param: TopicParam): Promise<Topic[]> {
    return this.http.get(`${api.topics}?${Util.convertParamToString(param)}`)
      .toPromise()
      .then(response => response.json().data as Topic[])
      .catch(this.handleError);
  }

  getTopicDetail(id: string): Promise<Topic> {
    return this.http.get(`${api.topic}/${id}`)
      .toPromise()
      .then(response => response.json().data as Topic)
      .catch(this.handleError);
  }

}
