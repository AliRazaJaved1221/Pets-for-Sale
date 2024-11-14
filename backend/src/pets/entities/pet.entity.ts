/* eslint-disable prettier/prettier */

import { Review } from 'src/review/entities/review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Pets')
export class Pets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  user: string;

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

  @Column({ nullable: true })
  uploaderName: string;

  @Column({ nullable: true })
  uploaderEmail: string;

  @Column({nullable:true})
  uploaderMobileContact: string;

  @Column({nullable:true})
  UploaderLocation: string;

  @Column({nullable:true})
  userId: number;

  @OneToMany(() => Review, (review) => review.pet)
  reviews: Review[];

}
