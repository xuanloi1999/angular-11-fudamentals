import { Component } from '@angular/core';
import { EventService } from '../events.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent {
  events: any[];

  constructor(private eventService: EventService) {
    console.log('contructor');
    // this.events = this.eventService.getData();
  }

  ngOnInt() {
    this.events = this.eventService.getData();
  }
}
