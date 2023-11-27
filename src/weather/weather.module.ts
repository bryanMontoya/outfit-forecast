import { Module } from '@nestjs/common';
import { WeatherService } from './service/weather.service';
import { WeatherController } from './controller/weather.controller';

@Module({
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
