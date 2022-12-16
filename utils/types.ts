export type formatPriceRV = string | null | undefined;

export interface formatDateParams {
  start: string | null;
  end: string | null;
}
export type formatDateRV = string | null | Date;

interface SeparateTimeFormat {
    hour: number | null;
    minute: number | null;
}
export interface formatTimeParams {
  start: SeparateTimeFormat | null;
  end: SeparateTimeFormat | null;
}
export type formatTimeRV = string | null;
