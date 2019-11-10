import React from 'react';
import './loading-text-indicator.css';

type LoadingTextIndicatorProps = {
  text: string;
};

export const LoadingTextIndicator = ({ text }: LoadingTextIndicatorProps) => (
  <div className="loading-indicator">
    <p className="loading-indicator__text">{text}</p>
    <p className="loading-indicator__dot loading-indicator__dot--first">.</p>
    <p className="loading-indicator__dot loading-indicator__dot--second">.</p>
    <p className="loading-indicator__dot loading-indicator__dot--third">.</p>
  </div>
);
