import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpolitiqueComponent } from './newpolitique.component';

describe('NewpolitiqueComponent', () => {
  let component: NewpolitiqueComponent;
  let fixture: ComponentFixture<NewpolitiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpolitiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpolitiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
