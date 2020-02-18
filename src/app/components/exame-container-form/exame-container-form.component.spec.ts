import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameContainerFormComponent } from './exame-container-form.component';

describe('ExameContainerFormComponent', () => {
  let component: ExameContainerFormComponent;
  let fixture: ComponentFixture<ExameContainerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExameContainerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameContainerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
