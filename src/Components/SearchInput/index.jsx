import { Container } from "./style";
import {BsSearch} from "react-icons/bs"
import {Button} from "../Button"

export const SearchInput = ({ icon:Icon, name, error, ...rest}) => {
    return (
        <Container>                     
            <input {...rest} />
            <div> 
                <Button default >
                   <BsSearch/>
                </Button> 
            </div>     
        </Container>
    );
}