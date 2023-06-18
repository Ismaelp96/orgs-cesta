import React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native'
import style from './style'

import Top from './components/Top'
import Details from './components/Details'
import Item from './components/Itens'
import Texto from '../../components/font/Texto'

export default function Cesta({ top, details, itens }) {
  return (
    <FlatList
      data={itens.lista}
      renderItem={Item}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={() => {
        return (
          <>
            <Top {...top} />
            <View style={style.cesta}>
              <Details {...details} />
              <Texto style={style.listaTitle}>{itens.titulo}</Texto>
            </View>
          </>
        )
      }}
    />
  )
}
