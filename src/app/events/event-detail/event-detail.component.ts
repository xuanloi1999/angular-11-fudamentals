import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../events.service';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent implements OnInit {
  event: any;
  @Input() id: number;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }
}
