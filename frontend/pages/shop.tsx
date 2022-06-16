import type { NextPage } from 'next';
import { useQuery } from 'react-query';

import { IProduct } from '../interfaces/interfaces';
import { useMemo, useState } from 'react';

import Goods from '../components/Goods/Goods';
import Pagination from '../components/Goods/Pagination';

const Shop: NextPage = () => {
  const { data, isLoading, error } = useQuery<IProduct[]>('goods', getGoods);
  const [pagination, setPagination] = useState<number>(1);

  async function getGoods(): Promise<any> {
    return await (await fetch('https://fakestoreapi.com/products')).json();
  }

  if (isLoading) return <h1>Loading</h1>;

  return (
    <>
      <Goods data={data} pagination={pagination} />
      <Pagination />
    </>
  );
};

export default Shop;
