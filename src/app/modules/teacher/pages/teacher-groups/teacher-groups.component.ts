import { Component, OnInit } from '@angular/core';

import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';

import { GroupDatabase, GroupNode, GroupFlatNode } from './group-database';

@Component({
  selector: 'app-teacher-groups',
  templateUrl: './teacher-groups.component.html',
  styleUrls: ['./teacher-groups.component.css']
})
export class TeacherGroupsComponent implements OnInit {
  treeControl: FlatTreeControl<GroupFlatNode>;
  treeFlattener: MatTreeFlattener<GroupNode, GroupFlatNode>;
  dataSource: MatTreeFlatDataSource<GroupNode, GroupFlatNode>;

  constructor(database: GroupDatabase) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<GroupFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => this.dataSource.data = data);
  }

  transformer = (node: GroupNode, level: number) => {
    return new GroupFlatNode(!!node.children, node.groupname, level, node.id);
  }

  private _getLevel = (node: GroupFlatNode) => node.level;

  private _isExpandable = (node: GroupFlatNode) => node.expandable;

  private _getChildren = (node: GroupNode): Observable<GroupNode[]> => observableOf(node.children);

  hasChild = (_: number, _nodeData: GroupFlatNode) => _nodeData.expandable;

  ngOnInit() { }
}
