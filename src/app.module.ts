import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { PaymentsModule } from './payments/payments.module';
import { PrismaService } from './prisma.service';

@Module({
    imports: [ProjectsModule, TasksModule, AuthModule, UsersModule, PaymentsModule],
    controllers: [HelloController],
    providers: [PrismaService],
})
export class AppModule {}
