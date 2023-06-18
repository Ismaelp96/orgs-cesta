import logo from '../../assets/logo.png'
import tomate from '../../assets/frutas/Tomate.png'
import brocolis from '../../assets/frutas/Brócolis.png'
import batata from '../../assets/frutas/Batata.png'
import pepino from '../../assets/frutas/Pepino.png'
import abobora from '../../assets/frutas/Abóbora.png'

const cesta = {
  top: {
    titulo: 'Detalhe da cesta',
  },
  details: {
    nome: 'Cesta de Verduras',
    logoFarm: logo,
    farmName: 'Jenny Jack Farm',
    descricao:
      'Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha',
    price: 'R$ 35,00',
    botao: 'Comprar',
  },
  itens: {
    titulo: 'Itens da cesta',
    lista: [
      {
        nome: 'Tomate',
        imagem: tomate,
      },
      {
        nome: 'Brocolis',
        imagem: brocolis,
      },
      {
        nome: 'Batata',
        imagem: batata,
      },
      {
        nome: 'Pepino',
        imagem: pepino,
      },
      {
        nome: 'Abobora',
        imagem: abobora,
      },
    ],
  },
}

export default cesta
