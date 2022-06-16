import type { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage<{ page: string }> = ({ page }) => {
  return (
    <div style={{ width: '100%', marginBottom: '1rem', fontSize: '1.5rem' }}>
      <strong style={{ color: '#fff', cursor: 'pointer' }}>
        <Link href={'/'}>HOME</Link>
      </strong>{' '}
      / {page.toUpperCase()}
    </div>
  );
};

export default Page;
