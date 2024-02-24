import {
  FlatList,
} from "react-native";

import StatusCarrinho from "../../componentes/StatusCarrinho/StatusCarrinho";
import  { ItemCarrinho } from "./Item/Item";
import { servicosMock } from "../../mock/servicos";

export const Carrinho = () => {
  const total = servicosMock.reduce((soma, {preco, quantidadeItem}) => soma + (preco * quantidadeItem), 0);

  return (
    <>
     <StatusCarrinho total={total} />
      <FlatList
        data={servicosMock}
        removeClippedSubviews={false}
        renderItem={({ item }) => <ItemCarrinho {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
      </>
  );
};

