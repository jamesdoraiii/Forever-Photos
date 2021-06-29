import './Footer.css'

import React from 'react'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/foreverphotos/">@foreverphotos</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved.
          {/* <a href="https://thriveweb.com.au/">Thrive</a>. */}
        </span>
      </div>
    </footer>
  </div>
)
