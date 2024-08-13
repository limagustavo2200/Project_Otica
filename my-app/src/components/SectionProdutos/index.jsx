import estilos from './SectionProduto.module.css'
import Image from 'next/image';


export default function SectionProdutos() {
    return(
        <main className={estilos.main}>
            <div id='produtos' className={estilos.container_geral}>
                <div className={estilos.content}>
                    <h1>Nosso produtos</h1>
                    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                    <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                </div>
                <div className={estilos.container_cards}>
                    <div className={estilos.card}>
                        <h2>Óculos de grau</h2>
                        <Image 
                            src='/oculos01.png'
                            width={150}
                            height={60}
                        />
                        <h4>R$ 500,00</h4>
                    </div>

                    <div className={estilos.card}>
                        <h2>Óculos transition</h2>
                        <Image 
                            src='/oculos02.png'
                            width={150}
                            height={60}
                        />
                        <h4>R$ 750,00</h4>
                    </div>

                    <div className={estilos.card}>
                        <h2>Óculos de sol</h2>
                        <Image 
                            src='/oculos03.png'
                            width={150}
                            height={60}
                        />
                        <h4>R$ 500,00</h4>
                    </div>
                    
                    <div className={estilos.card}>
                        <h2>Óculos infantil</h2>
                        <Image 
                            src='/oculos04.png'
                            width={150}
                            height={60}
                        />
                        <h4>R$ 500,00</h4>
                    </div>
                </div>

                <div className={estilos.content}>
                    <h3>Todos os nossos produtos incluem:</h3>
                    <ul>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}