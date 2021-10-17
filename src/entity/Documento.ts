import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Documento {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    prospectoId: number;

    @Column()
    nombre: string;

    @Column()
    documentoPath: string;
}