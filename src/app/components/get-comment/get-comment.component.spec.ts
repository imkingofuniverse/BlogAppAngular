import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCommentComponent } from './get-comment.component';

describe('GetCommentComponent', () => {
  let component: GetCommentComponent;
  let fixture: ComponentFixture<GetCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
