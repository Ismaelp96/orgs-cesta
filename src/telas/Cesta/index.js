import React from 'react'
import { View } from 'react-native'

import style from './style'

import Top from './components/Top'
import Details from './components/Details'

export default function Cesta() {
  return (
    <>
      <Top />
      <View style={style.cesta}>
        <Details />
      </View>
    </>
  )
}
