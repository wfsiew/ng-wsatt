import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceListingComponent } from './device-listing.component';

describe('DeviceListingComponent', () => {
  let component: DeviceListingComponent;
  let fixture: ComponentFixture<DeviceListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeviceListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeviceListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
