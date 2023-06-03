// Importando os módulos e componentes necessários do React e do React Native
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

// Componente de exercício individual
const ExerciseItem = ({ exercise }) => {
return (
<View style={styles.exerciseItem}>
<Text style={styles.exerciseName}>{exercise.name}</Text>
<View style={styles.exerciseDetails}>
<Text style={styles.repetitionText}>{exercise.repetitions}</Text>
<Text style={styles.quantityText}>{exercise.quantity}</Text>
</View>
</View>
);
};

// Componente da página de Treino
const TreinoPage = () => {
// Definindo o estado inicial para a lista de exercícios
const [exercises, setExercises] = useState([
{ id: 1, name: 'MOBILIDADE DE OMBRO COM BASTÃO', repetitions: 10, quantity: 3 },
{ id: 2, name: 'SUPINO MÁQUINA', repetitions: 12, quantity: 3 },
{ id: 3, name: 'DESENVOLVIMENTO MÁQUINA PRONADA', repetitions: 8, quantity: 4 },
{ id: 4, name: 'TRÍCEPS MÁQUINA FECHADO', repetitions: 15, quantity: 3 },
{ id: 5, name: 'PUXADA PELA FRENTE PRONADA', repetitions: 10, quantity: 3 },
{ id: 6, name: 'REMADA ALTA COM BARRA', repetitions: 12, quantity: 3 },
{ id: 7, name: 'BÍCEPS BARRA RETA', repetitions: 8, quantity: 4 },
{ id: 8, name: 'ABDOMINAL NA MÁQUINA', repetitions: 15, quantity: 3 },
]);

// Função para lidar com a alteração do número de repetições de um exercício
const handleInputChange = (exerciseId, repetitions) => {
// Atualiza a lista de exercícios com as repetições atualizadas
const updatedExercises = exercises.map((exercise) => {
if (exercise.id === exerciseId) {
return { ...exercise, repetitions };
}
return exercise;
});
setExercises(updatedExercises);
};

// Função para lidar com o pressionar do botão "Começar"
const Comecarbotao = () => {
// Prepara os dados do treino para enviar ao servidor
const data = exercises.map((exercise) => ({
nome: exercise.name,
repeticoes: exercise.repetitions,
quantidade: exercise.quantity,
}));

// Envia a solicitação POST ao servidor para inserir os dados no banco de dados
axios.post('http://192.168.1.4:3001/item', data)
  .then((response) => {
    console.log('Dados inseridos com sucesso:', response.data);
    // Faça algo com a resposta do servidor, se necessário
  })
  .catch((error) => {
    console.error('Erro ao inserir dados:', error);
    // Trate o erro adequadamente
  });

};

return (
<View style={styles.container}>
<View style={styles.navbar}>
<Text style={styles.navbarText}>Treino</Text>
<View style={styles.navbarIcons}>
<Ionicons name="notifications-outline" size={24} color="#FFA500" />
<Ionicons name="menu-outline" size={24} color="#FFA500" />
</View>
</View>
<ScrollView style={styles.scrollView}>


{exercises.map((exercise, index) => ( //Renderiza cada item da lista de exercícios 
<View key={exercise.id}>
<ExerciseItem
           exercise={exercise}
           onInputChange={handleInputChange}
         />
{/*Renderiza um divisor entre os itens, exceto para o último item */}
{index !== exercises.length - 1 && <View style={styles.divider} />} 
</View>
))}
</ScrollView>
<View style={styles.startButtonContainer}>
{/*  Define o texto do botão "Começar" e associa a função de pressionar */}
<Text style={styles.startButtonText} onPress={Comecarbotao}>
Começar
</Text>
</View>
</View>
);
};

// Obtém a largura da janela do dispositivo
const { width } = Dimensions.get('window');
const treinoWidth = width * 0.8;

// Estilos para os componentes da página
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: treinoWidth,
  },
  navbarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  navbarIcons: {
    flexDirection: 'row',
  },
  scrollView: {
    flex: 1,
    width: treinoWidth,
  },
  exerciseItem: {
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  exerciseDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  repetitionText: {
    fontSize: 10,
    color: '#FFF',
  },
  quantityText: {
    fontSize: 10,
    color: '#FFF',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginVertical: 10,
  },
  startButtonContainer: {
    backgroundColor: '#FFA500',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
    width: treinoWidth,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default TreinoPage;