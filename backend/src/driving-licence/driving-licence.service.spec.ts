import { Test, TestingModule } from '@nestjs/testing';
import { DrivingLicenceService } from './driving-licence.service';

describe('DrivingLicenceService', () => {
  let service: DrivingLicenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DrivingLicenceService],
    }).compile();

    service = module.get<DrivingLicenceService>(DrivingLicenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
