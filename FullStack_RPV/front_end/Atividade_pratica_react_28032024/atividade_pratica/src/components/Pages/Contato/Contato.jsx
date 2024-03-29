import './Contato.css';

function Contato(props) {
    return (
        <section className='contato'>
            <h1>{props.nomePagina}</h1>
            <p>Nome: {props.nomeContato}</p>
            <p>Cidade: {props.cidadeContato}</p>
            <p>Estado: {props.estadoContato}</p>

        </section>


    )
}

export default Contato;