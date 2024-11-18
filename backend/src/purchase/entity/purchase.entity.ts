// purchase.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  // Buyer Details
  @Column()
  buyerFirstName: string;

  @Column({ nullable: true })
  buyerLastName: string;

  @Column()
  buyerEmail: string;

  @Column()
  contact: string;

  @Column()
  delivery: string;

  @Column()
  city: string;

  @Column()
  address: string;

  @Column()
  paymentMethod: string;

  // Pet Details
  @Column()
  petName: string;

  @Column()
  petBreed: string;

  @Column()
  petColor: string;

  @Column()
  petAge: string;

  @Column()
  petPrice: string;

  @Column()
  petDescription: string;

  @Column()
  petOwnerName: string;

  @Column()
  petImage: string;

}
