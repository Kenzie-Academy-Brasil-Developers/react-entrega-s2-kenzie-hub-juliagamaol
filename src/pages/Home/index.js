import { PageHome } from "../../components/PageHome"
export const Home = ({authenticated}) =>{
        return(
            <div>
                <PageHome authenticated={authenticated}/>
            </div>
        )    
}