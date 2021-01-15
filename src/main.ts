import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import  bodyParser from 'body-parser';
import bodyParserXml from 'body-parser-xml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParserXml(bodyParser()));
  await app.listen(3000);
}
bootstrap();
