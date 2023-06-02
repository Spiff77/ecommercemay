import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteleDialogComponent } from './detele-dialog.component';

describe('DeteleDialogComponent', () => {
  let component: DeteleDialogComponent;
  let fixture: ComponentFixture<DeteleDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeteleDialogComponent]
    });
    fixture = TestBed.createComponent(DeteleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
