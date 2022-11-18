import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModuleModule } from './todo-module/todo-module.module';
//import { TodoServiceService } from './todo-service/todo-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entity/TodoEntity.entity';
import { TodoServiceService } from './todo-service/todo-service.service';

@Module({
  imports: [
    PremierModule,
    TodoModuleModule,
    //Remote database (We have problem with the machine)
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-34-242-8-97.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'fgjcaqazvgtale',
      password: '783736897266ef6d4b5c63b034b88b7f57b4edeea8ea94152491197d7ece0ee3',
      database: 'd1b35ti3ftcc2s',
      entities: [TodoEntity],
      synchronize: true,
      logging: true,

      ssl: {
        rejectUnauthorized: false
      }
    }),
    TypeOrmModule.forFeature(
      [TodoEntity]
    )
  ],
  controllers: [AppController],
  providers: [AppService, TodoServiceService],
})
export class AppModule { }
