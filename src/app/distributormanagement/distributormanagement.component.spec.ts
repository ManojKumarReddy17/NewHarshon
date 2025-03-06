import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributormanagementComponent } from './distributormanagement.component';

describe('DistributormanagementComponent', () => {
  let component: DistributormanagementComponent;
  let fixture: ComponentFixture<DistributormanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributormanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistributormanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
