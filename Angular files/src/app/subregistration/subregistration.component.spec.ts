import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubregistrationComponent } from './subregistration.component';

describe('SubregistrationComponent', () => {
  let component: SubregistrationComponent;
  let fixture: ComponentFixture<SubregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
