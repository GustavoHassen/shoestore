import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Shoes from '../../components/Shoes';

// import { Container } from './styles';

const Home = () => {
  const navigation = useNavigation();
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.header,
        {
          height: scrollY.interpolate({
            inputRange: [10, 160, 185],
            outputRange: [140, 20, 0],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange: [1, 75, 170],
            outputRange: [1, 0.5, 0],
            extrapolate: 'clamp'
          })
        }]}>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
        />
      </Animated.View>

      <Animated.View
        style={[styles.textContainer, {
          marginTop: scrollY.interpolate({
            inputRange: [1, 75, 170],
            outputRange: [20, 20, 35],
            extrapolate: 'clamp'
          })
        }]}>
        <Text style={styles.text}>TÊNIS</Text>
        <Text style={[styles.text, { color: '#cececf' }]}>•</Text>
        <Text style={[styles.text, { color: '#cececf' }]}>MASCULINO</Text>

        <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
          <MaterialIcons
            name="filter-list"
            size={24}
            color="#000"
          />
        </TouchableOpacity>

      </Animated.View>
      <View style={styles.line} />

      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: scrollY }
          },
        }],
          { useNativeDriver: false })}
      >
        <Text style={styles.text}>LANÇAMENTOS</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/1.png')} cost="R$140,90" onClick={() => navigation.navigate('Details')}>
            Nike Air Max Dia
          </Shoes>
          <Shoes img={require('../../assets/2.png')} cost="R$280,90" onClick={() => navigation.navigate('Details')}>
            Nike Downshifter 10
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/3.png')} cost="R$560,90">
            Nike Squidward Tentacles
          </Shoes>
          <Shoes img={require('../../assets/4.png')} cost="R$220,90">
            Nike Epic React Flyknit 2
          </Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/5.png')} cost="R$120,90">
            Nike Joyride Run Flyknit
          </Shoes>
          <Shoes img={require('../../assets/6.png')} cost="R$920,90">
            Nike Air Max Dia
          </Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/1.png')} cost="R$140,90" onClick={() => navigation.navigate('Details')}>
            Nike Air Max Dia
          </Shoes>
          <Shoes img={require('../../assets/2.png')} cost="R$280,90" onClick={() => navigation.navigate('Details')}>
            Nike Downshifter 10
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/3.png')} cost="R$560,90">
            Nike Squidward Tentacles
          </Shoes>
          <Shoes img={require('../../assets/4.png')} cost="R$220,90">
            Nike Epic React Flyknit 2
          </Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/5.png')} cost="R$120,90">
            Nike Joyride Run Flyknit
          </Shoes>
          <Shoes img={require('../../assets/6.png')} cost="R$920,90">
            Nike Air Max Dia
          </Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/1.png')} cost="R$140,90" onClick={() => navigation.navigate('Details')}>
            Nike Air Max Dia
          </Shoes>
          <Shoes img={require('../../assets/2.png')} cost="R$280,90" onClick={() => navigation.navigate('Details')}>
            Nike Downshifter 10
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/3.png')} cost="R$560,90">
            Nike Squidward Tentacles
          </Shoes>
          <Shoes img={require('../../assets/4.png')} cost="R$220,90">
            Nike Epic React Flyknit 2
          </Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/5.png')} cost="R$120,90">
            Nike Joyride Run Flyknit
          </Shoes>
          <Shoes img={require('../../assets/6.png')} cost="R$920,90">
            Nike Air Max Dia
          </Shoes>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },
  header: {
    marginBottom: 8
  },
  image: {
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    marginHorizontal: '5%',
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
  },
  line: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 2
  }
})


export default Home;