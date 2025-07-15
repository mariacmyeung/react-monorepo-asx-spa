import React, { useState } from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { Dialog } from '@ui';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Row>
        <Col col={12} md={6}>
          <button onClick={() => setOpen(true)}>Open Dialog</button>
        </Col>
      </Row>

      <Dialog open={open} onOpenChange={setOpen}>
        <h2>ASX Announcement</h2>
        <p>This is a modal dialog using Radix UI.</p>
        <button onClick={() => setOpen(false)}>Close</button>
      </Dialog>
    </Container>
  );
};
