import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowercasePipeComponent } from './lowercase-pipe.component';

describe('LowercasePipeComponent', () => {
  let component: LowercasePipeComponent;
  let fixture: ComponentFixture<LowercasePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowercasePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowercasePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
