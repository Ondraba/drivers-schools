import Head from 'next/head'
import Link from 'next/link'
import Container from '../fela/Container'
import { Provider } from 'react-fela'
import felaRenderer from '../../../lib/felaRenderer'
import AppBar from '../layout/AppBar'

export default({ children, title = 'Page Title' }) => (
    <div>
      <Head>
        <title>{ title }</title>
      </Head>
      <Provider renderer={felaRenderer}>
        <Container>
          <AppBar>
            <Link href='/' prefetch><a style={{ padding: '20px 15px', color: '#fff', textDecoration: 'none' }}>Home</a></Link>
            <Link href='/contact' prefetch><a style={{ padding: '20px 15px', color: '#fff', textDecoration: 'none' }}>Contact</a></Link>
            <Link href='/articles' prefetch><a style={{ padding: '20px 15px', color: '#fff', textDecoration: 'none' }}>Articles</a></Link>
            <Link href='/admin' prefetch><a style={{ padding: '20px 15px', color: '#fff', textDecoration: 'none' }}>Admin</a></Link>
          </AppBar>

          { children }

          <footer>
            <div style={{ textAlign: 'center' }}>
              <p style={{ marginBottom: 0 }}>Technické vzdělání</p>
              <p style={{ marginTop: 0, marginBottom: 0 }}>&copy; 2017</p>
            </div>
          </footer>
        </Container>
      </Provider>
    </div>
)
