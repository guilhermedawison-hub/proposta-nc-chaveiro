import './styles.css';
import './brand-overrides.css';

const competitors = [
  { name: 'NC Chaveiros', score: 4.0, reviews: 22, place: 'Jardim Olavo Bilac', distance: 'Ponto de partida', note: 'Presença local com espaço claro para fortalecer confiança e comunicação.' },
  { name: 'Chaveiro Sandro 24 Horas', score: 5.0, reviews: 18, place: 'Jardim Olavo Bilac', distance: '≈ 1,4 km da NC', note: 'Mesmo bairro e comunicação voltada a serviços residenciais, automotivos e emergenciais.' },
  { name: 'Chaveiro Água Viva', score: 4.9, reviews: 320, place: 'Baeta Neves', distance: '≈ 1,7 km', note: 'Volume de avaliações muito superior e presença em automotivo e eletrônica automotiva.' },
  { name: 'Chaveiro Ninho', score: 4.9, reviews: 110, place: 'Nova Petrópolis', distance: '≈ 3,9 km', note: 'Reputação forte e presença em automotivo e soluções relacionadas a chaves.' },
];

const plans = {
  essencial: {
    name: 'Google Essencial',
    price: 'R$ 350,00',
    installment: '2x de R$ 190,00 sem juros · total R$ 380,00',
    saving: 'Economia de R$ 30 à vista',
    featured: false,
    items: ['Otimização do Perfil da Empresa no Google', 'Revisão das informações', 'Categorias e descrição estratégica', 'Organização dos serviços', 'Orientação de reputação e estratégia de avaliações', 'Ajustes de contato'],
  },
  site: {
    name: 'Google + Site',
    price: 'R$ 450,00',
    installment: '2x de R$ 250,00 sem juros · total R$ 500,00',
    saving: 'Economia de R$ 50 à vista',
    featured: true,
    items: ['Tudo do Google Essencial', 'Site institucional profissional e responsivo', 'Apresentação da NC e seção de serviços', 'Botões de WhatsApp e ligação', 'Localização, atendimento e SEO básico', 'Integração com o Google'],
  },
  avancado: {
    name: 'Presença Digital Avançada',
    price: 'R$ 600,00',
    installment: '3x de R$ 233,33 sem juros · ajuste na última · total R$ 700,00',
    saving: 'Economia de R$ 100 à vista',
    featured: false,
    items: ['Tudo do Google + Site', 'Estrutura ampliada de até 12 serviços', '10 publicações estratégicas', 'Textos comerciais e posicionamento local', 'Acompanhamento inicial de 30 dias', 'Relatório de evolução e recomendações'],
  },
};

const money = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const stars = score => '★★★★★'.slice(0, Math.round(score));
const barWidth = (value, max) => `${Math.max(4, Math.min(100, (value / max) * 100))}%`;

function competitorCard(item, index) {
  return `
    <article class="competitor ${index === 0 ? 'featured' : ''} reveal">
      <div class="competitor-name">${item.name}</div>
      <div class="competitor-place">${item.place} · ${item.distance}</div>
      <div class="scoreline"><span class="score">${item.score.toFixed(1).replace('.', ',')}</span><span class="stars" aria-label="${item.score} de 5 estrelas">${stars(item.score)}</span></div>
      <div class="bar-label"><span>Nota pública</span><span>5,0</span></div>
      <div class="bar-track" aria-label="Nota ${item.score} de 5"><div class="bar-fill" style="width:${barWidth(item.score, 5)}"></div></div>
      <div class="bar-label"><span>Avaliações</span><span>${item.reviews}</span></div>
      <div class="bar-track volume" aria-label="${item.reviews} avaliações"><div class="bar-fill" style="width:${barWidth(item.reviews, 320)}"></div></div>
      <p class="competitor-note">${item.note}</p>
    </article>`;
}

