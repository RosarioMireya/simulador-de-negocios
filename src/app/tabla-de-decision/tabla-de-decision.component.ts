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


  produccionvsventas(){
    document.getElementById("produccionvsventasID").style.display="block";
    document.getElementById("costovsprecioID").style.display="none";
    document.getElementById("capacidadvsproduccionID").style.display="none";
    document.getElementById("companiavscompetenciaID").style.display="none";
    document.getElementById("consejosID").style.display="none";
    document.getElementById("titulo").innerText="ANALISIS";

  }
  costovsprecio(){
    document.getElementById("produccionvsventasID").style.display="none";
    document.getElementById("costovsprecioID").style.display="block";
    document.getElementById("capacidadvsproduccionID").style.display="none";
    document.getElementById("companiavscompetenciaID").style.display="none";
    document.getElementById("consejosID").style.display="none";
    document.getElementById("titulo").innerText="ANALISIS";

  }
  capacidadvsproduccion(){
    document.getElementById("produccionvsventasID").style.display="none";
    document.getElementById("costovsprecioID").style.display="none";
    document.getElementById("capacidadvsproduccionID").style.display="block";
    document.getElementById("companiavscompetenciaID").style.display="none";
    document.getElementById("consejosID").style.display="none";
    document.getElementById("titulo").innerText="ANALISIS";

  }
  companiavscompetencia(){
    document.getElementById("produccionvsventasID").style.display="none";
    document.getElementById("costovsprecioID").style.display="none";
    document.getElementById("capacidadvsproduccionID").style.display="none";
    document.getElementById("companiavscompetenciaID").style.display="block";
    document.getElementById("consejosID").style.display="none";
    document.getElementById("titulo").innerText="ANALISIS";

  }
  consejos(){
    document.getElementById("produccionvsventasID").style.display="none";
    document.getElementById("costovsprecioID").style.display="none";
    document.getElementById("capacidadvsproduccionID").style.display="none";
    document.getElementById("companiavscompetenciaID").style.display="none";
    document.getElementById("consejosID").style.display="block";
    document.getElementById("titulo").innerText="ANALISIS";

  }


  EstadoDeResultados(){
    document.getElementById("EstadoDeResultadosID").style.display="block";
    document.getElementById("BalanceGeneralID").style.display="none";
    document.getElementById("VentasID").style.display="none";
    document.getElementById("ProduccionID").style.display="none";
    document.getElementById("CompaniaID").style.display="none";
    document.getElementById("titulo").innerText="INFORMES DE LA COMPAÑIA";

  }

  BalanceGeneral(){
    document.getElementById("EstadoDeResultadosID").style.display="none";
    document.getElementById("BalanceGeneralID").style.display="block";
    document.getElementById("VentasID").style.display="none";
    document.getElementById("ProduccionID").style.display="none";
    document.getElementById("CompaniaID").style.display="none";
    document.getElementById("titulo").innerText="INFORMES DE LA COMPAÑIA";

  }
  Ventas(){
    document.getElementById("EstadoDeResultadosID").style.display="none";
    document.getElementById("BalanceGeneralID").style.display="none";
    document.getElementById("VentasID").style.display="block";
    document.getElementById("ProduccionID").style.display="none";
    document.getElementById("CompaniaID").style.display="none";
    document.getElementById("titulo").innerText="INFORMES DE LA COMPAÑIA";

  }

  Produccion(){
    document.getElementById("EstadoDeResultadosID").style.display="none";
    document.getElementById("BalanceGeneralID").style.display="none";
    document.getElementById("VentasID").style.display="none";
    document.getElementById("ProduccionID").style.display="block";
    document.getElementById("CompaniaID").style.display="none";
    document.getElementById("titulo").innerText="INFORMES DE LA COMPAÑIA";

  }

  Compania(){
    document.getElementById("EstadoDeResultadosID").style.display="none";
    document.getElementById("BalanceGeneralID").style.display="none";
    document.getElementById("VentasID").style.display="none";
    document.getElementById("ProduccionID").style.display="none";
    document.getElementById("CompaniaID").style.display="block";
    document.getElementById("titulo").innerText="INFORMES DE LA COMPAÑIA";

  }


  VisionGeneral(){
    document.getElementById("VisionGeneralID").style.display="block";
    document.getElementById("ProduccionTablaAnalisisID").style.display="none";
    document.getElementById("VentasTablaAnalisisID").style.display="none";
    document.getElementById("EconomiaID").style.display="none";
    document.getElementById("PorcentajeMercado").style.display="none";
    document.getElementById("titulo").innerText="ANALISIS DE LA INDUSTRIA";

  }

  ProduccionTablaAnalisis(){
    document.getElementById("VisionGeneralID").style.display="none";
    document.getElementById("ProduccionTablaAnalisisID").style.display="block";
    document.getElementById("VentasTablaAnalisisID").style.display="none";
    document.getElementById("EconomiaID").style.display="none";
    document.getElementById("PorcentajeMercado").style.display="none";
    document.getElementById("titulo").innerText="ANALISIS DE LA INDUSTRIA";

  }

  VentasTablaAnalisis(){
    document.getElementById("VisionGeneralID").style.display="none";
    document.getElementById("ProduccionTablaAnalisisID").style.display="none";
    document.getElementById("VentasTablaAnalisisID").style.display="block";
    document.getElementById("EconomiaID").style.display="none";
    document.getElementById("PorcentajeMercado").style.display="none";
    document.getElementById("titulo").innerText="ANALISIS DE LA INDUSTRIA";

  }

  Economia(){
    document.getElementById("VisionGeneralID").style.display="none";
    document.getElementById("ProduccionTablaAnalisisID").style.display="none";
    document.getElementById("VentasTablaAnalisisID").style.display="none";
    document.getElementById("EconomiaID").style.display="block";
    document.getElementById("PorcentajeMercado").style.display="none";
    document.getElementById("titulo").innerText="ANALISIS DE LA INDUSTRIA";

  }

  PorcentajeMercado(){
    document.getElementById("VisionGeneralID").style.display="none";
    document.getElementById("ProduccionTablaAnalisisID").style.display="none";
    document.getElementById("VentasTablaAnalisisID").style.display="none";
    document.getElementById("EconomiaID").style.display="none";
    document.getElementById("PorcentajeMercado").style.display="block";
    document.getElementById("titulo").innerText="ANALISIS DE LA INDUSTRIA";

  }


}
