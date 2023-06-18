import React from 'react'
import { View } from 'react-native'

import style from './style'

import Top from './components/Top'
import Details from './components/Details'
import Itens from './components/Itens'
import { ScrollView } from 'react-native'

export default function Cesta({ top, details, itens }) {
  return (
    <ScrollView>
      <Top {...top} />
      <View style={style.cesta}>
        <Details {...details} />
        <Itens {...itens} />
      </View>
    </ScrollView>
  )
}
