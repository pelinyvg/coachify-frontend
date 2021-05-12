import {Coachee} from './coachee';
import {Topic} from './topic';

export interface Coach {
  id: number;
  description: string;
  topics: Topic[];
  user: Coachee;
}
