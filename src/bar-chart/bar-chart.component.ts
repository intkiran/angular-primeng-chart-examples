import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent implements OnInit {
  dataSource: any;
  options1: any;
  constructor() {
    this.options1 = {
      title: {
        display: true,
        text: "% Utilization",
        position: "left"
      },
      scales: {
        yAxes: [
          {
            display: true,
            scaleLabel: {
              show: true,
              labelString: "Value"
            },
            ticks: {
              beginAtZero: true,
              max: 100,
              min: 0
            }
          }
        ],
        xAxes: [
          {
            categoryPercentage: 1,
            barPercentage: 1,
            ticks: {
              display: false,
              beginAtZero: 0
            }
          }
        ]
      }
    };

    this.dataSource = {
      labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
      datasets: [
        {
          label: "Company1",
          backgroundColor: "blue",
          data: [25, 30, 60, 50, 80, 90]
        },
        {
          label: "Company2",
          backgroundColor: "green",
          data: [45, 33, 70, 72, 95]
        }
      ]
    };
  }

  ngOnInit() {}
}
