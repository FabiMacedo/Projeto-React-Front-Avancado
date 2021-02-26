import Pag from './imagens/pagamento.png';

function Footer() {
    return(
        <footer className="mt-5">
            <hr className="bg-danger"/>
            <h5 className="text-center text-danger font-weight-bold">Formas de pagamento</h5>
            <img src={Pag} className="rounded mt-3 mx-auto d-block" alt="Formas de pagamento"/>
            <p className="bg-danger text-center text-white mt-4 mb-0 py-2">&copy; 2021 Copyright - Recode Pro - By Fabiana Macedo</p> 
        </footer>
    );
}

export default Footer;