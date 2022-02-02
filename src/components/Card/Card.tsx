import * as S from "./style";
import {useSelector,useDispatch} from 'react-redux'
import { addCart, cartItems } from "../../context/cartFeature";

type CardProps = {
  image?: string,
  text?: string,
  price: number,
  api:[{
    id:number
  }

  ]
}


export function Card(props: any) {
  const dispatch = useDispatch()

  
  return (
    <S.card>
      <S.image src={props.image} />
      <S.content> Titulo: {props.text} </S.content>
      <S.Price> {props.price > 0 ? `Preço: R$ ${props.price}` : 'Sem Estoque'}</S.Price>
      {props.price>0 ?  <S.button onClick={()=>{dispatch(addCart(props.api))} }  type="button" >Comprar</S.button> : <S.disableButton>Comprar</S.disableButton>}
     
    </S.card>
  );
}
