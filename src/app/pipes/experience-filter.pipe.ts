import { Pipe, PipeTransform } from '@angular/core';
import {Topic} from "../model/topic";

@Pipe({
  name: 'experienceFilter'
})
export class ExperienceFilterPipe implements PipeTransform {

  transform(topics: Topic[], experience: string): Topic[] {
    if (experience === '') {
      return topics;
    }
    if (experience==='int') {
      return topics.filter(topics => topics.grade1===true);
    } else if (experience==='med') {
      return topics.filter(topics => topics.grade2===true);
    } else if (experience==='exp') {
      return topics.filter(topics => topics.grade3===true);
    } else {
      return topics;
    }
  }
}
