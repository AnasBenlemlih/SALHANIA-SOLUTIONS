export const locales = ['fr', 'en'] as const;

export type Locale = (typeof locales)[number];
export type ServiceImageKey =
	| 'vending'
	| 'supplies'
	| 'workplace'
	| 'logistics'
	| 'businessServices';

export interface PageContent {
	skipLink: string;
	homeLabel: string;
	languageSelector: string;
	navigation: {
		label: string;
		services: string;
		commitments: string;
		contact: string;
		mobileContact: string;
	};
	hero: {
		eyebrow: string;
		title: string;
		tagline: string;
		description: string;
		servicesLink: string;
		contactLink: string;
	};
	introduction: {
		eyebrow: string;
		title: string;
		paragraphs: readonly string[];
	};
	services: {
		eyebrow: string;
		title: string;
		description: string;
		items: readonly {
			number: string;
			title: string;
			image: ServiceImageKey;
			imageAlt: string;
			offerings: readonly string[];
		}[];
	};
	commitments: {
		eyebrow: string;
		title: string;
		items: readonly {
			title: string;
			description: string;
		}[];
	};
	contact: {
		eyebrow: string;
		title: string;
		description: string;
	};
	footer: {
		role: string;
	};
	seo: {
		title: string;
		description: string;
	};
}

