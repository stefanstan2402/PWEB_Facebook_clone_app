export interface GridInfo<T> {
    // Lista liniilor de aprobare afisate in grid
    data?: T[];

    // Indica faptul ca datele au fost incarcate
    loaded?: boolean;

    // Filtrele globale utilizate in grid
    gridGlobalFilters?: string[],

    // Liniile selectate in grid
    selectedRows?: T[];

    // Linia selectata in grid
    selectedRow?: T;

    // Numarul de linii (in cazul lazyload)
    totalRows: number;

    // Numarul de linii initial (in cazul lazyload, dupa event de filtrare)
    initialTotalRecords?: number;
}