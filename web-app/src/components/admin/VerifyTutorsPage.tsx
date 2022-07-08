import * as React from 'react';
// @ts-ignore
import { DataGrid } from '@mui/x-data-grid';
// @ts-ignore
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function VerifyTutorsPage() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  const columns = React.useMemo(
    () =>
      data.columns.map((col: { field: string; }) =>
        col.field === 'rating' ? { ...col, filterable: false } : col,
      ),
    [data.columns],
  );

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid {...data} columns={columns} />
    </div>
  );
}
