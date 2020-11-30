import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubchatComponent } from './subchat.component';

describe('SubchatComponent', () => {
  let component: SubchatComponent;
  let fixture: ComponentFixture<SubchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
