import SectionCapa from "../SectionCapa";
import SectionProdutos from "../SectionProdutos";
import SectionAbout from "../SectionAbout";
import SectionContact from "../SectionContact";


export default function Conteudo() {
    return(
        <main>
            <SectionCapa/>
            <SectionProdutos/>
            <SectionAbout/>
            <SectionContact/>

        </main>
    )
}