//Testing Purposes

import informedViewerImage from '../public/informedviewer.png'
import stepOutAndGo from '../public/stepoutgo.png'
import portfolio from '../public/portfolio.png'

const projects = [
    {
        title: 'Informed Viewer',
        description: 'Informed Viewer is a fullstack application built with MongoDB, Express, React, and Node. The app allows users search for and like or dislike YouTube videos.',
        image: informedViewerImage,
        link: 'https://classy-rugelach-71b903.netlify.app/',
        tags: ['NodeJS', 'Fullstack', 'MongoDB', 'React', 'RESTful'],
        id: 1,
    },
    {
        title: 'Step out and Go',
        description: 'Step out and Go is a travel blog built with Wordpress utlizing Elementor Pro.',
        image: stepOutAndGo,
        link: 'https://stepoutandgo.com',
        tags: ['Wordpress', 'Elementor', 'GraphQL', 'CMS', 'Blog'],
        id: 2
    },
    {
        title: 'My Portfolio',
        description: 'My porfolio website (which you are currently viewing) is a headless Wordpress site built with NextJS. This option is great if you want the familiarity of Wordpress CMS but want a completely custom layout.',
        image: portfolio,
        link: 'https://classy-rugelach-71b903.netlify.app/',
        tags: ['NextJS', 'React', 'Fullstack', 'Headless Wordpress', 'GraphQL'],
        id: 3
    },

]

export default projects