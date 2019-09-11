import DefaultPageTemplate from 'components/templates/DefaultPageTemplate'
import React from 'react'
import { useRouter } from 'next/router'

const Page: () => JSX.Element = () => {
  const router = useRouter()
  const { id } = router.query
  return <DefaultPageTemplate title={`(user: ${id})`}></DefaultPageTemplate>
}

export default Page
