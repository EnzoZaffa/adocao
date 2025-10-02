import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import Input from "../components/Input";
import SelectButton from "../components/SelectButton";
import CustomButton from "../components/CustomButton";

export default function FormScreen() {
  // Dados adotante
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Preferências pet
  const [especie, setEspecie] = useState("");
  const [sexo, setSexo] = useState("");
  const [idade, setIdade] = useState("");
  const [porte, setPorte] = useState("");

  // Verifica se todos os campos foram preenchidos corretamente
  const formValido =
    nome.trim() &&
    email.trim() &&
    celular.trim() &&
    dataNascimento.trim() &&
    senha &&
    confirmarSenha === senha &&
    especie &&
    sexo &&
    idade &&
    porte;

  const handleSubmit = () => {
    if (!formValido) {
      Alert.alert("Erro", "Preencha todos os campos corretamente!");
      return;
    }
    Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Seus Dados</Text>

      <Input label="Nome Completo" value={nome} onChangeText={setNome} />
      <Input label="E-mail" value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Celular</Text>
      <MaskedTextInput
        mask="(99) 99999-9999"
        onChangeText={setCelular}
        value={celular}
        style={styles.input}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Data de Nascimento</Text>
      <MaskedTextInput
        mask="99/99/9999"
        onChangeText={setDataNascimento}
        value={dataNascimento}
        style={styles.input}
        keyboardType="numeric"
      />

      <Input
        label="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Input
        label="Confirmar Senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <Text style={styles.title}>Preferências para Adoção</Text>

      <Text style={styles.label}>Espécie</Text>
      <View style={styles.row}>
        <SelectButton
          label="Cachorro"
          selected={especie === "Cachorro"}
          onPress={() => setEspecie("Cachorro")}
        />
        <SelectButton
          label="Gato"
          selected={especie === "Gato"}
          onPress={() => setEspecie("Gato")}
        />
      </View>

      <Text style={styles.label}>Sexo</Text>
      <View style={styles.row}>
        <SelectButton
          label="Macho"
          selected={sexo === "Macho"}
          onPress={() => setSexo("Macho")}
        />
        <SelectButton
          label="Fêmea"
          selected={sexo === "Fêmea"}
          onPress={() => setSexo("Fêmea")}
        />
      </View>

      <Text style={styles.label}>Idade</Text>
      <View style={styles.row}>
        {["Filhote", "Adulto", "Idoso"].map((opcao) => (
          <SelectButton
            key={opcao}
            label={opcao}
            selected={idade === opcao}
            onPress={() => setIdade(opcao)}
          />
        ))}
      </View>

      <Text style={styles.label}>Porte</Text>
      <View style={styles.row}>
        {["Pequeno", "Médio", "Grande"].map((opcao) => (
          <SelectButton
            key={opcao}
            label={opcao}
            selected={porte === opcao}
            onPress={() => setPorte(opcao)}
          />
        ))}
      </View>

      <CustomButton
        title="Quero Adotar!"
        onPress={handleSubmit}
        disabled={!formValido}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginVertical: 15 },
  label: { fontWeight: "bold", marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginTop: 5,
  },
  row: { flexDirection: "row", flexWrap: "wrap" },
});
