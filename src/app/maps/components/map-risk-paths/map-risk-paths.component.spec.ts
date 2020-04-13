import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRiskPathsComponent } from './map-risk-paths.component';

describe('MapRiskPathsComponent', () => {
  let component: MapRiskPathsComponent;
  let fixture: ComponentFixture<MapRiskPathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapRiskPathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapRiskPathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
