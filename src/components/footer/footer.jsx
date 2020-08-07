import React from 'react';
import { Button } from 'react-bootstrap';
import './footer.scss';

export default function Footer({ isStageCompleted, startNextStage, currentStage }) {
  const btnText = currentStage >= 5 ? 'Finish the Game' : 'Next Level';
  if (!isStageCompleted) {
    return (
      <Button variant="secondary">{btnText}</Button>
    );
  }

  return (
    <Button onClick={startNextStage} variant="secondary completed">{btnText}</Button>

  );
}
