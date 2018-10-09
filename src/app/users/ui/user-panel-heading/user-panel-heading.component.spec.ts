import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelHeadingComponent } from './user-panel-heading.component';

describe('UserPanelHeadingComponent', () => {
  let component: UserPanelHeadingComponent;
  let fixture: ComponentFixture<UserPanelHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPanelHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPanelHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
