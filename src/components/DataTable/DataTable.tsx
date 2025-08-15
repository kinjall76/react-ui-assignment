import React from 'react';

export type Column<T> = {
  key: keyof T;
  header: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
};

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  selectable?: boolean;
}

export function DataTable<T extends Record<string, any>>({ data, columns, selectable }: DataTableProps<T>) {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr>
          {selectable && <th></th>}
          {columns.map((col) => <th key={String(col.key)} className="border p-2">{col.header}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {selectable && <td className="border p-2"><input type="checkbox" /></td>}
            {columns.map((col) => <td key={String(col.key)} className="border p-2">{String(row[col.key])}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
