import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from "react-native";
import EstilosGlobal from "../../estilos";

type TelaPadraoProps = {
    childrean: React.ReactNode
  }
  
  export function TelaPadrao({ childrean }: TelaPadraoProps) {
    return (<SafeAreaView style={EstilosGlobal.preencher} >
      <StatusBar />
      <KeyboardAvoidingView style={EstilosGlobal.preencher} behavior={Platform.OS == "ios" ? "padding" : "height"}>
        {childrean}
      </KeyboardAvoidingView>
    </SafeAreaView>)
  }
  