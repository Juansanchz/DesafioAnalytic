import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { CommerceServices } from 'src/app/shared/services/commerce.services';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css'],
})
export class GraficasComponent implements OnInit {

  constructor(public commerceServices: CommerceServices) {
    this.consultar();
  }

  ngOnInit(): void {}

  listGraphs: any[];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'center',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['Sales'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
  ];

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  consultar() {
    this.commerceServices.getGraph().subscribe((data: any) => {
      // Se agregan el nombre y ventas de cada comercio al barChartData para mostrarlos en el grafico
      data.forEach(element => {
        this.barChartData.push({
          data: [element.sales],
          label: element.name
        });
      });
    });
  }
  
}
