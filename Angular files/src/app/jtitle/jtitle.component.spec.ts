import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JtitleComponent } from './jtitle.component';

describe('JtitleComponent', () => {
  let component: JtitleComponent;
  let fixture: ComponentFixture<JtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JtitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
