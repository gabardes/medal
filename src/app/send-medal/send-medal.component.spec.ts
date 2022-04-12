import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMedalComponent } from './send-medal.component';

describe('SendMedalComponent', () => {
  let component: SendMedalComponent;
  let fixture: ComponentFixture<SendMedalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMedalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMedalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
