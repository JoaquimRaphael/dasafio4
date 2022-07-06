import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacCreateComponent } from './contac-create.component';

describe('ContacCreateComponent', () => {
  let component: ContacCreateComponent;
  let fixture: ComponentFixture<ContacCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
