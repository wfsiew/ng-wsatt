import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { DeviceService } from 'src/app/device/services/device.service';
import { MessageService } from 'src/services/message.service';
import { AppConstant } from 'src/app/shared/constants/app.constant';
import { Helper } from 'src/app/shared/utils/helper';

@Component({
  selector: 'app-device-listing',
  templateUrl: './device-listing.component.html',
  styleUrl: './device-listing.component.css'
})
export class DeviceListingComponent implements OnInit, OnDestroy {

  title = 'Device';
  isLoading = false;
  list: any[] = [];
  totalCount = 0;
  totalPage = 0;
  pageSize = AppConstant.PAGE_SIZE;
  page = 1;
  search = '';
  sx = 0;
  sy = 0;
  subs: Subscription;

  readonly uiState = 'device.device-listing';

  readonly isEmpty = Helper.isEmpty;
  readonly PAGE_SIZE = AppConstant.PAGE_SIZE;
  readonly MAX_PAGE_NUMBERS = AppConstant.MAX_PAGE_NUMBERS;

  constructor(
    private router: Router,
    private deviceService: DeviceService,
    private msService: MessageService,
    private toastr: ToastrService
  ) {
    this.subs = this.msService.get().subscribe(res => {
      if (res.name === this.uiState) {
        const o = res.data;
        this.page = o.page;
        this.search = o.search;
        this.sx = o.sx;
        this.sy = o.sy;
      }
    });
  }

  ngOnInit() {
    this.load();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  load() {
    if (this.search !== '') {
      // this.onSearch(this.search);
      return;
    }
    
    this.isLoading = true;
    this.deviceService.list(this.page, AppConstant.PAGE_SIZE).subscribe({ next: (res: any) => {
      this.list = res.body.device;
      const headers = res.headers;
      this.totalCount = Number(headers.get(AppConstant.HTTP_HEADER.X_TOTAL_COUNT));
      this.totalPage = Number(headers.get(AppConstant.HTTP_HEADER.X_TOTAL_PAGE));
      this.isLoading = false;
      setTimeout(() => {
        window.scrollTo(this.sx, this.sy);
      }, 200);
    }, error: (error) => {

    }, complete: () => {
      this.isLoading = false;
    }});
  }

  pageChanged(event: any) {
    this.page = event.page;
    this.load();
  }
}
