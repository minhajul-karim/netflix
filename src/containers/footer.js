import React, { useContext } from 'react'
import { Footer } from '../components'
import { ThemeContext } from '../context/themeContext'

export function FooterContainer() {
  const { isDark } = useContext(ThemeContext)

  return (
    <Footer isDark={isDark}>
      <Footer.Title isDark={isDark}>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#" isDark={isDark}>
            FAQ
          </Footer.Link>
          <Footer.Link href="#" isDark={isDark}>
            Investor Relations
          </Footer.Link>
          <Footer.Link href="#" isDark={isDark}>
            Privacy
          </Footer.Link>
          <Footer.Link href="#" isDark={isDark}>
            Speed Test
          </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#" isDark={isDark}>
            Help Center
          </Footer.Link>
          <Footer.Link href="#" isDark={isDark}>
            Jobs
          </Footer.Link>
          <Footer.Link href="#" isDark={isDark}>
            Cookie Preferences
          </Footer.Link>
          <Footer.Link href="#" isDark={isDark}>
            Legal Notices
          </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#" isDark={isDark}>
            Account
          </Footer.Link>
          <Footer.Link href="#" isDark={isDark}>
            Ways to Watch
          </Footer.Link>
          <Footer.Link href="#" isDark={isDark}>
            Corporate Information
          </Footer.Link>
          <Footer.Link href="#" isDark={isDark}>
            Netflix Originals
          </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#" isDark={isDark}>
            Media Center
          </Footer.Link>
          <Footer.Link href="#" isDark={isDark}>
            Terms of Use
          </Footer.Link>
          <Footer.Link href="#" isDark={isDark}>
            Corporate Information
          </Footer.Link>
          <Footer.Link href="#" isDark={isDark}>
            Contact Us
          </Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text isDark={isDark}>Netflix Bangladesh</Footer.Text>
    </Footer>
  )
}
