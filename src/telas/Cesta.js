import React from 'react'
import { Image, Text, View } from 'react-native'

import style from './style'
import top from '../../assets/topo.png'
import logo from '../../assets/logo.png'

export default function Cesta() {
  return (
    <>
      <Image source={top} style={style.top} />
      <Text style={style.titulo}>Detalhe da cesta</Text>
      <View style={style.cesta}>
        <Text style={style.nome}>Cesta de Verduras</Text>
        <View style={style.fazenda}>
          <Image source={logo} style={style.farmImg} />
          <Text style={style.farmName}>Jenny Jack Farm</Text>
        </View>

        <Text style={style.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda para sua
          cozinha
        </Text>
        <Text style={style.price}>R$ 40,00</Text>
      </View>
    </>
  )
}
