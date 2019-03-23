import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  visible: boolean;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  ngOnInit() {
  }

  constructor(
    private homeServer: HomeService,
    private router: Router,
    private message: NzMessageService) {}

  userLogout() {
    const token = localStorage.getItem('itcast-token');
    this.homeServer.logout(token).subscribe((res) => {
      console.log(res);
      localStorage.removeItem('itcast-token');
      this.router.navigate(['login']);
    }, (err) => {
      this.message.create('error', `出现了未知的错误`);
    });

  }

  closeLogout() {
    this.visible = false;
  }
}
