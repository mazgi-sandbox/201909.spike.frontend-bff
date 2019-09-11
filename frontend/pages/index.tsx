import { NextPage, NextPageContext } from 'next'
import React from 'react'
import Router from 'next/router'

const Page: NextPage<{}, {}> = () => {
  return <div>redirect to your dashboard</div>
}

Page.getInitialProps = async ({ res }: NextPageContext) => {
  if (res) {
    res.writeHead(302, {
      Location: '/dashboard'
    })
    res.end()
  } else {
    Router.push('/dashboard')
  }
  return {}
}

export default Page
