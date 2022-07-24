import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {
  TableField,
  ContextMenuItem,
  TablePagination,
  TableSetting,
  ITableEvent,
  TableEvents,
  TableSelectionMode,
} from '@tavanasystem/tips-mat-table';
import { BehaviorSubject } from 'rxjs';
import { createFakeData } from '../fake-job-dataset';

@Component({
  selector: 'app-table-with-selection',
  templateUrl: './table-with-selection.component.html',
  styleUrls: ['./table-with-selection.component.scss'],
})
export class TableWithSelectionComponent implements OnInit {
  private data: any[] = [];
  public dataSource$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  columns: TableField<any>[] = [];
  rowActionMenu: ContextMenuItem[];

  pagination: TablePagination = {
    length: 0,
    pageIndex: 0,
    pageSize: 40,
    pageSizeOptions: [5, 10, 20, 40, 80, 160],
  };

  selectionMode: TableSelectionMode = 'none';

  tableSetting: TableSetting = {
    stickyActionMenu: true,
    enableContextMenu: true,
    cellStyle: { 'justify-content': 'center' },
    headerStyles: {
      headerBackgroundColor: '#fc5185',
      headerColor: '#f0f0f0',
    },
    alternativeRowStyle: { backgroundColor: '#f0f0f0' },
  };

  selectionModel = new SelectionModel(true, []);

  selectionLogs = [];

  constructor() {}

  ngOnInit(): void {
    this.initField();
    this.setRowActionMenu();
    this.data = [...createFakeData(1000)];
    this.pagination.length = this.data.length;
    this.dataSource$.next(
      this.data.slice(
        this.pagination.pageIndex * this.pagination.pageSize,
        (this.pagination.pageIndex + 1) * this.pagination.pageSize
      )
    );
  }

  tableEvent(event: ITableEvent) {
    if (event.event == TableEvents.PaginationEvent) {
      this.pagination = {
        ...this.pagination,
        ...event.sender.pageEvent,
        length: this.data.length,
      };
      this.dataSource$.next(
        this.data.slice(
          this.pagination.pageIndex * this.pagination.pageSize,
          (this.pagination.pageIndex + 1) * this.pagination.pageSize
        )
      );
    } else if (
      event.event == TableEvents.RowActionMenu ||
      event.event == TableEvents.ContextMenuClick
    ) {
      switch (event.sender.action) {
        case 'delete':
          this.data = this.data.filter((i) => i.id != event.sender.row.id);
          this.pagination.length = this.data.length;
          this.dataSource$.next(
            this.data.slice(
              this.pagination.pageIndex * this.pagination.pageSize,
              (this.pagination.pageIndex + 1) * this.pagination.pageSize
            )
          );
          break;
        case 'navigate':
          document.open('https://www.google.com/', '', 'noopener=true');
          break;
      }
    } else if (event.event == TableEvents.RowSelectionChange) {
      this.selectionLogs = [
        `${this.selectionLogs.length + 1} : ${
          event.sender.added.length
        } item added to selection, ${
          event.sender.removed.length
        } removed from selection List, ${
          event.sender.list.length
        } item in are selected.`,
        ...this.selectionLogs,
      ];
    } else if (event.event == TableEvents.MasterSelectionChange) {
      //depricated
      this.selectionLogs = [
        ` all ${event.sender.list.length == 0 ? 'unselected' : 'selected'}`,
        ...this.selectionLogs,
      ];
    }
  }

  initField() {
    this.columns = [
      {
        name: 'FIELD1',
        header: 'کد',
      },
      {
        name: 'jobTitle',
        header: 'عنوان',
      },
      {
        name: 'SalaryEstimate',
        header: 'حقوق',
      },
      {
        name: 'Rating',
        header: 'رنک',
      },
      {
        name: 'CompanyName',
        header: 'شرکت',
      },
      {
        name: 'Location',
        header: 'مکان',
      },
      {
        name: 'Headquarters',
        header: 'دفتر مرکزی',
      },
      {
        name: 'Size',
        header: 'سایز',
      },
      {
        name: 'Founded',
        header: 'ایجاد',
      },
      {
        name: 'TypeOfOwnership',
        header: 'نحوه مالکیت',
      },
      {
        name: 'Industry',
        header: 'صنعت',
      },
      {
        name: 'Sector',
        header: 'بخش',
      },
      {
        name: 'Revenue',
        header: 'Revenue',
      },
      {
        name: 'Competitors',
        header: 'رقبا',
      },
      {
        name: 'EasyApply',
        header: 'درخواست',
      },
    ];
  }

  setRowActionMenu() {
    this.rowActionMenu = [
      {
        name: 'navigate',
        icon: 'leaderboard',
        text: 'اطلاعات بیشتر',
        styles: { color: '#ddd', backgroundColor: 'grey' },
      },
      {
        name: 'delete',
        icon: 'delete',
        text: 'حذف ردیف',
        styles: { backgroundColor: '#ea4335', color: 'white' },
      },
    ];
  }
}
