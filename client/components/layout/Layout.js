import Link from 'next/link'
import Head from 'next/head'

export default({ children, title = 'Page Title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/' prefetch><a>Home</a></Link> |
        <Link href='/contact' prefetch><a>Contact</a></Link> |
        <Link href='/articles' prefetch><a>Articles</a></Link>
      </nav>
    </header>

    { children }

    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
)
