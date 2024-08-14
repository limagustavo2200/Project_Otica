import estilos from './SectionProduto.module.css'
import Image from 'next/image';


export default function SectionProdutos() {
    const listItems = [
        "Garantia de 1 ano",
        "Manutenção preventiva",
        "Descontos especiais na compra da segunda unidade",
        "Flexibilidade de pagamento",
    ];

    const RenderList = () => {
        return listItems.map((item, index) => {
            return (
                <li>{item}</li>
            );
        });
    };

    return(
        <main className={estilos.main}>
            <div id='produtos' className={estilos.container_geral}>
                <div className={estilos.container_titulo}>
                    <h2>Nosso produtos</h2>
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
                        <RenderList />
                    </ul>
                </div>
            </div>
        </main>
    )
}

/*
    cliente



    servidor => cliente => pseudo-eterna
    f12 => devtools => sorces

    servidor react => atualizando os arquivosw em tempo real (hidratation) a menos que seja pagina estática

    SPA ele mantem na mesma página dando a falsa sensação de mudança

    identifica os pontos com key e renderiza só eles novamente em caso de mudanças

    renderizar => atualizar os arquivos para o cliente
*/