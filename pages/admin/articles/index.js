import React from 'react'
import Link from 'next/link'
import AdminLayout from '../../../client/components/layout/AdminLayout'
import ArticleList from '../../../client/components/article/ArticleList'
import withData from '../../../lib/withData'

export default withData((props) => (
  <AdminLayout>
    <h1>Articles Page</h1>
    <ArticleList />
  </AdminLayout>
))
