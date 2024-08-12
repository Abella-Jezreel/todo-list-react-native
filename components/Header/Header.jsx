import { View, Image, Text } from 'react-native'
import { styles } from './Header.style'
import React from 'react'
import logoImage from '../../assets/logo.png'

const Header = () => {
  return (
    <View>
      <Image source={logoImage} style={styles.image} resizeMode='contain'/>
      <Text style={styles.subtitle}>You Probably have something to do</Text>
    </View>
  )
}

export default Header