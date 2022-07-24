import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContextMenuItem, ITableEvent, TableEvents, TableField, TablePagination, TableSetting } from '@tavanasystem/tips-mat-table';
import { Cmyk, ColorPickerService } from 'ngx-color-picker';
import { BehaviorSubject } from 'rxjs';
import { createFakeData } from '../fake-job-dataset';

@Component({
  selector: 'app-table-with-custom-color',
  templateUrl: './table-with-custom-color.component.html',
  styleUrls: ['./table-with-custom-color.component.scss']
})
export class TableWithCustomColorComponent implements OnInit {


  constructor(public vcRef: ViewContainerRef, private cpService: ColorPickerService) {}

  HeaderStyle: string = "  Header color";
  RowStyle: string = "     Row color";
  AltRowStyle: string = "  Alt Row color";
  fontStyle: string = "     font color";


  
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

  
  public color: any;

  public rgbaText: string = 'rgba(165, 26, 214, 0.2)';

  public selectedColor: string = 'color1';

  public color1: string = 'rgb(54, 79, 107)';
  public color2: string = 'rgb(52, 32, 233)';
  public color3: string = '#ecfffb';
  public color4: string = '#ecfffb';



  public onEventLog(event: string, data: any): void {
    if(data.color != undefined) {
    this.tableSetting.headerStyles.headerBackgroundColor = data.color;
    this.color = data.color;
    }
    return this.color;
  }

  public onCellStyle(event: string, data: any): void {
    if(data.color != undefined) {
    this.tableSetting.cellStyle.color = data.color;
    this.color = data.color;
    }
    return this.color;
  }

  public onRowStyle(event: string, data: any): void {
    if(data.color != undefined) {
    this.tableSetting.rowStyle.backgroundColor = data.color;
    this.color = data.color;
    }
    return this.color;
  }

  public onARowStyle(event: string, data: any): void {
    if(data.color != undefined) {
    this.tableSetting.alternativeRowStyle.backgroundColor = data.color;
    this.color = data.color;
    }
    return this.color;
  }


  formatLabel(value: any) {
    if (value >= 1000) {
      value = this.color;
      return this.color;
    }
  }


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
    rowStyle: {
      backgroundColor: '#ecfffb'
    },
    cellStyle: { 
      'justify-content': 'center',
      color: 'rgb(52, 32, 233)',
   },
    headerStyles: {
      headerBackgroundColor: '#364f6b',
      headerColor: '#f0f0f0',
    },
    alternativeRowStyle: { backgroundColor: '#ecfffb' },
  };


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
