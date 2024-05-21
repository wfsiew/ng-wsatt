import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/services/message.service';
import { AppConstant } from 'src/app/shared/constants/app.constant';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit, OnDestroy {

  isLoading = false;
  menu!: string;
  submenu!: string;
  data: any = {};
  roles = '';
  role = '';
  selectedValue!: string;
  selectedOption: any;
  subs: Subscription;

  readonly uiState = 'home.index';

  readonly ROLE = AppConstant.ROLE;

  readonly env = environment;

  constructor(
    private router: Router,
    private msService: MessageService,
    private toastr: ToastrService
  ) {
    this.subs = this.msService.get().subscribe(res => {
      if (res.name === this.uiState) {
        location.reload();
      }
    });
  }

  ngOnInit() {
    this.load();
    this.setMenu();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  load() {
    
  }

  setMenu() {
    this.setTargetMenu('/main/device', 'device', 'device/list', ['device/list']);
    this.setTargetMenu('/main/emp', 'emp', 'emp/list', ['emp/list']);
    this.setTargetMenu('/main/record', 'record', 'record/list', ['record/list']);
    this.setTargetMenu('/main/enrollinfo', 'enrollinfo', 'enrollinfo/list', ['enrollinfo/list']);
  }

  setTargetMenu(url: string, targetMenu: string, targetSubmenu: string, matchList: string[]) {
    const x = this.router.url;
    if (x.indexOf(url) >= 0) {
      this.menu = targetMenu;
    }
  }

  goto(s: string, link: string) {
    this.menu = s;
    this.router.navigate([`/main/${s}/${link}`]);
    return false;
  }
}
