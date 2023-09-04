import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitComponendComponent } from './lit-componend.component';

describe('LitComponendComponent', () => {
  let component: LitComponendComponent;
  let fixture: ComponentFixture<LitComponendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LitComponendComponent]
    });
    fixture = TestBed.createComponent(LitComponendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
