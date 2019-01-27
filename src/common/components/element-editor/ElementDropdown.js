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
import DropdownButton from '../buttons/DropdownButton';

class ElementDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {
            title,
            value,
            style
        } = this.props;

        return (
            <View
                style={style}
            >
                <TitleElement
                    title={title}
                />
                <DropdownButton 
                    title={value}
                    styleCustom={{
                        marginTop: 10,
                    }}
                />
            </View>
        );
    }
}

export default ElementDropdown;

const styles = StyleSheet.create({
    text: {
        color: colors.onBackground,
        fontSize: 20,
        fontWeight: '500',
    }
})