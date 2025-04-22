import { Injectable, BadRequestException } from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'
import { extname } from 'path'
import { Express } from 'express'

export interface UploadRecord {
    filename: string
    uploadedBy: string
    timestamp: string
}

@Injectable()
export class DrivingLicenceService {
    private uploadDirectory = path.join(__dirname, '..', '..', 'data', 'files')
    private uploadsJsonPath = path.join(__dirname, '..', '..', 'data', 'uploads.json')

    private checkIsFormatValid(file: Express.Multer.File) {
        const allowedExts = ['.pdf', '.jpeg']
        const extension = extname(file.originalname).toLowerCase()

        if (!allowedExts.includes(extension)) {
            throw new BadRequestException('FORMAT_NOT_ALLOWED')
        }
    }

    private readUploads(): UploadRecord[] {
        if (!fs.existsSync(this.uploadsJsonPath)) return []
        return JSON.parse(fs.readFileSync(this.uploadsJsonPath, 'utf-8'))
    }

    private writeUploads(data: UploadRecord[]) {
        fs.writeFileSync(this.uploadsJsonPath, JSON.stringify(data, null, 2))
    }

    private addEntry(fileName, file, user) {
        const uploads = this.readUploads()
        const filePath = path.join(this.uploadDirectory, fileName)
        fs.writeFileSync(filePath, file.buffer)

        uploads.push({
            filename: fileName,
            uploadedBy: user.email,
            timestamp: new Date().toISOString(),
        })

        this.writeUploads(uploads)
    }

    checkIfUploadExists(user) {
        const uploads = this.readUploads()

        const existing = uploads.find((uploadedFile) => uploadedFile.uploadedBy === user.email)
        if (existing) {
            throw new BadRequestException('USER_ALREADY_HAS_A_FILE')
        }
    }

    handleUpload(file: Express.Multer.File, user: { email: string }) {

        this.checkIsFormatValid(file);
        this.checkIfUploadExists(user);

        const fileName = `${Date.now()}-${file.originalname}`;
        this.addEntry(fileName, file, user);

        return {
            message: 'File stored',
            file: fileName,
        }
    }

    getAll(): UploadRecord[] {
        return this.readUploads()
    }

    getByUser(email: string): UploadRecord[] {
        return this.readUploads().filter((upload) => upload.uploadedBy === email)
    }
}
