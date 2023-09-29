import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginSitePage } from './login-site.page';

describe('LoginSitePage', () => {
  let component: LoginSitePage;
  let fixture: ComponentFixture<LoginSitePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginSitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
