// Imagens

import Canapes from '../../../../public/Canapes.jpg'
import SaladaAtum from '../../../../public/SaladaAtum.jpg'
import SaladaOrelha from '../../../../public/SaladaOrelha.jpg'
import SaladaPolvo from '../../../../public/SaladaPolvo.jpg'
import SaladaRussa from '../../../../public/SaladaRussaCamarão.jpg'
import tabuaEnchidos from '../../../../public/Tábua-de-enchidos.jpg'
import tabuaQueijos from '../../../../public/Tábua-de-queijos.jpg'

// Componentes
import CardapioItens1OP from './_cardapioItens1OP'
import CardapioItensSize from './_cardapioItensSize'

import styles from '../Scss/Cardapio.module.scss'

export default function Entrada() {
  return (
    <>
      <div>
        <h2 className={styles.PageName}>Entrada</h2>
      </div>
      <ul className={styles.CDContainer}>
        <CardapioItens1OP
          NomeDoPrato={'Canapés'}
          Desc={
            ' 2x pastas de barrar, 1x mostarda, 1x ketchup, 1x maionese, 2x cebolas, 2x tomates cherry, 2x ovos cozidos, 2x azeitonas 2x queijo Gorgonzola.'
          }
          Preco={'19,90'}
          imgPrato={Canapes}
        />

        <CardapioItens1OP
          NomeDoPrato={'Tábua de enchidos'}
          Desc={
            '2x chouriços, 3x morcelas, 2x paios, 4x salames e 6x salpicões.'
          }
          Preco={'19,90'}
          imgPrato={tabuaEnchidos}
        />

        <CardapioItens1OP
          NomeDoPrato={'Tábua de queijos'}
          Desc={
            '3x queijo de vaca, 3x queijo Camembert, 2x queijo Cantal, 2x queijo Comté, 2x queijo Gorgonzola'
          }
          Preco={'19,90'}
          imgPrato={tabuaQueijos}
        />

        <CardapioItens1OP
          NomeDoPrato={'Tábua de carnes frias'}
          Desc={'2x chourição, 3x mortadela, 4x presunto, 2x fiambre,'}
          Preco={'19,90'}
          imgPrato={tabuaQueijos}
        />

        <CardapioItens1OP
          NomeDoPrato={'Salada Russa com Camarão'}
          Desc={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nulla minus'
          }
          Preco={'19,90'}
          imgPrato={SaladaRussa}
        />

        <CardapioItens1OP
          NomeDoPrato={'Salada Atum'}
          Desc={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nulla minus'
          }
          Preco={'19,90'}
          imgPrato={SaladaAtum}
        />

        <CardapioItens1OP
          NomeDoPrato={'Salada Polvo'}
          Desc={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nulla minus'
          }
          Preco={'19,90'}
          imgPrato={SaladaPolvo}
        />

        <CardapioItens1OP
          NomeDoPrato={'Salada de Orelha-de-Porco'}
          Desc={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nulla minus'
          }
          Preco={'19,90'}
          imgPrato={SaladaOrelha}
        />

        <CardapioItensSize
          NomeDoPrato={'teste'}
          Desc={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nulla minus'
          }
          PrecoP={'30,00'}
          PrecoM={'40,00'}
          PrecoG={'50,00'}
          imgPrato={SaladaOrelha}
        />

        <CardapioItensSize
          NomeDoPrato={'teste'}
          Desc={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nulla minus'
          }
          PrecoP={'30,00'}
          PrecoM={'40,00'}
          PrecoG={'50,00'}
          imgPrato={SaladaOrelha}
        />
      </ul>
    </>
  )
}
