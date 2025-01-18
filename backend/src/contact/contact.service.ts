import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  async createContact(createContactDto: CreateContactDto): Promise<Contact> {
    // Save contact information to the database
    const newContact = this.contactRepository.create(createContactDto);
    const savedContact = await this.contactRepository.save(newContact);

    // Send email using Nodemailer
    await this.sendEmail(createContactDto);

    return savedContact;
  }

  private async sendEmail(createContactDto: CreateContactDto): Promise<void> {
    const { fullName, email, contactType, message } = createContactDto;

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'petsforsale.official@gmail.com',
        pass: 'miop cmic enkb jmbn', // Replace with your email password or app-specific password
      },
    });

    // Define the email content
    const mailOptions = {
      from: 'petsforsale.official@gmail.com',
      to: 'petsforsale.official@gmail.com', // Send the email to the provided email address
      subject: contactType, // Use contactType as the subject
      text: `Dear Admin, I am ${fullName},\n\nI am Contacting you for ${contactType},\n\nMessage:\n${message}\n\nContact Email: ${email}\nBest Regards,\n${fullName}`, // Email content
    };

    // Send the email
    await transporter.sendMail(mailOptions);
  }
}
