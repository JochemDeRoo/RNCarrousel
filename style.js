import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 45,
        paddingHorizontal: 30,
    },
    biertje: {
        margin: 15,
        shadowRadius: 10,
        shadowColor: "black",
        alignItems: "center",
        marginBottom: 10
    },

    carousel: {
        flexGrow: 0,
        height: "80%"
    },

    contentContainerCustomStyle: {
        alignItems: "center",
    },

    carousel_items: {
        height: "100%",
        backgroundColor: "#ff123b",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },

    carousel_items_text: {
        color: "#FFFFFF"
    },

    pagination_container: {
        backgroundColor: "transparent",
        marginTop: 20
    },

    pagination_dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: "pink"
    },

    pagination_inactiveDotStyle: {
        backgroundColor: "pink"
    }
});