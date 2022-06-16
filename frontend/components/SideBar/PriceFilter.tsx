import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { MyText, Flex } from '../../src/ContentManager/Content';
import styled from 'styled-components';

function valuetext(value: number) {
  return `${value}°C`;
}

const minDistance = 10;

const MyButton = styled.button`
  background-color: #fff;
  border-radius: 15px;
  color: #000;
  padding: 0.2rem 0.9rem;
`;

const PriceFilter = (): JSX.Element => {
  const [value1, setValue1] = React.useState<number[]>([20, 37]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <>
      <MyText fs="1rem" fw="500" style={{ width: '100%', marginTop: '1rem' }}>
        FILTER BY PRICE
      </MyText>
      <Box sx={{ width: '100%' }}>
        <Slider
          getAriaLabel={() => 'Minimum distance'}
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
        />
      </Box>
      <Flex direction="row" justify="space-between" style={{ width: '100%' }}>
        <MyButton>Filter</MyButton>
        <MyText>
          Price: ${value1[0]} - ${value1[1]}
        </MyText>
      </Flex>
    </>
  );
};

export default PriceFilter;
