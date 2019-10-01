import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibertyTabsComponent } from './liberty-tabs.component';

describe('LibertyTabsComponent', () => {
  let component: LibertyTabsComponent;
  let fixture: ComponentFixture<LibertyTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibertyTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibertyTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
