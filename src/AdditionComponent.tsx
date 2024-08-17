import React from 'react';
import {View,Text} from 'react-native';

interface AdditionComponentProps {
    a: number;
    b: number;
}
const AdditionComponent = (props:AdditionComponentProps) => {
    const sum = props.a + props.b;
    return (
        <View style={{padding:16}}>
            <Text>{props.a} + {props.b} = {sum}</Text>
        </View>
    );
};
export default AdditionComponent;
