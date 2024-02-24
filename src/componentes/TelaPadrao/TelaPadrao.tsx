import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from "react-native";
import EstilosGlobal, { EstiloTelaPadrao, cores } from "../../estilos";

type TelaPadraoProps = {
  childrean: React.ReactNode
}

export function TelaPadrao({ childrean }: TelaPadraoProps) {
  return (
    <>
    <SafeAreaView style={EstiloTelaPadrao.ajusteTela} >
      <StatusBar backgroundColor={cores.roxo} />
      <KeyboardAvoidingView style={EstilosGlobal.preencher} behavior={Platform.OS == "ios" ? "padding" : "height"}>
        {childrean}
      </KeyboardAvoidingView>
    </SafeAreaView>
<SafeAreaView style={EstiloTelaPadrao.ajusteTelaBaixo}/>
    </>
  )
}
