import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from 'src/entity/TodoEntity.entity';
import { TodoServiceService } from 'src/todo-service/todo-service.service';
import { TodoControllerController } from './todo-controller/todo-controller.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoControllerController],
  providers: [TodoServiceService]
})
export class TodoModuleModule {}
