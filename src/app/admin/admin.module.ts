import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedMaterialModule } from '../shared-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { GeneralComponent } from './components/general/general.component';

@NgModule({
  declarations: [AdminComponent, UserManagementComponent, GeneralComponent],
  imports: [CommonModule, AdminRoutingModule, SharedMaterialModule, TranslateModule.forChild()],
})
export class AdminModule {}
