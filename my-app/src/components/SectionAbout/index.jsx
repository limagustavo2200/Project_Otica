import Image from 'next/image';
import estilos from './SectionAbout.module.css';

export default function SectionAbout() {
    return (
        <section className={estilos.main}>
            <div id='about' className={estilos.container}>
                <div className={estilos.container_titulo}>
                    <h2>quem somos nós?</h2>
                    <p>
                        Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas Vida
                        iniciou suas atividades focada no atendimento ao público de renda mais
                        baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento,
                        qualidade e preço baixo.
                    </p>
                </div>
                <div className={estilos.container_content}>
                    <div className={`${estilos.box_img} ${estilos.card}`}>
                        <Image className={estilos.card_img}
                            src="/loja.png" // Altere para o caminho da sua imagem
                            width={400} // Ajuste o tamanho conforme necessário
                            height={300} // Ajuste o tamanho conforme necessário
                        />
                    </div>
                    <div className={`${estilos.box_text} ${estilos.card}`}>
                        <h2>nossas filiais</h2>
                        <p>
                            Hoje temos mais de 20 filiais pelo Brasil e na América
                        </p>
                    </div>
                    <div className={`${estilos.box_text} ${estilos.card}`}>
                        <h2>Atendimento flexível</h2>
                        <p>
                            Hoje temos mais de 20 filiais pelo Brasil e na América
                        </p>
                    </div>
                    <div className={`${estilos.box_img} ${estilos.card}`}>
                        <Image className={estilos.card_img}
                            src="/atendimento.png" // Altere para o caminho da sua imagem
                            width={500} // Ajuste o tamanho conforme necessário
                            height={300} // Ajuste o tamanho conforme necessário
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
