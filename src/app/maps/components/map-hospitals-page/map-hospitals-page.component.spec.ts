import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHospitalsPageComponent } from './map-hospitals-page.component';

describe('MapHospitalsPageComponent', () => {
  let component: MapHospitalsPageComponent;
  let fixture: ComponentFixture<MapHospitalsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapHospitalsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapHospitalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
