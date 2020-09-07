export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f55f10c72c945c9e6f31bf4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-i3sxxzup',
                  apiId: '77ac7489-55f4-4ba6-b72c-6e9b0e3154fd'
                },
                {
                  buildHookId: '5f55f10c72c945c1eef32052',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rcvpy17u',
                  apiId: '13dde5cd-5fd3-4931-867f-82c78f0cf7a8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/emiliogozo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-rcvpy17u.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
