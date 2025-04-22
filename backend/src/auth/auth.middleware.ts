import {Injectable, NestMiddleware, UnauthorizedException} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import {NextFunction, Request, Response} from 'express'

@Injectable()
export class JwtMiddleware implements NestMiddleware {
    constructor(private jwtService: JwtService) {}

    private getToken(req) {
        const authHeader = req.headers['authorization']

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedException({ message: 'MISSING_TOKEN' })
        }

        return authHeader.split(' ')[1];
    }

    async use(req: Request, res: Response, next: NextFunction) {

        try {
            let token = this.getToken(req);
            req['user'] = await this.jwtService.verifyAsync(token)
            next()
        } catch (error) {
            throw new UnauthorizedException({ message: 'INVALID_TOKEN' })
        }
    }
}
