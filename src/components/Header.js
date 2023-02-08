import * as React from "react"
import { Link } from "gatsby"


import MainNav from "./MainNav"

const Header = () => (
  <header
    style={{
      background: `lightblue`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `red`,
            textDecoration: `none`,
          }}
        >

        </Link>
      </h1>
    </div>
    <MainNav />
  </header>
)



export default Header