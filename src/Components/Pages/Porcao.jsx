

import Canapes from '/Canapes.jpg'
import Marmita from '/marmita.jpg'
import SaladaAtum from '/SaladaAtum.jfif'
import SaladaOrelha from '/SaladaOrelha.jfif'
import SaladaPolvo from '/SaladaPolvo.jfif'
import SaladaRussa from '/SaladaRussaCamarão.jpg'
import tabuaEnchidos from '/Tábua-de-enchidos.jpg'
import tabuaQueijos from '/Tábua-de-queijos.jpg'

import CardapioItens1OP from '../Layout/CardapioItens1OP'
import CardapioItensSize from '../Layout/CardapioItensSize'

export default function Procao() {
    return (
            <>
                <div>
                    <h2 className='PageName'>Proção</h2>
                </div>
                <div className='CDContainer'>
                    <CardapioItens1OP NomeDoPrato={"Canapés"} Desc={" 2x pastas de barrar, 1x mostarda, 1x ketchup, 1x maionese, 2x cebolas, 2x tomates cherry, 2x ovos cozidos, 2x azeitonas 2x queijo Gorgonzola."} Preco={"R$ 19,90"} imgPrato={Canapes} />
                    
                    <CardapioItens1OP NomeDoPrato={"Tábua de enchidos"} Desc={"2x chouriços, 3x morcelas, 2x paios, 4x salames e 6x salpicões."} Preco={"R$ 19,90"} imgPrato={tabuaEnchidos} />
                    
                    <CardapioItens1OP NomeDoPrato={"Tábua de queijos"} Desc={"3x queijo de vaca, 3x queijo Camembert, 2x queijo Cantal, 2x queijo Comté, 2x queijo Gorgonzola"} Preco={"R$ 19,90"} imgPrato={SaladaAtum} />
                    
                    <CardapioItensSize NomeDoPrato={"teste"} Desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nulla minus"} PrecoP={"R$ 30,00"} PrecoM={"R$ 40,00"} PrecoG={"R$ 50,00"} imgPrato={SaladaOrelha} />
                    
                    <CardapioItensSize NomeDoPrato={"teste"} Desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nulla minus"} PrecoP={"R$ 30,00"} PrecoM={"R$ 40,00"} PrecoG={"R$ 50,00"} imgPrato={SaladaOrelha} />
                    
                    <CardapioItensSize NomeDoPrato={"teste"} Desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nulla minus"} PrecoP={"R$ 30,00"} PrecoM={"R$ 40,00"} PrecoG={"R$ 50,00"} imgPrato={SaladaOrelha} />
                    
                    <CardapioItensSize NomeDoPrato={"teste"} Desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nulla minus"} PrecoP={"R$ 30,00"} PrecoM={"R$ 40,00"} PrecoG={"R$ 50,00"} imgPrato={SaladaOrelha} />
                    
                    <CardapioItensSize NomeDoPrato={"teste"} Desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nulla minus"} PrecoP={"R$ 30,00"} PrecoM={"R$ 40,00"} PrecoG={"R$ 50,00"} imgPrato={SaladaOrelha} />
                    
                    <CardapioItensSize NomeDoPrato={"teste"} Desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nulla minus"} PrecoP={"R$ 30,00"} PrecoM={"R$ 40,00"} PrecoG={"R$ 50,00"} imgPrato={SaladaOrelha} />
                    
                    <CardapioItensSize NomeDoPrato={"teste"} Desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nulla minus"} PrecoP={"R$ 30,00"} PrecoM={"R$ 40,00"} PrecoG={"R$ 50,00"} imgPrato={SaladaOrelha} />
                </div>
            </>
    )
}