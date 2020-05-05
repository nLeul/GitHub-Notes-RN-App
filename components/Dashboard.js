import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Dashboard = ({ navigation: { navigate }, route: { params: { user } } }) => {

    const goToProfile = () => {
        navigate('PROFILE', { user });
    };

    const goToRepositories = () => {
        navigate('REPOSITORIES', { user });
    };

    const goToNotes = () => {
        navigate('NOTES', { user });
    };
    return (
        <View style={styles.container}>
            <View style={styles.profilePicBox}>
                <Image
                    style={styles.image}
                    source={{ uri: user.avatar_url }} />
            </View>
            <TouchableOpacity
                style={[styles.box, styles.blue]}
                onPress={goToProfile}
            >
                <Text style={styles.buttonText}>Profile Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.box, styles.purple]}
                onPress={goToRepositories}
            >
                <Text style={styles.buttonText}> Repositories</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.box, styles.pink]}
                onPress={goToNotes}
            >
                <Text style={styles.buttonText}>Notes</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        padding: 0,
    },
    profilePicBox: {
        flex: 2,
    },
    image: {
        height: 350
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 26,
    },
    blue: {
        backgroundColor: 'powderblue',
    },
    purple: {
        backgroundColor: 'violet'
    },
    pink: {
        backgroundColor: 'pink'
    }
});
export default Dashboard;