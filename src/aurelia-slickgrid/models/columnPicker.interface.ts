import { Column } from './column.interface';

export interface ColumnPicker {
  /** Defaults to "Columns" which is the title that shows up over the columns */
  columnTitle?: string;

  /** Animation fade speed when opening/closing the column picker */
  fadeSpeed?: number;

  /** Defaults to "Force fit columns" which is 1 of the last 2 checkbox title shown at the end of the picker list */
  forceFitTitle?: string;

  /** Defaults to True, show/hide 1 of the last 2 checkbox at the end of the picker list */
  hideForceFitButton?: boolean;

  /** Defaults to True, show/hide 1 of the last 2 checkbox at the end of the picker list */
  hideSyncResizeButton?: boolean;

  /** Defaults to "Synchronous resize" which is 1 of the last 2 checkbox title shown at the end of the picker list */
  syncResizeTitle?: string;

  /** Callback method to override the column name output used by the ColumnPicker/GridMenu. */
  headerColumnValueExtractor?: (column: Column) => string;

  // --
  // Events

  /** Fired after extension (control) is registered by SlickGrid */
  onExtensionRegistered?: (addon: any) => void;

  /** SlickGrid Event fired when any of the columns checkbox selection changes. */
  onColumnsChanged?: (e: Event, args: { columns: Column[]; grid: any; }) => void;
}
