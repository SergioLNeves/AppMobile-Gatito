import React from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";

import EstilosGlobal from "../../estilos";

import Item, { servicos } from "../../componentes/Item/Item";

const Servicos = () => {
  return (
  <SafeAreaView style={EstilosGlobal.preencher} >
      <StatusBar />
      <KeyboardAvoidingView style={EstilosGlobal.preencher}   behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <FlatList
          data={servicos}
          removeClippedSubviews={false}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={({ id }) => String(id)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Servicos;