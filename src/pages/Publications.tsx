import React from 'react';
import Layout from '@theme/Layout';
import Page from './Page';

export default function Publications() {
  return (
    <Layout title="Publications" description="Sage Publications">
      <Page
        style={{
          height: '50vh',
          fontSize: '20px',
        }}>
          <h1>Publications</h1>

          [publications go here]
      </Page>
    </Layout>
  );
}


