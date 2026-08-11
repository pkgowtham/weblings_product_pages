import React from 'react';
import Comparison from '../../../../../components/comparison/index.tsx';
import mailDataJson from '../../../../../data/mail.json';

const MailComparison = () => {
  return (
    <div>
      <Comparison comparisonData={mailDataJson.comparison} />
    </div>
  );
};

export default MailComparison;