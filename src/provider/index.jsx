import { ProductsProvider } from "./Products";

export const Providers = ({children}) => {
    return(
        <ProductsProvider>{children}</ProductsProvider>
    )
}