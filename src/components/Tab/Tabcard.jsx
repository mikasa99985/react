import React from 'react';
import Card from './card';

export default function Tabcard() {
  return (
    <>

      <div className="container">
        <div className="row mb-2">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </>
  );
}
