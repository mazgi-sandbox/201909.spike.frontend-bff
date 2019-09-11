import React from 'react'
import clsx from 'clsx'

// redux
import { useSelector, useDispatch } from 'react-redux'
import {
  sidemenuOpenMenu,
  notificationPutMessage,
  notificationReadMessage
} from 'lib/redux/ui'

// m-ui
import {
  Toolbar,
  IconButton,
  AppBar,
  Typography,
  Badge
} from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import * as icons from '@material-ui/icons'

export type Props = {
  title?: string,
}

const drawerWidth = 240
const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },

  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },

  title: {
    flexGrow: 1,
  },
}))

const Component: React.FC<Props> = (props: Props) => {
  const classes = useStyles('')
  const dispatch = useDispatch()
  const sidemenuIsOpen = useSelector(state => !!state.ui.sidemenuIsOpen)
  const notifications = useSelector(state => state.ui.notifications)
  const handleDrawerOpen = () => {
    dispatch(sidemenuOpenMenu())
  }
  const { title } = props

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, sidemenuIsOpen && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, sidemenuIsOpen && classes.menuButtonHidden)}
        >
          <icons.Menu />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          {title}
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={notifications.length} color="secondary">
            <icons.Notifications />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

Component.defaultProps = {
  title: '(title)',
}

export default Component
