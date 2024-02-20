import React, { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { CustomItem } from "../../estilos";
import CampoInteiro from "../../componentes/CampoInteiro/CampoInteiro";
import Botao from "../../componentes/Botao/Botao";

// Mock para teste do item
const servicos = [
  {
    id: 1,
    nome: "banho",
    preco: 79.99,
    descricao: "Banho Comum",
  },
  {
    id: 2,
    nome: "tosa",
    preco: 59.99,
    descricao: "Tosa Completa",
  },
  {
    id: 3,
    nome: "vacina",
    preco: 129.99,
    descricao: "Vacinação Anual",
  },
  {
    id: 4,
    nome: "consulta",
    preco: 89.99,
    descricao: "Consulta Veterinária",
  },
  {
    id: 5,
    nome: "hospedagem",
    preco: 149.99,
    descricao: "Hospedagem Diária",
  },
  {
    id: 6,
    nome: "ração",
    preco: 39.99,
    descricao: "Ração Premium",
  },
  {
    id: 7,
    nome: "medicamento",
    preco: 19.99,
    descricao: "Medicamento Genérico",
  },
  {
    id: 8,
    nome: "cirurgia",
    preco: 499.99,
    descricao: "Cirurgia de Emergência",
  },
];

function Item({ nome, preco, descricao, }: { nome: string; preco: number; descricao: string;}) {
  const [quantidade, setQuantidade] = useState(0);
  
  
  return (
    <>
      <View style={CustomItem.informacao}>
        <Text style={CustomItem.nome}>{nome}</Text>
        <Text style={CustomItem.descricao}>{descricao}</Text>
        <Text style={CustomItem.preco}>{preco}</Text>
      </View>
      <View style={CustomItem.carrinho}>
        <View>
          <View style={CustomItem.valor}>
            <Text style={CustomItem.descricao}>Quantidade:</Text>
            <CampoInteiro estilos={CustomItem.quantidade} valor={quantidade} acao={setQuantidade} />
          </View>
          <View style={CustomItem.valor}>
            <Text style={CustomItem.descricao}>preço:</Text>
            <Text style={CustomItem.preco}>0</Text>
          </View>
        </View>
        <Botao valor="Adicionar" acao={() => {}}/>
      </View>
      <View style={CustomItem.divisor}/>
    </>
  );
}

const Servicos = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Serviços</Text>
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
