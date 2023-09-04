import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LitComponendComponent } from '../lit-componend/lit-componend.component';

import { DashboardBodyComponent } from './dashboard-body.component';

describe('DashboardBodyComponent', () => {
  let component: DashboardBodyComponent;
  let fixture: ComponentFixture<DashboardBodyComponent>;
  LitComponendComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardBodyComponent]
    });
    fixture = TestBed.createComponent(DashboardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
