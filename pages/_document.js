import Document, { Head, Main, NextScript } from 'next/document'
import { renderToSheetList } from 'fela-dom'
import felaRenderer from '../lib/felaRenderer'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    felaRenderer.renderStatic('html,body{box-sizing:border-box;margin:0;padding:0;font-family:Arial}')
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
