import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  // The messageService property must be public because you're going to bind to it in the template.
  constructor(public messageService: MessageService) {}

}
