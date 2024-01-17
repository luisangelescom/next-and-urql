export default function AddressLoading() {
  return [...Array.from({ length: 10 }).keys()].map((_, index) => (
    <div key={index} className='py-5'>
      <div className='h-7 w-56 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5' />
      <div className='h-7 w-56 bg-gray-200 rounded-full dark:bg-gray-700' />
    </div>
  ));
}
