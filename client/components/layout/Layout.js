import Link from 'next/link'
import ContainerFluid from '../fela/ContainerFluid'
import AppBar from '../layout/AppBar'
import Footer from '../layout/Footer'

export default({ children }) => (
  <div>
    <AppBar>
      <Link href='/' prefetch><a style={{ padding: '20px 15px', color: '#fff', textDecoration: 'none' }}>Home</a></Link>
      <Link href='/contact' prefetch><a style={{ padding: '20px 15px', color: '#fff', textDecoration: 'none' }}>Contact</a></Link>
      <Link href='/articles' prefetch><a style={{ padding: '20px 15px', color: '#fff', textDecoration: 'none' }}>Articles</a></Link>
      <Link href='/admin' prefetch><a style={{ padding: '20px 15px', color: '#fff', textDecoration: 'none' }}>Admin</a></Link>
    </AppBar>

    { children}

    <Footer>
      <p style={{ marginBottom: 0, textAlign: 'center' }}>Technické vzdělání</p>
      <p style={{ marginTop: 0, marginBottom: 0, textAlign: 'center' }}>&copy; 2017</p>
    </Footer>
  </div>
)
