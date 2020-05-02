import { Component } from "@angular/core";
import { MessageService } from "primeng";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data: any;
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

    this.data = {
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
}
