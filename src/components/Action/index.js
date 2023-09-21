import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function Action() {
    return (
        <ScrollView style={style.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={style.actionButtons}>
                <View style={style.areaButton}>
                    <AntDesign name='addfolder' size={26} color={'#000'} />
                </View>
                <Text style={style.labelButton}>Entradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.actionButtons}>
                <View style={style.areaButton}>
                    <AntDesign name='tagso' size={26} color={'#000'} />
                </View>
                <Text style={style.labelButton}>Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.actionButtons}>
                <View style={style.areaButton}>
                    <AntDesign name='creditcard' size={26} color={'#000'} />
                </View>
                <Text style={style.labelButton}>Cartões</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.actionButtons}>
                <View style={style.areaButton}>
                    <AntDesign name='barcode' size={26} color={'#000'} />
                </View>
                <Text style={style.labelButton}>Boletos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.actionButtons}>
                <View style={style.areaButton}>
                    <AntDesign name='calendar' size={26} color={'#000'} />
                </View>
                <Text style={style.labelButton}>Agenda</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={style.actionButtons}>
                <View style={style.areaButton}>
                    <AntDesign name='setting' size={26} color={'#000'} />
                </View>
                <Text style={style.labelButton}>Configurar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        maxHeight: 85,
        marginBottom: 14,
        margin: 14,    
    },
    actionButtons:{
        alignItems:'center',
        marginRight: 32,
    },
    areaButton:{
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelButton:{
        marginTop: 5,
        textAlign: 'center',
    }
})