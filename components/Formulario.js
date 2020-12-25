import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    console.log("A date has been picked: ", date);
    hideDatePicker();
  };

  //Muestra o oculta el time picker
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const confirmarHora = (date) => {
    console.log("A date has been picked: ", date);
    hideTimePicker();
  };
    return (
    <>
    <View style={styles.formulario}>
    <View>
        <Text style={styles.label}>Paciente:</Text>
        <TextInput 
        style={styles.input}
        onChangeText = {(text)=>{console.log(text)}}
        />
    </View>
    <View>
        <Text style={styles.label}>Dueño:</Text>
        <TextInput 
        style={styles.input}
        onChangeText = {(text)=>{console.log(text)}}
        />
    </View>
    <View>
        <Text style={styles.label}>Contacto:</Text>
        <TextInput 
        style={styles.input}
        onChangeText = {(text)=>{console.log(text)}}
        keyboardType='numeric'
        />
    </View>
    <View>
      <Button title="Seleccionar fecha" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={confirmarFecha}
        onCancel={hideDatePicker}
        locale='es_ES'
        headerTextIOS='Elige una Fecha'
        cancelTextIOS='Cancelar'
        confirmTextIOS='Confirmar'

      />
    </View>
    <View>
      <Button title="Seleccionar hora" onPress={showTimePicker} />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={confirmarHora}
        onCancel={hideTimePicker}
        locale='es_ES'
        headerTextIOS='Elige una Hora'
        cancelTextIOS='Cancelar'
        confirmTextIOS='Confirmar'
        is24Hour
      />
    </View>
    <View>
        <Text style={styles.label}>Sintomas:</Text>
        <TextInput
        multiline  
        style={styles.input}
        onChangeText = {(text)=>{console.log(text)}}
        />
    </View>
    </View>
    </>
);}
const styles = StyleSheet.create({
    formulario:{
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:10,
        marginHorizontal:'2.5%'
    },
    label:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:20
    },
    input:{
        marginTop:10,
        height:50,
        borderColor:'#e1e1e1',
        borderWidth:1,
        borderStyle:'solid'
    }
})
export default Formulario;