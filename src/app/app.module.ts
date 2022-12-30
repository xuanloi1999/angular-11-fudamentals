import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EventsAppComponent } from './events/events.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-list/event-thumbnail/event-thumbnail.component';
import { EventService } from './events/events.service';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/routes';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
  ],
  providers: [EventService],
  bootstrap: [AppComponent],
})
export class AppModule {}
