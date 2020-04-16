import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { AppService } from '../app.service';




@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(public appService: AppService) { }

  ngOnInit(): void {


  }
  

}
