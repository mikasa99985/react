import React from 'react';
import Card from './card';

export default function Tabcard() {
  return (
    <>

      <div className="mx-auto mt-5 mb-4 w-100">
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