function planCard(key, plan) {
  return `
    <article class="offer ${plan.featured ? 'recommended' : ''} reveal">
      <div class="offer-badges">
        ${plan.featured ? '<span class="chip orange">Recomendado</span><span class="chip orange">Melhor custo-benefício</span>' : '<span class="chip">Projeto de implementação</span>'}
      </div>
      <h3>${plan.name}</h3>
      <div class="payment-badge">PAGAMENTO ÚNICO <span>—</span> SEM MENSALIDADE PELO SERVIÇO DE IMPLEMENTAÇÃO</div>
      <span class="offer-kicker">À vista</span>
      <div class="offer-price">${plan.price} <small>à vista</small></div>
      <div class="offer-installments">${plan.installment}</div>
      <div class="offer-saving">${plan.saving}</div>
      ${plan.featured ? '<span class="highlight-line">Google + Site + Display NFC personalizado.</span>' : ''}
      <ul class="offer-list">${plan.items.map(item => `<li>${item}</li>`).join('')}</ul>
      <div class="chip green">CORTESIA INCLUÍDA · display NFC personalizado</div>
      <button class="btn ${plan.featured ? 'btn-primary' : 'btn-ghost'} choose-plan" data-package="${key}" type="button">QUERO CONTRATAR <span aria-hidden="true">↗</span></button>
      <div class="offer-foot">Serviço de implementação pontual. Não é assinatura nem mensalidade.</div>
    </article>`;
}

