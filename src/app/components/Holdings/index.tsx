"use client";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary,
  Card, CardContent, CardHeader, Typography, Chip, Stack,
  Divider, Paper
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import * as data from "@/app/api/funds/data"
import PieChartWithCenterLabel from '../PieChartWithCenterLabel';

import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Fund } from '@/types';
import currency from 'currency.js';

const combined : Fund[] = [];
const indexing : any = {};
let parent : string | null = null;
for(let i = 0; i < data.funds.length; i++) {
  parent = data.funds[i].parent;
  if (parent == null) {
    indexing[data.funds[i].id] = i;
    combined.push({ ...data.funds[i] }) 
  } else if (parent != null) {
    combined[indexing[parent]].value += data.funds[i].value;
  }
}

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

const AccordianTitle  = styled('text')(({ theme }) => ({
  color: theme.palette.grey[300],
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 14,
  marginLeft: 10
}));

const CardLabel = styled('text')(({ theme }) => ({
  color: theme.palette.grey[300],
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 10
}));

const CardDescription = styled('text')(({ theme }) => ({
  color: 'black',
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 10
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  border: 'none',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Label = styled(Chip)(({ theme }) => ({
  border: 'none',
}));

const Expand = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  margin: '0 !important',
  borderTop: 5
}));

export default function Holdings({}) {

  const [holdings, setHoldings] = useState(false);
  const [funds, setFunds] = useState(data.funds)
  const colors = ["#044F79", "#75787b", "#ADC5E3", "#344767", "black", "#21b8fd"]

  const closeAllExcept = (index: number) => {
    setFunds(funds.map((item, i) => {
      if (i !== index) {
        item.expanded = false;
      } else {
        item.expanded = !item.expanded;
      }
      return item;
    }))
  }

  useEffect(() => {
    if (holdings) {
      setFunds(data.funds);
    } else {
      setFunds(combined);
    }
  }, [funds, holdings])

  return (
    <Card variant="outlined">
      <Grid container>
        <Item>
          <Label label="TSP Holdings" variant={(holdings) ? "filled" : "outlined"} onClick={() => setHoldings(true)} />
        </Item>
        <Item>
          <Label label="Look Through Holdings" variant={(!holdings) ? "filled" : "outlined"}  onClick={() => setHoldings(false)} />
        </Item>
      </Grid>
      <PieChartWithCenterLabel key="holdings" funds={funds} reset={holdings} select={closeAllExcept} />
      <CardContent>
        <Grid container>
          <Grid><AccordianTitle>Items</AccordianTitle></Grid>
          <Grid size={5}></Grid>
          <Grid><AccordianTitle>Total Value</AccordianTitle></Grid>
        </Grid>
        {
          funds.map((item, index) => (
            <Expand key={item.id} onClickCapture={(e) => { e.preventDefault(); closeAllExcept(index); }} expanded={item.expanded}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Grid container>
                  <Grid size={5} sx={{ 
                    backgroundColor: colors[index], borderRadius: 2,
                    fontSize: 12, color: 'white', paddingLeft: 1, height: 20,
                    verticalAlign: 'middle'
                    }}>{item.name}</Grid>
                  <Grid size={3}></Grid>
                  <Grid size={4}>{currency(item.value).format()}</Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Card>
                  <CardContent sx={{ padding: 0, maxWidth: 200}}>
                    <Grid container>
                      <Grid size={6}>
                        <CardLabel>Risk Level</CardLabel>
                      </Grid>
                      <Grid size={6}>
                        <CardDescription>
                          {item.risk}
                        </CardDescription>
                      </Grid>
                    </Grid>
                    <Divider/>
                    <Grid container>
                      <Grid size={6}>
                        <CardLabel>Example</CardLabel>
                      </Grid>
                      <Grid size={6}>
                        <CardDescription>
                          {item.examples}
                        </CardDescription>
                      </Grid>
                    </Grid>
                    <Divider/>
                    <Grid container>
                      <Grid size={6}>
                        <CardLabel>Description</CardLabel>
                      </Grid>
                      <Grid size={6}>
                        <CardDescription>
                          {item.description}
                        </CardDescription>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </AccordionDetails>
            </Expand>
          ))
        }
      </CardContent>
    </Card>
  )
}
