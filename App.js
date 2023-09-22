import { View, Text, Button, Alert } from 'react-native'
import React, { useState } from 'react'


const App = () => {
// const[data , setData] = useState(null)

// console.log(data)

  return (
    <View>
      <Text>App IN javascript</Text>

      <Button
        title="Press me"
        // onPress={() => setData("Satyam")}
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  )
}

export default App