function appTemplate() {
  return `
    <a class="skip-link" href="#diagnostico">Pular para o diagnóstico</a>
    <header class="site-nav">
      <div class="shell nav-inner">
        <a class="brand brand-lockup" href="#top" aria-label="CPlay Tech — início"><img class="logo-image official-logo" src="/cplay-tech.webp" alt="Logo CPlay Tech"><span class="brand-word"><b>CPLAY</b> <small>TECH</small></span></a>
        <nav class="nav-links" aria-label="Navegação principal">
          <a href="#diagnostico">Diagnóstico</a><a href="#concorrencia">Concorrência</a><a href="#simulador">Simulador</a><a href="#ofertas">Ofertas</a>
        </nav>
        <span class="nav-tag">Proposta comercial</span>
      </div>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="shell hero-grid">
          <div>
            <div class="hero-brand-lockup"><img class="logo-image official-logo" src="/cplay-tech.webp" alt="Logo CPlay Tech"><span class="brand-word"><b>CPLAY</b> <small>TECH</small></span></div><div class="eyebrow">Diagnóstico executivo · NC Chaveiros</div>
            <h1 id="hero-title" class="display">Mais presença no Google. <em>Mais oportunidades.</em></h1>
            <p class="hero-lede">Uma leitura objetiva da NC Chaveiros, dos concorrentes próximos e dos caminhos para facilitar novos contatos.</p>
            <div class="hero-actions"><a class="btn btn-primary" href="#simulador">Ver oportunidades <span aria-hidden="true">↓</span></a><a class="btn btn-ghost" href="#ofertas">Ver soluções</a></div>
            <div class="hero-note">São Bernardo do Campo · Jardim Olavo Bilac · consulta pública em 11/11/2026</div>
          </div>
          <div class="hero-panel" aria-label="Resumo dos indicadores públicos">
            <div class="panel-kicker"><span>Resumo de presença</span><span>Leitura atual</span></div>
            <div class="metric-board">
              <div class="metric"><span class="metric-label">Nota no Google</span><span class="metric-value">4,0<span class="metric-unit">/5</span></span><span class="metric-sub">22 avaliações públicas</span></div>
              <div class="metric"><span class="metric-label">Região</span><span class="metric-value" style="font-size:28px;letter-spacing:-.04em">SBC</span><span class="metric-sub">Jardim Olavo Bilac</span></div>
              <div class="metric"><span class="metric-label">Categoria</span><span class="metric-value" style="font-size:27px;letter-spacing:-.04em">Chaveiro</span><span class="metric-sub">Presença local</span></div>
            </div>
            <div class="status-list"><div class="status-row"><span class="status-dot orange"></span>Reputação: precisa evoluir</div><div class="status-row"><span class="status-dot"></span>Visibilidade: oportunidades de otimização</div><div class="status-row"><span class="status-dot green"></span>Conversão: canais mais claros podem ajudar</div></div>
          </div>
        </div>
      </section>

      <section class="section" id="diagnostico" aria-labelledby="diagnostico-title">
        <div class="shell">
          <div class="section-head"><div><div class="eyebrow">01 · Leitura do perfil</div><h2 id="diagnostico-title" class="display section-title">Como está a NC hoje.</h2></div><p class="section-intro">Este painel é uma leitura inspirada em interfaces de perfil local. Não é um painel oficial do Google e não substitui os dados do proprietário.</p></div>
          <div class="info-strip"><span class="chip orange">Atenção</span><span>Há divergência em fontes públicas sobre o telefone. Os dois números abaixo ficam pendentes de confirmação antes de qualquer publicação.</span></div>
          <div class="profile-card card reveal">
            <div class="profile-main"><div class="profile-brand"><div class="profile-avatar">NC</div><div><div class="profile-name">NC Chaveiros</div><div class="profile-meta">Chaveiro · Jardim Olavo Bilac, São Bernardo do Campo</div></div></div><div class="eyebrow">Reputação pública</div><div class="rating-row"><span class="rating">4,0</span><span><span class="stars">★★★★☆</span><br><span class="profile-meta">22 avaliações</span></span></div><div class="address-line"><span aria-hidden="true">⌖</span><span>Rua Rodrigues Alves, 27, Jardim Olavo Bilac</span></div><div class="address-line"><span aria-hidden="true">◉</span><span>Categoria: Chaveiro · Região: São Bernardo do Campo</span></div></div>
            <div class="profile-aside"><div><div class="eyebrow">Contato encontrado</div><p class="body-copy" style="margin:16px 0 0">Fontes públicas consultadas apresentam telefones diferentes. Confirmar com a NC antes de usar em site, perfil ou campanha.</p><div style="display:grid;gap:10px;margin-top:20px"><span class="chip amber">(11) 94005-4545 · pendente</span><span class="chip amber">(11) 4125-0365 · pendente</span></div></div><span class="small muted">Nenhuma métrica de visualizações, pesquisas, ligações ou cliques foi inventada.</span></div>
          </div>
          <div class="diagnostic-grid">
            <article class="card card-pad diag-card reveal"><div class="diag-icon">01</div><div class="card-heading"><h3>Reputação</h3><span class="chip orange">Atenção</span></div><p>Nota 4,0: vale investigar avaliações negativas e criar uma rotina legítima de solicitação.</p></article>
            <article class="card card-pad diag-card reveal"><div class="diag-icon">02</div><div class="card-heading"><h3>Relevância</h3><span class="chip amber">Otimizar</span></div><p>Categorias, serviços e descrição podem responder melhor ao que o cliente procura.</p></article>
            <article class="card card-pad diag-card reveal"><div class="diag-icon">03</div><div class="card-heading"><h3>Apresentação</h3><span class="chip amber">Fortalecer</span></div><p>Fotos, identidade e comunicação comercial devem transmitir confiança em poucos segundos.</p></article>
            <article class="card card-pad diag-card reveal"><div class="diag-icon">04</div><div class="card-heading"><h3>Conversão</h3><span class="chip green">Aproximar</span></div><p>Ligar, chamar no WhatsApp e solicitar um serviço precisam ser caminhos simples.</p></article>
          </div>
          <div class="priority-wrap"><div class="eyebrow">Prioridades de trabalho</div><div class="priority-row"><div class="priority-label high">Alta</div><div class="priority-items"><span>Analisar avaliações negativas</span><span>Confirmar telefone e dados comerciais</span><span>Revisar categorias e serviços</span><span>Melhorar descrição do perfil</span></div></div><div class="priority-row"><div class="priority-label medium">Média</div><div class="priority-items"><span>Atualizar fotografias</span><span>Cadastrar serviços individualmente</span><span>Melhorar publicações</span></div></div><div class="priority-row"><div class="priority-label continuous">Contínua</div><div class="priority-items"><span>Estratégia de avaliações</span><span>Atualização de conteúdo</span><span>Monitoramento de desempenho</span></div></div></div>
        </div>
      </section>

      <section class="section" id="concorrencia" aria-labelledby="concorrencia-title">
        <div class="shell"><div class="section-head"><div><div class="eyebrow">02 · Contexto competitivo</div><h2 id="concorrencia-title" class="display section-title">Como estão os concorrentes.</h2></div><p class="section-intro">O cliente procura proximidade, confiança e clareza. Estes cards são comparativos elaborados pela CPlay a partir dos dados públicos fornecidos.</p></div><div class="info-strip"><span class="chip">Consulta · 11/11/2026</span><span>Representação própria para análise. Não são capturas de tela nem ranking oficial do Google Maps.</span></div><div class="competitor-grid">${competitors.map(competitorCard).join('')}</div><div class="competitor-bottom"><div class="insight-card reveal"><strong>Leitura nº 01</strong><p>A NC tem mais avaliações que o Sandro, mas apresenta uma nota inferior. Reputação e resposta às avaliações podem pesar na comparação.</p></div><div class="insight-card reveal"><strong>Leitura nº 02</strong><p>Água Viva e Ninho têm volumes muito superiores. Comunicar especialidades e serviços é uma oportunidade para a NC ser mais específica.</p></div></div></div>
      </section>

      <section class="section opportunity" aria-labelledby="opportunity-title"><div class="shell opportunity-grid"><div><div class="eyebrow">03 · O custo da indecisão</div><h2 id="opportunity-title" class="display">Onde existe oportunidade?</h2><p class="body-copy">Não há dados para afirmar quantos contatos ou serviços foram perdidos. Existe, porém, uma oportunidade comercial: tornar a NC mais clara, confiável e fácil de acionar quando a busca acontece.</p></div><div class="criteria-list reveal"><div><i>01</i>Proximidade</div><div><i>02</i>Nota e avaliações</div><div><i>03</i>Serviços disponíveis</div><div><i>04</i>Rapidez de atendimento</div><div><i>05</i>Confiança</div><div><i>06</i>Facilidade de contato</div></div></div></section>

      <section class="section" id="simulador" aria-labelledby="simulador-title"><div class="shell"><div class="section-head"><div><div class="eyebrow">04 · Cenário ilustrativo</div><h2 id="simulador-title" class="display section-title">Quanto você pode ganhar conquistando novos clientes?</h2></div><p class="section-intro">Ajuste três variáveis e veja como uma oportunidade de contato pode se traduzir em um cenário de receita bruta adicional.</p></div><div class="simulator reveal"><div class="simulator-body"><div class="controls"><div class="control"><div class="control-head"><span>Novos contatos por mês</span><strong class="control-output" id="contacts-output">10</strong></div><input id="contacts-range" type="range" min="5" max="50" value="10" step="1" aria-label="Novos contatos por mês"><div class="range-labels"><span>5</span><span>50 contatos</span></div></div><div class="control"><div class="control-head"><span>Ticket médio por serviço</span><strong class="control-output" id="ticket-output">R$ 150</strong></div><input id="ticket-range" type="range" min="50" max="500" value="150" step="10" aria-label="Ticket médio por serviço"><div class="range-labels"><span>R$ 50</span><span>R$ 500</span></div></div><div class="control"><div class="control-head"><span>Taxa de conversão</span><strong class="control-output" id="conversion-output">50%</strong></div><input id="conversion-range" type="range" min="10" max="100" value="50" step="5" aria-label="Taxa de conversão"><div class="range-labels"><span>10%</span><span>100%</span></div></div></div><div class="result-grid"><div class="result-card"><span class="result-label">Serviços adicionais<br>estimados</span><strong class="result-value" id="services-result">5</strong></div><div class="result-card highlight"><span class="result-label">Receita potencial<br>mensal</span><strong class="result-value" id="monthly-result">R$ 750</strong></div><div class="result-card"><span class="result-label">Receita potencial<br>anual</span><strong class="result-value" id="yearly-result">R$ 9.000</strong></div></div></div><div class="simulator-foot">Simulação ilustrativa. Não representa faturamento garantido, previsão de vendas ou perda comprovada. Os valores dependem da demanda, do atendimento, da conversão e do ticket médio real.</div></div></div></section>

      <section class="section" aria-labelledby="plano-title"><div class="shell"><div class="section-head"><div><div class="eyebrow">05 · Plano de melhoria</div><h2 id="plano-title" class="display section-title">O que a CPlay oferece.</h2></div><p class="section-intro">A CPlay organiza a presença digital a partir do que a NC realmente oferece — sem prometer primeira posição no Google.</p></div><div class="work-grid"><article class="work-card reveal"><h3>Google</h3><ul><li>Revisão de informações comerciais</li><li>Otimização de categorias</li><li>Descrição estratégica</li><li>Cadastro de serviços</li><li>Otimização de informações de contato</li><li>Orientação para atualização de fotos</li><li>Publicações estratégicas conforme o pacote</li><li>Estratégia de avaliações legítimas</li><li>Orientação de respostas às avaliações</li></ul></article><article class="work-card reveal"><h3>Site</h3><ul><li>Apresentação profissional e responsiva</li><li>Organização dos serviços</li><li>Estrutura residencial, comercial e automotiva conforme serviços reais</li><li>Botões de WhatsApp e ligação</li><li>Localização e atendimento</li><li>SEO básico e integração com o Google</li></ul></article></div><div class="benefit-band reveal"><h3>Por que um site ajuda um chaveiro?</h3><p>Para apresentar o serviço que o cliente procura, mostrar especialidades, facilitar pedidos de orçamento, permitir contato rápido pelo celular, transmitir profissionalismo, criar um endereço digital próprio e abrir uma página para cartões, redes sociais e displays.</p></div></div></section>

      <section class="section" aria-labelledby="solution-title"><div class="shell"><div class="section-head"><div><div class="eyebrow">06 · Solução CPlay</div><h2 id="solution-title" class="display section-title">Presença mais clara. Contato mais fácil.</h2></div><p class="section-intro">O trabalho combina ajustes no perfil, uma apresentação digital própria e uma rotina mais consciente de reputação.</p></div><div class="solution-grid"><div class="solution-quote reveal"><blockquote>“Não é só aparecer. É facilitar a escolha.”</blockquote><small>CPlay Tech · Sites e Soluções Inteligentes</small></div><div class="solution-list reveal"><div><b>01 · Descoberta</b><p>Informações, categorias e serviços organizados para responder à busca local.</p></div><div><b>02 · Confiança</b><p>Apresentação, fotos, avaliações e textos comerciais coerentes com a experiência real.</p></div><div><b>03 · Ação</b><p>Botões de ligação, WhatsApp e orçamento em caminhos simples no celular.</p></div><div><b>04 · Continuidade</b><p>Orientação e recomendações para manter o conteúdo vivo e útil ao cliente.</p></div></div></div></div></section>

      <section class="section" aria-labelledby="nfc-title"><div class="shell"><div class="nfc-layout"><div class="nfc-visual reveal"><img src="/nfc-display.svg" alt="Ilustração conceitual de display de acrílico com NFC para avaliação" /><span class="visual-label">Imagem ilustrativa · não é foto do produto final</span></div><div><div class="eyebrow">07 · Diferencial físico</div><h2 id="nfc-title" class="display section-title">Avaliar a NC fica mais simples.</h2><p class="body-copy">Um display personalizado com tecnologia NFC. O cliente aproxima o celular e acessa diretamente o link para avaliar a NC no Google.</p><div class="nfc-benefits"><span>Facilita o acesso à avaliação.</span><span>Incentiva clientes satisfeitos a avaliar.</span><span>Ajuda a fortalecer a reputação.</span></div><div class="nfc-steps"><div class="nfc-step"><span class="step-number">01</span><div><h3>Aproxime</h3><p>O cliente aproxima o celular compatível da área NFC.</p></div></div><div class="nfc-step"><span class="step-number">02</span><div><h3>Abra</h3><p>O celular abre o link de avaliação do Google da NC.</p></div></div><div class="nfc-step"><span class="step-number">03</span><div><h3>Compartilhe</h3><p>O cliente pode escrever e publicar sua avaliação espontaneamente.</p></div></div></div><div class="nfc-warning">O display não gera avaliações automaticamente e não garante novas avaliações. O resultado depende da experiência do cliente e da disposição de avaliar. Incluído como cortesia nos três pacotes.</div></div></div></div></section>

      <section class="section" id="ofertas" aria-labelledby="ofertas-title"><div class="shell"><div class="offer-intro"><div><div class="eyebrow">08 · Escolha de solução</div><h2 id="ofertas-title" class="display section-title">Quanto custa contratar.</h2></div><p class="section-intro">Todos os pacotes são projetos de implementação, não mensalidades. O plano do meio equilibra presença no Google e um endereço digital próprio.</p></div><div class="offer-grid">${Object.entries(plans).map(([key, plan]) => planCard(key, plan)).join('')}</div><div class="compare-wrap reveal"><table class="compare-table"><thead><tr><th>Entrega</th><th>Google Essencial<br><strong>R$ 350 à vista</strong></th><th>Google + Site<br><strong>R$ 450 à vista</strong></th><th>Presença Avançada<br><strong>R$ 600 à vista</strong></th></tr></thead><tbody><tr><td>Otimização do Google</td><td class="check">Incluído</td><td class="check">Incluído</td><td class="check">Incluído</td></tr><tr><td>Site institucional responsivo</td><td class="dash">—</td><td class="check">Incluído</td><td class="check">Incluído</td></tr><tr><td>Até 12 serviços estruturados</td><td class="dash">—</td><td class="dash">—</td><td class="check">Incluído</td></tr><tr><td>10 publicações estratégicas</td><td class="dash">—</td><td class="dash">—</td><td class="check">Incluído</td></tr><tr><td>Acompanhamento inicial de 30 dias</td><td class="dash">—</td><td class="dash">—</td><td class="check">Incluído</td></tr><tr><td>Display NFC personalizado</td><td class="check">Cortesia</td><td class="check">Cortesia</td><td class="check">Cortesia</td></tr></tbody></table></div><p class="commercial-note">Condições de domínio, hospedagem e eventuais renovações serão definidas na contratação do site. O escopo do site é uma página institucional responsiva, com apresentação da empresa, serviços e canais de contato. Funcionalidades adicionais não estão incluídas sem aprovação.</p></div></section>

      <section class="cta-section" id="contato" aria-labelledby="cta-title"><div class="shell"><div class="cta-panel"><div><div class="eyebrow">09 · Próximo passo</div><h2 id="cta-title" class="display">Vamos fortalecer a presença da NC Chaveiros no Google?</h2><p>A NC já possui uma presença no Google e uma base de clientes. Agora, o próximo passo é fortalecer sua reputação, apresentar melhor seus serviços e criar novos caminhos para conquistar oportunidades.</p></div><div class="cta-action"><button class="btn btn-primary" id="open-contact" type="button">QUERO CONTRATAR <span aria-hidden="true">↗</span></button><a class="btn btn-ghost" href="#ofertas">Visualizar ofertas novamente</a></div></div></div></section>
    </main>

    <footer class="site-footer"><div class="shell footer-inner"><div class="footer-lockup"><img class="footer-logo official-logo" src="/cplay-tech.webp" alt="Logo CPlay Tech"><div><div class="footer-brand">CPLAY TECH</div><div class="footer-copy">Sites e Soluções Inteligentes.</div></div></div><div class="footer-right">Mais presença.<br>Mais confiança.<br>Mais oportunidades.</div></div></footer>

    <div class="modal" id="contact-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden><div class="modal-card"><div class="modal-top"><h2 id="modal-title">Escolha o ponto de partida</h2><button class="close-btn" id="close-modal" type="button" aria-label="Fechar">×</button></div><p class="modal-intro">Selecione um pacote para preparar a conversa comercial com a CPlay Tech. O WhatsApp ainda depende da confirmação do número comercial da NC.</p><div class="package-options">${Object.entries(plans).map(([key, plan]) => `<button class="package-option ${plan.featured ? 'selected' : ''}" data-modal-package="${key}" type="button"><span><strong>${plan.name}</strong><small>${plan.price} à vista · ${plan.installment}</small></span><span aria-hidden="true">→</span></button>`).join('')}</div><div class="pending-number"><strong>WhatsApp pendente de confirmação.</strong><br>O número comercial não foi inventado nesta proposta. Após a confirmação, este botão poderá encaminhar a mensagem diretamente.</div><div class="modal-actions"><button class="btn btn-primary" id="prepare-contact" type="button">Preparar mensagem comercial</button><button class="btn btn-ghost" id="back-to-offers" type="button">Voltar às ofertas</button></div></div></div>
  `;
}

