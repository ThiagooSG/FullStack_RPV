import './Missao.css';

function Missao (props) {
    return (
        <section className='missao'>
            <h1>{props.paginaMissao}</h1>
            <p>Aqui tem nossos valores e nossa missão.</p>
        </section>
        
    )
}

export default Missao;