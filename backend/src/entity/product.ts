// src/entities/Product.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from './category';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    name: string;

    @Column({ type: "decimal", precision: 10, scale: 2 }) // Para garantir a precisão decimal
    price: number;

    @ManyToOne(() => Category, (category) => category.products, { nullable: true })
    category: Category;
}
