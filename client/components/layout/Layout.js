import Link from 'next/link'
import Head from 'next/head'
import Container from '../fela/Container'
import { Provider } from 'react-fela'
import felaRenderer from '../../../lib/felaRenderer'

export default({ children, title = 'Page Title' }) => (
    <div>
      <Head>
        <title>{ title }</title>
      </Head>
      <Provider renderer={felaRenderer}>
      <Container>
        <header>
          <nav>
            <Link href='/' prefetch><a>Home</a></Link> |
            <Link href='/contact' prefetch><a>Contact</a></Link> |
            <Link href='/articles' prefetch><a>Articles</a></Link> |
            <Link href='/admin' prefetch><a>Admin</a></Link>
          </nav>
        </header>

        { children }
        
        <footer>
          {'I`m here to stay'}
        </footer>
      </Container>
      </Provider>
    </div>
)
