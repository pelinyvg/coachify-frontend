import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CoacheeService} from '../services/coachee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group(
    {
      firstName: '',
      lastName: '',
      email: ''
    }
  );

  constructor(private formBuilder: FormBuilder, private coacheeService: CoacheeService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.coacheeService.addCoachee(this.registerForm.value).subscribe(() => {
      alert('Coachee has been registered');
      // todo change this path in story 3 or 34
      this.router.navigate(['/users/blank-profile']);
    });
  }
}
