import React from 'react'
import { Image, View } from 'react-native'

import Texto from '../../../components/font/Texto'
import style from '../style'

export default function Details({
  nome,
  logoFarm,
  farmName,
  descricao,
  price,
}) {
  return (
    <>
      <Texto style={style.nome}>{nome}</Texto>
      <View style={style.fazenda}>
        <Image style={style.farmImg} source={logoFarm} />
        <Texto style={style.farmName}>{farmName}</Texto>
      </View>

      <Texto style={style.descricao}>{descricao}</Texto>
      <Texto style={style.price}>{price} </Texto>
    </>
  )
}
