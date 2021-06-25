import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() loginEfetuado = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  logar() : void {
    // Aqui é passado o valor do nome de quem está logando.
    // Em geral, seria passado um valor vindo do formulário ou do banco de dados
    // Para fins de simplificação, é passado uma simples string.
    this.loginEfetuado.emit("IFSP São Carlos");
  }

}
