import React from 'react'
import Link from 'next/link'
import FullPageTemplate from '../../../client/headquarter/layout/FullPageTemplate'
import CreateGame from '../../../client/headquarter/games/components/CreateGame'
import withData from '../../../lib/withData'

export default withData((props) => (
  <FullPageTemplate>
    <h1>Create game</h1>
    <CreateGame />
  </FullPageTemplate>
))
