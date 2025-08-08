import React from 'react'
import Comparison from '../../../../../components/comparison/index.tsx';
import { mailData } from '../../../../../data/index.tsx';

const MailComparison = () => {
  return (
    <div>
        <Comparison comparisonData={mailData.comparison} />
    </div>
  )
}

export default MailComparison