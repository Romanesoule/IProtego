import { Module } from '@nestjs/common';
import { DrivingLicenceService } from './driving-licence.service';
import { DrivingLicenceController } from './driving-licence.controller';

@Module({
  providers: [DrivingLicenceService],
  controllers: [DrivingLicenceController]
})
export class DrivingLicenceModule {}
