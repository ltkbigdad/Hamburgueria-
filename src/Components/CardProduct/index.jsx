import { Container, ImgContainer, Content } from "./style"

export const CardProduct = ({id, img, nome, category, price, currentSale, setCurrentSale}) => { 
                 
    return(
        <Container key={id}>
            <ImgContainer>
                <img src={img} alt={nome}/>
            </ImgContainer>
            <Content>
                <p className="card_title">{nome}</p>
                <p className="cat_title">{category}</p>
                <p className="price">{price}</p>
                <button 
                    onClick={() => {
                        setCurrentSale(currentSale.filter((elem) => elem.name !== nome));
                    }}
                >
                    Adicionar
                </button>
            </Content>
        </Container>
    )
}