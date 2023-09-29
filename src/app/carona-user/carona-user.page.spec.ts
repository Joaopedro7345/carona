import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaronaUserPage } from './carona-user.page';

describe('CaronaUserPage', () => {
  let component: CaronaUserPage;
  let fixture: ComponentFixture<CaronaUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaronaUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
