import { Suspense } from 'react';
import Address from './ux/components/address';
import AddressLoading from './ux/components/addressLoading';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Test urql</h1>

      <Suspense fallback={<AddressLoading />}>
        <Address />
      </Suspense>
    </main>
  );
}
