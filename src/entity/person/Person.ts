import { Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export abstract class Person {

    @PrimaryGeneratedColumn()
    id: number

}