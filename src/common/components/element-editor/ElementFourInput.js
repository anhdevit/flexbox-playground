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

class ElementFourInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {
            title,
            defaultValueLeft,
            defaultValueTop,
            defaultValueRight,
            defaultValueBottom,
            style
        } = this.props;

        return (
            <View
                style={[styles.viewElement, style]}
            >
                <TextInput
                    defaultValue={defaultValueTop}
                    style={[styles.textInput, styleCommon.heightElement]}
                />
                <View
                    style={styles.viewInput}
                >

                    <TextInput
                        defaultValue={defaultValueLeft}
                        style={[styles.textInput, styleCommon.heightElement]}
                    />
                    <Text
                        style={styles.textCenter}
                    >{title}</Text>
                    <TextInput
                        defaultValue={defaultValueRight}
                        style={[styles.textInput, styleCommon.heightElement]}
                    />
                </View>
                <TextInput
                    defaultValue={defaultValueBottom}
                    style={[styles.textInput, styleCommon.heightElement]}
                />
            </View>
        );
    }
}

export default ElementFourInput;

const styles = StyleSheet.create({
    viewElement: {
        alignItems: 'center',
    },
    text: {
        color: colors.onBackground,
        fontSize: 20,
        fontWeight: '500',
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textCenter: {
        marginHorizontal: 20
    },
    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        height: 30,
        paddingLeft: 10,
        width: 70
    }
})