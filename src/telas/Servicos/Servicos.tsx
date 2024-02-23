import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { ItemServicos } from "./Item/Item";

import { servicosMock } from "../../mock/servicos";

export const Servicos = () => {
    return (
      <SafeAreaView>
        <StatusBar />
        <FlatList
          data={servicosMock}
          removeClippedSubviews={false}
          renderItem={({ item }) => <ItemServicos {...item} />}
          keyExtractor={({ id }) => String(id)}
        />
      </SafeAreaView>
    );
  };