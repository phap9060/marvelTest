import * as S from "./style";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../../context/cartFeature";
import { RootState } from "../../context/configureStore";

export function Comic() {
  const select:any = useSelector<RootState>((state) => state.comic.data);
  const dispatch = useDispatch();
  return (
    <S.section>
      <S.article>
        <S.div>
          <S.Image
            src={`${select.thumbnail.path}.${select.thumbnail.extension}`}
          />
          <S.Title>{select.title}</S.Title>
        </S.div>
        <S.divPai>
          <S.div>{select.description}</S.div>
          <S.div
            style={{
              color: "#1b92ee",
            }}
          >
            Valor: R$ {select.prices[0].price}
            <S.button
              onClick={() => {
                dispatch(addCart(select));
              }}
              type="button"
            >
              Comprar
            </S.button>
          </S.div>
        </S.divPai>
      </S.article>
    </S.section>
  );
}
