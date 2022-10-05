import { Container, Content, ImageContainer, InfoContainer } from "./style"
import {IoMdTrash} from "react-icons/io"

export const CartCard = ({id, nome, img}) =>{
    return (
        <Container key={id}>
            <Content>
                <ImageContainer>
                <img src={img} alt={nome}/>
                </ImageContainer>

                <InfoContainer>
                    <p className="tittle">{nome}</p>
                    <Content className="counter">
                        <button>-</button>
                        <p className="counterNumber">1</p>
                        <button>+</button>
                    </Content>
                </InfoContainer>
            </Content>
            <button className="remove"><IoMdTrash size={20}/></button>
        </Container>
    )
}