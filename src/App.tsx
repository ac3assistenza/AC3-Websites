import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

const showcaseImages = [
  "/images/local-business-owner.jpg",
  "/images/restaurant-owner.jpg",
  "/images/salon-owner.jpg",
] as const

const translations = {
  it: {
    nav: {
      services: "Come lavoriamo",
      benefits: "Vantaggi",
      contact: "Contatti",
    },
    hero: {
      badge: "Soluzioni web per attività locali",
      title: "Porta la tua attività online con un sito che ispira fiducia.",
      description:
        "Aiutiamo negozi, studi, ristoranti e attività di servizio a lanciare siti moderni che trasformano i visitatori in clienti.",
      primaryCta: "Richiedi un piano gratuito",
      secondaryCta: "Scopri come funziona",
    },
    featureHighlights: [
      {
        title: "Sito online in pochi giorni",
        description: "Mettiamo la tua attività online rapidamente con una roadmap chiara e aggiornamenti costanti.",
      },
      {
        title: "Pensato per clienti reali",
        description: "Pagine veloci, click-to-call, contatto WhatsApp e offerte chiare per ridurre ogni attrito.",
      },
      {
        title: "Supporto mensile semplice",
        description: "Aggiornamenti, nuove offerte e modifiche continue: ci pensiamo noi mentre tu segui i clienti.",
      },
    ],
    services: {
      title: "Come realizziamo la tua attività online",
      description:
        "Un processo semplice in 3 passaggi per costruire una vetrina online professionale, efficace e pronta a generare contatti.",
      cards: [
        {
          title: "Analizziamo ciò che ti serve",
          description:
            "Studiamo il tuo settore, il tipo di clienti che vuoi raggiungere e gli obiettivi reali della tua attività.",
        },
        {
          title: "Progettiamo la tua nuova vetrina online",
          description:
            "Definiamo struttura, contenuti e design del sito per presentare al meglio i tuoi servizi e guidare i contatti.",
        },
        {
          title: "Completiamo i dettagli e pubblichiamo",
          description:
            "Ottimizziamo testi, immagini e call-to-action. Poi lanciamo il sito: tutto pronto, il gioco è fatto.",
        },
      ],
    },
    benefits: {
      title: "Perché le attività locali ci scelgono",
      description: "Siti pratici per imprenditori che vogliono risultati, non complicazioni tecniche.",
      items: [
        {
          title: "Attiri clienti locali online",
          description: "Ti presenti in modo professionale quando ti cercano dopo averti visto in negozio o sui social.",
        },
        {
          title: "Converti visite in chiamate",
          description: "Call-to-action chiare guidano i visitatori a contattarti via telefono, messaggio o modulo.",
        },
        {
          title: "Costruisci fiducia subito",
          description: "Design moderno e proposta chiara aiutano i visitatori a scegliere la tua attività con sicurezza.",
        },
        {
          title: "Controlli la tua presenza online",
          description: "Hai una base web solida che cresce con i tuoi servizi, il tuo team e le tue sedi.",
        },
      ],
    },
    imageAlts: [
      "Analisi iniziale dell'attività con laptop e appunti",
      "Fase di progettazione della vetrina online",
      "Pubblicazione finale del sito con cliente soddisfatto",
    ],
    contact: {
      title: "Pronto a portare online la tua attività?",
      description:
        "Mappiamo i tuoi servizi, scriviamo contenuti chiari e lanciamo un sito che aiuta i clienti a trovarti e fidarsi di te.",
      startProject: "Inizia il tuo progetto",
      callNow: "Chiamaci ora",
      whatsapp: "Scrivici su WhatsApp",
      whatsappMessage: "Ciao! Vorrei un preventivo per il sito web della mia attività.",
      floatingWhatsapp: "Chatta su WhatsApp",
    },
    footer: "Creato per attività locali che vogliono crescere online.",
    languageLabel: "Lingua",
  },
  en: {
    nav: {
      services: "How it works",
      benefits: "Benefits",
      contact: "Contact",
    },
    hero: {
      badge: "Website solutions for physical businesses",
      title: "Bring your local business online with a website people trust.",
      description:
        "We help shops, clinics, restaurants, and service businesses launch modern websites that turn visitors into paying customers.",
      primaryCta: "Get a free website plan",
      secondaryCta: "See how it works",
    },
    featureHighlights: [
      {
        title: "Website live in days",
        description: "We take your physical business online quickly with clear milestones and constant progress updates.",
      },
      {
        title: "Built for real customers",
        description: "Fast pages, click-to-call, WhatsApp contact, and clear offers so people can reach you with zero friction.",
      },
      {
        title: "Simple monthly support",
        description: "Need updates or new offers? We manage everything so you can focus on serving your customers.",
      },
    ],
    services: {
      title: "How we build your online presence",
      description:
        "A clear 3-step process to launch your new website quickly, with strategy, design, and final optimization included.",
      cards: [
        {
          title: "We analyze your business needs",
          description:
            "We review your business type, target audience, and goals so your website supports real commercial results.",
        },
        {
          title: "We design your new online storefront",
          description:
            "We structure pages, messaging, and visual identity to present your services clearly and attract quality leads.",
        },
        {
          title: "We polish every detail and launch",
          description:
            "We refine text, visuals, and calls-to-action, then publish your site fully ready to receive new customer requests.",
        },
      ],
    },
    benefits: {
      title: "Why local businesses choose us",
      description: "Practical websites made for owners who want results, not complicated tech.",
      items: [
        {
          title: "Attract local customers online",
          description: "Show up professionally when people search for your business after seeing your shop or social profile.",
        },
        {
          title: "Convert visits into calls",
          description: "Clear call-to-actions guide visitors to contact you by phone, message, or form in one tap.",
        },
        {
          title: "Build trust instantly",
          description: "Modern design and clear service positioning help visitors choose your business with confidence.",
        },
        {
          title: "Own your online presence",
          description: "Get a dependable website foundation that grows as your business expands.",
        },
      ],
    },
    imageAlts: [
      "Business discovery and needs analysis session",
      "Website planning and wireframe design phase",
      "Final website launch and detail refinement",
    ],
    contact: {
      title: "Ready to take your business online?",
      description:
        "We map your services, write clear conversion content, and launch a website that helps customers find and trust your business.",
      startProject: "Start your project",
      callNow: "Call us now",
      whatsapp: "Message us on WhatsApp",
      whatsappMessage: "Hi! I would like a quote for my business website.",
      floatingWhatsapp: "Chat on WhatsApp",
    },
    footer: "Built for local businesses going digital.",
    languageLabel: "Language",
  },
  es: {
    nav: {
      services: "Cómo trabajamos",
      benefits: "Ventajas",
      contact: "Contacto",
    },
    hero: {
      badge: "Soluciones web para negocios físicos",
      title: "Lleva tu negocio local online con un sitio web que inspire confianza.",
      description:
        "Ayudamos a tiendas, clínicas, restaurantes y negocios de servicios a lanzar sitios modernos que convierten visitas en clientes.",
      primaryCta: "Solicita un plan gratuito",
      secondaryCta: "Ver cómo funciona",
    },
    featureHighlights: [
      {
        title: "Web activa en pocos días",
        description: "Llevamos tu negocio físico al mundo online rápidamente con hitos claros y seguimiento constante.",
      },
      {
        title: "Diseñado para clientes reales",
        description: "Páginas rápidas, click-to-call, contacto por WhatsApp y ofertas claras para facilitar el contacto.",
      },
      {
        title: "Soporte mensual simple",
        description: "¿Necesitas cambios o nuevas ofertas? Nosotros lo gestionamos para que tú te enfoques en tus clientes.",
      },
    ],
    services: {
      title: "Cómo creamos tu presencia online",
      description:
        "Seguimos 3 pasos claros para lanzar tu nueva web con estrategia, diseño profesional y detalles finales optimizados.",
      cards: [
        {
          title: "Analizamos lo que necesitas",
          description:
            "Estudiamos tu actividad, tus servicios y el tipo de cliente ideal para construir una base web realmente útil.",
        },
        {
          title: "Diseñamos tu nueva vitrina online",
          description:
            "Organizamos estructura, textos e imagen de marca para mostrar tu negocio de forma clara y convincente.",
        },
        {
          title: "Pulimos los detalles y lanzamos",
          description:
            "Ajustamos imágenes, mensajes y llamadas a la acción para publicar un sitio listo para generar contactos.",
        },
      ],
    },
    benefits: {
      title: "Por qué los negocios locales nos eligen",
      description: "Webs prácticas para dueños que buscan resultados, no complejidad técnica.",
      items: [
        {
          title: "Atrae clientes locales online",
          description: "Te presentas de forma profesional cuando te buscan después de ver tu tienda o tus redes.",
        },
        {
          title: "Convierte visitas en llamadas",
          description: "CTA claras guían a tus visitantes para contactarte por teléfono, mensaje o formulario.",
        },
        {
          title: "Genera confianza inmediata",
          description: "Un diseño moderno y una propuesta clara ayudan a que te elijan con seguridad.",
        },
        {
          title: "Controla tu presencia digital",
          description: "Obtienes una base web sólida que crece al ritmo de tu negocio.",
        },
      ],
    },
    imageAlts: [
      "Sesión inicial de análisis del negocio",
      "Fase de diseño de la nueva web del negocio",
      "Publicación final del sitio con últimos ajustes",
    ],
    contact: {
      title: "¿Listo para llevar tu negocio al mundo online?",
      description:
        "Mapeamos tus servicios, escribimos contenido claro y lanzamos una web que ayuda a tus clientes a encontrarte y confiar en ti.",
      startProject: "Empieza tu proyecto",
      callNow: "Llámanos ahora",
      whatsapp: "Escríbenos por WhatsApp",
      whatsappMessage: "¡Hola! Quiero un presupuesto para el sitio web de mi negocio.",
      floatingWhatsapp: "Chatea por WhatsApp",
    },
    footer: "Creado para negocios locales que quieren crecer online.",
    languageLabel: "Idioma",
  },
  fr: {
    nav: {
      services: "Notre méthode",
      benefits: "Avantages",
      contact: "Contact",
    },
    hero: {
      badge: "Solutions web pour entreprises locales",
      title: "Mettez votre activité en ligne avec un site qui inspire confiance.",
      description:
        "Nous aidons les commerces, cliniques, restaurants et services à lancer des sites modernes qui convertissent les visiteurs en clients.",
      primaryCta: "Demander un plan gratuit",
      secondaryCta: "Voir comment ça marche",
    },
    featureHighlights: [
      {
        title: "Site en ligne en quelques jours",
        description: "Nous mettons votre activité en ligne rapidement avec des étapes claires et un suivi continu.",
      },
      {
        title: "Pensé pour de vrais clients",
        description: "Pages rapides, click-to-call, contact WhatsApp et offres claires pour faciliter la prise de contact.",
      },
      {
        title: "Support mensuel simplifié",
        description: "Besoin de mises à jour ou de nouvelles offres ? Nous gérons tout pour vous.",
      },
    ],
    services: {
      title: "Comment nous créons votre vitrine en ligne",
      description:
        "Un processus simple en 3 étapes pour lancer un site professionnel, clair et orienté conversion.",
      cards: [
        {
          title: "Nous analysons vos besoins",
          description:
            "Nous étudions votre activité, vos services et vos objectifs pour créer une base digitale réellement efficace.",
        },
        {
          title: "Nous concevons votre nouvelle vitrine web",
          description:
            "Nous construisons la structure, les contenus et le design afin de présenter votre offre de façon convaincante.",
        },
        {
          title: "Nous finalisons chaque détail et publions",
          description:
            "Nous optimisons textes, visuels et appels à l'action avant de mettre en ligne un site prêt à générer des contacts.",
        },
      ],
    },
    benefits: {
      title: "Pourquoi les entreprises locales nous choisissent",
      description: "Des sites pratiques pour les dirigeants qui veulent des résultats, pas de complexité.",
      items: [
        {
          title: "Attirez des clients locaux",
          description: "Présentez-vous avec professionnalisme quand on vous recherche après avoir vu votre commerce.",
        },
        {
          title: "Transformez les visites en appels",
          description: "Des CTA clairs guident les visiteurs vers le téléphone, le message ou le formulaire.",
        },
        {
          title: "Instaurez la confiance rapidement",
          description: "Un design moderne et une offre claire renforcent la crédibilité de votre activité.",
        },
        {
          title: "Maîtrisez votre présence en ligne",
          description: "Vous obtenez une base web solide qui évolue avec votre entreprise.",
        },
      ],
    },
    imageAlts: [
      "Phase d'analyse des besoins de l'entreprise",
      "Étape de conception de la nouvelle vitrine en ligne",
      "Mise en ligne finale du site après optimisation",
    ],
    contact: {
      title: "Prêt à mettre votre activité en ligne ?",
      description:
        "Nous structurons vos services, écrivons des contenus clairs et lançons un site qui aide vos clients à vous trouver et vous faire confiance.",
      startProject: "Démarrer votre projet",
      callNow: "Appelez-nous",
      whatsapp: "Écrivez-nous sur WhatsApp",
      whatsappMessage: "Bonjour ! Je souhaite un devis pour le site web de mon activité.",
      floatingWhatsapp: "Chat WhatsApp",
    },
    footer: "Créé pour les entreprises locales qui passent au digital.",
    languageLabel: "Langue",
  },
  sv: {
    nav: {
      services: "Så arbetar vi",
      benefits: "Fördelar",
      contact: "Kontakt",
    },
    hero: {
      badge: "Webblösningar för lokala företag",
      title: "Ta ditt företag online med en webbplats som skapar förtroende.",
      description:
        "Vi hjälper butiker, kliniker, restauranger och serviceföretag att lansera moderna webbplatser som omvandlar besökare till kunder.",
      primaryCta: "Få en kostnadsfri webbplan",
      secondaryCta: "Se hur det fungerar",
    },
    featureHighlights: [
      {
        title: "Webbplats klar på några dagar",
        description: "Vi får ditt företag online snabbt med tydliga steg och löpande uppdateringar.",
      },
      {
        title: "Byggd för riktiga kunder",
        description: "Snabba sidor, klicka-för-att-ringa, WhatsApp-kontakt och tydliga erbjudanden.",
      },
      {
        title: "Enkel löpande support",
        description: "Behöver du uppdateringar eller nya erbjudanden? Vi sköter allt så att du kan fokusera på kunderna.",
      },
    ],
    services: {
      title: "Så bygger vi din nya online-vitrin",
      description:
        "En tydlig process i 3 steg för att skapa en professionell webbplats som lockar fler förfrågningar.",
      cards: [
        {
          title: "Vi analyserar vad du behöver",
          description:
            "Vi går igenom din verksamhet, målgrupp och mål för att skapa en lösning som faktiskt fungerar för dig.",
        },
        {
          title: "Vi designar din nya digitala skyltfönster",
          description:
            "Vi planerar struktur, innehåll och design så att dina tjänster presenteras tydligt och övertygande.",
        },
        {
          title: "Vi finjusterar detaljerna och lanserar",
          description:
            "Vi optimerar texter, bilder och call-to-actions och publicerar en webbplats som är redo att ta emot nya kunder.",
        },
      ],
    },
    benefits: {
      title: "Varför lokala företag väljer oss",
      description: "Praktiska webbplatser för företagare som vill ha resultat utan teknisk stress.",
      items: [
        {
          title: "Attrahera lokala kunder online",
          description: "Syns professionellt när människor söker efter ditt företag efter att ha sett butiken eller sociala medier.",
        },
        {
          title: "Förvandla besök till samtal",
          description: "Tydliga uppmaningar gör det enkelt att kontakta dig via telefon, meddelande eller formulär.",
        },
        {
          title: "Bygg förtroende direkt",
          description: "Modern design och tydlig positionering hjälper kunder att välja dig snabbare.",
        },
        {
          title: "Äg din digitala närvaro",
          description: "Du får en stabil webbbas som växer i takt med din verksamhet.",
        },
      ],
    },
    imageAlts: [
      "Inledande behovsanalys för verksamheten",
      "Planering och design av företagets webbplats",
      "Slutlig lansering efter sista justeringarna",
    ],
    contact: {
      title: "Redo att ta ditt företag online?",
      description:
        "Vi kartlägger dina tjänster, skriver tydligt innehåll och lanserar en webbplats som hjälper kunder att hitta och lita på dig.",
      startProject: "Starta ditt projekt",
      callNow: "Ring oss nu",
      whatsapp: "Skriv till oss på WhatsApp",
      whatsappMessage: "Hej! Jag vill få en offert för mitt företags webbplats.",
      floatingWhatsapp: "Chatta på WhatsApp",
    },
    footer: "Skapad för lokala företag som vill växa online.",
    languageLabel: "Språk",
  },
} as const

