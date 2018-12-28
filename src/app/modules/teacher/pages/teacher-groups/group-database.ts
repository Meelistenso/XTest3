
import {BehaviorSubject, merge, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { TeacherService } from '../../shared/teacher.service';


export class GroupFlatNode {
  constructor(
    public expandable: boolean, public groupname: string, public level: number, public id: any) { }
}

export class GroupNode {
  children: GroupNode[];
  groupname: string;
  id: any;
}

@Injectable()
export class GroupDatabase {
  dataChange = new BehaviorSubject<GroupNode[]>([]);

  get data(): GroupNode[] { return this.dataChange.value; }

  constructor(private teacherService: TeacherService) {
    this.initialize();
  }

  initialize() {
    this.teacherService.getGroups().subscribe(dataObject => {
      const data = this.buildFileTree(dataObject, 0);
      this.dataChange.next(data);
      console.log(data);
    });
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(obj: {[key: string]: any}, level: number): GroupNode[] {
    return Object.keys(obj).reduce<GroupNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new GroupNode();
      node.groupname = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.id = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}
