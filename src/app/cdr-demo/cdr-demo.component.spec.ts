import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdrDemoComponent } from './cdr-demo.component';
import { beforeEach } from 'node:test';

describe('CdrDemoComponent', () => {
  let component: CdrDemoComponent;
  let fixture: ComponentFixture<CdrDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdrDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CdrDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
