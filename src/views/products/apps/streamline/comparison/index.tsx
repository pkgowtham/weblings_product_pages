'use client';

import React from 'react'
import Comparison from '../../../../../components/comparison/index';
import streamlineData from '../../../../../data/streamline.json';

const StreamlineComparison = () => {
  return (
    <div>
      <Comparison comparisonData={streamlineData.comparison} />
    </div>
  )
}

export default StreamlineComparison