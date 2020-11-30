import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
 constructor(private _router : Router) { }

  ngOnInit(): void {
  }
  gotorecharge(){
    this._router.navigate(['/rechargeplans'])
  }
  gotocontactus(){
    this._router.navigate(['/contactuss'])
  }
  gotomaster(){
    this._router.navigate(['/masterlogin'])
  }
  gotorelog(){
    this._router.navigate([''])
  }
  download(){
    var element=document.getElementById('table')
  
  html2canvas(element).then((canvas)=>{
    console.log(canvas)
    var imgData=canvas.toDataURL('bill/png')
  var doc =new jsPDF()

  var imgHeight=canvas.height * 200 / canvas.width;
  doc.addImage(imgData,0,0,208,imgHeight)
  doc.save("bill.pdf")

  })
  }
}
