import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-de-decision',
  templateUrl: './tabla-de-decision.component.html',
  styleUrls: ['./tabla-de-decision.component.css']
})
export class TablaDeDecisionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.decision();
  }
  iniciar(){
    alert("Iniciando inversion, preparando primer bimestre");
  }
  decision(){
    document.getElementById("decisiones").style.display="block";
    document.getElementById("tabla-analisis").style.display="none";
    document.getElementById("informe").style.display="none";
    document.getElementById("analisis").style.display="none";
    document.getElementById("titulo").innerText="MIS DECISIONES";
  }
  tanalisis(){
    document.getElementById("decisiones").style.display="none";
    document.getElementById("tabla-analisis").style.display="block";
    document.getElementById("informe").style.display="none";
    document.getElementById("analisis").style.display="none";
    document.getElementById("titulo").innerText="ANALISIS DE LA INDUSTRIA";

  }
  informe(){
    document.getElementById("decisiones").style.display="none";
    document.getElementById("tabla-analisis").style.display="none";
    document.getElementById("informe").style.display="block";
    document.getElementById("analisis").style.display="none";
    document.getElementById("titulo").innerText="INFORMES DE LA COMPAÑIA";

  }
  analisis(){
    document.getElementById("decisiones").style.display="none";
    document.getElementById("tabla-analisis").style.display="none";
    document.getElementById("informe").style.display="none";
    document.getElementById("analisis").style.display="block";
    document.getElementById("titulo").innerText="ANALISIS";

  }
}
