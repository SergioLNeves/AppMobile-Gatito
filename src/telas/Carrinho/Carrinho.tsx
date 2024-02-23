import {
  FlatList,
} from "react-native";

import Item, { servicos } from "../../componentes/Item/Item";
import { TelaPadrao } from "../../componentes/TelaPadrao/TelaPadrao";
import StatusCarrinho from "../../componentes/StatusCarrinho/StatusCarrinho";


export const Carrinho = () => {
  const total = servicos.reduce((soma, {preco, quantidadeItem}) => soma + (preco * quantidadeItem), 0);

  return (
    <TelaPadrao childrean={<>
     <StatusCarrinho total={total} />
      <FlatList
        data={servicos}
        removeClippedSubviews={false}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
      </>
    }
    />
  );
};

