import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const inputs = (props) => {
    const onChangeText=(text)=>{
     props.onInputChanged(props.id,text)
    }
  return (
    <View style={style.container}>
     <View
     style={[style.inputConteinar,{borderColor:'gray'}]}>
     <TextInput
     {...props}
     placeholder={props.placeholder}
     placeholderTextColor={props.placeholderTextColor}
     style={styles.input}
     autoCapitalize='none'
     onChangeText={onChangeText}
     />

     </View>
     {
        props.errorText &&(
          <View style={styles.errorContiner}>
          <Text style={styles.errorText}>{props.errorText[0]}</Text>
          </View>
        )
     }

    </View>
  )
}

export default inputs

const styles = StyleSheet.create({
    container:{

    },
    inputConteinar:{
        width:'100%',
        paddingHorizontal:10,
        paddingVertical:20,
        borderRadius:12,
        borderBottomWidth:1,
        borderBottomColor:'gray',
        marginVertical:16,
        flexDirection:'row'
    },
    input:{
     color:'gray',
     flex:1,
     fontFamily:'regular',
     paddingTop:0,
     fontSize:18,
    },
    errorContiner:{
        marginVertical:4
    },
    errorText:{
        color:'red',
        fontSize:12,
        
    }
})