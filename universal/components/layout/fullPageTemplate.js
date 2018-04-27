import Head from "next/head";
import Button from "react-bootstrap/lib/Button";

export default ({ children, title = "Autoškoly Kolín" }) => (
  <div id="globalWrapper" style={styles.globalWrapper}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous"
      />
    </Head>
    <header style={styles.header}>
        <h1 style={styles.logo}><span style={styles.logo.p1}>zprava</span><span style={styles.logo.p2}>dobry</span><span style={styles.logo.p1}>.</span></h1>
    </header>
    <div>
      {children}
    </div> 
    <footer style={styles.footer}>Footer</footer>
  </div>
);

const styles = {
  globalWrapper:{
    paddingLeft: "60px",
    paddingRight: "60px"
  },
  header:{
    height: "120px",
    paddingTop: "10px"
  },
  logo: {
    fontWeight: "bold",
    fontSize: "54px",
    p1 :{
      color: "#c94a38"
    },
    p2: {
      color: "#f48f00"
    }
  },
  footer: {
    float: "left",
    width: "100%"
  }
};
