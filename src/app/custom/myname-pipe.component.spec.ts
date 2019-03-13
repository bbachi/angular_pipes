import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MynamePipeComponent } from './myname-pipe.component';

describe('MynamePipeComponent', () => {
  let component: MynamePipeComponent;
  let fixture: ComponentFixture<MynamePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynamePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MynamePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
