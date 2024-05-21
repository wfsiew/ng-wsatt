import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, POSITION } from 'ngx-ui-loader';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { DeviceListingComponent } from './device/device-listing/device-listing.component';
import { EmpListingComponent } from './emp/emp-listing/emp-listing.component';
import { RecordListingComponent } from './record/record-listing/record-listing.component';
import { EnrollinfoListingComponent } from './enrollinfo/enrollinfo-listing/enrollinfo-listing.component';

import { HttpTimeoutInterceptor } from './shared/interceptors/timeout.interceptor';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { MessageService } from 'src/services/message.service';
import { DeviceService } from './device/services/device.service';
import { EmpService } from './emp/services/emp.service';
import { RecordService } from './record/services/record.service';
import { EnrollinfoService } from './enrollinfo/services/enrollinfo.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    DeviceListingComponent,
    EmpListingComponent,
    RecordListingComponent,
    EnrollinfoListingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    ToastrModule.forRoot(),
    NgxUiLoaderModule.forRoot({
      bgsPosition: POSITION.centerCenter,
      // bgsColor: '#dc143c',
      bgsType: 'square-jelly-box',
      // fgsColor: '#dc143c',
      fgsType: 'square-jelly-box'
    }),
    NgxUiLoaderHttpModule.forRoot({
      showForeground: false,
      exclude: [
        // `${environment.baseUrl}/o/token/`,
        // `${environment.baseUrl}/o/revoke_token/`,
        // `${environment.baseUrl}/api/current-user`
      ]
    }),
  ],
  providers: [
    MessageService,
    DeviceService,
    EmpService,
    RecordService,
    EnrollinfoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTimeoutInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
