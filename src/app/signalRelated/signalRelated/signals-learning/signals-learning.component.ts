import { Component, computed, input, signal } from '@angular/core';
import { SignalSubComponent } from '../signal-sub/signal-sub.component';

@Component({
  selector: 'app-signals-learning',
  imports: [SignalSubComponent],
  templateUrl: './signals-learning.component.html',
  styleUrl: './signals-learning.component.css',
})
export class SignalsLearningComponent {
  // signal type.
  count = signal<number>(0);
  addOne() {
    this.count.update((v) => v + 1);
  }

  // input signals - change sub component input values.
  material = signal<string>('');
  changeMaterial() {
    this.material.set(Math.random().toString());
  }

  title = input<string>('First Page');

  titleWithSuffix = computed(() => `Title is ${this.title()}`);

  titleWithTransfirmatio = computed(() => `${this.titleWithSuffix()}`);
  // output singals
  // query signals
  // model signals
}
