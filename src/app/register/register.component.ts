import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../services/user.service';
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

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // TODO delete this console.log
    console.log('test');
    this.userService.addUser(this.registerForm.value).subscribe(() => {
      alert('User has been registered');
      this.router.navigate(['']);
    });
  }
}
