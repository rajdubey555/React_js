import { createContext,useEffect,useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() =>{
        const savedCart = localStorage.getItem("cart")
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() =>{
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])


    //Add To Cart

    const AddCart = (product) => {
        const exist = cart.find((item) => {
            return item.id === product.id
        })

        if (exist) {
            setCart(cart.map((item) => {
                return item.id === product.id ? { ...item, qty: item.qty + 1 } : item
             
            }))
           alert(`Quantity Update Successfully `)
        } else {
            setCart([...cart, { ...product,Price: Math.ceil(product.price), qty: 1 }])
            alert("Product Added Successfully")
        }
    }


    const deleteCart = (id) => {
        setCart(cart.filter((item) => {
            return item.id !== id
        }))
    }

    return(
        <CartContext.Provider value={{cart,AddCart,deleteCart}}>
            {children}
        </CartContext.Provider>
    )
}