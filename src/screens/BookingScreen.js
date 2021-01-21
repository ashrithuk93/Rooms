import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 


const MAX_OCCUPANCY = 4;

const BookingScreen = () => {
    const [ room, setRoom ] = useState(1);
    const [ adult, setAdult ] = useState(room);
    const [ children, setchildren ] = useState(0);

    const addAdult = () => {
        if (room == adult) {
            setAdult(adult+1);
        }
    }

    return (
        <View style={styles.Container}>
            <View style={{flexDirection: "row", paddingLeft: 10}}>
                <Ionicons name="ios-people" size={28} color="blue" />
                <Text style={styles.Header}>Choose number of</Text>
                <Text style={{paddingLeft: 10,
                fontSize: 20,
                paddingBottom: 10,
                fontWeight: 'bold',
                color: 'blue'}}>people</Text>
            </View>
                
            <View style={styles.Content}>
                <View style={styles.BarStyle1}>
                    <Text style={styles.TextStyle}>
                        <FontAwesome name="hotel" size={24} color="blue" /> ROOMS
                    </Text>
                    {room != 1 
                    ? <TouchableOpacity
                            onPress={() => {
                                if (room != 1) {
                                    setRoom(room-1);
                                    setAdult(MAX_OCCUPANCY);
                                    setchildren(0)
                                }
                            }}
                        >
                            <Entypo 
                                name="circle-with-minus" 
                                style={{paddingLeft: 100}} 
                                size={24} color="blue" 
                            />
                        </TouchableOpacity>
                    : <EvilIcons 
                            name="minus" 
                            style={{paddingLeft: 100}}
                            size={28} 
                            color="black" 
                    /> }
                    
                    <Text style={styles.ElemStyle}>{room}</Text>
                    
                    {room != 5
                    ? <TouchableOpacity
                        onPress={() => {
                            if (room != 5) {
                                setRoom(room+1);
                                addAdult();
                            }
                        }}
                    >
                        <Entypo name="circle-with-plus" size={24} color="red" />
                    </TouchableOpacity>
                    : <EvilIcons name="plus" size={28} color="black" /> }
                </View>

                <View style={styles.BarStyle2}>
                    <Text style={styles.TextStyle}>
                        <Entypo name="man" size={24} color="blue" /> ADULTS
                    </Text>
                    {(room !== adult) 
                    ? <TouchableOpacity
                        onPress={() => {
                            if (room !== adult) {
                                setAdult(adult-1);
                            }
                        }}
                    >
                        <Entypo 
                            name="circle-with-minus"  
                            style={{paddingLeft: 100}} 
                            size={24} color="blue" 
                        />
                    </TouchableOpacity>
                    : <EvilIcons 
                            name="minus"  
                            style={{paddingLeft: 100}} 
                            size={28} 
                            color="black" 
                    /> }

                    <Text style={styles.ElemStyle}>{adult}</Text>
                    
                    {(MAX_OCCUPANCY * room !== adult + children) 
                    ? <TouchableOpacity
                        onPress={() => {
                            if (MAX_OCCUPANCY * room !== adult + children) {
                                setAdult(adult+1);
                            }
                        }}
                    >
                        <Entypo name="circle-with-plus" size={24} color="red" />
                    </TouchableOpacity>
                    : <EvilIcons name="plus" size={28} color="black" />}
                </View>

                <View style={styles.BarStyle3}>
                    <Text style={styles.TextStyle}>
                        <FontAwesome name="child" size={24} color="blue" /> CHILDREN
                    </Text>
                    {( children != 0) 
                    ? <TouchableOpacity
                        onPress={() => {
                            if ( children != 0) {
                                setchildren(children-1);
                            }
                        }}
                    >
                        <Entypo 
                            name="circle-with-minus"  
                            style={{paddingLeft: 83}} 
                            size={24} 
                            color="blue" 
                        />
                    </TouchableOpacity>
                    : <EvilIcons 
                        name="minus"  
                        style={{paddingLeft: 83}} 
                        size={28} 
                        color="black" 
                    /> }

                    <Text style={styles.ElemStyle}>{children}</Text>
                    
                    {(MAX_OCCUPANCY * room !== adult + children) 
                    ? <TouchableOpacity
                        onPress={() => {
                            if (MAX_OCCUPANCY * room !== adult + children) {
                                setchildren(children+1);
                            }
                        }}
                    >
                        <Entypo name="circle-with-plus" size={24} color="red" />
                    </TouchableOpacity>
                    : <EvilIcons name="plus" size={28} color="black" /> }
                </View> 
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    BarStyle1: {
        flexDirection: "row",
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    BarStyle2: {
        flexDirection: "row",
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    BarStyle3: {
        flexDirection: "row",
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: 'black'
    },
    ElemStyle: {
        marginHorizontal: 20,
        fontSize: 20,
    },
    TextStyle:{
        fontSize: 20,
        color: 'blue'
    },
    Content: {
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 10,
        padding: 5
    },
    Container: {
        marginTop: 50
    },
    Header: {
        paddingLeft: 10,
        fontSize: 20,
        paddingBottom: 10,
        color: 'blue'
    },
    PlusMinus1: {
        marginLeft: 50,
        fontSize: 20
    }
});

export default BookingScreen;