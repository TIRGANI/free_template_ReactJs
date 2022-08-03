// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'other',
    title: 'Spaces',
    caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'Entreprise',
            title: 'ACCES Entreprise',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'entreprise_offreService',
                    title: 'Offre de service',
                    type: 'item',
                    url: '/vue_entreprise_offre',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: false
                },
                {
                    id: 'entreprise_profileCondidat',
                    title: 'Profile Condidat',
                    type: 'item',
                    url: '/vue_entreprise_profileCandidat',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: false
                },
                {
                    id: 'entreprise_forfait',
                    title: 'Forfait',
                    type: 'item',
                    url: '/espace_entreprise',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'Candidat',
            title: 'ACCES Candidat',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'candidat_profile',
                    title: 'Profile',
                    type: 'item',
                    url: '/espace_candidat',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: false
                },
                {
                    id: 'candidat_offers',
                    title: 'Offers',
                    type: 'item',
                    url: '/espace_candidat',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'Recruteur',
            title: 'ACCES Recruteur',
            type: 'collapse',
            icon: icons.IconKey,
            children: [
                {
                    id: 'recruteur_profileCandidat',
                    title: 'Profil Candidats',
                    type: 'item',
                    url: '/espace_recruteur',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: false
                },
                {
                    id: 'recruteur_offers',
                    title: 'Offers',
                    type: 'item',
                    url: '/espace_recruteur',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: false
                },
                {
                    id: 'recruteur_forfait',
                    title: 'Forfait',
                    type: 'item',
                    url: '/espace_recruteur',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: false
                }
            ]
        },
        ,
        {
            id: 'Valideur',
            title: 'ACCES Valideur',
            type: 'collapse',
            icon: icons.IconKey,
            children: [
                {
                    id: 'valideur_index',
                    title: 'validation',
                    type: 'item',
                    url: '/espace_recruteur',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default other;
