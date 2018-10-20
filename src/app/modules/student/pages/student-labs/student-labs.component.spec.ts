import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLabsComponent } from './student-labs.component';

describe('StudentLabsComponent', () => {
  let component: StudentLabsComponent;
  let fixture: ComponentFixture<StudentLabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
