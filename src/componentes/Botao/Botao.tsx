import React from "react";
import { TouchableOpacity, Text } from "react-native";
import estilos, { CustomButao } from "../../estilos";

interface BotaoProps {
    pequeno?: boolean;
    invertido?: boolean;
    valor: any;
    acao: () => void;
    estilos?: any;
}

export default function Botao({ valor, acao, pequeno = false, invertido = false, estilos }: BotaoProps) {
    const EstilosPadrao = CustomButao(pequeno, invertido);

    return (
        <TouchableOpacity onPress={acao} style={[EstilosPadrao.botao, estilos]}>
            <Text style={EstilosPadrao.valor}>{valor}</Text>
        </TouchableOpacity>
    );
}
