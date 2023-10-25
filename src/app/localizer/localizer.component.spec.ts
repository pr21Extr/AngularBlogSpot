import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizerComponent } from './localizer.component';

describe('LocalizerComponent', () => {
  let component: LocalizerComponent;
  let fixture: ComponentFixture<LocalizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalizerComponent]
    });
    fixture = TestBed.createComponent(LocalizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
