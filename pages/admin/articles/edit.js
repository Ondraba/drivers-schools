import React from 'react'
import Link from 'next/link'
import AdminLayout from '../../../client/components/layout/AdminLayout'
import withData from '../../../lib/withData'
import ArticleEditForm from '../forms/ArticleEdit'

export default withData((props) => (
  <AdminLayout>
    <h1>Edit Article</h1>
    <ArticleEditForm {...props.url.query} />
  </AdminLayout>
))
