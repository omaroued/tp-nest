import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export class Reuse {
    @CreateDateColumn()
    createdAt:Date;
    @UpdateDateColumn()
    updatedat:Date;
    @DeleteDateColumn()
    deletedat:Date;
}