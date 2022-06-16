import { Flex } from '../../src/ContentManager/Content';

import Categories from './Categories';
import Page from '../../src/UI/Page';
import PriceFilter from './PriceFilter';

const SideBar = (): JSX.Element => {
  return (
    <Flex
      direction="column"
      align="center"
      style={{ width: '20%', marginRight: '6rem' }}
    >
      <Page page="shop" />
      <Categories />
      <PriceFilter />
    </Flex>
  );
};

export default SideBar;
