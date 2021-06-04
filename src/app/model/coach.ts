import {Coachee} from './coachee';
import {Topic} from './topic';

export interface Coach {
  id: number;
  introduction: string;
  availability: string;
  topicsByCoach: Topic[];
  coachee: Coachee;
  firstName: string;
  lastName: string;
  email: string;
}
