import React from 'react'
import Link from 'next/link'
import AdminLayout from '../../../client/components/layout/AdminLayout'
import withData from '../../../lib/withData'
import ArticleNewForm from '../forms/ArticleNew'

export default withData((props) => (
  <AdminLayout>
    <h1>Article Create Page</h1>
    <ArticleNewForm />
  </AdminLayout>
))
