
import { CartCard } from "../../Components/CartCard"
import { ProductsContext } from "../../provider/Products"
import { useContext } from "react"

export const ScreenTest = () =>{

    const product = useContext(ProductsContext);
  
    return(
        <>
            {product.map((item)=>{
                return(<CartCard
                    key={item.id}
                    img={item.img}
                    nome={item.nome}
                />)
            })

            }
        </>
         
    )
    
    



}