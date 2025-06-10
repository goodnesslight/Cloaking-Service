import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap(): Promise<void> {
  const app: INestApplication = await NestFactory.create(AppModule);
  const config: ConfigService = app.get<ConfigService>(ConfigService);
  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Cloaking-Service')
      .setVersion('1.0')
      .build(),
  );

  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(config.get<number>('SERVER_PORT'));
}

bootstrap();
