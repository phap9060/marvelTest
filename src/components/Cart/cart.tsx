import * as S from "./style";
import { useSelector,useDispatch} from "react-redux";
import { removeItem } from "../../context/cartFeature";
import exclude from '../../assets/images/exclude.png'

export function Cart() {
  const select = useSelector((state) => state.cart.items);
  const dispatch = useDispatch()


 
  
  return (
    <S.Span>
      <S.div>
        { select.map((comic:any,key:number) => (
          <S.Section key={comic.id}>
            <S.Img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            />
            <S.Price>R$ {Math.ceil(comic.prices[0].price)}</S.Price>
            <S.imgX onClick={()=>dispatch(removeItem(comic.title))} src={exclude} />
          </S.Section>
        ))}
      </S.div>
    </S.Span>
  );
}
