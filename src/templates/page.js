import * as React from "react"
import { graphql } from "gatsby"
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import parse from 'html-react-parser';

const Page = ({ data }) => {

  const page = data.wpPage
  console.log("Nihalll", page)
  return (
    <article>
      <h1>{page.title}</h1>
      <h1>{parse(page.content)}</h1>
      <div>{page.image}</div>

    </article>
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