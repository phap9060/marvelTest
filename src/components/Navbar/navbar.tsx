import { Nav, Img, H1 } from "./style";
import logo from "../../assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";
export function Navbar() {
  const navigate = useNavigate();
  return (
    <Nav>
      <Img onClick={()=>{navigate('/')}}  src={logo} />
      <H1 onClick={()=>{navigate('/')}}>Home |</H1>
      <H1 onClick={()=>{navigate('/store')}}>Comic Store</H1>
    </Nav>
  );
}
