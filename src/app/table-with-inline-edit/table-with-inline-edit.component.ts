import { BehaviorSubject, of } from 'rxjs';
import { DatePipe } from '@angular/common';
import { JOBS_DATASET } from '../fake-job-dataset';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  TipsMatTableComponent,
  TableField,
  ContextMenuItem,
  ToolbarItem,
  TablePagination,
  TableSetting,
  ITableEvent,
  TableEvents,
} from '@tavanasystem/tips-mat-table';

@Component({
  selector: 'app-table-with-inline-edit',
  templateUrl: './table-with-inline-edit.component.html',
  styleUrls: ['./table-with-inline-edit.component.scss'],
  providers: [DatePipe],
})
export class TableWithInlineEditComponent implements OnInit {
  private data: any[] = [];
  @ViewChild(TipsMatTableComponent, { static: true })
  table!: TipsMatTableComponent<any>;
  public dataSource$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  columns: TableField<any>[] = [];
  rowActionMenu: ContextMenuItem[];
  toolbarItems: ToolbarItem[] = [];

  pagination: TablePagination = {
    length: 0,
    pageIndex: 0,
    pageSize: 5,
  };
  Isdisable = false;

  tableSetting: TableSetting = {
    showNoData: true,
    cellStyle: { 'justify-content': 'center' },
    headerStyles: {
      headerBackgroundColor: '#2cb978',
      headerColor: 'whitesmoke',
    },
    alternativeRowStyle: { backgroundColor: '#fafaf6 !important' },
    toolbarStyles: { backgroundColor: 'rgb(153 171 162)' },
  };

  job$ = new BehaviorSubject<any[]>([]);

  constructor(private datePipe: DatePipe, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.initField();
    this.setRowActionMenu();
    this.setToolbarItems();
    this.data = [];
    this.dataSource$.next([]);
    this.pagination.length = this.data.length;
    this.job$.next([...this.jobAllData]);
  }

  get jobAllData(): any[] {
    return JOBS_DATASET.map((job) => {
      return {
        ...job,
        value: job.FIELD1,
        label2: job.jobTitle,
      };
    });
  }

  createNewRowInEditMode() {
    if (this.newRowMode) return;
    this.data = [
      ...this.data,
      {
        option: { newMode: true, fullRowEditMode: true },
      },
    ];
    this.dataSource$.next(this.data);
    this.newRowMode = true;
  }

  saveNewRow() {
    let flag = false;
    this.data = this.table.tvsDataSource.allData.map((r) => {
      if (r.option.fullRowEditMode) {
        if (!r.valid) {
          this._snackBar.open('ROW IS NOT VALID!', 'CLOSE');
          return r;
        }
        flag = true;
        return { ...r.model, ...r, option: { fullRowEditMode: false } };
      } else return r;
    });
    if (flag) {
      this.dataSource$.next(this.data);
      this.newRowMode = false;
    }
  }

  editRow(row) {
    let flag = false;
    this.data = this.table.tvsDataSource.allData.map((r) => {
      if (r.id == row.id) {
        flag = true;
        return {
          ...r,
          option: {
            model: { ...r, option: {} },
            newMode: false,
            fullRowEditMode: true,
          },
        };
      } else return r;
    });
    if (flag) {
      this.dataSource$.next(this.data);
      this.newRowMode = true;
    }
  }

  cancelEditRow(row) {
    let flag = false;
    this.data = this.table.tvsDataSource.allData.map((r) => {
      if (r.id == row.id) {
        flag = true;
        if (!row.option.newMode)
          return {
            ...r.option.model,
            option: { fullRowEditMode: false },
          };
        else return;
      } else return r;
    });
    this.data = this.data.filter((i) => i != null && i != undefined);
    if (flag) {
      this.dataSource$.next(this.data);
      this.newRowMode = false;
    }
  }

  tableEvent(event: ITableEvent) {
    if (event.event == TableEvents.ToolbarItemEvent) {
      switch (event.sender.action) {
        case 'new_record':
          this.createNewRowInEditMode();
          break;
        case 'save_record':
          this.saveNewRow();
          break;
      }
    } else if (event.event == TableEvents.RowActionMenu) {
      switch (event.sender.action) {
        case 'Edit':
          if (this.newRowMode) {
            this._snackBar.open('you can edit one row at a time', 'CLOSE');
            break;
          }
          this.editRow(event.sender.row);
          break;
        case 'Save':
          this.saveNewRow();
          break;
        case 'Delete':
          this.data = this.table.tvsDataSource.allData.filter(
            (row) => row.id != event.sender.row.id
          );
          this.dataSource$.next(this.data);
          break;
        case 'Cancel':
          this.cancelEditRow(event.sender.row);
          break;
      }
    }
  }

