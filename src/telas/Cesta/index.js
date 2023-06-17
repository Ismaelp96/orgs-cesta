import React from 'react'
import { View } from 'react-native'

import style from './style'

import Top from './components/Top'
import Details from './components/Details'

export default function Cesta({ top, details }) {
  return (
    <>
      <Top {...top} />
      <View style={style.cesta}>
        <Details {...details} />
      </View>
    </>
  )
}
