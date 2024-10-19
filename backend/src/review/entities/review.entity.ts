/* eslint-disable prettier/prettier */
import { Pets } from 'src/pets/entities/pet.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Review')
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: any;

  @Column()
  petId: any;

  @Column()
  feedback: string;

  @ManyToOne(() => UserEntity, (user) => user.reviews)
  user: UserEntity;

  @ManyToOne(() => Pets, (pet) => pet.reviews)
  pet: Pets;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
