import Head from 'next/head'
import { Provider } from 'react-fela'
import felaRenderer from '../../../lib/felaRenderer'

export default({ children, title = 'Page Title' }) => (
    <div>
      <Head>
        <title>{ title }</title>
      </Head>
      <Provider renderer={felaRenderer}>
        { children }
      </Provider>
    </div>
)
