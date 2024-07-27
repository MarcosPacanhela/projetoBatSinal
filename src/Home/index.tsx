import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import BatmanLogo from '../assets/Batman-Logo.png';
import styles from './Style';
import { Alert } from 'react-native';
export function Home() {
    const [form, setForm] = useState(false);
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [location, setLocation] = useState('')
    const [observation, setObservation] = useState('')

    const handleSubmit = () => {
        setForm(!form)
        Alert.alert('Bat Sinal enviado com sucesso')
    }
    return (
        <View style={styles.container}>
            <Image source={BatmanLogo} style={!form ? styles.image : styles.imageForm} />
            {!form ? (
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={1}
                    onPress={() => setForm(!form)}
                >
                    <Text style={styles.text}>🚨 Ativar o Bat Sinal 🚨</Text>
                </TouchableOpacity>
            ) : (
                <>
                    <View style={styles.containerForm}>
                        <Text style={styles.textLabel}>Nome completo</Text>
                        <TextInput
                            style={styles.textInput}
                            value={name}
                            onChangeText={setName}
                        />
                        <Text style={styles.textLabel}>Número de telefone</Text>
                        <TextInput
                            style={styles.textInput}
                            value={number}
                            onChangeText={setNumber}
                            keyboardType="numeric"

                        />
                        <Text style={styles.textLabel}>Localização</Text>
                        <TextInput
                            style={styles.textInput}
                            value={location}
                            onChangeText={setLocation}
                        />
                        <Text style={styles.textLabel}>Observação</Text>
                        <TextInput
                            style={styles.textInput}
                            multiline={true}
                            numberOfLines={8}
                            value={observation}
                            onChangeText={setObservation}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={1}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.text}>Enviar o Bat Sinal 📲</Text>
                    </TouchableOpacity>
                </>
            )
            }

        </View>
    );
}
