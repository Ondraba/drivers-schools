import React from 'react'
import Link from 'next/link'
import FullPageTemplate from '../../../client/admin/layout/FullPageTemplate'
import DriveSchoolsContainer from '../../../client/admin/driveSchools/containers/DriveSchoolsContainer'
import withData from '../../../lib/withData'

export default withData((props) => (
  <FullPageTemplate title="Admin">
    <DriveSchoolsContainer />
  </FullPageTemplate>
))
