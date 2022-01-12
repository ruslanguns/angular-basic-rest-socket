import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestSampleComponent } from './rest-sample.component';

describe('RestSampleComponent', () => {
  let component: RestSampleComponent;
  let fixture: ComponentFixture<RestSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
