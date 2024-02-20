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
        if (!novoValor) return;
        const verificaInteiro = novoValor.match(/^[0-9]*$/);
        if (!verificaInteiro) return;

        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');

        acao(Number(removeZeroEsquerda)); // Convertido para número antes de chamar acao
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