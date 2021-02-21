import { Injectable } from '@angular/core';
import { Input } from '@angular/core';

@Injectable()
export class SignalrService {

  constructor() { }
  @Input() username;

  data = {
      username: '',
      newMessage: '',
      messages: [],
      ready: false
    };

  sendMessage() {

  }

}