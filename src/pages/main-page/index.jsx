import { useSelector } from "react-redux"
import CategoryBox from "./component/category-box"
import {Row,Col} from 'react-bootstrap'


export default function MainPage(){
    const categoryState=useSelector((state)=>state.categoryState)
    return(
        <>
       <h2 className="text-center">Kategoriler</h2>
       <hr/>
       <Row>
       {categoryState.categories.map((item,index)=>{
        return(
          
          <Col lg="3" sm="6" key={index} >
            <CategoryBox category={item}/>
          </Col>
        )
       
      })}

       </Row>
    
        </>
    )
}