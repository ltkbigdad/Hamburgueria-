import { Container, InputContainer } from ".style";

export const Input = ({ label, icon: Icon, register, name, error, ...rest}) => {
    return (
        <Container>
            <label>{label}</label>
            <InputContainer isErrored={!!error}>
                {Icon && <Icon size={14}/>}
                <input {...register(name)} {...rest} />
            </InputContainer>
            <div>{!!error && <span>{error}</span>}</div>
        </Container>
    );
}