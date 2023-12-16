import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MyBox = ({text,reptNumber}) => {
    const [count, setCount] = useState(reptNumber??0);
    const handleBoxClick = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <View>
            {count > 0 && (
                <TouchableOpacity onPress={handleBoxClick}>
                    <View style={styles.box}>
                        <Text>{text}</Text>
                        <Text>{count}</Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 5,
    },
});


export default MyBox;
