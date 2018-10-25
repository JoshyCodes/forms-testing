import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './organism/header';
import Footer from './organism/footer';

import '../styles/layout.css';
import '../styles/style.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'A nifty little Helpdesk for CreativeFuse' }
          ]}
        >
        <html lang="en" />
        </Helmet>

        <Header/>

        <div id="content" className="o-content">
          {children}
        </div>

        <Footer/>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
