import {
  Add,
  AddBox,
  ArrowUpward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  Delete,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn
} from '@material-ui/icons'
import React, { forwardRef } from 'react'
import MaterialTable from 'material-table'
import ObjectStorage from 'lib/resource/object-storage/virtual'
import Router from 'next/router'

function createData() {
  const id = Math.random()
    .toString(36)
    .substring(6)
  const location = 'us-central-1'
  const tags = ['tag1', 'tag2']
  const obj = new ObjectStorage(id, location, tags)
  return obj
}

const rows = [createData(), createData(), createData(), createData()]

export type Props = {
  rows?: Array<any>
}

const Component: React.FC<Props> = (props: Props) => {
  const rows = props.rows
  return (
    <MaterialTable
      icons={{
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => (
          <DeleteOutline {...props} ref={ref} />
        )),
        DetailPanel: forwardRef((props, ref) => (
          <ChevronRight {...props} ref={ref} />
        )),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => (
          <FirstPage {...props} ref={ref} />
        )),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => (
          <ChevronRight {...props} ref={ref} />
        )),
        PreviousPage: forwardRef((props, ref) => (
          <ChevronLeft {...props} ref={ref} />
        )),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => (
          <ArrowUpward {...props} ref={ref} />
        )),
        ThirdStateCheck: forwardRef((props, ref) => (
          <Remove {...props} ref={ref} />
        )),
        ViewColumn: forwardRef((props, ref) => (
          <ViewColumn {...props} ref={ref} />
        ))
      }}
      title="all vms"
      columns={[
        { title: 'ID', field: 'id' },
        { title: 'Location', field: 'location' },
        { title: 'Tags', field: 'tags' }
      ]}
      data={rows}
      options={{
        filtering: true
      }}
      actions={[
        {
          icon: (): React.ReactElement => <Edit />,
          tooltip: 'Edit VM',
          onClick: (event, row) => alert('You can edit ' + row['name'])
        },
        {
          icon: (): React.ReactElement => <Delete />,
          tooltip: 'Delete VM',
          onClick: (event, row) => alert('You can delete ' + row['name'])
        },
        {
          icon: (): React.ReactElement => <Add />,
          tooltip: 'Create new VM',
          isFreeAction: true,
          onClick: event => Router.push('/resources/new')
        }
      ]}
    />
  )
}
Component.defaultProps = {
  rows: rows
}

export default Component
