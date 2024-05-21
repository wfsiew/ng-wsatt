import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { DeviceListingComponent } from './device/device-listing/device-listing.component';
import { EmpListingComponent } from './emp/emp-listing/emp-listing.component';
import { RecordListingComponent } from './record/record-listing/record-listing.component';
import { EnrollinfoListingComponent } from './enrollinfo/enrollinfo-listing/enrollinfo-listing.component';

const routes: Routes = [
  {
    path: 'main',
    component: IndexComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'device',
        children: [
          {
            path: 'list',
            component: DeviceListingComponent
          }
        ]
      },
      {
        path: 'emp',
        children: [
          {
            path: 'list',
            component: EmpListingComponent
          }
        ]
      },
      {
        path: 'record',
        children: [
          {
            path: 'list',
            component: RecordListingComponent
          }
        ]
      },
      {
        path: 'enrollinfo',
        children: [
          {
            path: 'list',
            component: EnrollinfoListingComponent
          }
        ]
      }
    ]
  },
  { path: '**', redirectTo: '/main/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
