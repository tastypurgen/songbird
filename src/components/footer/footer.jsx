import React from 'react';
import { Button } from 'react-bootstrap';
import './footer.scss';

export default function Footer({ isStageCompleted }) {
  // if (!isStageCompleted) {
  return (
    <Button variant="secondary">Next Level</Button>
  );
  // }
}
