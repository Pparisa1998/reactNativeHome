import React from 'react'
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native"
import { addDoc, collection } from 'firebase/firestore';
import db from '../firebase/firebase.config'

const CreateNewUser = ({navigation}) => {

    const defaultURL = "https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg?w=826&t=st=1697629445~exp=1697630045~hmac=42924ee907d1e297ebd484109732744efbda2c87a44bfb88856724bebcd06433"

    const [textName, onChangeNameText] = React.useState("");
    const [textMail, onChangeMailText] = React.useState("");
    const [textPhone, onChangePhoneText] = React.useState("");
    const [textURL, onChangeURLText] = React.useState(defaultURL);

    async function AddUser() {
        await addDoc(collection(db, "users"), {
            name: textName,
            mail: textMail,
            phone: textPhone,
            pictureURL: textURL
        }).then(() => {
            navigation.navigate("Users List")
        }).catch((error) => {
            alert(error.message)
        });
    }


    function ButtonSave() {
        if (   textName.length == 0 
            || textMail.length == 0
            || textPhone.length == 0) {
            alert('กรุณากรอกข้อมูลให้ครบ')
            return
        }
        AddUser()
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textfield}
                onChangeText={onChangeNameText}
                value={textName}
                placeholder="ชื่อ - นามสกุล"/>
            <TextInput 
                style={styles.textfield}
                onChangeText={onChangeMailText}
                value={textMail}
                placeholder="อีเมล"/>
            <TextInput 
                style={styles.textfield}
                onChangeText={onChangePhoneText}
                value={textPhone}
                placeholder="เบอร์โทรศัพท์"/>
            <TextInput 
                style={styles.textfield}
                onChangeText={onChangeURLText}
                value='https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg?w=826&t=st=1697629445~exp=1697630045~hmac=42924ee907d1e297ebd484109732744efbda2c87a44bfb88856724bebcd06433'
                placeholder="URL ของรูปภาพ"/>
            <Pressable 
                style={styles.buttonSave}
                onPress={() => ButtonSave()}>
                <Text style={styles.textButton}>SAVE USER</Text>
            </Pressable>
        </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        margin: 30
    },
    textfield: {
        marginBottom: 10,
        padding: 10,
        fontSize: 15,
        color: "#000000",
        backgroundColor: "#e0e0e0",
        borderRadius: 5
    },
    buttonSave: {
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#1ecfea',
    },
    textButton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});

export default CreateNewUser