import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EplayersComponent } from './eplayers.component';

describe('EplayersComponent', () => {
  let component: EplayersComponent;
  let fixture: ComponentFixture<EplayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EplayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
