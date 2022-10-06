import { Container, TittleContainer, CartContainer } from "./style";
import {CartCard} from "../CartCard"
import { useContext } from "react"
import { ProductsContext } from "../../provider/Products"

export const Cart = () =>{
    const product = useContext(ProductsContext);
    return (
        <Container>
            <TittleContainer>
                <h2 className="cartTittle">Carrinho de compras</h2>
                <p>X</p>
            </TittleContainer>
            <CartContainer>
                {/* <p className="bagEmpty">Sua sacola está vazia</p>
                <p className="addItens">Adicione itens</p> */}
                
                {product.map((item)=>{
                    return(
                        <CartCard
                            key={item.id}
                            img={item.img}
                            nome={item.nome}
                        />
                    )
                })}
            </CartContainer>           
        </Container>
    )
}