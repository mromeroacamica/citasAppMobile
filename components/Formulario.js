import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
  Platform,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';

const Formulario = ({citas, setCitas, guardarMostrarForm}) => {
  const [paciente, guardarPaciente] = useState('');
  const [propietario, guardarPropietario] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [fecha, guardarFecha] = useState('');
  const [hora, guardarHora] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [sintomas, guardarSintomas] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    const opciones = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    };
    guardarFecha(date.toLocaleDateString('es-ES', opciones));
    hideDatePicker();
  };

  //Muestra o oculta el time picker
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const confirmarHora = (hora) => {
    const opciones = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: false,
    };
    guardarHora(hora.toLocaleString('en-US', opciones));
    hideTimePicker();
    return;
  };

  //crear nueva cita
  const crearNuevaCita = () => {
    //validar
    if (
      paciente.trim() === '' ||
      propietario.trim() === '' ||
      telefono.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      //falla la validacion
      console.log('algo fallo');
      mostrarAlerta();
      return;
    }
    //Crear una nueva cita
    const cita = {paciente, propietario, telefono, fecha, hora, sintomas};
    cita.id = shortid.generate();
    const citasNuevo = [...citas, cita];
    setCitas(citasNuevo);
    //Ocultar formulario
    guardarMostrarForm(false);
    //Resetear el formulario
  };

  //nuestra alerta si falla la validacion
  const mostrarAlerta = () => {
    Alert.alert(
      'Error', //esto es el titulo
      'Todos los campos son obligatorios', //mensaje
      [
        {
          text: 'ok', //Arreglo de botones
        },
      ],
    );
  };
  return (
    <>
      <ScrollView style={styles.formulario}>
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              guardarPaciente(text);
            }}
          />
        </View>
        <View>
          <Text style={styles.label}>Dueño:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              guardarPropietario(text);
            }}
          />
        </View>
        <View>
          <Text style={styles.label}>Contacto:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              guardarTelefono(text);
            }}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={styles.label}>Fecha:</Text>
          <Button title="Seleccionar fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
            locale="es_ES"
            headerTextIOS="Elige una Fecha"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{fecha}</Text>
        </View>
        <View>
          <Text style={styles.label}>Hora:</Text>
          <Button title="Seleccionar hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={confirmarHora}
            onCancel={hideTimePicker}
            locale="es_ES"
            headerTextIOS="Elige una Hora"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
            is24Hour
          />
          <Text>{hora}</Text>
        </View>
        <View>
          <Text style={styles.label}>Sintomas:</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={(text) => {
              guardarSintomas(text);
            }}
          />
        </View>
        <View>
          <TouchableHighlight
            onPress={() => crearNuevaCita()}
            style={styles.botonSubmit}>
            <Text style={styles.textoBotonSubmit}>Crear nueva cita</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: Platform.OS === 'ios' ? 50 : 35,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  botonSubmit: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
  },
  textoBotonSubmit: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});
export default Formulario;
