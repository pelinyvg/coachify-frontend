import {Coachee} from './coachee';
import {Topic} from './topic';

export interface Coach {
  id: number;
  description: string;
  topicsByCoach: Topic[];
  coachee: Coachee;
  firstName: string;
  lastName: string;
  image: string;
}
