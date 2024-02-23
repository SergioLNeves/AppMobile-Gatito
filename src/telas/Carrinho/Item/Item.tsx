import { useState } from "react";
import {
    Text,
    View,
} from "react-native";
import Botao from "../../../componentes/Botao/Botao";
import CampoInteiro from "../../../componentes/CampoInteiro/CampoInteiro";
import { CustomItem } from "../../../estilos";


export function ItemCarrinho({ nome, preco, descricao, quantidadeItem }: { nome: string; preco: number; descricao: string; quantidadeItem: number }) {

    const [quantidade, setQuantidade] = useState(quantidadeItem);
    const atualizaQuantidadeTotal = (novaQuantidade: any) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade)
    }


    const [total, setTotal] = useState(preco * quantidadeItem)
    const calculaTotal = (novaQuantidade: any) => {
        setTotal(novaQuantidade * preco)
    }


    return (
        <>
            <View style={CustomItem.informacao}>
                <Text style={CustomItem.nome}>{nome}</Text>
                <Text style={CustomItem.descricao}>{descricao}</Text>
            </View>
            <View style={CustomItem.carrinho}>
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
                <Botao valor="Remover do Carrinho" acao={() => { }} />
            </View>
            <View style={CustomItem.divisor} />
        </>
    );
}