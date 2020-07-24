import Head from 'next/head'
import UploadList from '../src/container/uploadList'

import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Head>
      <main>
        <div>
          <Menu fixed='top' inverted widths={6}>
            <Container>
              <Menu.Item as='a'>Mark8</Menu.Item>
            </Container>
          </Menu>
          <Grid columns={1}>
            <Grid.Row>
              <UploadList />
            </Grid.Row>
          </Grid>
        </div>
      </main>
    </div>
  )
}

