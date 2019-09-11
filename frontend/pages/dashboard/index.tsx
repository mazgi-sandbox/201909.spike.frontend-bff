import { Grid, Paper } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import DefaultPageTemplate from 'components/templates/DefaultPageTemplate'
import React from 'react'
import ResourceListOrganism from 'components/organisms/ResourceListOrganism'
import clsx from 'clsx'

import Chart from 'components/templates/DashboardTemplate/Chart'
import Deposits from 'components/templates/DashboardTemplate/Deposits'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  }
}))

const Page: () => JSX.Element = () => {
  const classes = useStyles('')
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <DefaultPageTemplate title="Projects">
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

export default Page
