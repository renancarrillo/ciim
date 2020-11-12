import { Component, OnInit } from '@angular/core';
import { HardwareService } from '../api/hardware.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  hardware : any;

  constructor(public hardware_service:HardwareService) { 

  }

  ngOnInit() {
    console.log("Entre en la vista de lista");
    this.hardware_service.get_item("http://demo0253989.mockable.io/hardware").subscribe(response =>{
      this.hardware = response;
      console.log("Lo que guardo en la variable");
      console.log(this.hardware);
    }, error =>{
      console.log(error);
    }); 
  }

}
