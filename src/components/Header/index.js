import React from "react";
import {View, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {MotiView, MotiText} from 'moti';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({name}){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.UserName}>{name}</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.UserButton}>
                    <Feather name="user" size={27} color={'#ffff'}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8000ff',
    paddingTop: StatusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  UserName:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  UserButton:{
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  }
});