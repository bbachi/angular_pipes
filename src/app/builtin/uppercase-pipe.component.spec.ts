import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercasePipeComponent } from './uppercase-pipe.component';

describe('UppercasePipeComponent', () => {
  let component: UppercasePipeComponent;
  let fixture: ComponentFixture<UppercasePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppercasePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppercasePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
