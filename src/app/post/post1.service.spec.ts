import { TestBed } from '@angular/core/testing';

import { PostService1 } from './post1.service';

describe('PostService1', () => {
  let service: PostService1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostService1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
