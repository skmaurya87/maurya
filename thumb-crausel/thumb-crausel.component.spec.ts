import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbCrauselComponent } from './thumb-crausel.component';

describe('ThumbCrauselComponent', () => {
  let component: ThumbCrauselComponent;
  let fixture: ComponentFixture<ThumbCrauselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbCrauselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbCrauselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
