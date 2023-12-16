import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MyBox from '../common/MyBox';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('your_database_name.db');

const SecondPage = () => {
    const [textData, setTextData] = useState('');

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT text FROM your_table_name',
                [],
                (_, { rows }) => {
                    setTextData(rows.item(0).text);
                }
            );
        });
    }, []);

    return (
        <View>
            <Text>{textData}</Text>
        </View>
    );
};

export default SecondPage;
