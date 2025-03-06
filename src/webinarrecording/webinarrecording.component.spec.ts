import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarrecordingComponent } from './webinarrecording.component';

describe('WebinarrecordingComponent', () => {
  let component: WebinarrecordingComponent;
  let fixture: ComponentFixture<WebinarrecordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarrecordingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebinarrecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
