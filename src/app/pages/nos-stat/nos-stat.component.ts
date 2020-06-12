import {Component, OnInit, ViewChild} from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexTitleSubtitle

} from "ng-apexcharts";


type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  colors: string[];
  legend: ApexLegend;
};

export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: 'app-nos-stat',
  templateUrl: './nos-stat.component.html',
  styleUrls: ['./nos-stat.component.css']
})
export class NosStatComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions1>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "nombre",
          data: [21, 22, 10]
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#008FFB",
        "rgba(64,7,153,0.82)",
        "#5F4DEE"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          "Offres du service",
          "Poste d'éxperience",
          "Cours publiés"

        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "rgba(64,7,153,0.82)",
              "#5F4DEE"
            ],
            fontSize: "12px"
          }
        }
      }
    };

    this.chartOptions1 = {
      series: [
        {
          name: "nombre participeurs",
          data: series.monthDataSeries1.participeurs
        }
      ],
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },

      title: {
        text: "Graphe d'évolution",
        align: "left"
      },
      subtitle: {
        text: "Participeurs dan les differentes espace",
        align: "left"
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };

  }

  ngOnInit(): void {


  }



}

export const series = {
  monthDataSeries1: {
    participeurs: [
      70,
      50,
      75,
      66,
      35,
      55,
      77,
      79,
      46,
      73,
      85,
      21,
      58,
      112,
      80,
      99,
      20,
      10,
      100,
      93
    ],
    dates: [
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017",
      "29 Nov 2017",
      "30 Nov 2017",
      "01 Dec 2017",
      "04 Dec 2017",
      "05 Dec 2017",
      "06 Dec 2017",
      "07 Dec 2017",
      "08 Dec 2017"
    ]
  }
};

