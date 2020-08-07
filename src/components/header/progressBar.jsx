import React from 'react';
import { Col } from 'react-bootstrap';

export default function progressBar({ index, currentStage }) {
  console.log('currentStage: ', currentStage);
  if (index === 0) {
    return (
      <Col className="active">Warm-Up</Col>
    );
  }

  return (
    <Col className={currentStage >= index && 'active'}>Stage {index}</Col>
  );
}
