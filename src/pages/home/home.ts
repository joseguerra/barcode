import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',

  templateUrl: 'home.html'
})
export class HomePage {

    // assign a value anywhere in/below your constructor
    public myAngularxQrCode = 'Your QR code data string';
  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner) {

  }

  encode(){


  }

  scan(){
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log(barcodeData)
    // Success! Barcode data is here
    }, (err) => {
        // An error occurred
    });
  }

}
