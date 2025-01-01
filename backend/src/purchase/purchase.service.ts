import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class PurchaseService {
  private transporter;

  // Simulate a database for purchased pets
  private purchasedPets = [];

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'petsforsale.official@gmail.com',
        pass: 'xdbn fojk revo fnge',
      },
    });
  }

  async handlePurchase(purchaseData: any): Promise<void> {
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
      paymentMethod,
      petOwnerName,
      petOwnerMobile,
      petImage,
    } = purchaseData;

    const purchaseDate = new Date().toLocaleDateString();

    // Save the purchase details (simulate storing in a database)
    this.purchasedPets.push({
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
      paymentMethod,
      petOwnerEmail,
      petOwnerName,
      petOwnerMobile,
      petImage,
      purchaseDate,
      
    });

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
      petOwnerName,
      petOwnerMobile,  
         
    );
  }

  async getPurchasedPets(): Promise<any[]> {
    // Return all purchased pets
    return this.purchasedPets;
  }

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
    const mailOptions = {
      from: 'petsforsale.official@gmail.com',
      to: petOwnerEmail,
      subject: `Your Pet ${petName}, Sold`,
      html: `
        <h2>Your Pet ${petName} Has Been Sold! Now you can delete your uploaded pet from PetsForSale</h2>
        <h3>Buyer Details:</h3>
        <p><strong>First Name:</strong> ${buyerFirstName}</p>
        <p><strong>Last Name:</strong> ${buyerLastName}</p>
        <p><strong>Email:</strong> ${contact}</p>
        <p><strong>Contact:</strong> ${purchaseDate}</p>
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
        <p>Best Regards,</p>
        <p>PetsForSale Team,</p>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully to pet owner');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
