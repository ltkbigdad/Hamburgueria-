import { Route, Routes as RoutesPage } from "react-router-dom"
import { Home } from "../Pages/Home"
import { ScreenTest } from "../Pages/ScreenTest"

export const Routes =() => {
    return(
        <RoutesPage>
            <Route exact path="/" element={<Home/>}/>
            <Route path="test" element={<ScreenTest/>}/>
        </RoutesPage>
        
    )
}