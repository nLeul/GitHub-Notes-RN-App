import React, { useState } from 'react';
import {
    StyleSheet, KeyboardAvoidingView, View, ScrollView, TextInput, TouchableOpacity, Text
} from 'react-native';

import Badge from 'components/Badge';
import Separator from 'components/Separator';




function Notes({ route: { params: { user } } }) {

    const [state, setState] = useState({ notes: [], note: '' });
    const { notes, note } = state;

    const renderNote = (note, index) => {
        return (
            <View key={index} style={styles.rowContainer}>
                <Text>{note}</Text>
                <Separator />
            </View>
        )
    };

    const handleNote = note => {
        setState(prev => ({ ...prev, note }));

    };

    const handleSubmit = () => {
        setState(prev => ({ notes: prev.notes.concat(prev.note), note: '' }));
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Badge userInfo={user} />
            <ScrollView>
                {notes.map(note => renderNote(note))}
            </ScrollView>
            <View style={styles.footerContainer}>
                <TextInput
                    style={styles.searchInput}
                    value={note}
                    onChangeText={handleNote}
                    placeHolder='New note'
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

            </View>
            <View style={{height:100,backgroundColor:'#333'}}/>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    button: {
        height: 60,
        backgroundColor: '#48BBEC',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchInput: {
        height: 60,
        padding: 10,
        fontSize: 18,
        color: '#111',
        flex: 10
    },
    rowContainer: {
        padding: 10
    },
    footerContainer: {
        backgroundColor: '#E3E3E3',
        alignItems: 'center',
        flexDirection: 'row'
    }
});

export default Notes;