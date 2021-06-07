import { Entity, Column } from 'typeorm';
import { Person } from './Person';

@Entity()
export class JuridicalPerson extends Person{

    @Column()
    cpf : string
}