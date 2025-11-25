import { createContext, useContext, useState } from "react";

const BuyNowContext = createContext();

export function BuyNowProvider({ children }) {
  const [buyItem, setBuyItem] = useState(null);

  return (
    <BuyNowContext.Provider value={{ buyItem, setBuyItem }}>
      {children}
    </BuyNowContext.Provider>
  );
}

export function useBuyNow() {
  return useContext(BuyNowContext);
}
