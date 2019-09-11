import { Box, Grid, Paper, makeStyles } from '@material-ui/core'
import DefaultPageTemplate from 'components/templates/DefaultPageTemplate'
import { Form } from 'components/organisms/UserCreateFormOrganism'
import React from 'react'
import { useCreateUser } from 'lib/resource/user'

const useStyles = makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  formPaper: {
    padding: theme.spacing(2, 4),
    margin: theme.spacing(2, 0)
  }
}))

const Page: () => JSX.Element = () => {
  const classes = useStyles('')
  const [users, putUser, loading, error] = useCreateUser()
  const handleFormOnSubmit = values => {
    console.log(`create a user: ${JSON.stringify(values, null, 2)}`)
    putUser()
  }

  return (
    <DefaultPageTemplate title="Create a new user">
      <Box>
        <Grid container justify="center">
          <Grid item xs></Grid>
          <Grid item xs={12}>
            <Paper className={classes.formPaper}>
              <Form onSubmit={handleFormOnSubmit} />
            </Paper>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Box>
    </DefaultPageTemplate>
  )
}

export default Page
