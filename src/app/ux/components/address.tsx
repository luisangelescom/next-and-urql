import { getAllAddress } from '../../../../services/grapql';
import AllAddress from './all-address';

interface AddressInt {
  id: number;
  body: string;
  title: string;
}

export default async function Address() {
  const address = await getAllAddress();
  if (address.error) {
    return <div>hubo un error al obtener las direcciones</div>;
  }
  const addressData = address.data.book as AddressInt[];
  console.log({ address: addressData });
  return <AllAddress address={addressData} />;
}
