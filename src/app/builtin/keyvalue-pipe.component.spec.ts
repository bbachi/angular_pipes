import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyvaluePipeComponent } from './keyvalue-pipe.component';

describe('KeyvaluePipeComponent', () => {
  let component: KeyvaluePipeComponent;
  let fixture: ComponentFixture<KeyvaluePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyvaluePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyvaluePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
