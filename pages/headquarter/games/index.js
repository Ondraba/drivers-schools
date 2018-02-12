import React from 'react'
import Link from 'next/link'
import FullPageTemplate from '../../../client/headquarter/layout/FullPageTemplate'
import GamesContainer from '../../../client/headquarter/games/containers/GamesContainer'
import withData from '../../../lib/withData'

export default withData((props) => (
  <FullPageTemplate title="Admin">
    <GamesContainer />
  </FullPageTemplate>
))