export const translations = {
	fr: {
		skipLink: 'Aller au contenu',
		homeLabel: 'SALHANIA SOLUTIONS, accueil',
		languageSelector: 'Sélecteur de langue',
		navigation: {
			label: 'Navigation principale',
			services: 'Nos services',
			commitments: 'Nos engagements',
			contact: 'Nous contacter',
			mobileContact: 'Contact',
		},
		hero: {
			eyebrow: 'Services et fournitures aux entreprises',
			title: 'Votre partenaire pour les services et solutions aux entreprises',
			tagline: 'Des solutions pratiques, un service fiable, un accompagnement sur mesure.',
			description:
				'SALHANIA SOLUTIONS accompagne les entreprises dans la gestion de leurs besoins opérationnels en proposant une gamme de services et de solutions adaptés à leur environnement professionnel.',
			servicesLink: 'Découvrir nos services',
			contactLink: 'Parlons de vos besoins',
		},
		introduction: {
			eyebrow: 'À vos côtés',
			title: 'Des solutions pour votre quotidien professionnel',
			paragraphs: [
				'De l’approvisionnement en consommables à l’installation de distributeurs automatiques, en passant par la fourniture d’équipements, la logistique et les services généraux, nous mettons notre réactivité et notre savoir-faire au service de nos clients.',
				'Notre ambition : simplifier votre quotidien professionnel grâce à un interlocuteur unique et des prestations flexibles.',
			],
		},
		services: {
			eyebrow: 'Notre accompagnement',
			title: 'Nos services',
			description:
				'Une gamme de services et de solutions pour répondre aux besoins opérationnels des entreprises.',
			items: [
				{
					number: '01',
					title: 'Distribution automatique',
					image: 'vending',
					imageAlt:
						'Distributeur de boissons et machine à café dans un espace de pause professionnel.',
					offerings: [
						'Mise à disposition et installation de distributeurs automatiques.',
						'Distributeurs de boissons chaudes et froides.',
						'Machines à café professionnelles.',
						'Approvisionnement en café, thé, boissons et consommables.',
						'Entretien, suivi et gestion des équipements.',
					],
				},
				{
					number: '02',
					title: 'Fournitures et consommables professionnels',
					image: 'supplies',
					imageAlt:
						'Fournitures de bureau et produits d’entretien disposés sur un espace de travail.',
					offerings: [
						'Fournitures de bureau et papeterie.',
						'Produits d’entretien et d’hygiène.',
						'Café, thé, sucre, lait et boissons.',
						'Consommables pour espaces de travail et salles de réunion.',
						'Petit équipement et accessoires professionnels.',
					],
				},
				{
					number: '03',
					title: 'Équipements et aménagement des espaces professionnels',
					image: 'workplace',
					imageAlt: 'Espace de pause professionnel aménagé avec mobilier et équipements.',
					offerings: [
						'Équipements pour cuisines et espaces de pause.',
						'Électroménager professionnel et équipements complémentaires.',
						'Mobilier de bureau et équipements collectifs.',
						'Solutions d’aménagement et d’approvisionnement.',
					],
				},
				{
					number: '04',
					title: 'Logistique et approvisionnement',
					image: 'logistics',
					imageAlt: 'Cartons rangés dans un espace logistique organisé.',
					offerings: [
						'Gestion des commandes et livraisons.',
						'Approvisionnement régulier ou ponctuel.',
						'Coordination des fournisseurs.',
						'Livraison sur site et gestion des besoins opérationnels.',
					],
				},
				{
					number: '05',
					title: 'Services généraux et prestations aux entreprises',
					image: 'businessServices',
					imageAlt: 'Salle de réunion préparée pour accueillir une rencontre professionnelle.',
					offerings: [
						'Assistance aux besoins quotidiens des entreprises.',
						'Organisation et coordination de prestations.',
						'Accompagnement logistique et événementiel.',
						'Recherche et mise en relation avec des prestataires spécialisés.',
					],
				},
			],
		},
		commitments: {
			eyebrow: 'Notre approche',
			title: 'Pourquoi choisir SALHANIA SOLUTIONS ?',
			items: [
				{
					title: 'Un interlocuteur unique',
					description: 'Une gestion simplifiée de vos différents besoins professionnels.',
				},
				{
					title: 'Des solutions flexibles',
					description:
						'Des prestations adaptées à la taille de votre entreprise et à vos contraintes.',
				},
				{
					title: 'Réactivité et proximité',
					description:
						'Un accompagnement personnalisé et une attention particulière portée à la qualité du service.',
				},
				{
					title: 'Une approche orientée résultats',
					description:
						'Des solutions concrètes pour faciliter votre organisation et améliorer votre environnement de travail.',
				},
			],
		},
		contact: {
			eyebrow: 'Contact',
			title: 'Parlons de vos besoins',
			description: 'Pour toute demande d’information, contactez SALHANIA SOLUTIONS.',
		},
		footer: {
			role: 'Président',
		},
		seo: {
			title: 'SALHANIA SOLUTIONS | Services et solutions aux entreprises',
			description:
				'SALHANIA SOLUTIONS accompagne les entreprises pour leurs besoins en distribution automatique, fournitures, équipements, logistique et services généraux.',
		},
	},
	en: {
		skipLink: 'Skip to content',
		homeLabel: 'SALHANIA SOLUTIONS, home',
		languageSelector: 'Language selector',
		navigation: {
			label: 'Main navigation',
			services: 'Our services',
			commitments: 'Our commitments',
			contact: 'Contact us',
			mobileContact: 'Contact',
		},
		hero: {
			eyebrow: 'Business services and supplies',
			title: 'Your partner for business services and solutions',
			tagline: 'Practical solutions, reliable service, tailored support.',
			description:
				'SALHANIA SOLUTIONS supports businesses with their operational needs through a range of services and solutions tailored to their professional environment.',
			servicesLink: 'Explore our services',
			contactLink: 'Let’s discuss your needs',
		},
		introduction: {
			eyebrow: 'By your side',
			title: 'Solutions for your day-to-day business needs',
			paragraphs: [
				'From supplying consumables and installing vending machines to providing equipment, logistics and general services, we put our responsiveness and expertise at our clients’ service.',
				'Our goal: make your working day easier with one point of contact and flexible services.',
			],
		},
		services: {
			eyebrow: 'How we support you',
			title: 'Our services',
			description:
				'A range of services and solutions to meet the operational needs of businesses.',
			items: [
				{
					number: '01',
					title: 'Vending services',
					image: 'vending',
					imageAlt: 'Drinks vending machine and coffee machine in a workplace break area.',
					offerings: [
						'Supply and installation of vending machines.',
						'Hot and cold drinks vending machines.',
						'Professional coffee machines.',
						'Supply of coffee, tea, drinks and consumables.',
						'Equipment maintenance, monitoring and management.',
					],
				},
				{
					number: '02',
					title: 'Business supplies and consumables',
					image: 'supplies',
					imageAlt: 'Office supplies and cleaning products arranged in a workspace.',
					offerings: [
						'Office supplies and stationery.',
						'Cleaning and hygiene products.',
						'Coffee, tea, sugar, milk and drinks.',
						'Consumables for workspaces and meeting rooms.',
						'Small equipment and professional accessories.',
					],
				},
				{
					number: '03',
					title: 'Workplace equipment and fit-out',
					image: 'workplace',
					imageAlt: 'Workplace break area fitted with furniture and equipment.',
					offerings: [
						'Equipment for kitchens and break areas.',
						'Professional appliances and supplementary equipment.',
						'Office furniture and shared equipment.',
						'Workplace fit-out and supply solutions.',
					],
				},
				{
					number: '04',
					title: 'Logistics and procurement',
					image: 'logistics',
					imageAlt: 'Boxes arranged in an organized logistics area.',
					offerings: [
						'Order and delivery management.',
						'Regular or one-off supply.',
						'Supplier coordination.',
						'On-site delivery and operational needs management.',
					],
				},
				{
					number: '05',
					title: 'Business support services',
					image: 'businessServices',
					imageAlt: 'Meeting room prepared for a business meeting.',
					offerings: [
						'Support with businesses’ day-to-day needs.',
						'Service organization and coordination.',
						'Logistics and event support.',
						'Finding and connecting clients with specialist providers.',
					],
				},
			],
		},
		commitments: {
			eyebrow: 'Our approach',
			title: 'Why choose SALHANIA SOLUTIONS?',
			items: [
				{
					title: 'One point of contact',
					description: 'Simplified management of your different business needs.',
				},
				{
					title: 'Flexible solutions',
					description: 'Services tailored to the size of your business and your constraints.',
				},
				{
					title: 'Responsive and local support',
					description:
						'Personalized support and a particular focus on service quality.',
				},
				{
					title: 'A results-focused approach',
					description:
						'Practical solutions to simplify your organization and improve your working environment.',
				},
			],
		},
		contact: {
			eyebrow: 'Contact',
			title: 'Let’s discuss your needs',
			description: 'For any enquiries, contact SALHANIA SOLUTIONS.',
		},
		footer: {
			role: 'Founder',
		},
		seo: {
			title: 'SALHANIA SOLUTIONS | Business Services and Solutions',
			description:
				'SALHANIA SOLUTIONS supports businesses with vending, supplies, equipment, logistics and general services.',
		},
	},
} satisfies Record<Locale, PageContent>;
