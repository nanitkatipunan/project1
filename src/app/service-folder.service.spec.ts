import { TestBed } from '@angular/core/testing';

import { ServiceFolderService } from './service-folder.service';

describe('ServiceFolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceFolderService = TestBed.get(ServiceFolderService);
    expect(service).toBeTruthy();
  });
});
