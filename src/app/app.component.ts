import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  autor: string = 'Tiago H. Trojahn';
  logado: boolean;
  usuario: string;
  mostrarForm: boolean;

  abrirFormulario(data: any): void {
    this.mostrarForm = true;
  }

  mudarStatus(data: string): void {
    this.logado = !this.logado;
    this.usuario = data;
    this.mostrarForm = false;
    console.log('Modificando status login/logout');
  }

  ngOnInit(): void {
    this.logado = false;
    this.usuario = '';
    this.mostrarForm = false;
  }
}
