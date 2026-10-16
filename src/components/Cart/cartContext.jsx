import { createContext, useState } from "react"

export const ContextCart = createContext(null);
export const CartProvider = ({ children }) => {
    const [arcart, setArcart] = useState([]);

    const addCart = (item) => {
        setArcart((prev) => {
            const repeat = prev.find(
                (product) => product.id === item.id
            );
            if (repeat) {
                return prev.map((product) =>
                    product.id === item.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };
    
    const decrement = (item) => {
        setArcart((act) => {
            const finded = act.find((actprod) => actprod.id === item.id);
            
            if(!finded) return act

            if(finded.quantity === 1){
                return act.filter(
                    (actprod) => actprod.id !== item.id
                );
            }
            
            return act.map((actprod) =>
            actprod.id === item.id
            ? { ...actprod, quantity: actprod.quantity - 1 }
            : actprod
            );
        })
    }

    const remove = (item) => {
                setArcart((act) => {
                  return act.filter(
                    (actprod) => actprod.id !== item.id
                );  
                })
            }

    return (
        <ContextCart.Provider value={{arcart, addCart, decrement, remove}}>
                    {children}
        </ContextCart.Provider>
    )    
}