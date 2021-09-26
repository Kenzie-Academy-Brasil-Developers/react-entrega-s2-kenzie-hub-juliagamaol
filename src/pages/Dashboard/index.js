import PageDashboard from "../../components/PageDashboard"

export const Dashboard = ({authenticated}) =>{
   
    return(
       <PageDashboard authenticated={authenticated}/>
    )
}