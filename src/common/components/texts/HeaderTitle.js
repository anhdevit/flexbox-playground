import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import colors from '../../../common/theme/colors';

class HeaderTitle extends Component {
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
            <Text
                style={styles.text}
            >
                {title}
            </Text>
        );
    }
}

export default HeaderTitle;

const styles = StyleSheet.create({
    text: {
        color: colors.onBackground,
        fontSize: 20,
        fontWeight: '500',      
    }
})