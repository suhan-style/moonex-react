const HeaderMenuList = [
    {
        navItem : 'Home',
        navLink : '/moonex-react'
    },
    {
        navItem : 'Portfolio',
        navLink : 'moonex-react/portfolio',
        children : [
            {
                navItem : 'Portfolio Type 1',
                navLink : 'moonex-react/portfolio-type-1'
            },
            {
                navItem : 'Portfolio Type 2',
                navLink : 'moonex-react/portfolio-type-2'
            }
        ]
    },
    {
        navItem : 'Coding Task',
        navLink : 'moonex-react/coding-task'
    },
    {
        navItem : 'Contact',
        navLink : 'moonex-react/contact'
    }
];

export default HeaderMenuList;