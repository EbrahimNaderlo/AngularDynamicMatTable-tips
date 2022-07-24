import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { PersianLanguage } from './persian.language';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TipsMatTableModule } from '@tavanasystem/tips-mat-table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  MatNativeDateModule,
} from '@angular/material/core';
import {
  PERSIAN_DATE_FORMATS,
  MaterialPersianDateAdapter,
} from './material.persian-date.adapter';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { TableWithExpandComponent } from './table-with-expand/table-with-expand.component';
import { ExpandTableComponent } from './table-with-expand/expand-table/expand-table.component';
import { TableWithInlineEditComponent } from './table-with-inline-edit/table-with-inline-edit.component';
import { ExpandControlCellComponent } from './table-with-expand/expand-control-cell/expand-control-cell.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TableWithSelectionComponent } from './table-with-selection/table-with-selection.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TableWithSimpleFilterComponent } from './table-with-simple-filter/table-with-simple-filter.component';
import { TableWithHiddenColumnsComponent } from './table-with-hidden-columns/table-with-hidden-columns.component';
import { TableWithCustomColorComponent } from './table-with-custom-color/table-with-custom-color.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatInputModule } from '@angular/material/input';

export function languageIntl() {
  return new PersianLanguage();
}

const MATERIAL_MODLULES = [
  MatIconModule,
  MatTabsModule,
  MatTableModule,
  MatButtonModule,
  MatSliderModule,
  MatInputModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatButtonToggleModule,
];
@NgModule({
  declarations: [
    AppComponent,
    SimpleTableComponent,
    ExpandTableComponent,
    TableWithExpandComponent,
    ExpandControlCellComponent,
    TableWithSelectionComponent,
    TableWithInlineEditComponent,
    TableWithCustomColorComponent,
    TableWithSimpleFilterComponent,
    TableWithHiddenColumnsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    TipsMatTableModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    ...MATERIAL_MODLULES,
  ],
  // providers: [{ provide: TableIntl, useFactory: languageIntl }],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: DateAdapter,
      deps: [MAT_DATE_LOCALE],
      useClass: MaterialPersianDateAdapter,
    },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS },
    DatePipe,
  ],
})
export class AppModule {}
