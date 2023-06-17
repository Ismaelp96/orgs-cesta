import React from 'react'
import { Image } from 'react-native'

import style from '../style'
import Texto from '../../../components/font/Texto'

import top from '../../../../assets/topo.png'

export default function Top({ titulo }) {
  return (
    <>
      <Image source={top} style={style.top} />
      <Texto style={style.titulo}>{titulo}</Texto>
    </>
  )
}
