import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollinfoListingComponent } from './enrollinfo-listing.component';

describe('EnrollinfoListingComponent', () => {
  let component: EnrollinfoListingComponent;
  let fixture: ComponentFixture<EnrollinfoListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrollinfoListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrollinfoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
