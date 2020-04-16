import { Injectable } from '@angular/core';
import { Produto } from './models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  dados: Produto[] = [
    new Produto("Honda Civc", "Honda Civic 2020 modelo LXR flex.", "Quilometragem: 0 Km'",
    "45.000",'https://www.honda.com.br/automoveis/sites/hab/files/2017-03/CIVIC_EX.png'),

    new Produto("Saveiro Robust", "Volkswagen Saveiro 1.6 Msi Robust cs 8v Flex",
      "Quilometragem: 40.000 Km", "37.790",
      'https://www.arielautomoveis.com.br/files/novos/ic_11.png'),

    new Produto("Saveiro Trend", "Volkswagen Saveiro 1.6 Msi Trend cs 8v Flex.",
      "Quilometragem: 0.000 Km", "46.690",
      'https://pngimage.net/wp-content/uploads/2018/06/fiat-palio-png-1.png'),

    new Produto("Chevrolet Cruze", "CHEVROLET CRUZE 1.8 LT 16V FLEX 4P AUTOMÁTICO",
      "'Quilometragem: 30.000 Km", "80.000",
      'https://catalogo.webmotors.com.br/imagens/prod/346970/CHEVROLET_CRUZE_1.4_TURBO_SPORT6_LT_16V_FLEX_4P_AUTOMATICO_3469700814275532.png?s=fill&w=440&h=330&q=80&t=true'),

    new Produto("Fiat Uno", "Uno Way com ar-condicionado, carro em perfeito estado de conservação",
      "Quilometragem: 70.000 Km", "20.000",
      'https://www.pke.pt/media/configurador/chevrolet/cruze.png'),

    new Produto("Fiat Palio", "Fiat Palio Fire 1.0 8V (Flex) 2p 2013",
      "Quilometragem: 120.00 Km", "18.900",
      'https://www.repasso.com.br/wp-content/uploads/2012/04/684221.png'),
  ]

  constructor() { }
}
