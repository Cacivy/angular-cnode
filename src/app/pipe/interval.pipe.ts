import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'interval'
})
export class IntervalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let date = new Date(value)
    let now = new Date()
    let year = now.getFullYear() - date.getFullYear()
    if (year) {
      return year + '年前'
    }
    let month = now.getMonth() - date.getMonth()
    if (month) {
      return month + '月前'
    }
    let day = now.getDate() - date.getDate()
    if (day) {
      return day + '天前'
    }
    let hour = now.getHours() - date.getHours()
    if (hour) {
      return hour + '小时前'
    }
    let min = now.getMinutes() - date.getMinutes()
    if (min) {
      return min + '分钟前'
    }

    return '刚刚';
  }

}
