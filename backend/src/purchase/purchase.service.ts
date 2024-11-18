import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class PurchaseService {
  private transporter;

  constructor() {
    // Configure Nodemailer with Gmail settings
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'petsforsale.official@gmail.com', // Your Gmail address
        pass: 'xdbn fojk revo fnge', // Your App Password (not your Gmail password)
      },
    });
  }

  async handlePurchase(purchaseData: any): Promise<void> {
    // Destructure the purchase data
    const {
      buyerFirstName,
      buyerLastName,
      buyerEmail,
      contact,
      delivery,
      city,
      address,
      petName,
      petBreed,
      petColor,
      petAge,
      petPrice,
      petDescription,
      petOwnerEmail,
      petImage,
    } = purchaseData;

    const purchaseDate = new Date().toLocaleDateString();

    // Send email to the pet owner (uploaderEmail)
    await this.sendEmailToOwner(
      buyerFirstName,
      buyerLastName,
      buyerEmail,
      contact,
      delivery,
      city,
      address,
      petName,
      petBreed,
      petColor,
      petAge,
      petPrice,
      petDescription,
      petOwnerEmail,
      petImage,
      purchaseDate
    );
  }

  // Email sending logic
  private async sendEmailToOwner(
    buyerFirstName: string,
    buyerLastName: string,
    buyerEmail: string,
    contact: string,
    delivery: string,
    city: string,
    address: string,
    petName: string,
    petBreed: string,
    petColor: string,
    petAge: string,
    petPrice: string,
    petDescription: string,
    petOwnerEmail: string,
    petImage: string,
    purchaseDate: string
  ): Promise<void> {
    // Construct the email content
    const mailOptions = {
      from: 'petsforsale.official@gmail.com',
      to: petOwnerEmail, // Send email to the pet owner
      subject: `Your Pet ${petName}, Sold`,
      html: `
        <h2>Your Pet ${petName} Has Been Sold!</h2>
        <p><strong>Purchase Date:</strong> ${purchaseDate}</p>
        <h3>Buyer Details:</h3>
        <p><strong>First Name:</strong> ${buyerFirstName}</p>
        <p><strong>Last Name:</strong> ${buyerLastName}</p>
        <p><strong>Contact Email:</strong> ${contact}</p>
        <p><strong>Delivery Method:</strong> ${delivery}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h3>Pet Details:</h3>
        <p><strong>Breed:</strong> ${petBreed}</p>
        <p><strong>Color:</strong> ${petColor}</p>
        <p><strong>Age:</strong> ${petAge}</p>
        <p><strong>Price:</strong> ${petPrice}</p>
        <p><strong>Description:</strong> ${petDescription}</p>
        <p>Thank you for listing your pet on Pets for Sale!</p>
        <p>Best Regards</p>
        <p>PetsForSale Team,</p>
      `,
    };

    try {
      // Send the email
      await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully to pet owner');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
