import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { Contact } from './entities/contact.entity'; // Import the Contact entity

@Module({
  imports: [TypeOrmModule.forFeature([Contact])], // Import Contact entity for TypeORM
  controllers: [ContactController], // Register the controller
  providers: [ContactService], // Register the service
  exports: [ContactService], // Export service if other modules need it
})
export class ContactModule {}
