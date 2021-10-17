import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Prospecto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
    
    @Column()
    apellido: string; 

    @Column()
    calle: string; 

    @Column()
    colonia: string; 

    @Column()
    codigoPostal: string;

    @Column()
    telefono: string; 
    
    @Column()
    rfc: string; 

    @Column()
    estatus: string;

    @Column()
    observacion: string

}