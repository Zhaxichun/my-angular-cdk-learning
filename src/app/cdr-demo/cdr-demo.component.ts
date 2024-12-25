import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-cdr-demo',
  imports: [],
  templateUrl: './cdr-demo.component.html',
  styleUrl: './cdr-demo.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdrDemoComponent {
  constructor(private crd: ChangeDetectorRef) {}

  count = signal<string>('initilaize');

  secondCount = computed(() => this.count() + ' ' + 'second count');

  change() {
    const rnd = (Math.random() * 100000).toString().split('.')[0];
    this.count.set(`change by click ${rnd}`);
  }
}
