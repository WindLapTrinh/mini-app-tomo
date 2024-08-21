import React from "react";
import { useAddress } from "../shared/common/cart/AddressContext";

const ListAddress = () => {
  const { address } = useAddress();

  return (
    <div>
      <h1>Danh sách địa chỉ</h1>
      <div>
        {address && Array.isArray(address) && address.length > 0 ? (
          address.map((addr) => (
            <div key={addr.id}>
              <p>{`${addr.street}, ${addr.ward}, ${addr.district}, ${addr.city}`}</p>
              {addr.isDefault && <span>(Default)</span>}
            </div>
          ))
        ) : (
          <div>No addresses found</div>
        )}
      </div>
    </div>
  );
};

export default ListAddress;
