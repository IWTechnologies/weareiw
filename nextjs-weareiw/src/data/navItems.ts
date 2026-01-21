export interface NavSubItem {
    label: string
    href: string
    isExternal?: boolean
}

export interface NavItem {
    label: string
    href: string
    submenu?: NavSubItem[]
    isExternal?: boolean
}


export const navItems: NavItem[] = [
    {
        label: "Products",
        href: "/products",
        submenu: [
            { label: "Partners", href: "/products#partners" },
            { label: "Featured POS Solutions", href: "/products#pos" },
            { label: "Sell Your POS/IT Assets", href: "/sell-form" },
            { 
                label: "Online Finance Tool",
                href: "https://www.cdf-solutions.com/iwt/finance",
                isExternal: true,
            },
        ],
    },
    {
        label: "Services",
        href: "/services",
        submenu: [
            { label: "Procurement", href: "/services/procurement" },
            { label: "Deployment", href: "/services/deployment" },
            { label: "Maintenance", href: "/services/maintenance" },
            { label: "Disposition", href: "/services/disposition" },
        ],
    },
    {
        label: "About",
        href: "/about",
        submenu: [
            { label: "Our Story", href: "/about/" },
            { label: "Our People", href: "/about#our-people" },
            { label: "Our Commitment", href: "/about#our-commitment" },
            { label: "Open Positions", href: "/about#open-positions" },
        ],
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Shop",
        href: "https://shop.weareiw.com/",
        isExternal: true,
    },
    {
        label: "Careers",
        href: "/careers",
    },
]