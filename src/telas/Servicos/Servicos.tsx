import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";

import Item, { servicos } from "../../componentes/Item/Item";

const Servicos = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList
        data={servicos}
        removeClippedSubviews={false}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </SafeAreaView>
  );
};

export default Servicos;