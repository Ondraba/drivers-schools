import React from 'react'
import Link from 'next/link'
import AdminLayout from '../../client/components/layout/AdminLayout'
import withData from '../../lib/withData'

export default withData((props) => (
  <AdminLayout>
    <h1>Admin Page</h1>
  </AdminLayout>
))
