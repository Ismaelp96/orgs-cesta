import React from 'react'
import { View, Image } from 'react-native'

import style from '../style'
import Texto from '../../../components/font/Texto'

export default function Item({ item: { nome, imagem } }) {
  return (
    <View style={style.itemList}>
      <Image source={imagem} style={style.imagemList} />
      <Texto style={style.nomeList}>{nome}</Texto>
    </View>
  )
}
