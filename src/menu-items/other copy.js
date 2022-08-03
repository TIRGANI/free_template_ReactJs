// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'CANDIDAT',
            title: 'ACCES CANDIDAT',
            type: 'item',
            url: '/espace_candidat',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'ENTREPRISE',
            title: 'ACCES ENTREPRISE',
            type: 'item',
            url: '/espace_entreprise',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'RECRUTEUR',
            title: 'ACCÈS RECRUTEUR',
            type: 'item',
            url: '/espace_recruteur',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        }
    ]
};

export default other;
