import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() logado : boolean;
  @Output() manipular = new EventEmitter<string>();
  @Output() formulario = new EventEmitter<any>();

  login() : void {
    this.formulario.emit();
  }

  logout() {
    this.manipular.emit("");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
