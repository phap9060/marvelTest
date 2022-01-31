import * as S from "./style";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
export function Navbar() {
  const navigate = useNavigate();
  return (
    <S.Nav>
      <S.Img onClick={()=>{navigate('/')}}  src={logo} />
      <S.H1 onClick={()=>{navigate('/')}}>Home |</S.H1>
      <S.H1 onClick={()=>{navigate('/store')}}>Comic Store</S.H1>
    </S.Nav>
  );
}
