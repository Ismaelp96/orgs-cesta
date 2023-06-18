import React from 'react'
import { TouchableOpacity } from 'react-native'

import Texto from '../font/Texto'
import style from './style'

export default function Botao({ texto, onPress }) {
  return (
    <TouchableOpacity
      style={style.botao}
      onPress={() => {
        onPress
      }}
    >
      <Texto style={style.textoBotao}>{texto}</Texto>
    </TouchableOpacity>
  )
}
