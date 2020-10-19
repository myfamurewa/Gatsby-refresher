import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import Layout from "../components/layout"

const About = ({ data }) => {
  return (
    <Layout>
     Here's a little bit about me 
    </Layout>
  )
}

export default About