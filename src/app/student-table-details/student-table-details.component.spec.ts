import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTableDetailsComponent } from './student-table-details.component';

describe('StudentTableDetailsComponent', () => {
  let component: StudentTableDetailsComponent;
  let fixture: ComponentFixture<StudentTableDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentTableDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
