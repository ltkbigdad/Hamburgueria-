import { Container } from "./style";
import {Button} from "../Button"

export const Input = ({ label,  register, name, error, ...rest}) => {
    return (
        <Container>                     
            <input /*{...register(name)}*/ {...rest} />           
                      
        </Container>
    );
}