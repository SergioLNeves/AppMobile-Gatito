import {
  FlatList,
} from "react-native";

import Item, { servicos } from "../../componentes/Item/Item";
import {TelaPadrao} from "../../componentes/TelaPadrao/TelaPadrao";


export const Carrinho = () => {
  return (
    <TelaPadrao childrean={<FlatList
      data={servicos}
      removeClippedSubviews={false}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={({ id }) => String(id)}
    />}
    />
  );
};

