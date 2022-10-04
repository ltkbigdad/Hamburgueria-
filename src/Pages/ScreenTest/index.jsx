import { useContext } from "react"
import {CardProduct} from "../../Components/CardProduct"
import { ProductsContext } from "../../provider/Products"

export const ScreenTest = () =>{
  const product = useContext(ProductsContext);
 

// const product = [
//     {
//       id: 1,
//       nome: "Hamburguer",
//       category: "Sanduíches",
//       price: 14.0,
//       img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
//     },
//     {
//       id: 2,
//       nome: "X-Burguer",
//       category: "Sanduíches",
//       price: 16.0,
//       img: "https://i.ibb.co/djbw6LV/x-burgue.png",
//     },
//     {
//       id: 3,
//       nome: "Big Kenzie",
//       category: "Sanduíches",
//       price: 18.0,
//       img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
//     },
//     {
//       id: 4,
//       nome: "Fanta Guaraná",
//       category: "Bebidas",
//       price: 5.0,
//       img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
//     },
//     {
//       id: 5,
//       nome: "Coca-Cola",
//       category: "Bebidas",
//       price: 4.99,
//       img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
//     },
//     {
//       id: 6,
//       nome: "Milkshake Ovomaltine",
//       category: "Bebidas",
//       price: 4.99,
//       img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
//     },
//   ]

console.log(product)

    return(
        <>        
            {product.map((item)=>{
                return(
                    <CardProduct
                    key={item.id}
                    nome={item.nome}
                    category={item.category}
                    price={item.price}
                    img={item.img}
                    />
                )
            })}
        </>
    )
    
    
}