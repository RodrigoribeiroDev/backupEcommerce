import { useContext } from "react";
import CartContext from "../Context/CartContext";

export function useAppContext() {
    const context = useContext(CartContext)
    if(context === undefined){
        throw new Error ("Fora do contexto!")
    }
    return context;
}