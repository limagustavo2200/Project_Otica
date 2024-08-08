import Image from 'next/image';
import estilos from './SectionCapa.module.css';

export default function SectionCapa(){
    return (
        <section className={estilos.img_fundo}>
            <div className={estilos.textos}>
                <p>Preços baixos em</p>
                <br />
                <h1>ÓCULOS DE GRAU E DE SOL</h1>
                <br />
                <p>Você só encontra aqui</p>
            </div>
        </section>
    )
}