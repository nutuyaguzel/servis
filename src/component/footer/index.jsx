import React from 'react'
import Logo from './Logo.svg'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

const Footer = () => {
  const {categoryState} = useSelector(state=>state)


  console.log(categoryState)
  return (
   <>
   <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src={Logo} alt="" width="24" height="19"/>
        <small className="d-block mb-3 text-muted">&copy; 2017–2022</small>
      </div>
      <div className="col-6 col-md">
        <h5>Kategoriler</h5>
        <ul className="list-unstyled text-small">
          {categoryState.categories.length === 0 ?(
            <li>Loading...</li>

          ):(
            categoryState.categories.map((item,index)=>{
             return(
              <li className="mb-1" key={index}>
                <p>xxx</p>
                </li>
             )
            })
          )}
        
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Final resource</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
   </>
  )
}

export default Footer