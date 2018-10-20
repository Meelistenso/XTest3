import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentComponent } from './pages/student/student.component';

import { StudentRoutingModule } from './student-routing.module';
import { StudentLabsComponent } from './pages/student-labs/student-labs.component';
import { StudentLabComponent } from './pages/student-lab/student-lab.component';

import { TestModule } from 'src/app/ui/test/test.module';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    TestModule
  ],
  declarations: [StudentComponent, StudentLabsComponent, StudentLabComponent]
})
export class StudentModule { }
