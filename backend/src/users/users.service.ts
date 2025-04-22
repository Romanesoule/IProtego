import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'
import * as bcrypt from 'bcrypt'

export interface User {
    email: string
    password: string
}

@Injectable()
export class UsersService {
    private usersFile = path.join(__dirname, '..', '..', 'data', 'users.json')

    private readUsers(): User[] {
        if (!fs.existsSync(this.usersFile)) return []
        return JSON.parse(fs.readFileSync(this.usersFile, 'utf-8'))
    }

    private writeUsers(users: User[]) {
        fs.writeFileSync(this.usersFile, JSON.stringify(users, null, 2))
    }

    userExists(email: string): boolean {
        const users = this.readUsers();
        return users.some((user) => user.email === email);
    }

    checkIsPasswordValid(password: string) {
        if (password.length < 6) {
            throw new UnauthorizedException('PASSWORD_TOO_SHORT')
        }
    }

    checkIsEmailValid(email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            throw new BadRequestException('EMAIL_INVALID')
        }
    }

    async create(email: string, password: string): Promise<void> {
        this.checkIsEmailValid(email);

        if (this.userExists(email)) {
            throw new UnauthorizedException('EMAIL_ALREADY_EXISTS');
        }

        this.checkIsPasswordValid(password);

        const users = this.readUsers();
        const hashed = await bcrypt.hash(password, 10);
        users.push({ email, password: hashed });
        this.writeUsers(users);
    }

    async findByEmail(email: string): Promise<User> {
        const users = this.readUsers()
        const user = users.find((user) => user.email === email)
        if (!user) throw new UnauthorizedException('USER_NOT_FOUND')
        return user
    }

    async isPasswordCorrect(user: User, plainPassword: string): Promise<boolean> {
        return bcrypt.compare(plainPassword, user.password);
    }

    getList() {
        return this.readUsers();
    }
}
