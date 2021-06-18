import React, {useEffect, useState} from 'react';
import { ActivityIndicator } from 'react-native';
import { View, StyleSheet, TextInput, ScrollView, Button, Alert } from 'react-native';
import firebase from '../database/firebase';

const UserDetailScreen = (props) => {
    const initialState = {
        id: "",
        name: "",
        mail: "",
        phone: "",
    }


    

    const [user, setUser] = useState(initialState);
      

    const [loading, setLoading] = useState(true);





    const getUserById = async (id) => {
        const dbRef = firebase.db.collection('users').doc(id)
        const doc = await dbRef.get();
        const user = doc.data();
        setUser({
            ...user,
            id: doc.id,
        });
        setLoading(false)
        
    };

    useEffect(() =>   {
        getUserById(props.route.params.userId);


    }, []);

    const handleChangeText = (name, value) => {
        setUser({ ...user, [name]: value });
    };

    const deleteUser = async () => {
        const dbRef = firebase.db.collection('users').doc(props.route.params.userId);
        await dbRef.delete();
        props.navigation.navigate('UserList')

    }

    const updateUser = async () => {
        const dbRef = firebase.db.collection('users').doc(user.id);
        await dbRef.set({
            name: user.name,
            mail: user.mail,
            phone: user.phone
        })
        setUser(initialState)
        props.navigation.navigate('UserList')
    }

    const openConfirmationAlert = () =>{
        Alert.alert('Borrar Solicitud','Estas seguro?', [
            {text: 'SI', onPress: () => deleteUser()},
            {text: 'NO', onPress: () => console.log(false)},
        ])

    }   

    if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#9e9e9e"  />
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder="Nombre del Cliente" 
            value={user.name}
            onChangeText={(value) => handleChangeText("name", value)} 
            />
        </View>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder="Importe del Contrato" 
            value={user.mail}
            onChangeText={(value) => handleChangeText("mail", value)}
            />
        </View>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder="Concepto" 
            value={user.phone}
            onChangeText={(value) => handleChangeText("phone", value)}
            />
        </View>
        <View>
            <Button 
                color= "#19AC52"
                title="Actualizar Solicitud" onPress={() => updateUser()} />
        </View>
        <View>
            <Button 
                color= "#377399"
                title="Borrar Solicitud" onPress={() => openConfirmationAlert() } />
        </View>

    </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 35,
    },
    inputGroup: {
        flex: 1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor: '#cccccc'
    },

});


export default UserDetailScreen

