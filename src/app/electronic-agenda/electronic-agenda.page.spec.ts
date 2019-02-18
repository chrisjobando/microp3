import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicAgendaPage } from './electronic-agenda.page';

describe('ElectronicAgendaPage', () => {
  let component: ElectronicAgendaPage;
  let fixture: ComponentFixture<ElectronicAgendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicAgendaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
