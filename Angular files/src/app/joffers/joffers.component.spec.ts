import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoffersComponent } from './joffers.component';

describe('JoffersComponent', () => {
  let component: JoffersComponent;
  let fixture: ComponentFixture<JoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
