import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  max-width: 62.5rem;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: black;
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" aria-label="home">
        <StyledLogo>MF.</StyledLogo>
      </Link>
      <Link to="/projects" aria-label="projects">
        <h2>Projects</h2>
      </Link>
      <Link to="/about" aria-label="projects">
        <h2>About</h2>
      </Link>
      <Link to="/blog" aria-label="projects">
        <h2>Blog</h2>
      </Link>
      <Link to="/contact" aria-label="projects">
        <h2>Contact</h2>
      </Link>
    </StyledHeader>
  )
}

export default Header