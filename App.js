import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

const App = () => {
  //mostrar y esconder
  const [mostrarForm, guardarMostrarForm] = useState(false);
  //definir el state de citas
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Mati', sintomas: 'No come'},
    {id: '2', paciente: 'Redux', propietario: 'Mati', sintomas: 'No come'},
    {id: '3', paciente: 'Goku', propietario: 'Mati', sintomas: 'No come'},
  ]);
  //Eliminar una cita del state
  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };
  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de citas</Text>
        <View>
          <TouchableHighlight
            onPress={() => guardarMostrarForm(!mostrarForm)}
            style={styles.botonMostrar}>
            <Text style={styles.textoBotonMostrar}>Crear nueva cita</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.contenido}>
          {mostrarForm ? (
            <>
              <Text style={styles.titulo}>{'Crear nueva cita'}</Text>
              <Formulario />
            </>
          ) : (
            <>
              <Text style={styles.titulo}>
                {citas.length > 0
                  ? 'Administra tus citas'
                  : 'No hay citas, agrega una.'}
              </Text>
              <FlatList
                style={styles.listado}
                data={citas}
                renderItem={({item}) => (
                  <Cita cita={item} eliminarPaciente={eliminarPaciente} />
                )}
                keyExtractor={(cita) => cita.id}
              />
            </>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  contenedor: {
    backgroundColor: '#AA076b',
    flex: 1,
  },
  titulo: {
    color: '#fff',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botonMostrar: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
  },
  textoBotonMostrar: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});

export default App;
