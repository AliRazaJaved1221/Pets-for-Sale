/* eslint-disable prettier/prettier */
// import { UserRoles } from 'src/auth/constant/constants';
import { Review } from 'src/review/entities/review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity('UserEntity')
export class UserEntity {
  pets: any;
  find() {
    throw new Error('Method not implemented.');
  }
  findOne(id: string) {
    throw new Error('Method not implemented.');
  }
  delete(id: string) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({nullable:true})
  mobileContact: string;
  @Column({nullable:true})
  location: string;
  @Column()
  createdAt: Date;
  @Column({ nullable: true })
  updatedAt: Date;
  @Column({ nullable: true })
  role: string; // Assuming role is a string, you can change the type as needed
  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
  
}
