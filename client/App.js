import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import HomePage from './screens/HomePage';
import TreinoPage from './screens/TreinoPage';
import AgendaPage from './screens/AgendaPage';
import PerfilPage from './screens/PerfilPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'perfil':
        return <PerfilPage style={styles.page} />;
      case 'home':
        return <HomePage style={styles.page} />;
      case 'treino':
        return <TreinoPage style={styles.page} />;
      case 'agenda':
        return <AgendaPage style={styles.page} />;
      default:
        return <HomePage style={styles.page} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.pageContainer}>{renderPage()}</View>

      <View style={styles.buttonContainer}>
        <Button
          title="Home"
          onPress={() => setCurrentPage('home')}
          color={currentPage === 'home' ? '#FFA500' : '#555'}
        />
        <Button
          title="Treino"
          onPress={() => setCurrentPage('treino')}
          color={currentPage === 'treino' ? '#FFA500' : '#555'}
        />
        <Button
          title="Agenda"
          onPress={() => setCurrentPage('agenda')}
          color={currentPage === 'agenda' ? '#FFA500' : '#555'}
        />
        <Button
          title="Perfil"
          onPress={() => setCurrentPage('perfil')}
          color={currentPage === 'perfil' ? '#FFA500' : '#555'}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
  },
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 10,
    paddingTop: 8,
  },
});

export default App;
