import * as React from "react"
import { graphql } from "gatsby"
import parse from 'html-react-parser';
import './stylestatic.css';
const Page = ({ data }) => {
  const page = data.wpPage
  return (
    <article>
      {page.content !== null && parse(page.content)}
    </article >
  )
}
export default Page
export const query = graphql`
  query ($databaseId: Int!) {
    wpPage(databaseId: { eq: $databaseId }) {
      title
      content
    }
}
`