import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { CnaeAggregate } from './CnaeAggregate';

@Entity()
export class Cnae {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    number : string

    @Column()
    description : string

    @ManyToMany(type => CnaeAggregate, cnaeAggregate => cnaeAggregate.cnaes)
    cnaeAggregates : CnaeAggregate[];

     

}