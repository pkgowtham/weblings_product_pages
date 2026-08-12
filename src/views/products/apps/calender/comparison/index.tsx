'use client';

import React from 'react';
import Comparison from '../../../../../components/comparison/index';
import calendarDataJson from '../../../../../data/calendar.json';

const CalenderComparison = () => {
  return (
    <div>
      <Comparison comparisonData={calendarDataJson.comparison} />
    </div>
  );
};

export default CalenderComparison;