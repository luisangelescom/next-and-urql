// 'use client';

import UseSubscribeGQ from '@/app/hooks/useSubscribeGQ';
import { FC } from 'react';

interface AddressInt {
  street: string;
  zip: string;
}

interface AllAddressProps {
  address: AddressInt[];
}

const AllAddress: FC<AllAddressProps> = ({ address }) => {
  return (
    <>
      <UseSubscribeGQ />
      {address.map(({ street, zip }, index) => (
        <div key={index} className='flex flex-col w-full justify-center items-center text-pretty py-10'>
          <span className='text-2xl text-blue-500'>{`Street : ${street}`}</span>
          <span>{`Zip : ${zip}`}</span>
        </div>
      ))}
    </>
  );
};

export default AllAddress;
