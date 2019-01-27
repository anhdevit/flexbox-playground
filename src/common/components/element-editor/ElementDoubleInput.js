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

class ElementDoubleInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {
            title,
            defaultValueLeft,
            defaultValueRight,
            style
        } = this.props;

        return (
            <View
                style={style}
            >
                <TitleElement
                    title={title}
                />
                <View
                    style={styles.viewInput}
                >
                    <TextInput
                        defaultValue={defaultValueLeft}
                        style={[styles.textInput, styleCommon.heightElement]}
                    />
                    <TextInput
                        defaultValue={defaultValueRight}
                        style={[styles.textInput, styleCommon.heightElement]}
                    />
                </View>

            </View>
        );
    }
}

export default ElementDoubleInput;

const styles = StyleSheet.create({
    text: {
        color: colors.onBackground,
        fontSize: 20,
        fontWeight: '500',
    },
    viewInput: {
        flexDirection: 'row',
    },
    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 5,
        height: 30,
        paddingLeft: 10,
        marginTop: 10,
        flex: 1
    }
})