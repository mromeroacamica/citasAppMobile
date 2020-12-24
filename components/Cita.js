import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

const Cita = ({cita}) => {
    const dialogoEliminar=()=>{
        console.log('eliminar.......')
    }
    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Paciente:</Text> 
                <Text style= {styles.texto}>{cita.paciente}</Text> 
            </View>
            <View>
                <Text style={styles.label}>Propietario:</Text> 
                <Text style= {styles.texto}>{cita.propietario}</Text> 
            </View>
            <View>
                <Text style={styles.label}>Sintomas:</Text> 
                <Text style= {styles.texto}>{cita.sintomas}</Text> 
            </View>

            <View >
                <TouchableHighlight onPress={()=> dialogoEliminar()} style ={styles.botonEliminar}>
                    <Text style={styles.textoBotonEliminar}>Eliminar &times;</Text>
                </TouchableHighlight>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    cita:{
        backgroundColor:'#fff',
        borderBottomColor:'#e1e1e1',
        borderStyle:'solid',
        borderBottomWidth:1,
        paddingVertical:20,
        paddingHorizontal:10,
    },
    label:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:20
    },
    texto:{
        fontSize:18,
    },
    botonEliminar:{
        padding:10,
        backgroundColor:'red',
        marginVertical:10,
    },
    textoBotonEliminar:{
        fontWeight:'bold',
        textAlign:'center',
        color:'#fff',
    }
})

export default Cita;