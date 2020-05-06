import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Separator from 'components/Separator';
import Badge from 'components/Badge';

const ProfileDetails = ({ route: { params: { user } } }) => {
    // console.log(user)


    const detailsArr = ['company', 'location', 'followers', 'following', 'email', 'bio'];

    const details = detailsArr.map((item, index) => {
        return (
            <View key={index} style={styles.container}>
                <Text style={styles.rowTitle}>{item.toUpperCase()}</Text>
                <Text style={styles.rowContent}>{user[item]}</Text>
                <Separator />
            </View>

        )
    })

    return (
        <ScrollView>
            <Badge userInfo={user} />
            {details}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    rowContainer: {
        padding: 10
    },
    rowTitle: {
        color: '#48BBEC',
        fontSize: 16
    },
    rowContent: {
        fontSize: 19
    }
});
export default ProfileDetails;