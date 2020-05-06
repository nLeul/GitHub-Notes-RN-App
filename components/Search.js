import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

const Search = ({ navigation: { navigate } }) => {
    const [state, setState] = useState({ username: '', loading: false, error: false });
    const { username, loading, error } = state;



    const handleText = (username) => {
        setState((prevState) => ({ ...prevState, username: username.toLowerCase().trim() }));
    };


    const searchHandler = () => {

        setState((prevState) => ({ ...prevState, loading: true }));
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                setState((prevState) => ({ ...prevState, username: data, loading: false }));
                navigate('DASHBOARD', { user: data });
            })
            .catch(error => {
                setState((prevState) => ({ ...prevState, loading: false, error: true }));
            });
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.title} >Search for a GitHub user </Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Github username"
                onChangeText={handleText}
                value={username}
                autoFocus={true}
                autoCapitalize='none'

            />
            <TouchableOpacity
                style={styles.button}
                onPress={searchHandler} >
                <Text style={styles.buttonText}>Search</Text>
                {loading && <ActivityIndicator size='large' />}
                {error && <Text>Something went wrong try again later</Text>}
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#48BBEC',
        justifyContent: 'center',
        padding: 30,
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    },
    searchInput: {
        height: 50,
        padding: 5,
        marginRight: 5,
        fontSize: 22,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        color: 'white'
    },
    buttonText: {
        fontSize: 20,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    error: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
});
export default Search;