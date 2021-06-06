import { Column,  Entity,  JoinColumn,  ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from '../person/Person';
import { CnaeAggregate } from '../cnae/CnaeAggregate';

@Entity()
export class Business {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name : string

    @ManyToOne(()=> Person)
    person: Person;

    @OneToOne(() => CnaeAggregate)
    @JoinColumn()
    cnaes : CnaeAggregate 
}