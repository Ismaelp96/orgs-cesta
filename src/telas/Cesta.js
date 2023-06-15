import React from 'react'
import { Image, Text } from 'react-native'

import style from './style'
import top from '../../assets/topo.png'

export default function Cesta() {
  return (
    <>
      <Image source={top} style={style.top} />
      <Text style={style.titulo}>Detalhe da cesta</Text>
    </>
  )
}
