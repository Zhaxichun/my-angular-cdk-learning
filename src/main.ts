import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SignalsLearningComponent } from './app/signalRelated/signalRelated/signals-learning/signals-learning.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  template: `
    <app-signals-learning></app-signals-learning>
    <div style="border:2px solid black;width:200px;height:200px" cdkDrag>here are some texts</div>
  `,
  imports: [SignalsLearningComponent, DragDropModule],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
