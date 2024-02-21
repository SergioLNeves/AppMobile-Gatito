import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { StyleSheet } from "react-native";
import { cores } from "../../estilos";

const EstilosPadrao = StyleSheet.create({
    campo: {
        height: 25,
        borderWidth: 1,
        borderColor: cores.escuro,
        textAlign: 'center'
    }
})

interface CampoInteiroProps {
    valor: number;
    acao: (novaQuantidade: number) => any;
    estilos: any
}

export default function CampoInteiro({ valor, estilos, acao }: CampoInteiroProps) {

    const atualiza = (novoValor: string) => {
        const valor = novoValor && novoValor.match(/^[0-9]*$/) ? Number(novoValor.replace(/^(0)(.+)/, '$2')) : 0;
        acao(valor);
    };


    const numeroEmTexto = String(valor);

    return (
        <TextInput
            style={[EstilosPadrao.campo, estilos]}
            keyboardType='number-pad'
            selectTextOnFocus
            onChangeText={(novoValor) => { atualiza(novoValor) }}
            value={numeroEmTexto}
        />
    );
}