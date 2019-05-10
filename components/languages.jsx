import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const data = {
  Language: 'Minutes',
  JavaScript: 240,
  JSX: 110,
  GraphQL: 28,
  JSON: 23,
  TypeScript: 13,
  Markdown: 15
};

const languages = Object.keys(data).map(lang => [lang, data[lang]]);

const Languages = props => {
  console.log(languages);
  return (
    <Chart
      height="500px"
      width="900px"
      chartType="PieChart"
      loader={<div>Loading...</div>}
      data={languages}
    />
  );
};

export default Languages;
