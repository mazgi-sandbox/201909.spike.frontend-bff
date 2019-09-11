import React from 'react'
import clsx from 'clsx'

// m-ui
import { Grid, Paper, } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

// components
import DefaultPageTemplate from 'components/templates/DefaultPageTemplate'
import ResourceListOrganism from 'components/organisms/ResourceListOrganism'

import Chart from './Chart';
import Deposits from './Deposits';

export type Props = {
  title?: string,
  children?: React.ReactNode,
}

const useStyles = makeStyles((theme: Theme) => ({
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
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <DefaultPageTemplate
      title={title}
    >
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Chart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Deposits />
          </Paper>
        </Grid>
        {/* Resources */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResourceListOrganism />
          </Paper>
        </Grid>
      </Grid>
    </DefaultPageTemplate>
  )
}

export default Component
