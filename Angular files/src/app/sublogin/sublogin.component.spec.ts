import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubloginComponent } from './sublogin.component';

describe('SubloginComponent', () => {
  let component: SubloginComponent;
  let fixture: ComponentFixture<SubloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
