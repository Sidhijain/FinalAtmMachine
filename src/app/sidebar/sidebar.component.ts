import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sideNavStatus:boolean=false;
    list=[
      {
        number:'1',
        name: 'Home',
        link:'/home',
        icon:'fa fa-home'
      },
      {
        number:'2',
        name: 'Fund Deposit',
        link:'/FundDeposit',
        icon:'fa-solid fa-square-plus'
      },
      {
        number:'3',
        name: 'Self-Withdraw',
        link:'/SelfWithdraw',
        icon:'fa-solid fa-money-check-dollar'
      },
      {
        number:'4',
        name: 'Transfer fund',
        link:'/FundTransfer',
        icon:'fa-solid fa-money-bill-transfer'
      },
      {
        number:'5',
        name: 'Check Balance',
        link:'/CheckBalance',
        icon:'fa-solid fa-clipboard-check'
      }
      ,
      {
        number:'6',
        name: 'Transaction History',
        link:'/Transactions',
        icon:'fa-solid fa-clipboard-check'
      }
      ,
      {
        number:'6',
        name: 'Bill Payment',
        link:'/bill',
        icon:'fa-solid fa-money-bill'
      }
      ,
      {
        number:'7',
        name: 'Raise Request',
        link:'/request',
        icon:'fa-solid fa-wallet'
      }
      ,
      {
        number:'8',
        name: 'View Request',
        link:'/viewrequest',
        icon:'fa-solid fa-users-viewfinder'
      },
      {
        number:'9',
        name: 'Change card pin',
        link:'/changepin',
        icon:'fa-solid fa-right-left'
      }

      ,
      {
        number:'10',
        name: 'Help',
        link:'/help',
        icon:'fa-solid fa-circle-question'
      }
    ]
}
