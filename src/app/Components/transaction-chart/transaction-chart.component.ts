import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'node_modules/chart.js';

import { AdminService } from 'src/app/Services/admin.service';

Chart.register(...registerables)

 

@Component({

  selector: 'app-transaction-chart',

  templateUrl: './transaction-chart.component.html',

  styleUrls: ['./transaction-chart.component.css']

})

export class TransactionChartComponent implements OnInit {

 

  chartData: any;

  labelData: any[] = [];

  realData: any[] = [];

 

  constructor(private adminService: AdminService) { }

 

  ngOnInit(): void {

    this.adminService.getTransactionData().subscribe({

      next: (data) => {

        this.chartData = data;

        console.log(this.chartData);

        if (this.chartData != null) {

          for (let i = 0; i < this.chartData.length; i++) {

 

            this.labelData.push(this.chartData[i].date);

            this.realData.push(this.chartData[i].sumOfAmount);

          }

          this.renderChart(this.labelData, this.realData, 'line', 'barchart');

 

 

        }

 

      },

      error: (error) => {

        console.log(error);

      }

    })

 

  }

 

 

 

  renderChart(labelData: any, mainData: any, type: any, id: any) {

    const myChart = new Chart(id, {

      type: type,

      data: {

        labels: labelData,

        datasets: [{

          label: 'Sum Of Transactions',

          data: mainData,

          backgroundColor: ['rgba(60, 179, 113)',

            'rgba(238, 130, 238)',

            'rgba(255, 165, 0)',

            'rgba(106, 90, 205)',

            'rgba(60, 60, 60)',

          ],

          borderColor: ['rgba(60, 60, 60)'],

          borderWidth: 2

        }]

 

 

      },

      options: {

        scales: {

          y: {

            beginAtZero: true

          }

        }

      }

    });

  }

 

}

 