import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() clickme = new EventEmitter<any>();

  handleClick(property, id) {
    console.log(property, id);
    this.clickme.emit({ property, id });
  }
}
