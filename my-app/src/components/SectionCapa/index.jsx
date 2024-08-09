import Image from 'next/image';
import estilos from './SectionCapa.module.css';

export default function SectionCapa(){
    return (
        <section className={estilos.img_fundo}>
            <div className={estilos.container_textos}>
                <div className={estilos.textos}>
                    <p>Preços baixos em</p>
                    <h1>ÓCULOS DE GRAU E DE SOL</h1>
                    <p>Você só encontra aqui</p>
                </div>
            </div>
        </section>
    )
}