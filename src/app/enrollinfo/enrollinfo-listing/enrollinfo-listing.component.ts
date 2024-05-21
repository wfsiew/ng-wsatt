import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { EnrollinfoService } from '../services/enrollinfo.service';
import { MessageService } from '../../../services/message.service';
import { AppConstant } from '../../../app/shared/constants/app.constant';
import { Helper } from '../../../app/shared/utils/helper';

@Component({
  selector: 'app-enrollinfo-listing',
  templateUrl: './enrollinfo-listing.component.html',
  styleUrl: './enrollinfo-listing.component.css'
})
export class EnrollinfoListingComponent implements OnInit, OnDestroy {

  title = 'EnrollInfo';
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

  readonly uiState = 'enrollinfo.enrollinfo-listing';

  readonly isEmpty = Helper.isEmpty;
  readonly PAGE_SIZE = AppConstant.PAGE_SIZE;
  readonly MAX_PAGE_NUMBERS = AppConstant.MAX_PAGE_NUMBERS;

  constructor(
    private router: Router,
    private enService: EnrollinfoService,
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
    this.enService.list(this.page, AppConstant.PAGE_SIZE).subscribe({ next: (res: any) => {
      this.list = res.body.enrollInfo;
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
