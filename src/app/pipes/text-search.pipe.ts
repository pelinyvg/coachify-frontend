import { Pipe, PipeTransform } from '@angular/core';
import {Coach} from "../model/coach";

@Pipe({
  name: 'textSearch'
})
export class TextSearchPipe implements PipeTransform {

  transform(coaches: Coach[], name: string): Coach[] {
    if (name === '') {
      return coaches;
    }
    return coaches.filter(coach => coach.firstName.toLowerCase().includes(name.toLowerCase())
      || coach.lastName.toLowerCase().includes(name.toLowerCase())
      || coach.email.toLowerCase().includes(name.toLowerCase()))
  }
}
