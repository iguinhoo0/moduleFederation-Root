/* eslint-disable import/no-anonymous-default-export */
import React from "react";
//@ts-ignore
//@ts-ignore
import CounterAppOne from "app1/CounterAppOne";
import { Container, Header, Navigation, Box } from './style'

export default () => (
  <div style={{ margin: "20px" }}>
    <React.Suspense fallback="Loading header...">
      <Container>
        <Header>Header Root</Header>
        <Box>
        <Navigation>Nav Root</Navigation>
        <CounterAppOne value={10000} />
        </Box>
      </Container>
    </React.Suspense>
  </div>
);
