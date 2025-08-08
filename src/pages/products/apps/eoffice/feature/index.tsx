import React from 'react'
import FeatureTemp from '../../../../../components/featureTemp/index.tsx';
import ComparisonTemp from '../../../../../components/comparationTemp/index.tsx';
import { eofficeData } from '../../../../../data/index.tsx';



const EofficeFeature = () => {
  return (
    <div>
        <FeatureTemp jsonData={eofficeData.feature} />
        <ComparisonTemp comparisonData={eofficeData.comparison} />
    </div>
  )
}

export default EofficeFeature