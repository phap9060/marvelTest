import * as S from "./style";
import { useSelector,useDispatch} from "react-redux";
import { removeItem } from "../../context/cartFeature";
import exclude from '../../assets/images/exclude.png'
import { RootState } from "../../context/configureStore";
import { ResultData } from "../../context/Types";

export function Cart() {
  const select:any = useSelector<RootState>((state) => state.cart.results);
  const dispatch = useDispatch()

  return (
    <S.Span>
      <S.div>
        { select.map((comic:ResultData) => (
          <S.Section key={comic.id}>
            <S.Img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            />
            <S.Price>R$ {Math.ceil(comic.prices[0].price)}</S.Price>
            <S.imgX onClick={()=>{dispatch(removeItem(comic.id))}} src={exclude} />
          </S.Section>
        ))}
      </S.div>
    </S.Span>
  );
}
