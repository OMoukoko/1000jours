import { IcomoonIcons } from "../components/base/icomoon.component";
import { NUMBER_OF_DAYS_NOTIF_REMINDER } from "./epdsConstants.constants";
import { epdsInformation } from "./epdsResultInformation.constants";

export default {
  accessibility: {
    array: "Tableau",
    articleCard: {
      description: "Description",
      title: "Titre de l'article",
    },
    articleToRead: "article à lire",
    articlesFilters: {
      activeFilter: "filtre actif",
      availableArticles: "articles disponibles",
    },
    close: "Fermer",
    closeMenu: "Fermer le menu",
    epds: {
      onTotalQuestion: "sur",
      question: "Question",
    },
    eventCard: {
      description: "Description",
      title: "Titre de l'événement",
    },
    illustrationProfile: "Illustration profil",
    logoApp: "Logo de l'application",
    logoRepubliqueFr: "Logo de la République française",
    step: "étape",
    subtitle: "Sous-Titre",
    tapForMoreInfo: "Appuyer deux fois pour avoir plus d'informations",
    title: "Titre",
    updateDate: "Modifier la date",
    version: "version.",
  },
  appName: "1000 premiers jours",
  aroundMe: {
    addressesListLabelEnd:
      "points d'intérêts qui correspondent à vos critères :",
    addressesListLabelStart: "Il y a",
    chooseFilter:
      "Veuillez choisir un au moins un élément dans le filtre afin de lancer la recherche",
    filter: {
      healthProfessional: "Professionnels de santé",
      steps: "Étapes du parcours 1000 jours",
      structures: "Structures",
      thematics: "Thématiques",
      title: "Filtrer",
    },
    goThere: "M'y rendre",
    instruction: "Renseignez le code postal de votre recherche.",
    noAddressFound: "Aucune adresse n'a été trouvée dans cette zone",
    pleaseAllowGeolocation:
      "Veuillez autoriser la géolocalisation dans les paramètres de votre téléphone",
    poiType: {
      bibliothequePublique: "Bibliothèque publique",
      caf: "CAF",
      cpam: "CPAM",
      infirmier: "Infirmier",
      mairie: "Mairie",
      maisonDeNaissance: "Maison de naissance",
      maternite: "Maternité",
      medecin: "Médecin",
      mediatheque: "Médiathèque",
      pediatre: "Pédiatre",
      planningFamilial: "Planning familial",
      pmi: "PMI",
      saad: "SAAD",
      sageFemme: "Sage-femme",
    },
    postalCodeInputPlaceholder: "Écrivez ici le code postal",
    postalCodeInvalid: "Le code postal que vous avez saisi n'est pas valide",
    postalCodeNotFound: "Le code postal que vous recherchez n'a pas été trouvé",
    relaunchSearch: "Relancer la recherche",
    searchButton: "Rechercher",
    submitNewFilter: {
      aboutYou: {
        numberOfChildren: "Nombre d'enfants",
        postalCode: "Votre code postal",
        postalCodePlaceholder: "Écrivez ici le code postal",
        title: "Parlez-nous de vous :",
      },
      instructions: [
        {
          instruction:
            "Quel(s) type(s) de lieu(x) aimeriez-vous voir sur la carte ? (mairie, Pôle Emploi, pédiatre, etc.)",
          placeholder: "Écrivez  ici le(s) lieu(x)",
        },
        {
          instruction:
            "Vous pouvez nous transmettre des suggestions d'amélioration pour la carte:",
          placeholder: "Écrivez ici vos idées d'amélioration",
        },
      ],
      title: "Proposer un lieu",
    },
    title: "Autour de moi",
  },
  article: {
    didYouKnowTitle: "Le saviez-vous ?",
    firstThreeMonths: {
      buttonLabel: "Commencer",
      description:
        "Se poser les bonnes questions pour en parler à un professionnel de santé, c’est l’objectif de cet outil.",
      title: "Et si c'était la dépression post-partum ?",
    },
    inShortTitle: "En bref :",
    learnMoreAboutIt: "En savoir plus à ce sujet :",
  },
  buttons: {
    back: "Retour",
    cancel: "Annuler",
    contact: "Contacter",
    finish: "Terminer",
    next: "Suivant",
    ok: "Ok",
    pass: "Passer",
    previous: "Précédent",
    start: "Commencer",
    validate: "Valider",
  },
  calendar: {
    description:
      "Grâce à la date de naissance que vous avez saisie, accédez à votre calendrier personnalisé et suivez chaque étape du parcours 1000 jours.",
    lastSyncDate: "Dernière synchro :",
    listOfEvents: "Liste des événements",
    noChildBirthday: "Aucune date de naissance",
    noEventMessage: "Aucun événement",
    notification: {
      redirectTitle: "Consulter",
      title: "Événement",
      titleReminder: "Événement à venir",
    },
    synchronise: "Synchroniser",
    today: "Aujourd'hui",
  },
  dateFormatLabel: "Jour / Mois / Année",
  epdsSurvey: {
    beContacted: {
      beContactedSent: "Votre demande de contact a bien été envoyée",
      button: "Être contacté(e)",
      invalidEmail: "L'email n'est pas valide",
      invalidPhoneNumber: "Le tél. n'est pas valide",
      mailsCanBeReceivedInSpams:
        "(*) Les mails peuvent se glisser dans vos spams ou être considérés comme indésirables. Pensez à vérifier votre boîte.",
      numberOfChildren: "Nombre d'enfants",
      title: "Être contacté(e)",
      yourEmail: "Votre email",
      yourFirstname: "Votre prénom",
      yourPhoneNumber: "Votre n° de tél. \nportable",
      yourPhoneNumberPlaceholder: "Votre n° de tél. portable",
    },
    description:
      "Vous venez d'avoir un bébé et nous aimerions savoir comment vous vous sentez.",
    genderEntry: {
      choices: {
        female: "Féminin",
        male: "Masculin",
        noInformation: "Je ne souhaite pas renseigner cette information",
        nonBinary: "Non-binaire",
      },
      instruction: "Veuillez renseigner votre genre",
      titleInformation: "Informations",
    },
    instruction:
      "Veuillez cocher la réponse qui vous semble décrire le mieux comment vous vous êtes senti(e) au cours des 7 derniers jours et pas seulement aujourd'hui.",
    mailContact: "1000joursblues@fabrique.social.gouv.fr",
    mailSubject: "1000 premiers jours",
    notification: {
      body: `${NUMBER_OF_DAYS_NOTIF_REMINDER} jours se sont écoulés depuis la dernière fois que vous avez passé le test EPDS. Vous pouvez maintenant le repasser si vous le souhaitez`,
      redirectTitle: "Passer le test",
      title: "Rappel EPDS",
    },
    onboarding: {
      paragraphs: [
        {
          boldIndexes: [],
          description:
            "Chaque année, en France, la dépression post partum concerne 100 000 femmes et 75 000 hommes.",
          title: "Constat",
        },
        {
          boldIndexes: [],
          description:
            "Se poser les bonnes questions en se basant sur des questions spécifiques pour détecter les risques qu’une dépression post partum soit présente.",
          title: "Objectif",
        },
        {
          boldIndexes: [],
          description:
            "Essayez de répondre à ces questions simples sur la façon dont vous vous êtes senti(e) durant la semaine passée.",
          title: "Comment",
        },
        {
          boldIndexes: [],
          description:
            "Il existe des questionnaires de dépistage d’utilisation simple. N’hésitez pas à en parler à votre sage-femme ou votre médecin, ils pourront faire le point avec vous.  Si vous souhaitez utiliser le questionnaire (EPDS), il est important qu’il se fasse en présence d’un professionnel de santé, qui est le seul à pouvoir poser un diagnostic.",
          title: "Informations",
        },
        {
          boldIndexes: [],
          description:
            "Bénéficier de soutien limite les facteurs de stress durant les premiers mois de bébé, douter, se sentir un peu seule, se sentir débordée est tout à fait commun. Oser en parler, c’est déjà prendre soin de soi et de son enfant. Des ressources et solutions existent pour vous accompagner.",
          title: "Recommandations",
        },
      ],
      reminder:
        "Ce questionnaire n'est pas un diagnostic et ne remplace pas un professionnel de la santé.",
      steps: {
        elements: [
          "Se questionner",
          "Accéder aux ressources",
          "Trouver une\naide adaptée",
          "Se questionner\nde nouveau",
        ],
        title: "Étapes",
      },
      title: "Dépression post partum, en parler c’est se soigner !",
    },
    previousSurvey: {
      continueButton: "Continuer",
      messsage:
        "Il semble que vous n'ayez pas terminé le précédent questionnaire. Voulez-vous le continuer ou le recommencer ?",
      startOverButton: "Recommencer",
    },
    restartSurvey: "Se questionner de nouveau",
    resultats: {
      call: "Appeler",
      entreDixEtDouze: {
        contacterNotrePartenaire:
          "Contacter notre partenaire composé par des volontaires ayant connu la difficulté maternelle, elles mettent leur expérience personnelle au service du collectif.",
        explication:
          "Il est possible que vous souffriez de problèmes liés à une dépression, mais ce n’est pas certain. N'hésitez pas à transmettre ces résultats ou à parler de votre ressenti actuel avec votre médecin ou le professionnel de santé qui suit votre grossesse. Il pourra poser un diagnostic plus précis. Vous pouvez également en parler à votre conjoint, des amis ou un membre de votre famille.",
        intervalle: "(10, 11, 12)",
        oserEnParler:
          "Oser en parler, c'est déjà prendre soin de soi et de son enfant !",
        professionalsList: [
          {
            paragraphs: [
              epdsInformation.entretienAupresProfessionnelSante,
              epdsInformation.pmiVeritableAllieParents,
              epdsInformation.reseauPerinatalSante,
            ],
            sectionIcon: IcomoonIcons.proSante,
            sectionTitle:
              "Les professionnels qui peuvent vous accompagner pour faire le point",
          },
          {
            paragraphs: [
              epdsInformation.servicesAidesAccompagnementDomicile,
              epdsInformation.laep,
              epdsInformation.associationsLocalesNationalesSoutienParentalite,
            ],
            sectionIcon: IcomoonIcons.entourage,
            sectionTitle:
              "Les ressources qui peuvent vous aider les premiers mois de l’enfant",
          },
          epdsInformation.sectionRessourcesNumeriquesBienEtMoinsBien,
        ],
        stateOfMind: "Je vais moins bien",
      },
      introduction: "Vous avez obtenu le score suivant : ",
      moinsDeNeuf: {
        explication:
          "Votre résultat est très rassurant au regard de la dépression. Mais, si vous en ressentez le besoin, vous pouvez consulter votre médecin traitant ou le professionnel qui suit votre grossesse pour faire le point sur votre état émotionnel. Si vous pensez que vous êtes une personne à risque de dépression, n’hésitez pas à refaire régulièrement ce test, en laissant au moins deux semaines entre chaque usage.",
        intervalle: "(9 ou moins)",
        professionalsList: [
          {
            paragraphs: [
              epdsInformation.entretienAupresProfessionnelSante,
              epdsInformation.pmiVeritableAllieParents,
              {
                title: "Les autres professionnels qui peuvent vous aider",
              },
              {
                title:
                  "Votre entourage peut se mobiliser pour vous aider : sagefemme, psychologue, infirmière puéricultrice",
              },
            ],
            sectionIcon: IcomoonIcons.proSante,
            sectionTitle:
              "Les professionnels qui peuvent vous accompagner pour faire le point",
          },
          epdsInformation.sectionRessourcesNumeriquesBienEtMoinsBien,
        ],
        stateOfMind: "Je vais bien",
      },
      plusDeTreize: {
        contacterNotrePartenaire:
          "Contacter notre partenaire composé par des volontaires ayant connu la difficulté maternelle, elles mettent leur expérience personnelle au service du collectif.",
        explication:
          "Votre score laisse penser que vous êtes en train de faire une dépression. Il faut consulter un professionnel de santé qui confirmera ou non, par un diagnostic. Si vous ne l’avez pas déjà fait, nous vous conseillons de consulter votre médecin (généraliste ou spécialiste) ou de contacter un professionnel de santé mentale afin de faire avec lui un bilan approfondi de votre état émotionnel et psychologique. Ce n’est pas une fatalité, la dépression peut être guérie grâce à un soutien de votre famille, de vos amis ou d’un professionnel de santé, ou par une psychothérapie ou d’autres moyens, comme une aide médicamenteuse...",
        intervalle: "(13 ou plus)",
        oserEnParler:
          "Oser en parler, c'est déjà prendre soin de soi et de son enfant !",
        professionalsList: [
          {
            paragraphs: [
              epdsInformation.entretienAupresProfessionnelSante,
              epdsInformation.pmiVeritableAllieParents,
              {
                title: "Les autres professionnels qui peuvent vous aider",
              },
              {
                title:
                  "Votre entourage peut se mobiliser pour vous aider : sagefemme, psychologue, infirmière puéricultrice",
              },
            ],
            sectionIcon: IcomoonIcons.proSante,
            sectionTitle:
              "Les professionnels qui peuvent vous accompagner pour faire le point",
          },
          epdsInformation.sectionRessourcesNumeriquesPasBien,
          {
            paragraphs: [
              epdsInformation.servicesAidesAccompagnementDomicile,
              epdsInformation.laep,
              epdsInformation.associationsLocalesNationalesSoutienParentalite,
            ],
            sectionIcon: IcomoonIcons.entourage,
            sectionTitle:
              "Les ressources qui peuvent vous aider les premiers mois de l’enfant",
          },
        ],
        stateOfMind: "Je ne vais pas bien",
      },
      retakeTestInvitation: `Nous vous invitons à vous questionner de nouveau dans les ${NUMBER_OF_DAYS_NOTIF_REMINDER} jours.`,
    },
    title: "Et si c'était une dépression post-partum ?",
    titleResults: "Résultat",
  },
  epdsSurveyLight: {
    oserEnParler:
      "Oser en parler, c'est déjà prendre soin de soi et de son enfant !",
    professionalsList: [
      {
        paragraphs: [
          {
            description:
              "N’hésitez pas à parler à vos proches, amis et famille, de vos sentiments et de vos craintes.",
            title: "Votre entourage peut se mobiliser pour vous aider :",
          },
          epdsInformation.entretienAupresProfessionnelSante,
          {
            description:
              "Centre d’informations, d’accompagnement, et d’orientation pour vous et votre enfant, à l’écoute des parents, les nombreux professionnels de santé pourront vous proposer une prise en charge complète.",
            title: "La PMI est un véritable allié pour les (futurs) parents :",
          },
          epdsInformation.reseauPerinatalSante,
          {
            description:
              "C’est un traitement à part entière de la dépression, efficace qui consiste à aider le couple, la mère ou le père à reprendre confiance en lui ou en eux, de s’adapter à l’arrivée de bébé et à son rythme de vie, de renforcer leurs compétences de parents tout facilitant la mise en œuvre d’un nouvel équilibre familial.  Un psychologue, un psychothérapeute ou un psychiatre sont les professionnels vers lesquels vous serez orienté. Ses premiers effets (un soulagement lié à une écoute adaptée) peuvent se faire sentir immédiatement, les changements durables interviennent au bout de quelques semaines. Après la guérison d’un épisode dépressif, la psychothérapie sert aussi à prévenir la réapparition des symptômes",
            pdfUrl: "https://solidarites-sante.gouv.fr/IMG/pdf/guide-8.pdf",
            title: "La psychothérapie",
          },
          {
            description:
              "L’utilisation d’antidépresseurs peut être discutée selon les cas. Le professionnel de santé vous conseillera sur les options disponibles si vous allaitez encore. L’objectif du traitement par médicaments antidépresseurs est la réduction significative des symptômes dépressifs et de leurs conséquences dans la vie quotidienne. Les médicaments antidépresseurs améliorent les symptômes de la dépression à l’issue d’environ 3 à 4 semaines de traitement continu. Ils aident généralement à restaurer le fonctionnement normal du sommeil, de l’appétit, à retrouver l’initiative, une perception positive de la vie… Ce fonctionnement normal persiste après l’arrêt du traitement.",
            title: "Les aides médicamenteuses",
          },
          {
            description:
              "Une aide à domicile permet aux parents de reprendre confiance en eux. Le soutien sur les aspects matériels ne sont donc pas à négliger, comme un soutien pour les tâches ménagères (recours à une aide-ménagère) et les soins au bébé (recours à une technicienne de l’intervention sociale et familiale – TISF), consulter le site de la CAF pour identifier les associations de services d’aide et d’accompagnement à domicile",
            pdfUrl:
              "https://www.perinatalite-occitanie.fr/sites/rpo/files/pdf/TROUBLES%20EMOTIONNELS%20ET%20PSYCHIQUES%20DES%20MERES%20EN%20P.pdf",
            title: "Les visites à domicile",
          },
          {
            description:
              "Le parent peut y être hospitalisé à temps complet ou juste pour la journée. Dans ces unités, une équipe pluridisciplinaire effectue un travail pour permettre au parent de reprendre confiance en lui, afin de soutenir le lien avec son enfant. Cette hospitalisation vise à développer du lien d’attachement avec le bébé, un besoin qui lui est essentiel.",
            title: "Les unités parents enfants",
          },
        ],
        sectionIcon: IcomoonIcons.proSante,
        sectionTitle: "Les professionnels de santé",
      },
      epdsInformation.sectionRessourcesNumeriquesPasBien,
      {
        paragraphs: [
          {
            description:
              "Devenir parents procure beaucoup de joie mais aussi des difficultés. N’hésitez pas à demander de l’aide à vos proches. Ils pourront vous accompagner vers des ressources dont vous avez besoin.",
            title: "L'aide de votre entourage :",
          },
          epdsInformation.servicesAidesAccompagnementDomicile,
          epdsInformation.laep,
          epdsInformation.associationsLocalesNationalesSoutienParentalite,
        ],
        sectionIcon: IcomoonIcons.entourage,
        sectionTitle: "Les ressources des premiers mois",
      },
      {
        paragraphs: [
          {
            description:
              "Si vous souhaitez disposer d’informations complémentaires sur ce sujet, contactez notre partenaire Maman Blues, une association de bénévoles qui met au service des parents, son expertise accumulée depuis plusieurs années sur la dépression post partum. Les conseils de l’association ne remplaceront jamais le conseil d’un professionnel de santé. Pour être accompagné, il est donc indispensable de prendre rendez-vous avec lui dans les meilleurs délais.",
            title: "Contacter",
          },
        ],
        sectionIcon: IcomoonIcons.telephone,
        sectionTitle: "Contacter",
      },
    ],
    stateOfMind: {
      entreDixEtQuartorze: "Je vais moins bien",
      moinsDeNeuf: "Je vais bien",
      plusDeQuinze: "Je ne vais pas bien",
    },
    textesExplication: {
      contactParElise:
        "Vous pouvez être contacté(e) par Élise, notre partenaire (association composée par des volontaires ayant connu la difficulté maternelle), afin de",
      contactParEliseBold: " trouver une aide adaptée autour de vous.",
      moinsDeNeuf:
        "Les changements importants liés à l’arrivée d’un bébé sont des facteurs de stress dont certains signes évocateurs sont normaux durant cette période. Parlez de vos difficultés des premiers mois est essentiel pour que le professionnel de santé qui vous suit puisse à tout moment vous accompagner. Des aides et un accompagnement peuvent être mis en place pour vous aider durant cette période qui nécessite du soutien. En parler avec un professionnel de santé et votre entourage, c’est se soigner. Parce que vous n’êtes pas seul(e) et qu’en parler a permis à de nombreux parents d’aller mieux.",
      plusDeNeuf:
        "Les changements importants liés à l’arrivée d’un bébé sont des facteurs de stress dont certains signes peuvent évoquer ceux de la dépression post partum. Vous exprimez des signes évocateurs de la dépression post partum, il est donc nécessaire de",
      plusDeNeufBold:
        " consulter le professionnel de santé qui vous suit pour échanger.",
    },
    titleLight: "Et si c'était une dépression post-partum ? Les ressources",
  },
  errorMsg: "Une erreur est survenue, merci de réessayer plus tard",
  errorNetworkMsg:
    "Vous êtes très nombreux à vous connecter en ce moment mais nous faisons tout notre possible pour que vous puissiez vous connecter rapidement. Nous vous invitons à vous reconnecter dans quelques minutes.",
  event: {
    matchingArticles: "Articles correspondants à l’événement",
    seeOnTheMap: "Voir sur la carte",
    title: "Événement",
  },
  invalidDate: "La date saisie n'est pas valide.",
  invalidLink: "Ce lien n'est pas valide.",
  listArticles: {
    articlesToRead: "article(s) à lire",
    filters: "Filtrer",
    resetFilters: "Réinitialiser",
  },
  mandatoryField: "Ce champ est obligatoire",
  menu: {
    accessibility: "Accessibilité",
    addReview: "Laisser un avis",
    conditionsOfUse: "Politiques de confidentialité",
    contactUs: "Nous écrire",
    legalNotice: "Mentions légales",
    myProfil: "Mon profil",
    title: "Menu",
  },
  notification: {
    openTheApp: "Ouverture de l'app",
  },
  onboarding: {
    screenNumber: "Écran n°",
    slidesText: [
      {
        description:
          "« 1000 premiers jours », c’est votre compagnon unique des 1000 premiers jours pour prendre soin de vous, votre famille et votre enfant. Tout au long du parcours et au moment où vous en avez besoin, l’application vous guide « pas à pas » pour vous accompagner au quotidien.",
        title: "Bienvenue sur l'application",
      },
      {
        description:
          "Des informations ciblées à chaque étape du parcours, des messages de santé publique actualisés, des contenus centralisés, et des services spécialement dédiés aux parents. Vous disposerez de l’ensemble des clefs pour devenir le parent que vous souhaitez.",
        title: "Trouver l'information",
      },
      {
        description:
          "Pour vous apporter la bonne information au bon moment, vous pouvez nous informer précisément du moment 1000 jours que vous vivez. Les 8 étapes du parcours « 1000 premiers jours » sont l’occasion de répondre précisément à votre besoin.",
        title: "Connaître les différentes étapes",
      },
    ],
  },
  profile: {
    childBirthday: {
      firstChild: "Date de naissance de votre enfant",
      lastChild: "Date de naissance de votre enfant le plus jeune",
      planned: "Naissance prévue de votre enfant",
    },
    situations: {
      oneChild: "J'ai un enfant",
      pregnant: "J'attends un enfant",
      pro: "Je suis un professionnel de santé",
      project: "J'ai en projet d'avoir un enfant",
      search: "Je cherche à concevoir un enfant",
      severalChildren: "J'ai plusieurs enfants",
    },
    subTitle: "- Votre profil -",
    title: "À quelle étape êtes-vous ?",
    update: "Modifier ma situation",
  },
  tabs: {
    aroundMeTitle: "Autour de moi",
    calendarTitle: "Calendrier",
    favoritesTitle: "Favoris",
    homeTitle: "Accueil",
    testEpds: "Post-partum",
  },
  timeline: {
    description:
      "Choisissez dans le parcours ci-dessous l’étape qui vous concerne ou vous intéresse. A chaque étape correspond des informations, recommandations et outils spécifiques pour mieux vous guider et vous accompagner.",
    library: {
      description:
        "Retrouvez ici les documents utiles pour l'ensemble des 1000 premiers jours.",
      download: "Télécharger",
      nom: "Parenthèque",
    },
    notification: {
      body: "Vous entrez dans une nouvelle étape du parcours 1000 jours : ",
      redirectTitle: "Modifier ma situation",
      title: "Votre situation a changé ?",
    },
    title: "Choisissez l'étape que vous souhaitez approfondir",
  },
  version: "v.",
  warning: "Attention",
};
