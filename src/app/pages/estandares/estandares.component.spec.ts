/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EstandaresComponent } from './estandares.component';

describe('EstandaresComponent', () => {
  let component: EstandaresComponent;
  let fixture: ComponentFixture<EstandaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstandaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstandaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
