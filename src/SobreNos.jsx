import React from 'react'; //importa framework react
import './SobreNos.css'; //importa css para estilizar

const SobreNos = () => {
  return (
    <div> {/* bloco que armazena todo resto*/}
      <div className="section"> {/* card 1*/}
        <div className="text"> {/* divisao do texto*/}
          <h1>Garotos(as) da Vila</h1>
          <h2>Associação social sem fins lucrativos</h2>
          <p className='info'>
          Criado em 1° de abril de 2017 pelo casal Isabel e Denes. Iniciado juntamente com seus 4 filhos na parte periférica da cidade, o projeto tem como objetivo manter as crianças no esporte, aproximar famílias além de diminuir a evasão escolar ajudando nas dificuldades escolares, no convívio social e formando mentes fortes nas crianças e adolescentes. O objetivo também é a formação de cidadãos conscientes, confiantes e criativos. O projeto atende aproximadamente 600 crianças e adolescentes, de 3 a 18 anos, provisoriamente no centro de eventos (Futebol) e no espaço de atividades (Jazz, ballet, Karatê, aulas de inglês, serviço de convivência, fortalecimento de vínculos e iniciando Informática).
          </p>
        </div>
        <div className="video"> {/*embed video, colocar link do YT para mostrar no site*/}
          <iframe
            width="400"
            height="300"
            src="https://www.youtube.com/embed/LPP1aU695lM?si=04bxVWf-GKYoxHWK"
            title="Video Title"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="section"> {/*card 2*/}
        <div className="text"> {/* divisao do texto*/}
          <h1>Garotos(as) da Vila</h1>
          <p className='info'>
          É uma instituição cadastrada no Conselho de Assistência Social e no Conselho da Criança e Adolescentes - CMDCA. O projeto se qualifica, por esses cadastros, a captar recursos do imposto de renda e possui o título de utilidade pública municipal e utilidade pública estadual. A missão do projeto é o desenvolvimento de crianças, adolescentes e jovens, à consciência da realidade e de suas potencialidades através do aprimoramento ético e de cidadania, criando oportunidades de atuação positiva na sociedade. Seus valores estão ligados à ética, solidariedade, respeito, determinação, fé, responsabilidade e transparência, educando para vida e cuidando do ser humano através da inclusão social. 
          Sua visão é ser referência em atendimento e valorização humana de crianças, adolescentes e jovens.
          </p>
        </div>
        <div className="video"> {/* embed video, colocar link do YT para mostrar no site*/}
          <iframe
            width="400"
            height="300"
            src="https://www.youtube.com/embed/POHwIopnVwc?si=BP3499NMr8hKJgRI"
            title="Video Title"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;
