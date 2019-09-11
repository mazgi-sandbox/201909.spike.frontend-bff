import Link from 'next/link'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import People from '@material-ui/icons/People'

const Component: React.FC = () => (
  <Link href='/users'>
    <ListItem button>
      <ListItemIcon>
        <People />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
  </Link>
)

export default Component
