import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import TxtFilePicker from '../TxtFilePicker'

const LegalNLP = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}> Legal Bot</Text>
      <TxtFilePicker />
    </View>
  )
}

export default LegalNLP

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffcc9', //cyan
        alignItems: 'center',        
    },
    title: {
        marginTop: 70,
        marginBottom: 20,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000', //black
    },
    })
