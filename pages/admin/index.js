import React from 'react'
import Link from 'next/link'
import AdminPage from '../../client/components/layout/AdminLayout'
import withData from '../../lib/withData'

export default withData((props) => (
  <AdminPage title="Admin">
    <h1>Admin Page</h1>
  </AdminPage>
))
