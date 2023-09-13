import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestComponent } from './Components/request/request.component';
import { ViewRequestComponent } from './Components/view-request/view-request.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from  '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { AddFundsComponent } from './Components/add-funds/add-funds.component';
import { CheckBalanceComponent } from './Components/check-balance/check-balance.component';
import { FundTransferComponent } from './Components/fund-transfer/fund-transfer.component';
import { TransactionComponent } from './Components/transaction/transaction.component';
import { WithdrawFundsComponent } from './Components/withdraw-funds/withdraw-funds.component';
import { HelpComponent } from './Components/help/help.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { AdminRequestComponent } from './Components/admin-request/admin-request.component';
import { CardLimitComponent } from './Components/card-limit/card-limit.component';
import { TransactionChartComponent } from './Components/transaction-chart/transaction-chart.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { CardRegistrationComponent } from './Components/card-registration/card-registration.component';
import { BillpaymentsComponent } from './Components/billpayments/billpayments.component';
import { ElectricitypaymentComponent } from './Components/electricitypayment/electricitypayment.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangeUserPinComponent } from './Components/change-user-pin/change-user-pin.component';
@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    ViewRequestComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    AddFundsComponent,
    CheckBalanceComponent,
    FundTransferComponent,
    TransactionComponent,
    WithdrawFundsComponent,
    HelpComponent,
    AdminHomeComponent,
    AdminRequestComponent,
    CardLimitComponent,
    TransactionChartComponent,
    CardRegistrationComponent,
    ForgotPasswordComponent,
    LoginComponent,
    UserProfileComponent,
    UserRegistrationComponent,
    BillpaymentsComponent,
    ElectricitypaymentComponent,
    PaymentComponent,
    ChangeUserPinComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
