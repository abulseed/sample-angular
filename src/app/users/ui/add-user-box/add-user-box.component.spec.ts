import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserBoxComponent } from './add-user-box.component';

describe('AddUserBoxComponent', () => {
  let component: AddUserBoxComponent;
  let fixture: ComponentFixture<AddUserBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
