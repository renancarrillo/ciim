import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.page.html',
  styleUrls: ['./suma.page.scss'],
})
export class SumaPage implements OnInit {

  numero: any = 0;

  constructor() { }

  ngOnInit() {
  }

  mas(){
    this.numero += 1;
    console.log(this.numero);
  }

  menos(){
    if(this.numero != 0){
      this.numero -= 1;
    }else{
      alert("Ya estas en 0")
    }
    console.log(this.numero);
  }

}
