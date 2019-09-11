import React from 'react'
import { connect } from 'react-redux';

// m-ui
import { CssBaseline, Container, } from '@material-ui/core'
import { makeStyles, Theme, } from '@material-ui/core/styles'

// components
import DefaultHeaderOrganism from '../../organisms/DefaultHeaderOrganism'
import DefaultAppBarOrganism from '../../organisms/DefaultAppBarOrganism'
import DefaultSideMenuOrganism from '../../organisms/DefaultSideMenuOrganism'
import DefaultFooterOrganism from '../../organisms/DefaultFooterOrganism'

export type Props = {
  title?: string,
  children?: React.ReactNode,
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },

  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}))

const Component: React.FC<Props> = (props: Props) => {
  const classes = useStyles('')
  const { title } = props

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DefaultAppBarOrganism
        title={title}
      />
      <DefaultSideMenuOrganism />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {props.children}
        </Container>
        <DefaultFooterOrganism />
      </main>
    </div>
  )
}

Component.defaultProps = {
  title: '(default page)',
  children: <div>(children)</div>,
}

const mapStateToProps = (state, ownProps) => ({
  sidemenuIsOpen: state.ui.sidemenuIsOpen,
  notifications: state.ui.notifications,
})
export default connect(
  mapStateToProps
)(Component)
