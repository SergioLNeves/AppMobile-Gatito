import React, { useState } from "react";
import {
  Text,
  View,
} from "react-native";
import Botao from "../../../componentes/Botao/Botao";
import CampoInteiro from "../../../componentes/CampoInteiro/CampoInteiro";
import { CustomItem } from "../../../estilos";
import { TouchableOpacity } from "react-native";


export function ItemServicos({ nome, preco, descricao, }: { nome: string; preco: number; descricao: string; }) {
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
        
          <Text style={CustomItem.nome}>{nome}</Text>
          <Text style={CustomItem.preco}>{preco}</Text>
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

