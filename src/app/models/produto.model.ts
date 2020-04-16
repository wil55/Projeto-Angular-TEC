export class Produto {

  id: number;
  urlImagem?: string;
  titulo?: string;
  descricaoCurta?: string;
  descricaoCompleta?: string;
  valor: string;

   constructor(titulo, descricaoCurta,  descricaoCompleta, valor, urlImagem){

    this.titulo = titulo;
    this.descricaoCurta = descricaoCurta;
    this.descricaoCompleta = descricaoCompleta;
    this.valor = valor;
    this.urlImagem = urlImagem;

   }
 
}
