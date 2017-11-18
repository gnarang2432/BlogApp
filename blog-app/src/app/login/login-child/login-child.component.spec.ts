import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginChildComponent } from './login-child.component';

describe('LoginChildComponent', () => {
  let component: LoginChildComponent;
  let fixture: ComponentFixture<LoginChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
