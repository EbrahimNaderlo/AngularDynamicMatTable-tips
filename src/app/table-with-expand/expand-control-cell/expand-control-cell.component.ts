import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import {
  IDynamicCell,
  ITableEvent,
  TableField,
  TipsMatTableComponent,
} from '@tavanasystem/tips-mat-table';

@Component({
  selector: 'app-expand-control-cell',
  templateUrl: './expand-control-cell.component.html',
  styleUrls: ['./expand-control-cell.component.scss'],
})
export class ExpandControlCellComponent implements OnInit, IDynamicCell {
  @Input() onRowEvent: EventEmitter<ITableEvent>;
  @Input() row: any;
  @Input() column: TableField<any>;
  @Input() parent: TipsMatTableComponent<any>;
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    if (this.row.option == undefined || this.row.option == null)
      this.row.option = { expand: false };
  }

  onExpandRow() {
    if (this.row.options == undefined) {
      this.row.options = { expanded: false };
    }
    this.parent.expandRow(
      'FIELD1',
      this.row.FIELD1,
      !this.row.options.expanded
    );
    this.row.options.expanded = !this.row.options.expanded;
    if (
      this.row.options.callBack !== undefined &&
      typeof this.row.options.callBack == 'function'
    )
      this.row.options.callBack({
        row: this.row,
        expanded: this.row.options.expanded,
      });
  }
}
