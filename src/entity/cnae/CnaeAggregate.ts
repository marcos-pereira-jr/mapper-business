import { Cnae } from './Cnae';
import { Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CnaeAggregate {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=> Cnae)
    mainCnae: Cnae;

    @ManyToMany(type => Cnae, cnaes => cnaes.cnaeAggregates)
    @JoinTable()
    cnaes: Cnae[];
}