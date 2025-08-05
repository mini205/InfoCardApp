import { SafeAreaView, ScrollView, Text, View, TextInput, StyleSheet, Image, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');
  const [message, setMessage] = useState('Welcome to my app');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>My Info Card</Text>

      <Image source={require('./assets/profile.png')} style={styles.image} />
      <TextInput
  style={styles.input}
  placeholder="Enter your name"
  value={name}
  onChangeText={setName}
/>

<TextInput style={styles.input}
  placeholder="Enter your hobby"
  value={hobby}
  onChangeText={setHobby}
/>

<Button title="Show Greeting" onPress={() => setMessage(`Hello ${name}, enjoy ${hobby}`)} />

  
<View style={styles.card}>
  <Text style={styles.cardText}>Hello, {name}</Text>
  <Text style={styles.cardText}>Your hobby is {hobby}</Text>
</View>

<Image source={{ uri: 'https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:16x9/messi-1805.jpg' }} style={styles.onlineImage} />





<Text style={styles.extra}>Buffalo Bills</Text>
<Text style={styles.extra}>New England Patriots</Text>
<Text style={styles.extra}>Inter Miami CF(USA)</Text>
<Text style={styles.extra}>Manchester United(Eng)</Text>
<Text style={styles.extra}>Bayern munich(Gem)</Text>



      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10
  },
  cardText: {
    fontSize: 18,
    marginBottom: 10
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 75,
    marginBottom: 20
  },
  onlineImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  extra: {
    fontSize: 16,
    marginVertical: 5
  }
});