type LanguageCode = keyof typeof translations

function App() {
  const [language, setLanguage] = useState<LanguageCode>("it")
  const t = translations[language]
  const whatsappLink = `https://wa.me/10000000000?text=${encodeURIComponent(t.contact.whatsappMessage)}`

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <header className="relative isolate overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden="true">
          <video
            className="h-full w-full object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
          >
            <source
              src="https://videos.pexels.com/video-files/3184307/3184307-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="h-full w-full bg-gradient-to-br from-primary via-secondary to-background motion-safe:hidden" />
        </div>

        <div className="pointer-events-none absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />

        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="cursor-pointer text-lg font-bold tracking-wide text-foreground transition-colors duration-200 hover:text-accent"
          >
            AC3-Websites
          </a>

          <div className="flex items-center gap-3 sm:gap-4">
            <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
              <a href="#services" className="cursor-pointer transition-colors duration-200 hover:text-accent">
                {t.nav.services}
              </a>
              <a href="#benefits" className="cursor-pointer transition-colors duration-200 hover:text-accent">
                {t.nav.benefits}
              </a>
              <a href="#contact" className="cursor-pointer transition-colors duration-200 hover:text-accent">
                {t.nav.contact}
              </a>
            </nav>

            <label className="flex items-center gap-2 rounded-md border border-border bg-background/20 px-2 py-1 text-xs font-medium text-foreground">
              <span className="hidden sm:inline">{t.languageLabel}</span>
              <select
                className="h-8 cursor-pointer rounded bg-transparent px-1 text-sm text-foreground outline-none"
                value={language}
                onChange={(event) => setLanguage(event.target.value as LanguageCode)}
                aria-label={t.languageLabel}
              >
                <option value="it" className="text-black">
                  IT
                </option>
                <option value="en" className="text-black">
                  EN
                </option>
                <option value="es" className="text-black">
                  ES
                </option>
                <option value="fr" className="text-black">
                  FR
                </option>
                <option value="sv" className="text-black">
                  SV
                </option>
              </select>
            </label>
          </div>
        </div>

        <section id="top" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pt-20">
          <div className="max-w-3xl space-y-6">
            <p className="inline-flex rounded-full border border-accent/70 bg-accent/15 px-4 py-1 text-sm font-semibold text-accent">
              {t.hero.badge}
            </p>
            <h1 className="text-3xl font-bold leading-tight text-foreground [text-shadow:0_0_10px_rgba(248,250,252,0.22)] sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="max-w-2xl text-base text-slate-100/95 sm:text-lg">{t.hero.description}</p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button
                asChild
                className="h-11 cursor-pointer bg-accent px-6 font-semibold text-accent-foreground transition-colors duration-200 hover:bg-amber-400"
              >
                <a href="#contact">{t.hero.primaryCta}</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 cursor-pointer border-border bg-background/30 px-6 font-semibold text-foreground transition-colors duration-200 hover:bg-background/50"
              >
                <a href="#services">{t.hero.secondaryCta}</a>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.featureHighlights.map((item, index) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-xl border border-border bg-card/85 backdrop-blur-sm transition-colors duration-200 hover:border-accent/70"
              >
                <img
                  src={showcaseImages[index]}
                  alt={t.imageAlts[index]}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </header>

      <main>
        <section id="services" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t.services.title}</h2>
            <p className="text-muted-foreground">{t.services.description}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {t.services.cards.map((service, index) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-xl border border-border bg-card transition-colors duration-200 hover:border-accent/70"
              >
                <img
                  src={showcaseImages[index]}
                  alt={t.imageAlts[index]}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{`Step ${index + 1}`}</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="benefits" className="border-y border-border bg-card/35">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t.benefits.title}</h2>
              <p className="text-muted-foreground">{t.benefits.description}</p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {t.benefits.items.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-xl border border-border bg-background/75 p-6 transition-colors duration-200 hover:border-accent/70"
                >
                  <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-accent/40 bg-primary/50 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t.contact.title}</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-100/90 sm:text-base">{t.contact.description}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                className="h-11 cursor-pointer bg-accent px-6 font-semibold text-accent-foreground transition-colors duration-200 hover:bg-amber-400"
              >
                <a href="mailto:hello@ac3-websites.com">{t.contact.startProject}</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 cursor-pointer border-border bg-background/20 px-6 font-semibold text-foreground transition-colors duration-200 hover:bg-background/40"
              >
                <a href="tel:+10000000000">{t.contact.callNow}</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 cursor-pointer border-emerald-400/80 bg-emerald-500/10 px-6 font-semibold text-emerald-100 transition-colors duration-200 hover:bg-emerald-500/20"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  {t.contact.whatsapp}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.contact.whatsapp}
        className="fixed bottom-4 right-4 z-50 inline-flex h-12 items-center justify-center rounded-full bg-emerald-500 px-4 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:bottom-6 sm:right-6 sm:h-14 sm:px-5"
      >
        {t.contact.floatingWhatsapp}
      </a>

      <footer className="border-t border-border px-4 py-6 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
        © {new Date().getFullYear()} AC3-Websites. {t.footer}
      </footer>
    </div>
  )
}

export default App
