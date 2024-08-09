import estilos from './Header.module.css'
import Image from 'next/image';
import Link from 'next/link'
import Logo from '../../../public/logo.png'


export default function Header(){
    return(
        <header className={estilos.header}>
            <div className={estilos.container}>
                <Image
                src={Logo}// Caminho da imagem
                alt="Logo"
                width={130}   // Largura da imagem
                height={30}  // Altura da imagem
                />
                <div className={estilos.navbar}>
                    <Link href=''>PRODUTOS</Link>
                    <Link href=''>SOBRE</Link>
                    <Link href=''>CONTATO</Link>
                </div>
            </div>

        </header>
    )
}