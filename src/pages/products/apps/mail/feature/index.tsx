import React from 'react'
import FeatureTemp from '../../../../../components/featureTemp/index.tsx';
import ComparisonTemp from '../../../../../components/comparationTemp/index.tsx';
import { mailData } from '../../../../../data/index.tsx';



const MailFeature = () => {
  return (
    <div>
        <FeatureTemp jsonData={mailData.feature} />
        <ComparisonTemp comparisonData={mailData.comparison} />
    </div>
  )
}

export default MailFeature