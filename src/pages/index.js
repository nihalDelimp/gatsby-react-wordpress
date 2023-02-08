import { graphql } from "gatsby"
import * as React from "react"
import Header from "../components/Header"



const IndexPage = ({ data }) => {
  console.log(data, "Datattatatta")
  return (
    <div>
      <Header />

    </div>
  )
}

export default IndexPage
export const query = graphql`
  query ($databaseId: Int!) {
    wpPage(databaseId: { eq: $databaseId }) {
      title
      content
    }
}`
