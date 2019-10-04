import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropnavbarComponent } from './dropnavbar.component';

describe('DropnavbarComponent', () => {
  let component: DropnavbarComponent;
  let fixture: ComponentFixture<DropnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
