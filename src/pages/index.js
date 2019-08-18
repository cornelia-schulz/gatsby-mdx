import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layoutLayout'

export default () => (
    <Layout>
<h1>Hello Friends!</h1>
<p>This is my homepage</p>
<Link to="/about">Learn about me &rarr;</Link>
</Layout>
)
