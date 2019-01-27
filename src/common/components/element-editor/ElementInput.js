import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import colors from '../../../common/theme/colors';
import TitleElement from '../texts/TitleElement';
import styleCommon from '../../../common/theme/styles';

class ElementInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {
            title,
            defaultValue,
            style
        } = this.props;

        return (
            <View
                style={style}
            >
                <TitleElement
                    title={title}
                />
                <TextInput 
                    defaultValue={defaultValue}
                    style={[styles.textInput, styleCommon.heightElement]}
                />
            </View>
        );
    }
}

export default ElementInput;

const styles = StyleSheet.create({
    text: {
        color: colors.onBackground,
        fontSize: 20,
        fontWeight: '500',
    },
    textInput: {
        borderColor:'gray',
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 5,
        height: 30,
        paddingLeft: 10,
        marginTop: 10
    }
})