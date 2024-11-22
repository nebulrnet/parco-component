"use client";

import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { Fund, Funds } from '@/types';

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 3} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel({ funds } : Funds) {
  const [i, setI] = useState(-1);

  const data = funds?.map((fund : Fund) => {
    return {
      label: fund.name,
      value: fund.value,
    };
  });

  return (
    <Stack direction="row">
      <PieChart
        series={[
          {
            paddingAngle: 5,
            innerRadius: 80,
            outerRadius: 100,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={300}
        height={300}
        slotProps={{
          legend: { hidden: true },
        }}
        onItemClick={(event, d) => setI(d.dataIndex)}
      >
        { i > 0 ?
          (<PieCenterLabel>{funds[i].name}</PieCenterLabel>)
          :
          ()
        }
      </PieChart>
    </Stack>
  );
}
