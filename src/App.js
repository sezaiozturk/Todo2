import React, { useEffect, useState } from "react";
import { SafeAreaView, View ,Text,StyleSheet, TextInput, Button, TouchableOpacity, FlatList, Alert} from "react-native";
import TaskCard from "./components/TaskCard";

const App=()=>{
    const toDoList=[
        {task:"React native öğren"},
        {task:"Cv oluştur"},
        {task:"Github reponu doldur..."}
    ];
    const [count,setCount]=useState(toDoList.length);
    const [list,setList]=useState(toDoList);
    const [text,setText]=useState('');

    const renderToDo=({item})=><TaskCard text={item.task} complate={decreaseCounter} notComplate={increaseCounter}/>

    const addTask=()=>{
        if(text!=''){
            setList([...list,{task:text}]);
            increaseCounter();
        }
    }
    const decreaseCounter=()=>{
        setCount(count-1);
    }
    const increaseCounter=()=>{
        setCount(count+1);
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Yapılacaklar</Text>
                <Text style={styles.count}>{count}</Text>
            </View>
            <View style={styles.inner_container}>
                <FlatList data={list} renderItem={renderToDo}/>
            </View>
            <View style={styles.footer}>
                <TextInput style={styles.text_input} placeholder={"Yapılacak..."} placeholderTextColor="#C7BEA2" onChangeText={text=>setText(text)} />
                <TouchableOpacity style={styles.button} onPress={()=>addTask()}>
                    <Text style={styles.buton_text}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:10,
        backgroundColor:'#282A3A'
    },
    header:{
        flex:1,
        flexDirection:'row',
        marginVertical:10
    },
    title:{
        color:'#FF7000',
        fontSize:40,
        fontWeight:'bold',
        marginLeft:15
    },
    count:{
        flex:1,
        color:'#FF7000',
        fontSize:40,
        textAlign:'right',
        marginRight:15
    },
    inner_container:{
        flex:10
    },
    footer:{
        backgroundColor:'gray',
        flex:2,
        margin:10,
        borderRadius:10,
        paddingBottom:15
    },
    text_input:{
        padding:8,
        fontSize:20,
        margin:10,
        borderRadius:10,
        color:'white'
    },
    button:{
        backgroundColor:'#FF7000',
        marginHorizontal:20,
        borderRadius:10
        
    },
    buton_text:{
        color:'white',
        fontSize:20,
        padding:10,
        textAlign:'center'
    }
})

export default App;