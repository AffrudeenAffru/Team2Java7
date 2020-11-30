import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeplansComponent } from './rechargeplans.component';

describe('RechargeplansComponent', () => {
  let component: RechargeplansComponent;
  let fixture: ComponentFixture<RechargeplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
