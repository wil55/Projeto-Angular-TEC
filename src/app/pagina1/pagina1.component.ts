import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';



@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component implements OnInit {

  formulario = new FormGroup({

    titulo: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
    descricaoCurta: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
    descricaoCompleta: new FormControl(null, [Validators.required, Validators.minLength(20), Validators.maxLength(50)]),
    valor: new FormControl(null, [this.somenteNumeros]),
    urlImagem: new FormControl(null, [Validators.required]),

  });


  primeiraValidacao = false;
  constructor(public appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }
  
  validacaoPersonalizada(control: AbstractControl): ValidationErrors | null {

    console.log(this.primeiraValidacao);

    if (control.value === 'Wiliam') {
      return null;
    }

    return { validacaoPersonalizada: true };

  }

  somenteNumeros(control: AbstractControl): ValidationErrors | null {
    const texto = control.value;

    console.log(texto);

    if (isNaN(Number(texto))) {
      return { somenteNumeros: true };
    } else {
      return null;
    }

  }

  enviar(){
    if(this.formulario.valid){
      this.appService.dados.push(this.formulario.value);
      this.router.navigateByUrl('produtos');
    }
  }
  

}
