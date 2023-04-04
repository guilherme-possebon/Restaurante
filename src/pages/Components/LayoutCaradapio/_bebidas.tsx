import CardapioItens1OP from './_cardapioItens1OP'
import CardapioItensSize from './_cardapioItensSize'

import Canapes from '../../../../public/canapes.webp'
import Marmita from '../../../../public/Marmita.webp'
import SaladaAtum from '../../../../public/Saladaatum.webp'
import SaladaOrelha from '../../../../public/Saladaorelha.webp'
import SaladaPolvo from '../../../../public/Saladapolvo.webp'
import SaladaRussa from '../../../../public/Saladarussacamarao.webp'
import tabuaEnchidos from '../../../../public/Tabua-de-enchidos.webp'
import tabuaQueijos from '../../../../public/Tabua-de-queijos.webp'

import styles from '../ScssCardapio/Cardapio.module.scss'

export default function Bebidas() {
  return (
    <>
      <div>
        <h2 className={styles.PageName}>Bebidas</h2>
      </div>
      <div className={styles.CDContainer}>
        <CardapioItens1OP
          NomeDoPrato={'Canapés'}
          Desc={
            ' 2x pastas de barrar, 1x mostarda, 1x ketchup, 1x maionese, 2x cebolas, 2x tomates cherry, 2x ovos cozidos, 2x azeitonas 2x queijo Gorgonzola.'
          }
          Preco={'19,90'}
          imgPrato={Canapes}
        />
        <CardapioItens1OP
          NomeDoPrato={'Canapés'}
          Desc={
            ' 2x pastas de barrar, 1x mostarda, 1x ketchup, 1x maionese, 2x cebolas, 2x tomates cherry, 2x ovos cozidos, 2x azeitonas 2x queijo Gorgonzola.'
          }
          Preco={'19,90'}
          imgPrato={SaladaRussa}
        />
        <CardapioItens1OP
          NomeDoPrato={'Canapés'}
          Desc={
            ' 2x pastas de barrar, 1x mostarda, 1x ketchup, 1x maionese, 2x cebolas, 2x tomates cherry, 2x ovos cozidos, 2x azeitonas 2x queijo Gorgonzola.'
          }
          Preco={'19,90'}
          imgPrato={SaladaPolvo}
        />
        <CardapioItens1OP
          NomeDoPrato={'Canapés'}
          Desc={
            ' 2x pastas de barrar, 1x mostarda, 1x ketchup, 1x maionese, 2x cebolas, 2x tomates cherry, 2x ovos cozidos, 2x azeitonas 2x queijo Gorgonzola.'
          }
          Preco={'19,90'}
          imgPrato={SaladaAtum}
        />
        <CardapioItens1OP
          NomeDoPrato={'Canapés'}
          Desc={
            ' 2x pastas de barrar, 1x mostarda, 1x ketchup, 1x maionese, 2x cebolas, 2x tomates cherry, 2x ovos cozidos, 2x azeitonas 2x queijo Gorgonzola.'
          }
          Preco={'19,90'}
          imgPrato={Marmita}
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
      </div>
    </>
  )
}
