import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumsliderComponent } from './thumslider.component';

describe('ThumsliderComponent', () => {
  let component: ThumsliderComponent;
  let fixture: ComponentFixture<ThumsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
