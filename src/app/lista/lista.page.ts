import { Component, OnInit } from '@angular/core';
import { HardwareService } from '../api/hardware.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(public hardware_service:HardwareService) { 

  }

  ngOnInit() {
    console.log("Entre en la vista de lista");
    this.hardware_service.get_item("http://demo0253989.mockable.io/hardware").subscribe(response =>{
      console.log(response);
    }, error =>{
      console.log(error);
    }); 
  }

}
