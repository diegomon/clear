import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsMenuPageComponent } from './maps-menu-page.component';

describe('MapsMenuPageComponent', () => {
  let component: MapsMenuPageComponent;
  let fixture: ComponentFixture<MapsMenuPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsMenuPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
