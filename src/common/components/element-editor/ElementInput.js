import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    View
} from 'react-native';
import colors from '../../../common/theme/colors';
import TitleElement from '../texts/TitleElement';

class ElementInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {
            title,
        } = this.props;

        return (
            <View
            >
                <TitleElement
                    title={title}
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
    }
})