document.querySelector('#app').innerHTML = appTemplate();

const rangeEls = { contacts: document.querySelector('#contacts-range'), ticket: document.querySelector('#ticket-range'), conversion: document.querySelector('#conversion-range') };
const outputEls = { contacts: document.querySelector('#contacts-output'), ticket: document.querySelector('#ticket-output'), conversion: document.querySelector('#conversion-output'), services: document.querySelector('#services-result'), monthly: document.querySelector('#monthly-result'), yearly: document.querySelector('#yearly-result') };
function updateSimulator() {
  const contacts = Number(rangeEls.contacts.value); const ticket = Number(rangeEls.ticket.value); const conversion = Number(rangeEls.conversion.value);
  const services = contacts * (conversion / 100); const monthly = services * ticket;
  outputEls.contacts.textContent = contacts; outputEls.ticket.textContent = money(ticket); outputEls.conversion.textContent = `${conversion}%`;
  outputEls.services.textContent = Number.isInteger(services) ? services : services.toFixed(1).replace('.', ','); outputEls.monthly.textContent = money(monthly); outputEls.yearly.textContent = money(monthly * 12);
}
Object.values(rangeEls).forEach(range => range.addEventListener('input', updateSimulator));
updateSimulator();

const modal = document.querySelector('#contact-modal');
let modalTrigger = document.querySelector('#open-contact');
const openModal = trigger => { modalTrigger = trigger || document.querySelector('#open-contact'); modal.hidden = false; document.body.style.overflow = 'hidden'; document.querySelector('[data-modal-package="site"]').focus(); };
const closeModal = () => { modal.hidden = true; document.body.style.overflow = ''; modalTrigger?.focus(); };
document.querySelector('#open-contact').addEventListener('click', event => openModal(event.currentTarget));
document.querySelector('#close-modal').addEventListener('click', closeModal);
document.querySelector('#back-to-offers').addEventListener('click', () => { closeModal(); document.querySelector('#ofertas').scrollIntoView({ behavior: 'smooth' }); });
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });
document.querySelectorAll('.choose-plan').forEach(button => button.addEventListener('click', () => { openModal(button); document.querySelectorAll('.package-option').forEach(option => option.classList.toggle('selected', option.dataset.modalPackage === button.dataset.package)); }));
document.querySelectorAll('.package-option').forEach(option => option.addEventListener('click', () => { document.querySelectorAll('.package-option').forEach(other => other.classList.remove('selected')); option.classList.add('selected'); }));
document.querySelector('#prepare-contact').addEventListener('click', () => { const selected = document.querySelector('.package-option.selected strong').textContent; window.alert(`Pacote selecionado: ${selected}. O número de WhatsApp comercial ainda precisa ser confirmado para concluir o encaminhamento.`); });

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .08 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
