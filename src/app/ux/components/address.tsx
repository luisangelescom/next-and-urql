import { getAllAddress } from '../../../../services/grapql';
import AllAddress from './all-address';

interface AddressInt {
  street: string;
  zip: string;
}

export default async function Address() {
  const address = await getAllAddress();

  if (address.error) {
    return <div>hubo un error al obtener las direcciones</div>;
  }
  const addressData = address.data.address as AddressInt[];
  return <AllAddress address={addressData} />;
}
