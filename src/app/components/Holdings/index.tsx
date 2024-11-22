"use client";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary,
  Card, CardContent, Typography,
} from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { useSelector } from "@/store/hooks";
import { Funds } from '@/types';
import * as data from "@/app/api/funds/data"
import PieChartWithCenterLabel from '../PieChartWithCenterLabel';

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

export default function Holdings({}) {

  const [funds] = useState(data.funds)
  console.log (funds)
  return (
    <Card variant="outlined">
      <PieChartWithCenterLabel>

      </PieChartWithCenterLabel>
      <CardContent>
        {
          funds.map((item) => (
            <Accordion key={item.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>

              </AccordionDetails>
            </Accordion>
          ))
        }
      </CardContent>
    </Card>
  )
}
