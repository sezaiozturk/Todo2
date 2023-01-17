import { StyleSheet } from "react-native"
export default StyleSheet.create({
    container_active:{
        backgroundColor:'#A1C45A',
        padding:15,
        borderRadius:10,
        marginHorizontal:10,
        marginVertical:5
    },
    container_passive:{
        backgroundColor:'#65647C',
        padding:15,
        borderRadius:10,
        marginHorizontal:10,
        marginVertical:5,
    },
    task_text_active:{
        color:'white',
        fontSize:18
    },
    task_text_passive:{
        color:'white',
        fontSize:18,
        textDecorationLine:"line-through"
    }
})