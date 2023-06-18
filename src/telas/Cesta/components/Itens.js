import React from 'react'
import { View, Image } from 'react-native'

import style from '../style'
import Texto from '../../../components/font/Texto'

export default function Itens({ titulo, lista }) {
  return (
    <>
      <Texto style={style.listaTitle}>{titulo}</Texto>
      {lista.map(({ nome, imagem }) => {
        return (
          <View key={nome} style={style.itemList}>
            <Image source={imagem} style={style.imagemList} />
            <Texto style={style.nomeList}>{nome}</Texto>
          </View>
        )
      })}
    </>
  )
}
