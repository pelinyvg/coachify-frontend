import {User} from '../model/user';
import {Topic} from './topic';

export interface Coach {
  id: number;
  description: string;
  topics: Topic[];
  user: User;
}
