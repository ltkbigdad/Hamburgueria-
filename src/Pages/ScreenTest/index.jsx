import { Input } from "../../Components/Input"

export const ScreenTest = () =>{
    return<Input 
    // register={register}
    name="password"    
    label="Senha"    
    type="text"
    placeholder=" "
    required=""
    // error={errors.password?.message}
    />
}