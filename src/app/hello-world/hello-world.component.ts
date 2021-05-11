import {Component, OnInit} from '@angular/core';
import {HelloWorldService} from './hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message: string;
  error: boolean;

  constructor(private helloWorldService: HelloWorldService) {
  }

  ngOnInit() {
    this.helloWorldService.getMessage().subscribe(
      (result => this.message = result),
      (_ => this.error = true)
    );
  }

}
