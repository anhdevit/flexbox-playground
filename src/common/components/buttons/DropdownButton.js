import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import colors from '../../../common/theme/colors';

class DropdownButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {
            onPress,
            imageRight,
            title,
            styleCustom,
        } = this.props;

        return (
            <TouchableOpacity
                style={[styles.button, styleCustom]}
                onPress={onPress}
            >
                <Text
                    style={styles.text}
                >{title}</Text>
                {
                    imageRight && <Image
                        style={styles.image}

                        source={imageRight}
                    />
                }
            </TouchableOpacity>
        );
    }
}

export default DropdownButton;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        borderRadius: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.border,
        borderWidth: 1,
    },
    text: {
        alignSelf: 'center',
        flex: 1,
        color: colors.surface
    },
    image: {
        tintColor: colors.surface
    }
})