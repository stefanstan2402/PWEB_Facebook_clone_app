import { Injectable } from '@angular/core';
import { FilterMetadata, LazyLoadEvent } from 'primeng/api';
//import { TableLazyLoadEvent } from 'primeng/table';

@Injectable()
export class PaginationService {

  // Default row count used by server
  public readonly defaultRowCount = 10;

  // Maximum row count accepted by server
  public readonly maxRowCount = 1000;

  // Full export row count used by server
  public readonly exportRowCount = 1048575;

  // Defines the default page sizes. All sizes must be lower than maxRowCount
  public readonly pageSizes: number[] = [10, 25, 50];

  // Template for showing the total number of rows
  public readonly pageReportTemplate: string = "De la {first} până la {last} (din totalul de {totalRecords} înregistrări)";

  private _currentPageSize: number;
  private _currentPageNumber: number;
  private _sortField: string;
  private _sortOrder: number;
  private _orderBy: string;

  private _filter: any;
  // Current page size
  public get currentPageSize(): number {
    return this._currentPageSize;
  }

  private set currentPageSize(value: number) {
    this._currentPageSize = value;
  }

  // Current page number (starting with zero)
  public get currentPageNumber(): number {
    return this._currentPageNumber;
  }

  private set currentPageNumber(value: number) {
    this._currentPageNumber = value;
  }

  // Sort field
  public get sortField(): string {
    return this._sortField;
  }

  private set sortField(value: string) {
    this._sortField = value;
  }

  // Sort order
  public get sortOrder(): number {
    return this._sortOrder;
  }

  private set sortOrder(value: number) {
    this._sortOrder = value;
  }

  // Multiple sorting criteria
  public get orderBy(): string {
    return this._orderBy;
  }

  private set orderBy(value: string) {
    this._orderBy = value;
  }


  public get Filter(): string {
    return this._filter;
  }

  private set Filter(value: string) {
    this._filter = value;
  }

  constructor() { }

  public initializeDefault() {
    this.initialize({
      rowOffset: 0,
      rowCount: this.defaultRowCount,
      orderBy: null
    });
  }

  // Initializes the pagination parameters using the filter
  public initialize(instance: PaginationParameters) {
    this.currentPageSize = this.getPageSize(instance);
    this.currentPageNumber = this.getCurrentPage(instance);
    this.sortField = this.getSortField(instance);
    this.sortOrder = this.getSortOrder(instance);
    this.orderBy = instance.orderBy;
    this._filter = instance.filter;
  }

  // Updates the parameters after a grid event
  public update(event: LazyLoadEvent) {
    const instance: PaginationParameters = {
      rowOffset: event.first,
      rowCount: event.rows,
      orderBy: (event.sortOrder < 0 ? "-" : "") + event.sortField,
      filter: JSON.stringify(event.filters)
    }

    this.initialize(instance);
  }

  // Adds the current pagination parameters to an existing object
  public addParameters(data) {
    data.rowOffset = this.getRowOffset(this.currentPageSize, this.currentPageNumber);
    data.rowCount = this.currentPageSize;
    data.orderBy = this.orderBy;
    data.filter = this._filter;
    return data;
  }

  private getPageSize(value: PaginationParameters): number {
    return value.rowCount ?? this.defaultRowCount;
  }

  private getCurrentPage(value: PaginationParameters): number {
    const rowOffset: number = value.rowOffset ?? 0;
    const rowCount: number = value.rowCount ?? this.defaultRowCount;
    return rowCount === 0 ? 1 : Math.floor(rowOffset / rowCount) + 1;
  }

  private getSortField(value: PaginationParameters): string {
    if (value.orderBy && value.orderBy !== 'null') {
      const val = value.orderBy;
      if (val.startsWith("-"))
        return val.substring(1);
      else
        return val;
    }
    return null;
  }

  private getSortOrder(value: PaginationParameters): number {
    if (value.orderBy && value.orderBy !== 'null') {
      const val = value.orderBy;
      if (val.startsWith("-"))
        return -1;
      else
        return 1;
    }
    return 0;
  }

  private getRowOffset(pageSize: number, currentPage: number): number {
    return pageSize * (currentPage - 1);
  }

  public get currentRowOffset(): number {
    return this.currentPageSize * (this.currentPageNumber - 1);
  }
}

export interface PaginationParameters {
  rowOffset?: number;
  rowCount?: number;
  orderBy?: string;
  filter?: string;
}
