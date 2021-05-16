import React from 'react'
import { Footer } from '../components'

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact me.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link target="_blank" href="https://minhajul-karim.github.io/">
            Portfolio
          </Footer.Link>
          <Footer.Link target="_blank" href="https://twitter.com/minhajul93">
            Twitter
          </Footer.Link>
          <Footer.Link
            target="_blank"
            href="https://www.linkedin.com/in/minhajul/"
          >
            LinkedIn
          </Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Help Center</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link href="#">Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Media Center</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Made with ❤️ in React.</Footer.Text>
      <Footer.Text>Email: minhajul.kaarim@gmail.com</Footer.Text>
    </Footer>
  )
}
