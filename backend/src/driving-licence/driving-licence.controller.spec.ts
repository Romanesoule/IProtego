import { Test, TestingModule } from '@nestjs/testing';
import { DrivingLicenceController } from './driving-licence.controller';

describe('DrivingLicenceController', () => {
  let controller: DrivingLicenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DrivingLicenceController],
    }).compile();

    controller = module.get<DrivingLicenceController>(DrivingLicenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
