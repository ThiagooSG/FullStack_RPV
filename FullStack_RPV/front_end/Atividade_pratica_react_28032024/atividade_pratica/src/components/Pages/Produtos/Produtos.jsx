import './Produtos.css';

function Produtos(props) {
    return (
        <section className='produto'>
            <h1>{props.paginaProdutos}</h1>
            <p>Nossos produtos são visualizados aqui.</p>
        </section>

    )
}

export default Produtos;