import Layout from '../components/Layout'
import { Link } from 'gatsby'
import PageHeader from '../components/PageHeader'
import React from 'react'
import { graphql } from 'gatsby'

// Export Template for use in CMS preview
export const PricingPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body
}) => (
  <main className="PricingPage">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <div class="Content">
          <div class="Accordion--item">
            <h2 class="pricing-title">Tier 1</h2>
            <p>
              <strong>Price:</strong> $400 for 3 hours rental. $100 for each
              additional hour.
            </p>
            <p>
              <strong>Includes:</strong>
            </p>
            <ul>
              <li>
                Choice of photo backdrop (black, white, red, purple, gold, all
                sequence).
              </li>
              <li>Digital Instant Delivery of Photos.</li>
              <li>Digital Gallery of All Photos.</li>
              <li>Professional Photobooth Operator.</li>
            </ul>
          </div>

          <div class="Accordion--item">
            <h2 class="pricing-title">Tier 2</h2>
            <p>
              <strong>Price:</strong> $450 for 3 hours rental. $100 for each
              additional hour.
            </p>
            <p>
              <strong>Includes:</strong>
            </p>
            <ul>
              <li>All features included with Tier 1.</li>
              <li>Customizable Prints.</li>
              <li>Unlimited prints provided in various sizes.</li>
            </ul>
          </div>

          <div class="Accordion--item">
            <h2 class="pricing-title">Tier 3</h2>
            <p>
              <strong>Price:</strong> $500 for 3 hours rental. $100 for each
              additional hour.
            </p>
            <p>
              <strong>Includes:</strong>
            </p>
            <ul>
              <li>All features included with Tiers 1 and 2.</li>
              <li>Memory book.</li>
            </ul>
          </div>
        </div>
        <Link
          className="Button Form--SubmitButton pricing-button"
          to="/contact/"
          value="Send"
        >
          Book Now
        </Link>
      </div>
    </section>
  </main>
)

const PricingPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <PricingPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

const accordion = [
  { title: 'Tier 1', description: `test` },
  { title: 'Tier 2', description: 'test' },
  { title: 'Tier 3', description: 'test' }
]
export default PricingPage

export const pageQuery = graphql`
  query PricingPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
