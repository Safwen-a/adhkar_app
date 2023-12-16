import React from 'react';
import { View, Button } from 'react-native';


const FirstPage = ({ navigation }) => {

    const handleButton1Click = () => {
        navigation.navigate('Athkar');
    };

    const handleButton2Click = () => {
        navigation.navigate('ThirdPage');
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Button 1" onPress={handleButton1Click} />
            <View style={{ marginTop: 10 }} />
            <Button title="Button 2" onPress={handleButton2Click} />
        </View>
    );
};

export default FirstPage;
