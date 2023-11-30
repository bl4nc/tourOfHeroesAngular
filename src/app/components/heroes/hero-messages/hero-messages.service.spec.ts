import { TestBed } from '@angular/core/testing';

import { HeroMessagesService } from './hero-messages.service';

describe('HeroMessagesService', () => {
  let service: HeroMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
