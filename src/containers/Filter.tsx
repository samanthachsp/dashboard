import React, { useState } from 'react';
import '../css/Filter.css';
import { useSelector, useDispatch } from 'react-redux'
import { filterByYearMonth } from '../app/reducers/filter'
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';

const handleSubmit = () => {
    console.log('handleSubmit')
}

const Filter = () => {
  const [year , setYear] = useState('')
  const [month , setMonth] = useState('')
  const dispatch = useDispatch()
//   const filter = useSelector((state: any) => state)
//   console.log(filter)
  return (
    <div className="filter-container">
    <FormatAlignCenterIcon className="filter-icon"/>
    <div className="filter-form">


        <TextField className="text" id="outlined-basic" label="Year" variant="outlined" value={year} onChange={(event) => setYear(event.target.value)} />
        <TextField className="text" id="outlined-basic" label="Month" variant="outlined" value={month} onChange={(event) => setMonth(event.target.value)} />
                <Button className="button"  variant="contained" endIcon={<FilterAltIcon />} onClick={(event) => {event.preventDefault(); dispatch(filterByYearMonth({year: year, month: month})); }}>
                Apply
                </Button>


    </div>
    </div>
  );
}

export default Filter;