import estilos from './SectionContact.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function SectionContact() {
    return (
        <section id='contact' className={estilos.section}>
            <div className={estilos.container_contact}>
                <div className={estilos.title}>
                    <h2>Fale conosco</h2>
                    <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                </div>
                <div className={estilos.content}>
                    <div className={estilos.card}>
                        <h3>Nossos Contatos</h3>
                        <div className={estilos.container_topicos_contact}>
                            <div className={estilos.topicos_contact}>
                                <Image 
                                    src={'/local.png'}
                                    width={20}
                                    height={20}
                                />
                                <p>Nova Iguaçu, RJ</p>
                            </div>

                            <div className={estilos.topicos_contact}>
                                <Image 
                                    src={'/telefone.png'}
                                    width={20}
                                    height={20}
                                />
                                <p>(21) 9999-9999</p>
                            </div>

                            <div className={estilos.topicos_contact}>
                                <Image 
                                    src={'/email.png'}
                                    width={20}
                                    height={20}
                                />
                                <p>contato@oticavida.com</p>
                            </div>
                        </div>
                    </div>


                    <div className={estilos.card}>
                        <h3>Nossas Redes Sociais</h3>
                        <div className={estilos.container_topicos_contact}>
                            <div className={estilos.topicos_contact}>
                                <Image 
                                    src={'/fb.png'}
                                    width={20}
                                    height={20}
                                />
                                <p>/OticaVida</p>
                            </div>

                            <div className={estilos.topicos_contact}>
                                <Image 
                                    src={'/ig.png'}
                                    width={20}
                                    height={20}
                                />
                                <p>@oticavidarj</p>
                            </div>

                            <div className={estilos.topicos_contact}>
                                <Image 
                                    src={'/tt.png'}
                                    width={20}
                                    height={20}
                                />
                                <p>@oticavidarj</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

