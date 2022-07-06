import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacUpdateComponent } from './contac-update.component';

describe('ContacUpdateComponent', () => {
  let component: ContacUpdateComponent;
  let fixture: ComponentFixture<ContacUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
