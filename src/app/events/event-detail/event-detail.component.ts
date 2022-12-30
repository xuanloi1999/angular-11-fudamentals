import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../events.service';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent implements OnInit {
  event: any;
  @Input() id: number;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(typeof this.route.snapshot.params['id']);
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}
