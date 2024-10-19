// /* eslint-disable prettier/prettier */
// import {
//   AfterLoad,
//   BeforeInsert,
//   BeforeUpdate,
//   Column,
//   Entity,
//   JoinColumn,
//   OneToOne,
// } from 'typeorm';

// @Entity('Auth')
// export class Auth {
//   @Column({
//     name: 'email',
//     type: 'varchar',
//     length: 50,
//     unique: true,
//     nullable: false,
//   })
//   email: string;

//   @Column({ nullable: true })
//   password: string;
//   @BeforeInsert()
//   @BeforeUpdate()
//   async hashPassword() {
//     if (this.password) {
//       this.password = await helper.hashPassword(this.password);
//     }
//   }

//   //   @OneToOne(() => Users, (user) => user.login) // Define the reverse relationship
//   //   @JoinColumn()
//   //   user: Users;

//   @Column({
//     type: 'timestamp',
//     name: 'lastLoginAt',
//     nullable: true,
//   })
//   lastLoginAt: Date;
//   @AfterLoad()
//   updateLoginDateTime() {
//     this.lastLoginAt = new Date();
//   }

//   @Column({
//     name: 'forgotPasswordOtp',
//     type: 'varchar',
//     length: 255,
//     unique: true,
//     nullable: true,
//   })
//   forgotPasswordOtp: string;
//   @Column({
//     name: 'deviceToken',
//     type: 'varchar',
//     unique: true,
//     nullable: true,
//   })
//   deviceToken: string;

//   @Column({
//     name: 'forgotPasswordOtpTime',
//     type: 'timestamp',
//     nullable: true,
//   })
//   forgotPasswordOtpTime: Date;
// }
