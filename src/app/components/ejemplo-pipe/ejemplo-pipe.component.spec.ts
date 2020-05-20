import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploPipeComponent } from './ejemplo-pipe.component';

describe('EjemploPipeComponent', () => {
  let component: EjemploPipeComponent;
  let fixture: ComponentFixture<EjemploPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
