import { GridOption } from './models/index';
export declare class SlickPaginationCustomElement {
    grid: any;
    gridPaginationOptions: GridOption;
    private _gridPaginationOptions;
    dataFrom: number;
    dataTo: number;
    itemsPerPage: number;
    pageCount: number;
    pageNumber: number;
    totalItems: number;
    paginationCallback: Function;
    paginationPageSizes: number[];
    bind(binding: any, contexts: any): void;
    ceil(number: number): number;
    onChangeItemPerPage(event: any): void;
    changeToFirstPage(event: any): void;
    changeToLastPage(event: any): void;
    changeToNextPage(event: any): void;
    changeToPreviousPage(event: any): void;
    gotoFirstPage(): void;
    refreshPagination(): void;
    onPageChanged(event: Event, pageNumber: number): Promise<void>;
    recalculateFromToIndexes(): void;
}