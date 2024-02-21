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
import { ContainerFlex, CustomItem } from "../../estilos";
import CampoInteiro from "../../componentes/CampoInteiro/CampoInteiro";
import Botao from "../../componentes/Botao/Botao";
import { TouchableOpacity } from "react-native";

// Mock para teste do item
const servicos = [
  {
    "id": 1,
    "nome": "banho",
    "preco": 79.99,
    "descricao": "Um banho comum para manter seu animal limpo e saudável."
  },
  {
    "id": 2,
    "nome": "tosa",
    "preco": 59.99,
    "descricao": "Uma tosa completa para deixar seu animal com a pelagem bonita e saudável."
  },
  {
    "id": 3,
    "nome": "vacina",
    "preco": 129.99,
    "descricao": "Uma dose da vacina necessária para proteger seu animal de doenças, como a vacinação antirrábica."
  },
  {
    "id": 4,
    "nome": "consulta",
    "preco": 89.99,
    "descricao": "Uma consulta veterinária para avaliar a saúde e o bem-estar do seu animal."
  },
  {
    "id": 5,
    "nome": "hospedagem",
    "preco": 149.99,
    "descricao": "Um serviço de hospedagem diária para garantir que seu animal seja bem cuidado enquanto você está fora."
  },
  {
    "id": 6,
    "nome": "ração",
    "preco": 39.99,
    "descricao": "Uma ração premium para fornecer os nutrientes necessários para a saúde e a energia do seu animal."
  },
  {
    "id": 7,
    "nome": "medicamento",
    "preco": 19.99,
    "descricao": "Um medicamento genérico para tratar diversas condições de saúde do seu animal, conforme prescrição veterinária."
  },
  {
    "id": 8,
    "nome": "cirurgia",
    "preco": 499.99,
    "descricao": "Uma cirurgia de emergência para tratar casos graves que necessitam de intervenção imediata."
  }
]


function Item({ nome, preco, descricao, }: { nome: string; preco: number; descricao: string; }) {
  const [quantidade, setQuantidade] = useState(0);
  const [total, setTotal] = useState(preco)
  const [expandir, setExpandir] = useState(false)

  const calculaTotal = (novaQuantidade: any) => {
    setTotal(novaQuantidade * preco)
  }
  const atualizaQuantidadeTotal = (novaQuantidade: any) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade)
  }

  const inverteExpandir = () => {
    setExpandir(!expandir);
    atualizaQuantidadeTotal(1);
  }


  return (
    <>
      <TouchableOpacity style={CustomItem.informacao} onPress={inverteExpandir}>
        <View style={[ContainerFlex.dflex, ContainerFlex.padding1]}>
          <Text style={CustomItem.nome}>{nome}</Text>
          <Text style={CustomItem.preco}>{preco}</Text>
        </View>
        <Text style={CustomItem.descricao}>{descricao}</Text>

      </TouchableOpacity>
      {expandir && <View style={CustomItem.carrinho}>
        <View>
          <View style={CustomItem.valor}>
            <Text style={CustomItem.descricao}>Quantidade:</Text>
            <CampoInteiro estilos={CustomItem.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal} />
          </View>
          <View style={CustomItem.valor}>
            <Text style={CustomItem.descricao}>total:</Text>
            <Text style={CustomItem.preco}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</Text>
          </View>
        </View>
        <Botao valor="Adicionar" acao={() => { }} />
      </View>}
      <View style={CustomItem.divisor} />
    </>
  );
}

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
