import {Pipe, PipeTransform} from '@angular/core';
import {Coach} from '../model/coach';

@Pipe({
  name: 'topicNameFilter'
})
export class TopicNameFilterPipe implements PipeTransform {

  transform(coaches: Coach[], selectedTopicName: string): Coach[] {
    if (selectedTopicName === '') {
      return coaches;
    }
    return coaches.filter(coach => coach.topicsByCoach.map(topic => topic.topicName).includes(selectedTopicName));
  }

}
