import { Component, OnInit } from '@angular/core';
import {
  TableField,
  ContextMenuItem,
  TablePagination,
  TableSetting,
  ITableEvent,
  TableEvents,
  isNullorUndefined,
} from '@tavanasystem/tips-mat-table';
import { BehaviorSubject } from 'rxjs';
import { createFakeData } from '../fake-job-dataset';

@Component({
  selector: 'app-table-with-simple-filter',
  templateUrl: './table-with-simple-filter.component.html',
  styleUrls: ['./table-with-simple-filter.component.scss'],
})
export class TableWithSimpleFilterComponent implements OnInit {
  private allData: any[] = [];
  private filterdData: any[] = [];
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

  searchedModel: any = {};

  constructor() {}

  ngOnInit(): void {
    this.initField();
    this.setRowActionMenu();
    this.allData = [
      ...createFakeData(1000).map((i) => {
        return { ...i, isMarriedTitle: i.isMarried ? 'متاهل' : 'مجرد' };
      }),
    ];
    this.filterdData = this.allData;
    this.pagination.length = this.filterdData.length;
    this.dataSource$.next(
      this.filterdData.slice(
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
        length: this.filterdData.length,
      };
      this.dataSource$.next(
        this.filterdData.slice(
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
          this.allData = this.allData.filter(
            (i) => i.id != event.sender.row.id
          );
          this.filterdData = this.filterdData.filter(
            (i) => i.id != event.sender.row.id
          );
          this.pagination.length = this.filterdData.length;
          this.dataSource$.next(
            this.filterdData.slice(
              this.pagination.pageIndex * this.pagination.pageSize,
              (this.pagination.pageIndex + 1) * this.pagination.pageSize
            )
          );
          break;
        case 'navigate':
          document.open('https://www.google.com/', '', 'noopener=true');
          break;
      }
    } else if (event.event == TableEvents.SimpleFilterEvent) {
      console.log(event.sender);
      this.searchedModel = { ...this.searchedModel, ...event.sender };
      this.filter();
    }
  }

  filter() {
    // this proccess happens in database or back-end
    let typeList = [
      { value: true, id: 0, label: 'Back' },
      { value: true, id: 1, label: 'Front' },
      { value: true, id: 2, label: 'DevOps' },
      { value: true, id: 3, label: 'Database' },
      { value: true, id: 4, label: 'Team Leader' },
    ];
    let type = [];
    if (!isNullorUndefined(this.searchedModel['type'])) {
      Object.entries(this.searchedModel['type']).forEach((i) => {
        if (i[1] == true) type.push(typeList[i[0]].label);
      });
    }
    let list = [];
    this.allData.forEach((item) => {
      if (
        (item.jobTitle.includes(this.searchedModel['jobTitle']) ||
          isNullorUndefined(this.searchedModel['jobTitle'])) &&
        (type.includes(item.type) ||
          isNullorUndefined(this.searchedModel['type'])) &&
        (item.isMarried == this.searchedModel['isMarriedTitle'] ||
          isNullorUndefined(this.searchedModel['isMarriedTitle']))
      )
        list.push(item);
    });
    this.filterdData = list;
    this.pagination.length = this.filterdData.length;
    this.dataSource$.next(
      this.filterdData.slice(
        this.pagination.pageIndex * this.pagination.pageSize,
        (this.pagination.pageIndex + 1) * this.pagination.pageSize
      )
    );
  }

  initField() {
    this.columns = [
      {
        name: 'jobTitle',
        header: 'عنوان',
        fliterMode: 'simple',
        simpleFilterModeConfig: {
          placeholder: 'عنوان را وارد کنید',
        },
      },
      {
        name: 'type',
        header: 'نوع کار',
        fliterMode: 'simple',
        simpleFilterModeConfig: {
          fieldType: 'checkbox-list',
          options: [
            { value: true, id: 0, label: 'Back' },
            { value: true, id: 1, label: 'Front' },
            { value: true, id: 2, label: 'DevOps' },
            { value: true, id: 3, label: 'Database' },
            { value: true, id: 4, label: 'Team Leader' },
          ],
        },
      },
      {
        name: 'isMarriedTitle',
        header: 'نوع تاهل',
        fliterMode: 'simple',
        simpleFilterModeConfig: {
          fieldType: 'switch',
          switchTitle: 'متاهل',
          defaultValue: null,
        },
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
