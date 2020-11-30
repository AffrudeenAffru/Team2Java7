import { Component } from '@angular/core';

import pdfMake from "pdfmake/build/pdfmake";2
import pdfFonts from "pdfmake/build/vfs_fonts";
// import nodemailer from 'nodemailer';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

class Product{
  name: string;
  price: number;
  qty: number;
}
class Invoice{
  customerName: string;
  address: string;
  contactNo: number;
  email: string;
  
  products: Product[] = [];
  additionalDetails: string;

  constructor(){
    // Initially one empty product row we will show 
    this.products.push(new Product());
  }
}
@Component({
  selector: 'app-paymentportal',
  templateUrl: './paymentportal.component.html',
  styleUrls: ['./paymentportal.component.css']
})
export class PaymentportalComponent {
  invoice = new Invoice(); 
  testAcc:any;
  msgInfo:any;
  info:any;
  
  async generatePDF(action = 'open') {
    let docDefinition = {
      content: [
        {
          text: 'voizefonica ',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'INVOICE',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          text: 'Customer Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: this.invoice.customerName,
                bold:true
              },
              { text: this.invoice.address },
              { text: this.invoice.email },
              { text: this.invoice.contactNo }
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              { 
                text: `Bill No : ${((Math.random() *1000).toFixed(0))}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Order Details',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              ['Product', 'Price', 'month', 'Amount'],
              ...this.invoice.products.map(p => ([p.name, p.price, p.qty, (p.price*p.qty).toFixed(2)])),
              [{text: 'Total Amount', colSpan: 3}, {}, {}, this.invoice.products.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2)]
            ]
          }
        },
        {
          text: 'Additional Details',
          style: 'sectionHeader'
        },
        {
            text: this.invoice.additionalDetails,
            margin: [0, 0 ,0, 15]          
        },
        {
          columns: [
            [{ qr: `${this.invoice.customerName}`, fit: '50' }],
            [{ text: '', alignment: 'right', italics: true}],
          ]
        },
        {
          text: 'Support',
          style: 'sectionHeader'
        },
        {
            ul: [
              'If payment not recived your amount will be refund within 2 working days',
              'plan will reflect once payment is sucessfully done',
              'This is system generated invoice based on your inputs',
            ],
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15,0, 15]          
        }
      }
    };

    if(action==='download'){
      // this.testAcc = await nodemailer.createTestAccount();
      // this.msgInfo = nodemailer.createTransport({
      //   host: "smtp.ethereal.email",
      //   port: 587,
      //   secure: false,
      //   auth: {
      //     user: this.testAcc.user,
      //     pass: this.testAcc.pass,
      //   },
      // })

      // this.info = await this.msgInfo.sendMail({
      //   from: '"Fred" <foo@example.com>',
      //   to: "tecciraj@gmail.com",
      //   subject: "hello",
      //   text: "hi hello",
      //   html: "<b>welcome</b>",
      // })

      // console.warn("MessageStatus", this.info.messageId);
      // console.warn("MessageStatus", nodemailer.getTestMessageUrl(this.info));
      pdfMake.createPdf(docDefinition).download();
console.log(this.invoice);
    }else if(action === 'print'){
      pdfMake.createPdf(docDefinition).print();      
    }else{
      pdfMake.createPdf(docDefinition).open();      
    }
    

  }

  addProduct(){
    this.invoice.products.push(new Product());
  }

 

 






}