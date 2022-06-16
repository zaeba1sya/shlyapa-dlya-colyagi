import type { NextPage } from 'next';
import { useMemo } from 'react';

import { IProduct } from '../../interfaces/interfaces';

const Goods: NextPage<any> = ({ data, pagination }) => {
  const PageSize = 6;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (pagination - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data!.slice(firstPageIndex, lastPageIndex);
  }, [pagination]);

  return (
    <div className="bg-dark rounded-lg">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-1 lg:px-2">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {currentTableData?.map((product: IProduct) => (
            <div key={product.id} className="group relative">
              <div className="">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg"
                  style={{
                    height: '15rem',
                    margin: '0 auto',
                    boxShadow: '0 0 10px 10px #fff',
                  }}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white-700">
                    <a href={'#'}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      <strong>{product.title}</strong>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-white-500">
                    {product.description.substring(0, 60)}...
                  </p>
                </div>
                <p className="text-sm font-medium text-white-900">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goods;
