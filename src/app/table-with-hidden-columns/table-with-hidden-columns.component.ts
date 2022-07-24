import { Component, OnInit } from '@angular/core';
import {
  TableField,
  ContextMenuItem,
  TablePagination,
  TableSetting,
  ITableEvent,
  TableEvents,
  FieldDisplay,
} from '@tavanasystem/tips-mat-table';
import { BehaviorSubject } from 'rxjs';
import { createFakeData } from '../fake-job-dataset';

@Component({
  selector: 'app-table-with-hidden-columns',
  templateUrl: './table-with-hidden-columns.component.html',
  styleUrls: ['./table-with-hidden-columns.component.scss'],
})
export class TableWithHiddenColumnsComponent implements OnInit {
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

  tableSetting: TableSetting = {
    stickyActionMenu: true,
    enableContextMenu: true,
    cellStyle: { 'justify-content': 'center' },
    headerStyles: {
      headerBackgroundColor: '#364f6b',
      headerColor: '#f0f0f0',
    },
    alternativeRowStyle: { backgroundColor: '#ecfffb' },
  };

  hiddenColumns: string[] = [];
  visableColumns: string[] = [];

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
    }
  }

  toggleColumns() {
    this.tableSetting.columnSetting = this.columns = this.columns.map(
      (column, index) => {
        return {
          ...column,
          display: <FieldDisplay>(
            ['visible', 'hiden'][Math.floor(Math.random() * 2)]
          ),
        };
      }
    );
    this.visableColumns = this.columns
      .filter((i) => i.display != 'hiden')
      .map((i) => i.header);
    this.hiddenColumns = this.columns
      .filter((i) => i.display == 'hiden')
      .map((i) => i.header);
  }

  visableOrHide(item, type: 'hiden' | 'visible') {
    this.tableSetting.columnSetting = this.columns = this.columns.map(
      (column, index) => {
        if (column.header == item) {
          return {
            ...column,
            display: type,
          };
        } else return column;
      }
    );
    this.visableColumns = this.columns
      .filter((i) => i.display != 'hiden')
      .map((i) => i.header);
    this.hiddenColumns = this.columns
      .filter((i) => i.display == 'hiden')
      .map((i) => i.header);
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
    this.visableColumns = this.columns
      .filter((i) => i.display != 'hiden')
      .map((i) => i.header);
    this.hiddenColumns = this.columns
      .filter((i) => i.display == 'hiden')
      .map((i) => i.header);
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
