import Link from 'next/link'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Dashboard from '@material-ui/icons/Dashboard'

const Component: React.FC = () => (
  <Link href='/dashboard'>
    <ListItem button>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItem>
  </Link>
)

export default Component
