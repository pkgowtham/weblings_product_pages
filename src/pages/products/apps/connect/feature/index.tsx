import React from 'react'
import FeatureTemp from '../../../../../components/featureTemp/index.tsx';
import ComparisonTemp from '../../../../../components/comparationTemp/index.tsx';
import { connectData } from '../../../../../data/index.tsx';



const ConnectFeature = () => {
  return (
    <div>
        <FeatureTemp jsonData={connectData.feature} />
        <ComparisonTemp comparisonData={connectData.comparison} />
    </div>
  )
}

export default ConnectFeature