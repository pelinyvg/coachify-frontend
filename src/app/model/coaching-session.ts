import {Time} from '@angular/common';

export interface CoachingSession {
  sessionId: number;
  coacheeId: number;
  coachId: number;
  coachFirstName: string;
  coachLastName: string;
  coacheeFirstName: string;
  coacheeLastName: string;
  subject: string;
  date: Date;
  time: Time;
  location: string;
  remarks: string;
  status?: string;
}
