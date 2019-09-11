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
import React, { forwardRef, useEffect } from 'react'
import MaterialTable from 'material-table'
import Router from 'next/router'
import { useUsers } from 'lib/resource/user'

const Component: React.FC = () => {
  const [users, getUsers, loading, error] = useUsers()

  useEffect(() => {
    getUsers()
  }, [])

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
      title="all users"
      columns={[
        { title: 'First Name', field: 'firstName' },
        { title: 'Last Name', field: 'lastName' },
        { title: 'Email', field: 'email' },
      ]}
      data={users}
      options={{
        filtering: true
      }}
      actions={[
        {
          icon: (): React.ReactElement => <Edit />,
          tooltip: 'Edit user',
          onClick: (event, row) => alert('You can edit ' + row['email'])
        },
        {
          icon: (): React.ReactElement => <Delete />,
          tooltip: 'Delete User',
          onClick: (event, row) => alert('You can delete ' + row['email'])
        },
        {
          icon: (): React.ReactElement => <Add />,
          tooltip: 'Create new user',
          isFreeAction: true,
          onClick: event => Router.push('/users/new')
        }
      ]}
    />
  )
}

export default Component
