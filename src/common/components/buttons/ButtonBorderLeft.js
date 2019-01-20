import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import colors from '../../../common/theme/colors';

class ButtonBorderLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {
            onPress,
            title,
        } = this.props;
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text
                    style={styles.text}
                >{title}</Text>
            </TouchableOpacity>
        );
    }
}

export default ButtonBorderLeft;

const styles = StyleSheet.create({
    button: {
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.border,
        flex: 1
    },
    text: {
        color: colors.onBackground,
        alignSelf: 'center',
    },
})