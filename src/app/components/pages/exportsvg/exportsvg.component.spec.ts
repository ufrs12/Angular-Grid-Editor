import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportsvgComponent } from './exportsvg.component';

describe('ExportsvgComponent', () => {
  let component: ExportsvgComponent;
  let fixture: ComponentFixture<ExportsvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportsvgComponent]
    });
    fixture = TestBed.createComponent(ExportsvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
