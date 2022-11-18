import { PartialType } from '@nestjs/mapped-types';
import { TodoDto } from './todo.dto';
import { Status } from '../../Status';
import { IsEnum, IsOptional } from 'class-validator';

export class UpdateTodoDto extends PartialType(TodoDto) {
  @IsEnum(Status)
  @IsOptional()
  statut: Status;
}
