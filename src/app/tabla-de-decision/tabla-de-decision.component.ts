import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-de-decision',
  templateUrl: './tabla-de-decision.component.html',
  styleUrls: ['./tabla-de-decision.component.css']
})
export class TablaDeDecisionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  iniciar(){
    alert("Iniciando inversion, preparando primer bimestre");
  }
}
