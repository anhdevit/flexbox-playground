import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../common/theme/colors';
import styleCommon from '../../../common/theme/styles';
import ModalDropdown from 'react-native-modal-dropdown';

class DropdownButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {
            onPress,
            title,
            option,
            styleCustom,
        } = this.props;

        return (
            <ModalDropdown
                options={option}
                dropdownStyle={styles.styleDropdown}
                dropdownTextStyle={styles.textStyleDropDown}
                onPress={onPress}
            >
                <View
                    style={[styles.button, styleCustom, styleCommon.heightElement]}
                    onPress={onPress}
                >
                    <Text
                        style={styles.text}
                    >{title}</Text>
                    {
                        <Image
                            style={styles.image}
                            source={require('../../../resources/assets/common/ic_arrow_drop_down.png')}
                        />
                    }
                </View>
            </ModalDropdown>
        );
    }
}

export default DropdownButton;

const styles = StyleSheet.create({
    styleDropdown: {
        // width: '90%',
    },
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