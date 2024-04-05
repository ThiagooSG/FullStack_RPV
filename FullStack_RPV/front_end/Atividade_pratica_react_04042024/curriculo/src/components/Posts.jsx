import { Comments } from './Comments'
import styles from './Posts.module.css'
export function Posts() {
    return (
        <article className={styles.posts}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="./src/assets/info.png" alt="Imagem profile" />
                    <div className={styles.authorInfo}>
                        <h2><strong>Sobre Mim</strong></h2>

                    </div>

                </div>


            </header>

            <div className={styles.content}>

                <p>Com uma sólida carreira desenvolvida ao longo de vários anos como analista de suporte, tenho experiência trabalhando com sistemas ERP e automação comercial e industrial. Minha atuação tem sido crucial, posicionando-me na linha de frente como um elo vital entre o cliente e a empresa desenvolvedora de software. Minhas responsabilidades vão além do suporte técnico em TI e consultoria. Desempenho um papel importante na administração e orientação estratégica, auxiliando na tomada de decisões informadas. Sempre me esforcei para entender completamente as necessidades do cliente, buscando soluções que atendam às suas demandas de maneira eficaz e eficiente.
                    Atualmente, estou expandindo meus horizontes e dedicando meu tempo ao estudo do Desenvolvimento WEB. Meu objetivo é adquirir habilidades e conhecimentos que me permitam me tornar um desenvolvedor no futuro. Estou entusiasmado com as possibilidades que essa nova direção pode trazer e estou comprometido em me aprofundar nessa área para alcançar meu objetivo. Acredito que a combinação de minha experiência em suporte e minha paixão pelo aprendizado contínuo me posiciona de maneira única para fazer uma transição bem-sucedida para o desenvolvimento web e continuar a fornecer valor excepcional no campo da tecnologia da informação.
                </p>

            </div>



            <div className={styles.commentsList}>
                <Comments 
                titulo='INFRAESTRUTURA / ADMINISTRADOR DE REDES' 
                descricao='Acesso remoto · Infraestrutura de rede · Administração de redes · Firewall · Domínios do Windows · Active Directory · Office 365 · Antivírus Kaspersky · CAD · Dropbox · Service Desk · PL/SQL · Hiperconvergência · Atualização de Sistemas · Manutenções de Impressoras · Suporte Interno via Telefone e Teams junto aos colaboradores da empresa.'
                linkImg = <a href="https://cataguases.com.br/"><img src="https://thiagoosg.github.io/curriculo/img/logo_novo_cataguases.png" alt="" /></a>
                periodo='De 10/2022 - ATUALMENTE'
                />

                <Comments 
                titulo='TÉCNICO DE SUPORTE' 
                descricao='Atribuições de Suporte N2. Realizando implantação de sistemas e treinamento presencial ou remoto. Atendimento via chat, telefone e e-mail junto aos clientes na resolução de dúvidas operacionais e de gestão nos sistemas de automação comercial.'
                linkImg = <a href="https://www.linkedin.com/company/alt-c-sistemas/about/"><img src="https://thiagoosg.github.io/curriculo/img/altc-logo-.png" alt="" /></a>
                periodo='De 05/2022 Até 10/2022'
                />

                <Comments 
                titulo='SUPORTE AO CLIENTE E EDITOR DE VÍDEOS' 
                descricao='Edição de vídeo aulas, upload das aulas na plataforma, suporte aos alunos do curso, captação de leads com todo acompanhamento e esclarecimento de dúvidas de potenciais alunos levando a um pós-vendas qualificado.'
                linkImg = <a href="https://www.cursosreginaldoartes.online/"><img src="https://thiagoosg.github.io/curriculo/img/ra-logo.png" alt="" /></a>
                periodo='De 02/2020 Até 11/21'
                />

                <Comments 
                titulo='ANALISTA DE SUPORTE' 
                descricao='Atribuições de Suporte N2. Realizando implantação de sistemas e treinamento presencial ou remoto. Atendimento via chat, telefone e e-mail junto aos clientes na resolução de dúvidas operacionais e de gestão nos sistemas ERP e de automação comercial.'
                linkImg = <a href="https://www.alterdata.com.br/"><img src="https://thiagoosg.github.io/curriculo/img/alterdata-logo-removebg-preview.png" alt="" /></a>
                periodo='De 06/2013 – Até 08/2019'
                />
        
                <Comments 
                titulo='ANÁLISE E DESENVOLVIMENTO DE SISTEMAS, FACULDADE DESCOMPLICA' 
                descricao='CURSANDO – 5º PERÍODO (2022 – 2024)'
                linkImg = <a href="https://descomplica.com.br/faculdade/"><img src="https://thiagoosg.github.io/curriculo/img/descomplica-logo.png" alt="" /></a>
                />

                <Comments 
                titulo='FULLSTACK, EDULIVRE / SENAI' 
                descricao='CURSANDO - RIO POMBA VALLEY (2023 - 2024)'
                linkImg = <a href="https://edulivre.org.br/rio-pomba-valley"><img src="https://thiagoosg.github.io/curriculo/img/rpv-.png" alt="" /></a>
                />

                <Comments 
                titulo='LICENÇAS E CERTIFICADOS' 
                linkImg = <a className='linkedin' href="https://www.linkedin.com/in/thiago-sg"><img src="https://api.iconify.design/logos:linkedin.svg" alt="" /></a>
                />

                <Comments 
                titulo='NODE.JS DO ZERO A MAESTRIA, UDEMY'
                descricao='Aprender Node do básico ao avançado
                Criar projetos completos com Express
                Aprender o padrão MVC com Node
                Criação de API com Node e Express
                Operações e integração de Node.JS com MySQL
                Operações e integração de Node.JS com Sequelize
                Operações e integração de Node.JS com MongoDB
                Operações e integração de Node.JS com Mongoose' 
                linkImg = <a href="https://www.udemy.com/course/nodejs-do-zero-a-maestria-com-diversos-projetos/"><img src="https://thiagoosg.github.io/curriculo/img/udemy.png" alt="" /></a>
                />

                <Comments 
                titulo='FORMAÇÃO FRONT-END - HTML, CSS, JAVASCRIPT, REACT E +'
                descricao='HTML e CSS do básico ao avançado
                JavaScript do básico ao avançado
                React JS do básico ao avançado
                Criar projetos com técnicas modernas de front-end
                Utilizar TypeScript com React' 
                linkImg = <a href="https://www.udemy.com/course/formacao-front-end-html-css-javascript-react-e/"><img src="https://thiagoosg.github.io/curriculo/img/udemy.png" alt="" /></a>
                />

                <Comments 
                titulo='Habilidades'
                descricao='Atendimento ao cliente, 
                Trabalhar em equipe,
                Capacidade analítica na resolução de problemas,
                Autodidata e resiliente,
                Cordialidade, paciência e empatia,
                Organizado e metódico,
                Vontade de sempre aprender e evoluir' 
                />

<Comments 
                titulo='Atividades Extras'
                descricao='Nas horas vagas, eu valorizo muito o tempo que passo com a minha família. Também sou um grande apreciador de filmes, séries e animes, que me proporcionam momentos de lazer e descontração. Além disso, utilizo meu conhecimento técnico para realizar trabalhos autônomos, prestando suporte de Tecnologia da Informação (T.I) e administração de redes. Essas atividades não apenas complementam minha renda, mas também me permitem manter minhas habilidades atualizadas e em constante aprimoramento.' 
                />



            </div>

        </article>



    )

}