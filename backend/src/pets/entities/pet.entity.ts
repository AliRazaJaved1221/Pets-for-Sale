/* eslint-disable prettier/prettier */

import { Review } from 'src/review/entities/review.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Pets')
export class Pets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  breed: string;

  @Column({ nullable: true })
  color: string;

  @Column({ nullable: true })
  age: string;

  @Column({ nullable: true })
  price: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column({ default: false })
  isSold: boolean;
  // @ManyToOne(() => Todo, (cat) => cat.pets)
  // cat: Todo;
 

  @OneToMany(() => Review, (review) => review.pet)
  reviews: Review[];
  // @OneToMany(() => Review, (review) => review.pet, {
  //   cascade: true,
  //   onDelete: 'CASCADE',
  // })
  // reviews: Review[];
}
