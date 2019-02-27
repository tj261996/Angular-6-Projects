import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOpComponent } from './crud-op.component';

describe('CrudOpComponent', () => {
  let component: CrudOpComponent;
  let fixture: ComponentFixture<CrudOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudOpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
