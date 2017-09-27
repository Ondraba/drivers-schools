import Document, { Head, Main, NextScript } from 'next/document'
import { renderToSheetList } from 'fela-dom'
import felaRenderer from '../lib/felaRenderer'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const sheetList = renderToSheetList(felaRenderer)
    felaRenderer.clear()

    return {
      ...page,
      sheetList
    }
  }

  render () {
    const styleNodes = this.props.sheetList.map(({ type, media, css }) =>
      <style
        dangerouslySetInnerHTML={{ __html: css }}
        data-fela-type={type}
        key={`${type}-${media}`}
        media={media}
      />,
    )

    return (
      <html>
        <Head>
          {felaRenderer.renderStatic(`
            * {
              box-sizing: border-box  
            }

            body, html {
              margin: 0;
              padding: 0;
              width: 100%;
              height: 100%;
              font-family: 'Arial';
            }

            
          `)}
          {styleNodes}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
