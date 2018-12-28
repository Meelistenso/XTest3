import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherComponent } from './pages/teacher/teacher.component';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherGroupsComponent } from './pages/teacher-groups/teacher-groups.component';
import { TeacherGroupComponent } from './pages/teacher-group/teacher-group.component';
import { SharedModule } from '@app/shared/shared.module';

import { TeacherService } from './shared/teacher.service';
import { GroupDatabase } from './pages/teacher-groups/group-database';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    TeacherRoutingModule
  ],
  providers: [TeacherService, GroupDatabase],
  declarations: [TeacherComponent, TeacherGroupsComponent, TeacherGroupComponent]
})
export class TeacherModule { }
