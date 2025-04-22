import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
    Req,
    Get,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { Express } from 'express'
import { DrivingLicenceService } from './driving-licence.service'

@Controller('driving-licence')
export class DrivingLicenceController {
    constructor(private readonly service: DrivingLicenceService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    upload(@UploadedFile() file: Express.Multer.File, @Req() req: any) {
        return this.service.handleUpload(file, req.user)
    }

    @Get()
    getAllUploads() {
        return this.service.getAll()
    }

    @Get('me')
    getMyUploads(@Req() req: any) {
        return this.service.getByUser(req.user.email)
    }
}
