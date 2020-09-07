export default {
  widgets: [
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
                  buildHookId: '5f566c3a9894667d37b6e25c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-s5y6b4wy',
                  apiId: 'a8e6595e-6dbf-4771-958f-36a24f91f104'
                },
                {
                  buildHookId: '5f566c3a90670f0f535c4283',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-paxmc51n',
                  apiId: 'd0428c06-d9d4-4ec9-9190-019745a4e47f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sigginet/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-paxmc51n.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
