import { Navbar } from "./components/Navbar/navbar";

export function Home(){
    return(
        <div  >
            <div>
                <Navbar/>
            </div>
            <div className="pt-5 mt-5 d-flex ">
                <div className="p-3">
                   <img className="image-size" src="https://www.zohowebstatic.com/sites/zweb/images/crm/eight-building-blocks-1x.png" alt=""/> 
                </div>
                <div className="p-3 welcome-section">
                   <h1>Welcome to Customer relationship Management</h1>
              <h3>The best CRM is here.....</h3> 
                </div>
            </div>
              
        </div>
    )
}