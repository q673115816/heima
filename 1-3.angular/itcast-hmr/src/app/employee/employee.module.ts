import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 模块中重新引入全局中依赖的模块
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeAddComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
