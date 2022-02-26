import React from "react"
import styled from "styled-components"
import {ButtonLink} from "../components"
import {BREAKPOINT} from "../utils/constants"

const Container = styled.footer`
  font-size: 17px;
  margin-top: 20vh;
  padding-bottom: 10vh;
  padding-top: 5vh;
  text-align: left;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
  }
`

export function Footer() {
  return (
    <Container>
      <ButtonLink
        href="https://twitter.com/carrds_xyz"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </ButtonLink>
    </Container>
  )
}
