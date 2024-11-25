"use client";

import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { Fund } from '@/types';
import currency from 'currency.js';
import { PieItemIdentifier } from '@mui/x-charts';

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
  fontWeight: '700'
}));

const CenterTitle = styled('text')(({}) => ({
  fill: 'black',
  textAnchor: 'middle',
  dominantBaseLine: 'central',
  fontSize: 12,
}))

function PieCenterLabel({ title, value }: { title: string, value: number }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <>
      <CenterTitle x={left + width / 2} y={top + height / 2 - 15}>
        {title}
      </CenterTitle>
      <StyledText x={left + width / 2} y={top + height / 2 + 10}>
        {currency(value).format()}
      </StyledText>
    </>
  );
}

export default function PieChartWithCenterLabel({ funds, reset, select } : { funds : Fund[], reset : boolean, select: (index: number) => void }) {
  const [i, setI] = useState(-1);
  const [hightlightedItem, setHighlightedItem] = useState<PieItemIdentifier|null>({
    type: 'pie',
    seriesId: "auto-generated-id-0",
    dataIndex: 0
  });
  let data = [];
  let total = 0;
  const colors = ["#044F79", "#75787b", "#ADC5E3", "#344767", "black", "#21b8fd"]

  // Look through the fund entries to find the 
  // Corresponding pie section
  useEffect(() => {
    let found = false;
    for(let x = 0; x < funds.length; x++) {
      if (funds[x].expanded) {
        setHighlightedItem({
          type: 'pie',
          seriesId: "auto-generated-id-0",
          dataIndex: x
        });
        found = true;
        break;
      }
    }
    if (!found) {
      setHighlightedItem(null);
    }
  }, [funds]);
  
  data = funds?.map((fund : Fund, index: number) => {
    total += fund.value;
    return {
      label: fund.name,
      value: fund.value,
      color: colors[index]
    };
  });

  useEffect(() => {
    setI(-1);
    //setHighlightedItem(null);
  }, [reset, setI])

  return (
    <>
      <Stack direction="row">
        <PieChart
          colors={colors}
          series={[
            {
              paddingAngle: 5,
              innerRadius: 80,
              outerRadius: 100,
              highlightScope: { highlight: 'item' },
              highlighted: { innerRadius: 80, additionalRadius: 5 },
              data,
            },
          ]}
          margin={{ right: 5 }}
          width={250}
          height={250}
          slotProps={{
            legend: { hidden: true },
          }}
          highlightedItem={hightlightedItem}
          onItemClick={(e, d) => { 
            e.preventDefault(); 
            setI(d?.dataIndex); 
            select(d?.dataIndex);
            setHighlightedItem(d);
          }}
        >
          { i >= 0 ?
            (<PieCenterLabel title={funds[i].name} value={funds[i].value} />)
            :
            (<PieCenterLabel title={'TSP Total'} value={total} />)
          }
        </PieChart>
      </Stack>
    </>
  );
}
