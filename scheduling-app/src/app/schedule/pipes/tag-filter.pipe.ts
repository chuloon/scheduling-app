import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'tagFilter',
  pure: false
})
export class TagFilterPipe implements PipeTransform {

  transform(value: any[], args?: any[]): any {
    const activeTags = this.getActiveTags(args);
    let visibleEvents = [];

    value.forEach((event) => {
      event.tags.forEach((tag) => {
        if(_.includes(activeTags, tag)) {
          visibleEvents.push(event);
        }
      });
    });

    return visibleEvents;
  }

  getActiveTags = (args) => {
    const activeTags = [];

    args.forEach((section) => {
      section.items.forEach((item) => {
        if(item.checked) activeTags.push(item.tag)
      });
    });

    return activeTags;
  }

}
