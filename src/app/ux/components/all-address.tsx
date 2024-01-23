// 'use client';

import UseSubscribeGQ from '@/app/hooks/useSubscribeGQ';
import { FC } from 'react';

interface AddressInt {
  id: number;
  body: string;
  title: string;
}

interface AllAddressProps {
  address: AddressInt[];
}

const AllAddress: FC<AllAddressProps> = ({ address }) => {
  return (
    <>
      <UseSubscribeGQ />
      {address.map(({ id, body, title }, index) => (
        <div key={id} className='flex flex-col w-full justify-center items-center text-pretty py-10'>
          <span className='text-2xl text-blue-500'>{`Title : ${title}`}</span>
          <span>{`Body : ${body}`}</span>
        </div>
      ))}
    </>
  );
};

export default AllAddress;
