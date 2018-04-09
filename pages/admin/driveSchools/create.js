import React from 'react'
import Link from 'next/link'
import FullPageTemplate from '../../../client/headquarter/layout/FullPageTemplate'
import CreateDriveSchool from '../../../client/headquarter/driveSchools/components/CreateDriveSchool'
import withData from '../../../lib/withData'

export default withData((props) => (
  <FullPageTemplate>
    <h1>Create driveSchool</h1>
    <CreateDriveSchool />
  </FullPageTemplate>
))
