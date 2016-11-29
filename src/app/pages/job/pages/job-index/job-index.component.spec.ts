/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JobIndexComponent } from './job-index.component';

describe('JobIndexComponent', () => {
  let component: JobIndexComponent;
  let fixture: ComponentFixture<JobIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
