// Importação de bibliotecas e componentes
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Componente HomePage
const HomePage = () => {
  // Estados
  const [heartColor1, setHeartColor1] = useState('#FDFDFD'); // Estado para a cor do coração 1
  const [heartColor2, setHeartColor2] = useState('#FDFDFD'); // Estado para a cor do coração 2
  const [menuVisible, setMenuVisible] = useState(false); // Estado para a visibilidade do menu

  // Função para lidar com o pressionar do coração 1
  const handleHeartPress1 = () => {
    const newColor = heartColor1 === '#FDFDFD' ? 'red' : '#FDFDFD'; // Altera a cor do coração 1 com base no estado atual
    setHeartColor1(newColor); // Atualiza o estado da cor do coração 1
  };

  // Função para lidar com o pressionar do coração 2
  const handleHeartPress2 = () => {
    const newColor = heartColor2 === '#FDFDFD' ? 'red' : '#FDFDFD'; // Altera a cor do coração 2 com base no estado atual
    setHeartColor2(newColor); // Atualiza o estado da cor do coração 2
  };

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Inverte o estado de visibilidade do menu
  };

  // Renderização do componente
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>HomePage</Text>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name="menu-outline" size={24} color="#FFA500" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {menuVisible && (
        <View style={styles.menu}>
          {/* aqui etsão os itens do menu, isa pode mudar aqui  */}
          <TouchableOpacity>
            <Text style={styles.menuItem}>Opção 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Opção 2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Opção 3</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.title}>Bem-vindo à Academia Fitnesis</Text>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="time-outline" size={24} color="#FFF" style={styles.cardIcon} />
          <Text style={styles.titlecard}>Funcionamento Reduzido</Text>
        </View>
        <Text style={styles.cardText}>
          Dia 01/05 é feriado, Dia do trabalhador. Devido a isso, a unidade funcionará em horário reduzido nesse dia. Agradecemos a compreensão!
        </Text>
        <TouchableOpacity onPress={handleHeartPress1}>
          <Ionicons name="heart-outline" size={24} color={heartColor1} style={styles.cardIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="megaphone-outline" size={24} color="#FFF" style={styles.cardIcon} />
          <Text style={styles.titlecard}>Cupom de Promoção 10% Off</Text>
        </View>
        <Text style={styles.cardText}>
          Não perca apenas essa semana para assinantes Fitnesis, Creatina com 10% de desconto, clique aqui para saber mais e resgatar seu cupom.
        </Text>
        <TouchableOpacity onPress={handleHeartPress2}>
          <Ionicons name="heart-outline" size={24} color={heartColor2} style={styles.cardIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 1,
    paddingTop: 0,
    backgroundColor: '#262626',
    width: '100%',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#1C1C1C',
    paddingVertical: 22,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  navbarTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFA500',
    textTransform: 'uppercase',
  },
  icon: {
    marginRight: 10,
  },
  menu: {
    position: 'absolute',
    top: 100,
    right: 20,
    backgroundColor: '#1C1C1C',
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  menuItem: {
    fontSize: 16,
    color: '#FDFDFD',
    paddingVertical: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 20,
    textAlign: 'left',
    color: '#FFA500',
    paddingTop: 40,
    textTransform: 'uppercase',
  },
  card: {
    backgroundColor: '#1C1C1C',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 4,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: '98%',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardIcon: {
    marginRight: 10,
  },
  titlecard: {
    textTransform: 'uppercase',
    fontSize: 20,
    marginBottom: 1,
    color: '#F5F5F5',
  },
  cardText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#F5F5F5',
    paddingTop: 15,
  },
});

export default HomePage; // Exporta o componente HomePage como padrão
