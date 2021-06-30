import { TableCols } from '../../modals/crud'

export const TABLE_COLS_CONFIG: TableCols[] = [
  {
    title: 'No',
    accessor: 'id',
    sortable: true,
  },
  {
    title: 'Name',
    accessor: 'name',
    sortable: true,
  },
  {
    title: 'No of items',
    accessor: 'noOfItems',
    sortable: true,
  },
]
