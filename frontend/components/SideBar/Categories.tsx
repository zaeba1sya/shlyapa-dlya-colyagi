import styled from 'styled-components';
import { Flex } from '../../src/ContentManager/Content';
import { MyText } from '../../src/ContentManager/Content';

const CategArray = [
  'Bags',
  'Booking',
  'Clothing',
  'Men',
  'Music',
  'Posters',
  'Shoes',
  'Uncategorized',
  'Women',
];

const CategoryList = styled.ul`
  li {
    border-bottom: 0.1px solid #fff;
  }
`;

const Categories = (): JSX.Element => {
  return (
    <Flex direction="column" align="left" style={{ width: '100%' }}>
      <MyText fw="700" fs="1.3rem" style={{ textAlign: 'center' }}>
        BROWSE
      </MyText>
      <CategoryList>
        {CategArray.map((el, index) => (
          <li key={index}>
            <MyText
              fw="300"
              fs="1.2rem"
              style={{ margin: '.7rem 0', cursor: 'pointer' }}
            >
              {el}
            </MyText>
          </li>
        ))}
      </CategoryList>
    </Flex>
  );
};

export default Categories;
