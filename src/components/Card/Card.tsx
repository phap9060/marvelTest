import * as S from "./style";
type CardProps = {
  image?: string,
  text?: string,
  price: number
};
export function Card(props: CardProps) {
  return (
    <S.card>
      <S.image src={props.image} />
      <S.content> Titulo: {props.text} </S.content>
      <S.Price> {props.price > 0 ? `Preço: R$ ${props.price}` : 'Sem Estoque'}</S.Price>
      {props.price>0 ?  <S.button  type="button" disabled >Comprar</S.button> : <S.disableButton>Comprar</S.disableButton>}
     
    </S.card>
  );
}