  initField() {
    this.columns = [
      {
        name: 'specialityTitle',
        header: 'تخصص',
        cellStyle: { 'justify-content': 'center' },
        inputFieldConfig: {
          id: 'specialityID',
          columnsConfig: [
            {
              id: 'value',
              title: 'کد',
            },
            {
              id: 'label2',
              title: 'عنوان',
            },
            {
              id: 'op',
              title: 'عملیات',
              rowActions: [
                {
                  icon: 'edit',
                },
                {
                  icon: 'delete',
                  color: 'warn',
                },
              ],
            },
          ],
          footerActions: [
            {
              icon: 'refresh',
            },
            {
              icon: 'launch',
              color: 'warn',
            },
          ],
          required: true,
          defaultValue: [0],
          multiple: true,
          fieldType: 'mc-auto-complete',
          labelKey: 'label2',
          onSelectItem: (item, row) => {
            console.log(row);
            // row.personelID = 248129444;
            this.Isdisable = !this.Isdisable;
            console.log(this.Isdisable);
          },
          options: this.job$.asObservable(),
          appendNewData: () => {},
          endTyping: (searched: string) => {
            console.log(111, searched);
            return;
            if (searched == null) searched = '';
            this.job$.next(
              this.jobAllData.filter((i) =>
                i.label2
                  .toLocaleLowerCase()
                  .includes(searched.toLocaleLowerCase())
              )
            );
          },
        },
      },
      {
        name: 'specialityTitle2',
        header: '2تخصص',
        cellStyle: { 'justify-content': 'center' },
        inputFieldConfig: {
          id: 'specialityID2',
          required: true,
          fieldType: 'select',
          multiple: true,
          onSelectItem: (item, row) => {
            console.log(item);
          },
          change: () => {
            console.log(2);
          },
          labelKey: 'label2',
          defaultValue: [2, 3, 1],
          options: of(this.jobAllData),
        },
      },
      {
        name: 'personelID',
        header: 'کد ملی',
        inputFieldConfig: {
          id: 'personelID',
          fieldType: 'input',
          inputType: 'number',
          hasSeperator: true,
          seperator: ',',
          endTyping: (entered, _, row: any) => {
            console.log(row);
          },
          // disabled: true,
          // disabled: () => this.Isdisable,
        },
      },
      {
        name: 'name',
        header: 'نام',
        inputFieldConfig: {
          id: 'name',
          fieldType: 'input',
          inputType: 'text',
          // required: true,
        },
      },
      {
        name: 'lname',
        header: 'نام خانوادگی',
        inputFieldConfig: {
          id: 'lname',
          fieldType: 'input',
          inputType: 'text',
          // required: true,
        },
      },
      {
        name: 'married',
        header: 'وضعیت تاهل',
        inputFieldConfig: {
          id: 'married',
          label: 'متاهل',
          fieldType: 'checkbox',
          // required: true,
          defaultValue: false,
          checkboxLabelPosition: 'after',
          convertor: (id, row, column) => {
            return row[id] ? 'متاهل' : 'مجرد';
          },
          onCheckChange: (event) => {
            console.log(event.event);
          },
        },
      },
      {
        name: 'SalaryEstimate',
        header: 'حقوق',
        inputFieldConfig: {
          id: 'SalaryEstimate',
          fieldType: 'input',
          inputType: 'number',
          min: 0,
          // required: true,
          convertor: (id, row, column) => {
            return row[id];
          },
        },
      },
      {
        name: 'birthdate',
        header: 'تاریخ تولد',
        inputFieldConfig: {
          id: 'birthdate',
          fieldType: 'datepicker',
          inputType: 'number',
          min: 10,
          max: 100,
          // required: true,
          convertor: (id, row, column): string => {
            return this.datePipe.transform(row[id]);
          },
        },
      },
      {
        name: 'jobTitle',
        header: 'زمینه کاری',
        inputFieldConfig: {
          id: 'job',
          // required: true,
          fieldType: 'select',
          onSelectItem: (item, row) => {
            console.log(item);
          },
          options: of([
            { value: 0, label: 'Back' },
            { value: 1, label: 'Front' },
            { value: 2, label: 'DevOps' },
            { value: 3, label: 'Database' },
            { value: 4, label: 'Team Leader' },
          ]),
        },
      },
    ];
  }

  setRowActionMenu() {
    this.rowActionMenu = [
      {
        name: 'Save',
        icon: 'save',
        text: 'ذخیره',
        visible: (row: any) => row.option.fullRowEditMode,
        styles: { color: '#eee', backgroundColor: 'grey' },
      },
      {
        name: 'Cancel',
        icon: 'cancel',
        text: 'انصراف',
        visible: (row: any) => row.option.fullRowEditMode,
        styles: { color: '#eee', backgroundColor: 'grey' },
      },
      {
        name: 'Edit',
        icon: 'edit',
        text: 'ویرایش',
        visible: (row: any) => !row.option.fullRowEditMode,
        styles: { color: '#eee', backgroundColor: 'grey' },
      },
      {
        name: 'Delete',
        icon: 'delete',
        text: 'حذف ردیف',
        styles: { backgroundColor: '#ea4335', color: 'white' },
      },
    ];
  }

  newRowMode = false;
  setToolbarItems() {
    this.toolbarItems = [
      {
        id: 'new_record',
        icon: 'add',
        tooltip: 'ردیف جدید',
        hidden: (item) => this.newRowMode,
        styles: { backgroundColor: '#42ab52', color: 'white' },
        btnType: 'mat-raised-button',
      },
      {
        id: 'save_record',
        icon: 'save',
        tooltip: 'ذخیره',
        hidden: (item) => !this.newRowMode,
        styles: { backgroundColor: '#353535', color: 'white' },
        btnType: 'mat-raised-button',
      },
    ];
  }
}
