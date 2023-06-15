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
})
