import { useEffect, type ReactNode } from "react";
import { ArrowLeft, Hexagon } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { SITE } from "../data";

const LAST_UPDATED = "6 de outubro de 2026";

type Section = { id: string; title: string; body: ReactNode };

const mail = (
  <a className="text-primary underline underline-offset-2" href={`mailto:${SITE.email}`}>
    {SITE.email}
  </a>
);

const ext = (href: string, label: string) => (
  <a
    className="text-primary underline underline-offset-2"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
  </a>
);

const SECTIONS: Section[] = [
  {
    id: "quem-somos",
    title: "1. Quem somos",
    body: (
      <>
        <p>
          Esta Política de Privacidade descreve como a <strong>Belter Oracle Tech</strong>{" "}
          (&ldquo;Belter&rdquo;, &ldquo;nós&rdquo;)
          {SITE.cnpj ? `, inscrita no CNPJ ${SITE.cnpj},` : ""} empresa de tecnologia dedicada ao
          desenvolvimento de software e produtos digitais com inteligência artificial, trata dados
          pessoais de quem visita o site {ext(SITE.url, SITE.url.replace("https://", ""))}{" "}
          (&ldquo;Site&rdquo;) ou interage com nossos anúncios e canais de contato.
        </p>
        <p>
          Atuamos como <strong>controladora</strong> dos dados pessoais tratados no Site, nos termos
          da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 &ndash; LGPD). Para qualquer assunto
          sobre privacidade, fale conosco em {mail}.
        </p>
      </>
    ),
  },
  {
    id: "escopo",
    title: "2. Escopo desta política",
    body: (
      <>
        <p>
          Esta política vale para o Site institucional da Belter, suas páginas de apresentação dos
          produtos (como{" "}
          <Link className="text-primary underline underline-offset-2" to="/zion-skincare">
            Zion Skincare
          </Link>{" "}
          e{" "}
          <Link className="text-primary underline underline-offset-2" to="/goak-tech">
            Gòak Tech
          </Link>
          ) e para os contatos que você faz conosco a partir dele ou de nossos anúncios.
        </p>
        <p>
          Os aplicativos e serviços em si (por exemplo, o app do Zion Skincare, o app do Gòak Tech e
          o Desviciar) tratam dados adicionais, como cadastro, uso do serviço e pagamentos. Quando
          você os utiliza, aplicam-se também os avisos de privacidade e os termos de uso específicos
          de cada produto, apresentados no momento do cadastro.
        </p>
      </>
    ),
  },
  {
    id: "dados-coletados",
    title: "3. Quais dados coletamos",
    body: (
      <>
        <p>Coletamos apenas o necessário para operar o Site e atender você:</p>
        <ul>
          <li>
            <strong>Dados que você nos fornece:</strong> nome, e-mail e o conteúdo da mensagem,
            quando você entra em contato conosco por e-mail ou por outro canal que venhamos a
            disponibilizar (como formulários ou WhatsApp), incluindo formulários de anúncios do
            Meta.
          </li>
          <li>
            <strong>Dados de navegação (coletados automaticamente):</strong> endereço IP, tipo de
            navegador e dispositivo, sistema operacional, idioma, páginas acessadas, data e hora,
            página de origem (referência) e parâmetros de campanha (UTM) presentes no link pelo qual
            você chegou.
          </li>
          <li>
            <strong>Cookies e tecnologias semelhantes:</strong> identificadores gerados por
            ferramentas de mensuração e publicidade, descritos nas seções 5 e 6.
          </li>
        </ul>
        <p>
          <strong>Não coletamos dados pessoais sensíveis</strong> (como saúde, origem racial,
          convicção religiosa ou biometria) por meio do Site, e pedimos que você não os envie nas
          mensagens de contato. O Site não é direcionado a menores de 18 anos.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "4. Para que usamos os dados e em quais bases legais",
    body: (
      <>
        <ul>
          <li>
            <strong>Responder contatos e solicitações de propostas</strong> &ndash; execução de
            procedimentos preliminares a um contrato, a pedido do titular, e legítimo interesse
            (LGPD, art. 7º, V e IX).
          </li>
          <li>
            <strong>Operar, proteger e melhorar o Site</strong> (segurança, prevenção a fraudes e
            abusos, diagnóstico de falhas, estatísticas de acesso) &ndash; legítimo interesse (art.
            7º, IX).
          </li>
          <li>
            <strong>Mensurar e otimizar campanhas de publicidade</strong>, inclusive no Facebook e
            Instagram, e apresentar anúncios mais relevantes &ndash; consentimento (art. 7º, I)
            quando exigido, e legítimo interesse (art. 7º, IX) nas demais hipóteses.
          </li>
          <li>
            <strong>Cumprir obrigações legais ou regulatórias</strong> e exercer direitos em
            processos &ndash; art. 7º, II e VI.
          </li>
        </ul>
        <p>
          Não vendemos seus dados pessoais e não os usamos para decisões exclusivamente
          automatizadas que produzam efeitos jurídicos sobre você.
        </p>
      </>
    ),
  },
  {
    id: "meta",
    title: "5. Publicidade e Meta (Facebook e Instagram)",
    body: (
      <>
        <p>
          Divulgamos nossos produtos e serviços em anúncios no Facebook e no Instagram. Para medir o
          resultado dessas campanhas e criar públicos relevantes, podemos utilizar o{" "}
          <strong>Pixel da Meta</strong> e/ou a <strong>API de Conversões</strong>. Essas
          ferramentas enviam à Meta Platforms, Inc. e/ou Meta Platforms Ireland Ltd. informações
          sobre as interações no Site, como páginas visitadas, cliques em botões, eventos de
          conversão (por exemplo, envio de contato), identificadores do navegador (cookies como{" "}
          <em>_fbp</em> e <em>_fbc</em>), endereço IP e dados do dispositivo. Quando você nos
          informa dados de contato (como e-mail), eles podem ser enviados à Meta em formato
          criptografado (hash) para associar a conversão à sua conta.
        </p>
        <p>
          A Meta atua como controladora independente sobre os dados que recebe, conforme a sua{" "}
          {ext("https://www.facebook.com/privacy/policy/", "Política de Privacidade")} e os{" "}
          {ext(
            "https://www.facebook.com/legal/terms/businesstools",
            "Termos das Ferramentas de Negócios"
          )}
          . Você pode controlar os anúncios que recebe nas{" "}
          {ext("https://www.facebook.com/adpreferences", "Preferências de anúncios")} e nas
          configurações de privacidade da sua conta Facebook ou Instagram.
        </p>
        <p>
          Se você preencher um <strong>formulário de cadastro de anúncios do Meta</strong>, os dados
          informados ficam disponíveis para nós na conta de anúncios e são usados para retornar o
          seu contato, conforme esta política.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "6. Cookies",
    body: (
      <>
        <p>Cookies são pequenos arquivos armazenados no seu navegador. Podemos utilizar:</p>
        <ul>
          <li>
            <strong>Estritamente necessários:</strong> para o funcionamento e a segurança do Site.
          </li>
          <li>
            <strong>De mensuração e publicidade:</strong> do Pixel da Meta, para entender o
            desempenho das campanhas e otimizar anúncios.
          </li>
        </ul>
        <p>
          Você pode bloquear ou apagar cookies a qualquer momento nas configurações do seu
          navegador. Isso pode afetar algumas funcionalidades, mas não impede a navegação pelo Site.
          Cookies de mensuração e publicidade somente são ativados conforme as bases legais da seção
          4, e você pode se opor a eles escrevendo para {mail}.
        </p>
      </>
    ),
  },
  {
    id: "compartilhamento",
    title: "7. Com quem compartilhamos",
    body: (
      <>
        <p>Compartilhamos dados somente quando necessário, com:</p>
        <ul>
          <li>
            <strong>Google</strong> &ndash; infraestrutura de hospedagem (Google Cloud) e fontes
            tipográficas (Google Fonts), que podem registrar seu endereço IP ao carregar o Site;
          </li>
          <li>
            <strong>Meta</strong> &ndash; ferramentas de publicidade e mensuração, conforme a seção
            5;
          </li>
          <li>
            <strong>Provedores de e-mail e comunicação</strong> que usamos para falar com você;
          </li>
          <li>
            <strong>Autoridades públicas</strong>, quando houver obrigação legal ou ordem judicial.
          </li>
        </ul>
        <p>
          Esses fornecedores só podem tratar os dados para as finalidades contratadas e de acordo
          com a legislação aplicável.
        </p>
      </>
    ),
  },
  {
    id: "transferencia",
    title: "8. Transferência internacional",
    body: (
      <p>
        Alguns dos nossos fornecedores (como Google e Meta) mantêm servidores fora do Brasil,
        inclusive nos Estados Unidos. Nesses casos, a transferência ocorre com base na LGPD (art.
        33), por exemplo mediante cláusulas contratuais e garantias de proteção adotadas por esses
        fornecedores.
      </p>
    ),
  },
  {
    id: "retencao",
    title: "9. Por quanto tempo guardamos os dados",
    body: (
      <p>
        Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas nesta
        política. Mensagens de contato são guardadas enquanto durar a conversa ou a relação
        comercial e pelo prazo de eventuais obrigações legais ou de defesa em processos. Logs de
        acesso são mantidos pelo período mínimo previsto em lei (Marco Civil da Internet) ou
        necessário à segurança. Após esse prazo, os dados são excluídos ou anonimizados.
      </p>
    ),
  },
  {
    id: "seguranca",
    title: "10. Segurança",
    body: (
      <p>
        Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados, como conexão
        criptografada (HTTPS), controle de acesso e uso de infraestrutura de nuvem reconhecida.
        Nenhum sistema é totalmente imune a incidentes; se ocorrer um que possa gerar risco ou dano
        relevante, comunicaremos você e a Autoridade Nacional de Proteção de Dados (ANPD), conforme
        a lei.
      </p>
    ),
  },
  {
    id: "direitos",
    title: "11. Seus direitos",
    body: (
      <>
        <p>Nos termos do art. 18 da LGPD, você pode solicitar a qualquer momento:</p>
        <ul>
          <li>confirmação da existência de tratamento e acesso aos seus dados;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>
            anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em
            desconformidade;
          </li>
          <li>portabilidade dos dados;</li>
          <li>eliminação dos dados tratados com base no consentimento;</li>
          <li>informação sobre com quem compartilhamos seus dados;</li>
          <li>informação sobre a possibilidade de não consentir e suas consequências;</li>
          <li>
            revogação do consentimento e oposição a tratamentos baseados em legítimo interesse.
          </li>
        </ul>
        <p>
          Para exercer esses direitos, escreva para {mail}. Podemos pedir informações para confirmar
          a sua identidade e responderemos no prazo legal. Você também pode apresentar reclamação à{" "}
          {ext("https://www.gov.br/anpd/pt-br", "ANPD")}.
        </p>
      </>
    ),
  },
  {
    id: "links-externos",
    title: "12. Links para outros sites",
    body: (
      <p>
        O Site contém links para serviços de terceiros (como GitHub, LinkedIn e os aplicativos dos
        nossos produtos). Não controlamos as práticas de privacidade desses serviços; recomendamos
        ler as respectivas políticas antes de fornecer dados.
      </p>
    ),
  },
  {
    id: "alteracoes",
    title: "13. Alterações desta política",
    body: (
      <p>
        Podemos atualizar esta política para refletir mudanças legais ou em nossos serviços. A
        versão vigente é sempre a publicada nesta página, com a data de atualização indicada no
        topo. Em caso de mudanças relevantes, avisaremos por meios adequados.
      </p>
    ),
  },
  {
    id: "contato",
    title: "14. Contato",
    body: (
      <p>
        Dúvidas, solicitações ou reclamações sobre privacidade: {mail}. Site:{" "}
        {ext(SITE.url, SITE.url.replace("https://", ""))}.
      </p>
    ),
  },
];

export function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Política de Privacidade | Belter Oracle Tech";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Hexagon className="h-4.5 w-4.5" aria-hidden />
            </span>
            <span className="font-display text-base font-semibold tracking-tight text-foreground">
              Belter Oracle <span className="text-primary">Tech</span>
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Voltar ao site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <span className="inline-flex items-center border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
          Legal
        </span>
        <h1 className="mt-5 font-display text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Última atualização: {LAST_UPDATED}</p>
        <p className="mt-6 text-lg text-muted-foreground">
          Transparência é parte do nosso trabalho. Aqui explicamos, de forma direta, quais dados
          tratamos, por quê, com quem compartilhamos e como você exerce seus direitos.
        </p>

        <nav
          aria-label="Índice"
          className="mt-10 border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Neste documento
          </p>
          <ol className="mt-4 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-foreground/70 transition-colors hover:text-primary"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-12 space-y-12">
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold tracking-tight">{s.title}</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-foreground/80 [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_ul]:space-y-2 [&_strong]:font-semibold [&_strong]:text-foreground">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
