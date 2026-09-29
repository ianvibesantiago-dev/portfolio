// Todo o conteúdo do portfólio. Edite aqui: contatos, projetos, pacotes e perguntas.

export const owner = {
  name: "Ian Santiago",
  role: "Sites e automações para pequenos negócios",
  // TODO: troque pelo seu número com DDI + DDD (somente dígitos), ex.: 5585999999999
  whatsapp: "5500000000000",
  github: "https://github.com/ianvibesantiago-dev",
  city: "Brasil · atendimento 100% online",
} as const;

export const whatsappUrl = (msg = "Olá, Ian! Vi seu portfólio e quero um site para o meu negócio.") =>
  `https://wa.me/${owner.whatsapp}?text=${encodeURIComponent(msg)}`;

export type Project = {
  slug: string;
  name: string;
  niche: string;
  summary: string;
  highlights: string[];
  url: string;
  repo: string;
  image: string;
  accent: string;
  concept?: boolean;
};

const repo = (name: string) => `https://github.com/ianvibesantiago-dev/${name}`;

export const projects: Project[] = [
  {
    slug: "horizonte",
    name: "Horizonte Imóveis",
    niche: "Imobiliária de alto padrão",
    summary: "Vitrine editorial com busca de imóveis que funciona até sem JavaScript e animações refinadas.",
    highlights: ["Busca por bairro, tipo e preço", "Fotos que abrem como cortina", "WhatsApp citando o imóvel"],
    url: "https://horizonte-imoveis-livid.vercel.app",
    repo: repo("horizonte-imoveis"),
    image: "/projects/horizonte-imoveis.jpg",
    accent: "#A7784A",
  },
  {
    slug: "brasa",
    name: "Brasa 84",
    niche: "Hamburgueria",
    summary: "Site com personalidade, cardápio em abas e pedido direto pelo WhatsApp com o item escolhido.",
    highlights: ["Cardápio interativo", "Burger que se monta ao rolar", "Botão de pedido flutuante"],
    url: "https://brasa84.vercel.app",
    repo: repo("brasa84"),
    image: "/projects/brasa84.jpg",
    accent: "#D7261E",
  },
  {
    slug: "moura",
    name: "Moura & Rezende",
    niche: "Escritório de advocacia",
    summary: "Presença sóbria e confiável, com formulário acessível e foco em agendamento de consultas.",
    highlights: ["Formulário com LGPD", "Efeito de tinta nos títulos", "Método em 4 etapas"],
    url: "https://moura-rezende.vercel.app",
    repo: repo("moura-rezende"),
    image: "/projects/moura-rezende.jpg",
    accent: "#16302A",
  },
  {
    slug: "clc",
    name: "CLC Construtora",
    niche: "Construção pesada",
    summary: "Redesign conceitual de um site real: mais visual, animado e com linguagem de canteiro de obra.",
    highlights: ["Contadores animados", "Linha do processo desenhada ao rolar", "Faixas de obra e planta técnica"],
    url: "https://clc-construtora-redesign.vercel.app",
    repo: repo("clc-construtora-redesign"),
    image: "/projects/clc-construtora.jpg",
    accent: "#DA251C",
    concept: true,
  },
  {
    slug: "sorriso",
    name: "Clínica Sorriso",
    niche: "Clínica odontológica",
    summary: "Landing page acolhedora focada em agendamento, pronta para integrar atendente virtual no WhatsApp.",
    highlights: ["Agendamento pelo WhatsApp", "Página 100% estática", "Menu mobile acessível"],
    url: "https://clinica-sorriso-rouge.vercel.app",
    repo: repo("clinica-sorriso"),
    image: "/projects/clinica-sorriso.jpg",
    accent: "#F07C5A",
  },
];

export type Package = { name: string; price: string; period?: string; description: string; features: string[]; featured?: boolean };

export const packages: Package[] = [
  {
    name: "Essencial",
    price: "R$ 800",
    description: "Para quem precisa aparecer no Google e receber contatos já.",
    features: ["Landing page de 1 página", "Design sob medida e responsivo", "Botão de WhatsApp com mensagem pronta", "Entrega em até 7 dias"],
  },
  {
    name: "Profissional",
    price: "R$ 1.800",
    description: "O site completo que passa confiança e vende por você.",
    features: ["Até 6 seções ou páginas", "Animações e identidade visual", "SEO básico + Google Meu Negócio", "Design no Figma antes do código", "Entrega em até 14 dias"],
    featured: true,
  },
  {
    name: "Premium",
    price: "R$ 3.500",
    period: "+ R$ 300/mês",
    description: "Site + atendente virtual com IA respondendo no WhatsApp 24h.",
    features: ["Tudo do Profissional", "Atendente virtual com IA no WhatsApp", "Agendamento e captura de leads", "Ajustes mensais inclusos"],
  },
];

export const maintenance = { price: "R$ 150/mês", description: "Hospedagem, domínio, ajustes de texto e fotos, e suporte pelo WhatsApp." };

export const steps = [
  { n: "01", title: "Conversa", description: "15 minutos pelo WhatsApp para entender o seu negócio e o seu cliente." },
  { n: "02", title: "Prévia grátis", description: "Você recebe um esboço da página inicial antes de fechar qualquer coisa." },
  { n: "03", title: "Design e código", description: "Desenho no Figma, desenvolvimento e duas rodadas de ajustes." },
  { n: "04", title: "No ar", description: "Publicação no seu domínio, com treinamento rápido e suporte." },
] as const;

export const faq = [
  { q: "Quanto tempo leva?", a: "De 7 a 14 dias, dependendo do pacote. A prévia da página inicial sai em 48 horas." },
  { q: "Preciso ter domínio e hospedagem?", a: "Não. Eu registro o domínio (cerca de R$ 40/ano no Registro.br) e publico o site para você." },
  { q: "Consigo alterar textos e fotos depois?", a: "Sim. No plano de manutenção eu faço os ajustes para você; se preferir, te ensino a fazer." },
  { q: "Como funciona o pagamento?", a: "50% para começar e 50% na entrega, por Pix ou cartão. Tudo em um contrato simples." },
  { q: "O site aparece no Google?", a: "Sim. Todos os sites saem com SEO básico, carregamento rápido e integração com o Google Meu Negócio." },
] as const;
