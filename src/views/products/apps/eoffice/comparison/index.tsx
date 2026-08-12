'use client';

import React from 'react'
import eofficeDataJson from '../../../../../data/eoffice.json';
import Comparison from '../../../../../components/comparison/index';

const EofficeComparison = () => {
  return (
    <div>
      <Comparison comparisonData={eofficeDataJson.comparison} />
    </div>
  )
}

export default EofficeComparison