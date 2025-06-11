import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // Enable global validation for DTOs
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    const config: ReturnType<DocumentBuilder['build']> = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);

    // Enable CORS
    app.enableCors({
        origin: '*', // Allow all origins, adjust as necessary for security
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Accept',
        credentials: true, // Allow credentials if needed
    });
    await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
