import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  urlImagem?: string;
  titulo?: string;
  descricaoCurta?: string;
  descricaoCompleta?: string;
  valor: string;

  constructor(public appService: AppService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {

    const id = this.route.snapshot.params.id;
    this.urlImagem = this.appService.dados[id].urlImagem;
    this.titulo = this.appService.dados[id].titulo;
    this.descricaoCurta = this.appService.dados[id].descricaoCurta;
    this.descricaoCompleta = this.appService.dados[id].descricaoCompleta;
    this.valor = this.appService.dados[id].valor;

  }

}