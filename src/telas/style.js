import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('screen').width

export default StyleSheet.create({
  top: {
    width: '100%',
    height: (578 / 768) * width,
  },
  titulo: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFFFFF',
    paddingTop: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontFamily: 'MontserratBold',
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  farmImg: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'MontserratRegular',
  },
  descricao: {
    color: '#a3a3a3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2a9f85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
})
