import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinicpalComponent } from './prinicpal.component';

describe('PrinicpalComponent', () => {
  let component: PrinicpalComponent;
  let fixture: ComponentFixture<PrinicpalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinicpalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinicpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
