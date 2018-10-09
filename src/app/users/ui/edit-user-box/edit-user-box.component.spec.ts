import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserBoxComponent } from './edit-user-box.component';

describe('EditUserBoxComponent', () => {
  let component: EditUserBoxComponent;
  let fixture: ComponentFixture<EditUserBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
