import { DataSource } from "@angular/cdk/collections";
import { MatPaginator, MatSort } from "@angular/material";
import { map } from "rxjs/operators";
import { Observable, of as observableOf, merge } from "rxjs";

// TODO: Replace this with your own data model type
export interface ResultPageItem {
  name: string;
  id: number;
  score: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ResultPageItem[] = [
  { id: 1, name: "Hydrogen", score: 1 },
  { id: 2, name: "Helium", score: 5 },
  { id: 3, name: "Lithium", score: 3 },
  { id: 4, name: "Beryllium", score: 5 },
  { id: 5, name: "Boron", score: 5 },
  { id: 6, name: "Carbon", score: 6 },
  { id: 7, name: "Nitrogen", score: 7 },
  { id: 8, name: "Oxygen", score: 9 },
  { id: 9, name: "Fluorine", score: 1 },
  { id: 10, name: "Neon", score: 0 },
  { id: 11, name: "Sodium", score: 0 },
  { id: 12, name: "Magnesium", score: 3 },
  { id: 13, name: "Aluminum", score: 4 },
  { id: 14, name: "Silicon", score: 4 },
  { id: 15, name: "Phosphorus", score: 5 },
  { id: 16, name: "Sulfur", score: 8 },
  { id: 17, name: "Chlorine", score: 8 },
  { id: 18, name: "Argon", score: 10 },
  { id: 19, name: "Potassium", score: 2 },
  { id: 20, name: "Potassium", score: 2 },
  { id: 21, name: "Potassium", score: 2 },
  { id: 22, name: "Potassium", score: 2 },
  { id: 23, name: "Potassium", score: 2 },
  { id: 24, name: "Potassium", score: 2 },
  { id: 25, name: "Potassium", score: 2 },
  { id: 26, name: "Edvin", score: 11 },
  { id: 27, name: "Nico", score: 1 },
  { id: 28, name: "Mr P", score: 1 },
  { id: 29, name: "Jpeg", score: 2 },
  { id: 30, name: "Dr Solve", score: 0 },
  { id: 31, name: "Willebus", score: 0 }
];

/**
 * Data source for the ResultPage view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ResultPageDataSource extends DataSource<ResultPageItem> {
  data: ResultPageItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ResultPageItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ResultPageItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ResultPageItem[]) {
    if (!this.sort.active || this.sort.direction === "") {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === "asc";
      switch (this.sort.active) {
        case "name":
          return compare(a.name, b.name, isAsc);
        case "id":
          return compare(+a.id, +b.id, isAsc);
        case "score":
          return compare(+a.score, +b.score, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
