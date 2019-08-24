import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {
  private pessoa
  constructor() {

    this.pessoa = {
      nome: "Danilo Barboza",
      idade: "24",
      email: "danilo-barboza@hotmail.com",
      telefone:"(14) 99888-6242"
    }
   }



  ngOnInit() {
  }

}
