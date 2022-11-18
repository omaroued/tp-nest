import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import {
  Delete,
  Param,
  Put,
  Query,
  UsePipes,
  Version,
} from '@nestjs/common/decorators';
import { TodoModel } from '../todo-model';
import { createDTO } from './dto/create.dto';
import { TodoDto } from './dto/todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoServiceService } from 'src/todo-service/todo-service.service';
import { TodoEntity } from 'src/entity/TodoEntity.entity';
import { version } from 'os';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
@Controller('todo-controller')
export class TodoControllerController {
  private todos: TodoModel[] = [];
  constructor(private todoService: TodoServiceService) {}

  @Get()
  getTodos(): TodoModel[] {
    return this.todoService.getTodos();
  }
  @Post('add')
  @UsePipes(ValidationPipe)
  setTodos(@Body() createDTO: createDTO) {
    return this.todoService.setTodos(createDTO);
  }
  @Get('ById/:id')
  findbyId(@Param() id: string): TodoModel {
    return this.findtodo(id);
  }
  @Delete('delete/:id')
  deleteTodo(@Param('id') id: string): string {
    return this.todoService.deleteTodo(id);
  }
  @Put('modify/:id')
  @UsePipes(ValidationPipe)
  modifybyId(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): TodoModel {
    return this.todoService.modifybyId(id, updateTodoDto);
  }

  findtodo(id: string): TodoModel {
    const todo1 = this.todos.find((todo) => todo.id == id);
    if (!todo1) throw new NotFoundException();
    return todo1;
  }
  @Post('addBD')
  async addTodoBD(@Body() todo: createDTO): Promise<TodoEntity> {
    return this.todoService.addTodoBD(todo);
  }

  @Put('updateBD/:id')
  async updateTodoBD(
    @Body() todo: UpdateTodoDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TodoEntity> {
    {
      return this.todoService.updateTodoBD(id, todo);
    }
  }
  @Delete('DeletefromBD/:id')
  async softRemovefromBD(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TodoEntity> {
    {
      return this.todoService.softRemovefromBD(id);
    }
  }
  @Get('recover/:id')
  async RecoverTodo(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TodoEntity> {
    {
      return this.todoService.RecoverTodo(id);
    }
  }
  @Get('numbers')
  async NumberByStatut() {
    {
      return this.todoService.countByStatus();
    }
  }
  @Get('allTodos')
  async AllTodos() {
    {
      return this.todoService.getTodosAll();
    }
  }
  @Get('TodowithId/:id')
  async findtodowithId(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TodoEntity[]> {
    {
      return await this.todoService.getTodowithId(id);
    }
  }
}
