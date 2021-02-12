import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventEditorComponent } from './page/event-editor/event-editor.component';
import { EventsListComponent } from './page/events-list/events-list.component';

const routes: Routes = [
  {
    path: "",
    component: EventsListComponent
  },
  {
    path: "events",
    component: EventsListComponent
  },
  {
    path: ":id",
    component: EventEditorComponent
  },
  {
    path: "events/:id",
    component: EventEditorComponent
  },
  {
    path: "**",
    component: EventsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
