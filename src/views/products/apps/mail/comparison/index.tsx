'use client';

import React from 'react';
import Comparison from '../../../../../components/comparison/index';
import mailDataJson from '../../../../../data/mail.json';

const MailComparison = () => {
  return (
    <div>
      <Comparison comparisonData={mailDataJson.comparison} />
    </div>
  );
};

export default MailComparison;