import { Container, InputContainer } from "./style";
import {Button} from "../Button"

export const Input = ({ label,  register, name, error, ...rest}) => {
    return (
        <Container>                     
            <input /*{...register(name)}*/ {...rest} />           
            <label>{label} {!!error && <span> - {error}</span>}</label>           
        </Container>
    );
}