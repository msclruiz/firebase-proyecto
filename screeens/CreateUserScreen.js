import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import firebase from '../database/firebase';

const CreateUserScreen = (props) => {
    const [state, setState] = useState({
        name: "",
        mail: "",
        phone: "",
    });

    const handleChangeText = (name, value ) => {
        setState({ ...state, [name]: value });
    };

    const saveNewUser = async () => {
        if (state.name === '') {
            alert('Por favor coloca el nombre del cliente')
        } else {
            try {
                await firebase.db.collection('users').add({
                    name: state.name,
                    mail: state.mail,
                    phone: state.phone
    
                })
                props.navigation.navigate('UserList');
                
            }catch (error) {
                console.log(error);
            }
        }

    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder="Nombre del Cliente" 
                onChangeText={(value) => handleChangeText("name", value)} 
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Importe del Contrato" 
                onChangeText={(value) => handleChangeText("mail", value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Concepto" 
                onChangeText={(value) => handleChangeText("phone", value)}
                />
            </View>
            <View>
                <Button title="Guardar Solicitud" onPress={() => saveNewUser()} />

            </View>

        </ScrollView>
        
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor: '#cccccc'
    },
        

})


export default CreateUserScreen
