import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100, unique: true })
    email: string;

    @Column({ type: "varchar", length: 100 })
    password: string; // Armazenar senhas em texto claro não é seguro. Você deve hash a senha antes de armazená-la.
}
