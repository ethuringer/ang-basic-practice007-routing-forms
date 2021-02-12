import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {
  event: Event = new Event();

  constructor(private eventService: EventService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params =>
        this.eventService.get(params.id).subscribe(
          event => {
            console.log(event);
            this.event = event || new Event();
          }
        )
    );
  }

  onFormSubmit(form: NgForm): void {
    this.eventService.update(this.event);
  }

}
