import {Time} from '@angular/common';
import {SessionFeedbackCoachee} from './session-feedback-coachee';

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
  sessionFeedbackCoacheeDTO?: SessionFeedbackCoachee;
  editForm: boolean;
}
