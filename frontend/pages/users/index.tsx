import DefaultPageTemplate from 'components/templates/DefaultPageTemplate'
import React from 'react'
import UserListOrganism from 'components/organisms/UserListOrganism'

const Page: () => JSX.Element = () => {
  return (
    <DefaultPageTemplate title="Users">
      <UserListOrganism />
    </DefaultPageTemplate>
  )
}

export default Page
