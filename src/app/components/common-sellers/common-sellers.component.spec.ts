import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSellersComponent } from './common-sellers.component';

describe('CommonSellersComponent', () => {
  let component: CommonSellersComponent;
  let fixture: ComponentFixture<CommonSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
