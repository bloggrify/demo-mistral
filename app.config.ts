export default defineAppConfig({
    logo: '/images/logo.svg',

    url: 'https://mistral.bloggrify.com/',

    theme: 'Mistral',

    // The name of the blog itself
    name: 'Bloggrify',
    avatar: '/images/avatar.jpg',
    // The description of the blog if any
    description:  'lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',

    analytics: {
        provider: 'pirsch',
        pirsch: {
            code: 'UMgcWhIpdgfYXWLqLmCesiKf6vpSZBfv'
        }
    },

    socials: {
        twitter: 'https://twitter.com',
        mastodon: 'https://piaille.fr',
        youtube: 'https://youtube.com',
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',

        // possible values : 'facebook', 'twitter', 'linkedin', 'email', 'pinterest', 'reddit', 'pocket', 'whatsapp', 'telegram', 'skype'
        // see https://github.com/stefanobartoletti/nuxt-social-share
        sharing_networks: ['facebook', 'twitter', 'linkedin', 'email', 'pinterest', 'reddit', 'pocket', 'whatsapp', 'telegram', 'skype']
    },

    newsletter: {
        enabled: true,
        form_action: 'rssfeedpulse',
        provider: 'https://rssfeedpulse.com/api/campaign/996539cf-73e4-47b5-8d7c-2d7450174467/subscribe'
    },

    comments: {
        enabled: true,
        hyvor_talk: {
            website_id: '10519', // Replace with your Hyvor Talk website ID (it won't work with this one)
        },
    },

    table_of_contents: false,

    // the list of authors
    // the default author will be used for all posts if no author is specified
    // and the mistral theme use the default author for the main page
    authors: [
        {
            username: 'hugo',
            default: true,
            name: 'Hugo Lassiège',
            description:
                'Main maintainer of Bloggrify',
            avatar: '/images/avatar.jpeg',
            socials: {
                twitter: 'https://twitter.com/hugolassiege',
                twitter_username: 'hugolassiege',
                mastodon: 'https://piaille.fr/@hugolassiege',
                youtube: 'https://youtube.com/@eventuallycoding',
                linkedin: 'https://www.linkedin.com/in/hugolassiege/',
                // facebook: 'https://facebook.com',
                // instagram: 'https://instagram.com',
                github: 'https://github.com/hlassiege',
            },
        },
    ],

    menu: () => [
        { name: 'Home', path: '/' },
        { name: 'Documentation', path: '/about' },
        { name: 'Archives', path: '/archives' },
    ],

    robots: [
        {
            UserAgent: '*',
            Allow: ['/'],
        },
    ],
})
