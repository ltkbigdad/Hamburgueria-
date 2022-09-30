
import { SearchInput } from "../../Components/SearchInput"

export const ScreenTest = () =>{
    return<SearchInput 
    // register={register}
    name="password"    
    label="Senha"    
    type="text"
    placeholder=" "
    required=""
    // error={errors.password?.message}
    />
}