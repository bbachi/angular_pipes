import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintoutPipeComponent } from './printout-pipe.component';

describe('PrintoutPipeComponent', () => {
  let component: PrintoutPipeComponent;
  let fixture: ComponentFixture<PrintoutPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintoutPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintoutPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
