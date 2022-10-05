import { Container, TittleContainer, CartContainer } from "./style";

export const Cart = () =>{
    return (
        <Container>
            <TittleContainer>
                <h2 className="cartTittle">Carrinho de compras</h2>
                <p>X</p>
            </TittleContainer>
            <CartContainer>
                <p className="bagEmpty">Sua sacola está vazia</p>
                <p className="addItens">Adicione itens</p>
            </CartContainer>
        </Container>
    )
}