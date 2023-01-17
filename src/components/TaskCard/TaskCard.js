import { useState } from "react";
import { View,Text, Alert } from "react-native";
import styles from './TaskCard.style'

const TaskCard=(props)=>{
    const[value,setValue]=useState(true);
    const[style,setStyle]=useState(styles.container_active)
    const[textStyle,setTextStyle]=useState(styles.task_text_active)

    const changeTask=()=>{
        if(value){
            props.complate();
            setValue(false);
            setStyle(styles.container_passive);
            setTextStyle(styles.task_text_passive);
            
        }
        else
        {
            props.notComplate();
            setValue(true);
            setStyle(styles.container_active);
            setTextStyle(styles.task_text_active);
        }
    }
    return(
        <View style={style} onStartShouldSetResponder={changeTask}>
            <Text style={textStyle}>{props.text}</Text>
        </View>
    )
}

export default TaskCard;