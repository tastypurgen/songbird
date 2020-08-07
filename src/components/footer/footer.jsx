import React from 'react';
import { Button } from 'react-bootstrap';
import './footer.scss';

export default function Footer({ isStageCompleted, startNextStage }) {
  if (!isStageCompleted) {
    return (
      <Button variant="secondary">Next Level</Button>
    );
  }

  return (
    <Button onClick={startNextStage} variant="secondary completed">Next Level</Button>

  );
}
