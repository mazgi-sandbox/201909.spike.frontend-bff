import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@material-ui/core'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import React from 'react'
import { makeStyles } from '@material-ui/core'

const validate: (any) => {} = values => {
  const errors = {}
  const tests = {
    userFirstName: new RegExp(/^[a-z]+[a-z0-9-]*$/),
    userLastName: new RegExp(/^[a-z]+[a-z0-9-]*$/),
    userEmail: new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
  }
  const requiredFields = [
    'userFirstName',
    'userLastName',
    'userEmail',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (values.userFirstName && !tests.userFirstName.test(values.userFirstName)) {
    errors['userFirstName'] = `Invalid name, the acceptable string like ${tests.userFirstName}`
  }
  if (values.userLastName && !tests.userLastName.test(values.userLastName)) {
    errors['userLastName'] = `Invalid name, the acceptable string like ${tests.userLastName}`
  }
  if (values.userEmail && !tests.userEmail.test(values.userEmail)) {
    errors['userEmail'] = `Invalid email, the acceptable string like ${tests.userEmail}`
  }
  return errors
}

type ReduxFormFieldPropsMeta = {
  touched?: boolean
  invalid?: boolean
  error?: boolean
}

type ReduxFormFieldProps = {
  meta?: ReduxFormFieldPropsMeta
  name?: string
  label?: string
  placeHolder?: string
  input?: string
  children?: JSX.Element | JSX.Element[]
  custom?: { key: string; value?: string }
}

const renderTextField: (ReduxFormFieldProps) => JSX.Element = ({
  label,
  input,
  placeHolder,
  meta: { touched, invalid, error },
  ...custom
}: ReduxFormFieldProps) => {
  return (
    <TextField
      label={label}
      placeholder={placeHolder}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )
}

const renderSelectField: (ReduxFormFieldProps) => JSX.Element = ({
  name,
  label,
  input,
  meta: { touched, error },
  children,
  ...custom
}: ReduxFormFieldProps) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Select
      inputProps={{
        name: name,
        id: name
      }}
      {...input}
      {...custom}
    >
      {children}
    </Select>
    <FormHelperText>{touched && error}</FormHelperText>
  </FormControl>
)

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}))

const Component: (props: InjectedFormProps) => JSX.Element = (
  props: InjectedFormProps
) => {
  const classes = useStyles('')
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
      <Typography>Input new user information</Typography>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <Field
            name="userFirstName"
            component={renderTextField}
            label="First Name"
            placeHolder="first-name"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="userLastName"
            component={renderTextField}
            label="Last Name"
            placeHolder="last-name"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="userEmail"
            component={renderTextField}
            label="Email"
            placeHolder="email"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <Field
              name="userSex"
              component={renderSelectField}
              label="Sex"
            >
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={2}>Female</MenuItem>
              <MenuItem value={3}>Other</MenuItem>
            </Field>
          </FormControl>
        </Grid>
        <Grid container justify="center">
          <Grid item xs>
            <Button disabled={pristine || submitting} onClick={reset}>
              Clear
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={pristine || submitting}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

const Form = reduxForm({
  form: 'virtualMachineCreateForm',
  validate
})(Component)

export default Form
