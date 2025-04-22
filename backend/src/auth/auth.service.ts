import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService
    ) {}

    private async getToken(email) {
        const token = await this.jwtService.signAsync({email})
        return {token}
    }

    async register(email: string, password: string) {
        await this.usersService.create(email, password)
        return this.getToken(email);
    }

    async login(email: string, password: string) {
        const user = await this.usersService.findByEmail(email)
        if (!(await this.usersService.isPasswordCorrect(user, password))) {
            throw new UnauthorizedException({ error: 'INVALID_CREDENTIALS' })
        }

        return this.getToken(email);
    }
}
