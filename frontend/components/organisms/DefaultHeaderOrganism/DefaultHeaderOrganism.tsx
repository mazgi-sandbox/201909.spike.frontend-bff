import { useState } from "react"
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, makeStyles, Theme } from "@material-ui/core"
import AccountCircle from '@material-ui/icons/AccountCircle'

export type Props = {
  title?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Component: React.FC<Props> = (props: Props) => {
  const classes = useStyles('')
  const [user, setUser] = useState('a dummy user')
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null)

  const userAccountIconClickHander = (event: React.MouseEvent<HTMLElement>) => {
    console.log(`userAccountIconClickHander: ${event.currentTarget}`)
    setAnchorElement(event.currentTarget)
  }

  const closeItemClickHander = () => {
    console.log(`closeItemClickHander`)
    setAnchorElement(null)
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography className={classes.title} component="h1" variant="h6" color="inherit" noWrap>
          {props.title}
        </Typography>
        {
          user && (
            <div>
              <IconButton
                color='inherit'
                aria-label='current user account'
                aria-controls='appbar-current-user'
                aria-haspopup='true'
                onClick={userAccountIconClickHander}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='appbar-current-user'
                open={Boolean(anchorElement)}
                anchorEl={anchorElement}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem
                  onClick={closeItemClickHander}
                >
                  Close
                </MenuItem>
              </Menu>
            </div>
          )
        }
      </Toolbar>
    </AppBar>
  )
}

Component.defaultProps = {
  title: '<title>'
}

export default Component
