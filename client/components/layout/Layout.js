import { Provider } from 'react-fela'
import felaRenderer from '../../../lib/felaRenderer'
import Link from 'next/link'
import Head from 'next/head'
import Container from '../fela/Container'

export default({ children, title = 'Page Title' }) => (
  <Provider renderer={felaRenderer}>
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Arial';
        }
      `}</style>


      <Container>
        <header>
          <nav>
            <Link href='/' prefetch><a>Home</a></Link> |
            <Link href='/contact' prefetch><a>Contact</a></Link> |
            <Link href='/articles' prefetch><a>Articles</a></Link> |
            <Link href='/admin' prefetch><a>Admin</a></Link>
          </nav>
        </header>
      </Container>
      <Container>
        { children }
      </Container>
      <Container>
        <footer>
          {'I`m here to stay'}
        </footer>
      </Container>
    </div>
  </Provider>
)
