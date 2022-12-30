import { Component, OnInit } from '@angular/core';
import { EventService } from '../events.service';

@Component({
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService) {
    console.log('contructor');
    // this.events = this.eventService.getData();
  }

  ngOnInit() {
    console.log('Oninit');
    this.events = this.eventService.getEvents();
  }
}
