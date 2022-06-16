import type { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';

const Spisocheck = styled.ul`
  display: flex;
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
  margin-right: -3rem;
  li {
    font-size: large;
  }
`;

const List = (): JSX.Element => {
  return (
    <Spisocheck>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/shop">Shop</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/sponsors">Sponsors</Link>
      </li>
    </Spisocheck>
  );
};

export default List;
