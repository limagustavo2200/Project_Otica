import estilos from './SectionProduto.module.css'

export default function SectionProdutos() {
    return(
        <main className={estilos.main}>
            <div className={estilos.container_geral}>
                <div className={estilos.content}>
                    <h1>Nosso produtos</h1>
                    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                    <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                </div>
                <div className={estilos.container_cards}>
                    <div className={estilos.card}>
                        <p>teste</p>
                    </div>
                </div>
            </div>
    
        </main>
    )
}