import Link from 'next/link'
import Head from 'next/head'

export default({ children, title = 'Full Page Template' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      Full Page Template!
    </header>
    { children }
    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
)
