import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';


export const CommonColors = {
    Green: '#76BC21',
    Black: '#000000',
    White: '#FFFFFF',
    Dark: '#212322',
    Red: '#EE4036',
    Warning: '#F88D2A',
    Grey: '#474848',
    LightGrey: '#B3B3B3'
}

export const CommonStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overflowContainer: {
        flex: 1,
        overflow: 'hidden'
    },
    centerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        paddingTop: 300,
        paddingBottom: 200,
        width: 400,
        height: 400,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 400,
        height: 200,
        resizeMode: 'contain'
    },
    paddingVertical: {
        paddingVertical: 20,
    },
    padding: {
        padding: 40,
        paddingTop:50
    },
    
  
})

export const SlectionListStyles = StyleSheet.create({
    container: {
     flex: 1,
    },
    sectionHeader: {
      paddingTop: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 2,
      fontSize: 16,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop:15,
      fontSize: 15,
      height: 50,
    },
  })