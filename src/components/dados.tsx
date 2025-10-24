import { assetPath } from "@/lib/asset-path";

export const equipe = [
    {
      quote:
        "Com uma visão criativa incomparável, transformo ideias em produções audiovisuais que emocionam e contam histórias únicas.",
      name: "Carlos Silva",
      designation: "Diretor Criativo & Fundador",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Especialista em capturar cada detalhe com perfeição técnica, garantindo que cada frame tenha a qualidade cinematográfica que seus projetos merecem.",
      name: "Amanda Costa",
      designation: "Diretora de Fotografia",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Transformo horas de gravação em narrativas envolventes através de edição dinâmica e técnicas de pós-produção de última geração.",
      name: "Rafael Mendes",
      designation: "Editor & Motion Designer",
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Design sonoro e mixagem que elevam a experiência audiovisual, criando atmosferas que conectam emocionalmente com o público.",
      name: "Lucas Fernandes",
      designation: "Sound Designer & Produtor Musical",
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Coordeno cada aspecto da produção com excelência, garantindo que prazos sejam cumpridos e que cada projeto supere as expectativas dos clientes.",
      name: "Juliana Oliveira",
      designation: "Produtora Executiva",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  export const fotografias = [
    {
      id: 1,
      title: "Paisagem Urbana",
      description: "Fotografia capturando a essência da cidade ao entardecer",
      image: assetPath("/images/clients/1.png"),
    },
    {
      id: 2,
      title: "Retrato Artístico",
      description: "Jogo de luzes e sombras em retrato profissional",
      image: assetPath("/images/clients/2.png"),
    },
    {
      id: 3,
      title: "Natureza Viva",
      description: "Momento único capturado na natureza",
      image: assetPath("/images/clients/3.png"),
    },
    {
      id: 4,
      title: "Natureza Viva",
      description: "Momento único capturado na natureza",
      image: assetPath("/images/clients/4.png"),
    },
    {
      id: 5,
      title: "Natureza Viva",
      description: "Momento único capturado na natureza",
      image: assetPath("/images/clients/5.png"),
    },

  ];

  export const portifolio = [
    {
      id: 1,
      title: 'Casamento',
      description: 'Uma celebração de amor e união.',
      url: assetPath('/portifolio/videos/8.webm'),
      type: 'video' as const,
    },
    {
      id: 2,
      title: 'Vídeo Casamento',
      description: 'Registro em vídeo de momentos especiais.',
      url: assetPath('/portifolio/videos/1.webm'),
      type: 'video' as const,
    },
    {
      id: 3,
      title: 'Ensaios',
      description: 'Sessões fotográficas criativas e artísticas.',
      url: assetPath('/portifolio/videos/5.webm'),
      type: 'video' as const,
    },
    {
      id: 4,
      title: 'Vídeo Corporativo',
      description: 'Cobertura profissional de eventos empresariais.',
      url: assetPath('/portifolio/videos/2.webm'),
      type: 'video' as const,
    },
    {
      id: 5,
      title: 'Novo Projeto',
      description: 'Uma visão inovadora para o futuro.',
      url: assetPath('/portifolio/videos/7.webm'),
      type: 'video' as const,
    },
    { 
      id: 6,
      title: 'Ensaio Visual',
      description: 'Produção audiovisual criativa.',
      url: assetPath('/portifolio/videos/3.webm'),
      type: 'video' as const,
    },
  ];