import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibertyToolbarComponent } from './liberty-toolbar.component';

describe('LibertyToolbarComponent', () => {
  let component: LibertyToolbarComponent;
  let fixture: ComponentFixture<LibertyToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibertyToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibertyToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
