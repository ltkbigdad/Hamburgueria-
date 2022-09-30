import { Container } from "./style";
import {Button} from "../Button"
import {BsSearch} from "react-icons/bs"

export const SearchInput = ({ icon:Icon, name, error, ...rest}) => {
    return (
        <Container>                     
            <input {...rest} />
            <div>
                <Button default>
                    <i >{BsSearch}</i>  
                </Button> 
            </div>    
                 
                      
        </Container>
    );
}