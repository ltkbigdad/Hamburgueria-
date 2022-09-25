import {Container} from "./style"

export const Button = ({children, schema, ...rest}) =>{
    return(
        <Container schema={schema} type="button" {...rest}>
            {children}

        </Container>
    )
}