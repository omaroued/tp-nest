import { v4 as Id } from 'uuid';
export enum Status {
  'actif' = 'En cours',
  'waiting' = 'En attente',
  'done' = 'Finalisé',
}
export class TodoModel {
  constructor(
    public id = Id(),
    public name = '',
    public Create_date = new Date(),
    public statut = Status.waiting,
    public description = '',
  ) {}
}
