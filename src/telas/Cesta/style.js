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
    fontWeight: 'bold',
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
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2A9F85',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#2A9F85',
    marginTop: 16,
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
  },
})
