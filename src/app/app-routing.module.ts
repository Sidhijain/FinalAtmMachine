import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from './Components/request/request.component';
import { ViewRequestComponent } from './Components/view-request/view-request.component';
import { HomeComponent } from './Components/home/home.component';
import { TransactionComponent } from './Components/transaction/transaction.component';
import { AddFundsComponent } from './Components/add-funds/add-funds.component';
import { FundTransferComponent } from './Components/fund-transfer/fund-transfer.component';
import { CheckBalanceComponent } from './Components/check-balance/check-balance.component';
import { WithdrawFundsComponent } from './Components/withdraw-funds/withdraw-funds.component';
import { HelpComponent } from './Components/help/help.component';
import { CardLimitComponent } from './Components/card-limit/card-limit.component';
import { authGuard } from './Auth/auth.guard';
import { AdminRequestComponent } from './Components/admin-request/admin-request.component';
import { TransactionChartComponent } from './Components/transaction-chart/transaction-chart.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { CardRegistrationComponent } from './Components/card-registration/card-registration.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ElectricitypaymentComponent } from './Components/electricitypayment/electricitypayment.component';
import { BillpaymentsComponent } from './Components/billpayments/billpayments.component';
import { ChangeUserPinComponent } from './Components/change-user-pin/change-user-pin.component';
import { userauthGuard } from './Auth/userauth.guard';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent,  canActivate: [userauthGuard]
  },
  {
    path:'request',component:RequestComponent, canActivate: [userauthGuard]
  },
  {
    path:'viewrequest',component:ViewRequestComponent,  canActivate: [userauthGuard]
  },
  {path:'help',component:HelpComponent, canActivate: [userauthGuard] },
  // vaishnav
  {path:'Transactions',component:TransactionComponent,  canActivate: [userauthGuard]},

  {path:'SelfWithdraw',component:WithdrawFundsComponent,  canActivate: [userauthGuard]},

  {path:'FundDeposit',component:AddFundsComponent,  canActivate: [userauthGuard]},

  {path:'FundTransfer',component:FundTransferComponent,  canActivate: [userauthGuard]},

  {path:'CheckBalance',component:CheckBalanceComponent, canActivate: [userauthGuard] },
  
  // shivam
  

  { path: 'cardlimit', component: CardLimitComponent,

  canActivate: [authGuard]

},

  { path: 'adminrequest', component: AdminRequestComponent,

  canActivate: [authGuard]

},

  {path: 'chart',component:TransactionChartComponent,

  canActivate:[authGuard]

},


//krati
{path:'registration',component: UserRegistrationComponent},

  { path:'card',component: CardRegistrationComponent},

  { path:'login',component: LoginComponent },

  { path:'forgotPassword',component: ForgotPasswordComponent },

  { path:'profile',component:UserProfileComponent, canActivate: [userauthGuard] },


  //vaidehi
  { path: 'bill', component: BillpaymentsComponent,  canActivate: [userauthGuard]},

  { path: 'dth-bill', component:PaymentComponent,  canActivate: [userauthGuard]},

  { path: 'electricity-bill', component:ElectricitypaymentComponent,  canActivate: [userauthGuard]},
  {
    path:'changepin',component:ChangeUserPinComponent,  canActivate: [userauthGuard]
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
