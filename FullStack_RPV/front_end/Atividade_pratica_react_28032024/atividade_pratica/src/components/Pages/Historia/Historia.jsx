import './Historia.css';

function Historia(props) {
    return (
        <section className='historia'>
            <h1>{props.paginaHistoria}</h1>
            <p>Nossa história é contada aqui!</p>
        </section>

    )
}

export default Historia;