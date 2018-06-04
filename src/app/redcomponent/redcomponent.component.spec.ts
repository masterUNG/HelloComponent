import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedcomponentComponent } from './redcomponent.component';

describe('RedcomponentComponent', () => {
  let component: RedcomponentComponent;
  let fixture: ComponentFixture<RedcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
