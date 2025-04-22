import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DrivingLicenceModule } from './driving-licence/driving-licence.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import {JwtMiddleware} from "./auth/auth.middleware";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    DrivingLicenceModule,
    UsersModule
  ],

  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('driving-licence')
  }
}
