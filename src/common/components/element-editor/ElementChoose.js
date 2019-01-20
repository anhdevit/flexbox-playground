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
import ButtonBorderLeft from '../buttons/ButtonBorderLeft';
import ButtonBorderCenter from '../buttons/ButtonBorderCenter';
import ButtonBorderRight from '../buttons/ButtonBorderRight';

const RenderListButton = ({ data = [] }) => {
    console.log(222, data)
    return data.map((value, index) => {
        switch (index) {
            case 0:
                return <ButtonBorderLeft
                    title={value}
                    key={index}
                />
            case data.length - 1:
                return <ButtonBorderRight
                    title={value}
                    key={index}
                />
            default:
                return <ButtonBorderCenter
                    title={value}
                    key={index}
                />
        }
    })
}
class ElementChoose extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const {
            title,
            data
        } = this.props;

        return (
            <View
            >
                <TitleElement
                    title={title}
                />
                <View
                    style={styles.viewListButton}
                >
                    <RenderListButton
                        data={data}
                    />
                </View>
            </View>
        );
    }
}

export default ElementChoose;

const styles = StyleSheet.create({
    text: {
        color: colors.onBackground,
        fontSize: 20,
        fontWeight: '500',
    },
    viewListButton: {
        flexDirection: 'row',
        paddingVertical: 10,
    }
})