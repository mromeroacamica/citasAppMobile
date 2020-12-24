import React, {useState} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Cita from './components/Cita';


const App = () => {
    //definir el state de citas
    const [citas, setCitas]= useState([
        {id:'1',paciente:'Hook',propietario:'Mati',sintomas:'No come'},
        {id:'2',paciente:'Redux',propietario:'Mati',sintomas:'No come'},
        {id:'3',paciente:'Goku',propietario:'Mati',sintomas:'No come'},

    ]);
    return ( 
        <>
        <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de citas</Text>
        <FlatList
        data={citas}
        renderItem = {({item})=>(
            <Cita cita={item}/>
        )
        }
        keyExtractor = {cita => cita.id}
        />
        </View>
        </>  
    );
};

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor:'#AA076b',
        flex:1
    },
    titulo:{
        color:'#fff',
        marginTop:40,
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
    }
});

export default App;