import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Image,
    SectionList

} from 'react-native';
import values from '../../utils/Data';
import styles from './OfferScreenStyle';
import { observer, inject } from 'mobx-react';

@inject("store")
@observer
export default class OfferScreen extends Component {

    title = new Set();

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10, }}>
                    <Text style={{ fontSize: 15 }}>I am Offering</Text>
                </View>
                <View style={{ }}>
                    <SectionList
                        sections={this.props.store.values}
                        renderSectionHeader={({ section }) => 
                        <View style={styles.SectionHeaderStyle}>
                            <View style={{ flex: 9.6, justifyContent: 'center', alignItems: 'center', paddingLeft: 25 }}>
                                <Text style={{ color: 'black', fontSize: 15, }}> {section.title} </Text>
                            </View>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end' }} onPress={() => this.props.store.changeTouch(section.title, this)}>
                                <Image style={{ height: 25, width: 25, }} source={require('../../assets/image/down.png')} />
                            </TouchableOpacity>
                        </View>}
                        renderItem={({ section, item, index }) =>
                            this.props.store.title.has(section.title) ?
                                <TouchableOpacity onPress={() => this.props.store.click(index, section.title, this)} style={{ paddingLeft: 20, paddingTop: 10, flexDirection: 'row' }}>
                                    <View style={{ flex: 0.95 }}>
                                        <Text style={styles.SectionListItemStyle}> {item.tech} </Text>
                                    </View>
                                    {item.selected
                                        ? <View style={{}}>
                                            <Image style={{ height: 20, width: 20 }} source={require('../../assets/image/check.png')} />
                                        </View>
                                        : null
                                    }
                                </TouchableOpacity>
                                : <TouchableOpacity onPress={() => this.props.store.click(index, section.title, this)} style={{ paddingLeft: 20, paddingTop: 10, flexDirection: 'row' }}>
                                </TouchableOpacity>}
                        keyExtractor={(item, index) => index}
                    />
                </View>
                <View style={{ borderTopWidth: 1.2, borderTopColor: "#01ade6", flex: 0.4, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', paddingLeft: 15, paddingTop: 5, flex: 0.9 }}>
                        <Text>I am Offering</Text>
                        <Text>30 selection left</Text>
                    </View>
                    <TouchableOpacity style={{ height: 30, width: 160, backgroundColor: '#a0002f', borderRadius: 40 / 1, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Save</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
