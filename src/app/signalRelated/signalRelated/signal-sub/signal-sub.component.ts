import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-signal-sub',
  imports: [],
  templateUrl: './signal-sub.component.html',
  styleUrl: './signal-sub.component.css',
})
export class SignalSubComponent {
  title = 'this is signal sub component';

  material = input.required<string>();

  lable = computed(() => parseFloat(this.material()) * 1000);

  panelClosed = output<void>();

  constructor() {}

  btnClick() {
    this.panelClosed.emit();
  }
}
