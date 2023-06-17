import React from 'react'
import { Image, View } from 'react-native'

import Texto from '../../../components/font/Texto'
import style from '../style'

export default function Details() {
  return (
    <>
      <Texto style={style.nome}>Cesta de Verduras</Texto>
      <View style={style.fazenda}>
        <Image style={style.farmImg} />
        <Texto style={style.farmName}>Jenny Jack Farm</Texto>
      </View>

      <Texto style={style.descricao}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda para sua
        cozinha
      </Texto>
      <Texto style={style.price}>R$ 40,00</Texto>
    </>
  )
}
