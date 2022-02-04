import * as S from "./style";
import {useDispatch} from 'react-redux'
import { addCart} from "../../context/cartFeature";
import {comicPage} from '../../context/comicFeature';
import { Link } from "react-router-dom";

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
      <Link to='/comic'> 
        <S.details  onClick={()=>{dispatch(comicPage(props.comic))}}>
        View Details
        </S.details>  
      </Link>
      {props.price>0 ?  
        <S.button onClick={()=>{dispatch(addCart(props.api))} }  type="button" >
        Comprar
        </S.button>
      : <S.disableButton>
        Comprar
        </S.disableButton>}
     
    </S.card>
  );
}
