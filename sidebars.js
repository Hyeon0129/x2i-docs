/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [

    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: [
        'overview/tenstorrent_overview',
        'overview/tenstorrent_softwarestack',
        'overview/supportedmodels',
        'overview/model_updates',
      ],
    },



    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'gettingstarted/system-requirements',
        'gettingstarted/installation_guide',
      ],
    },


     {
      type: 'category',
      label: 'Tenstorrent SDKs',
      collapsed: false,
      items: [

        {
          type: 'category',
          label: 'TT-Metal',
          collapsed: false,
          
          items: [
            'tenstorrent-sdks/tt-metal/tt-metal-overview',
            'tenstorrent-sdks/tt-metal/tt-metal-installation',
            'tenstorrent-sdks/tt-metal/run-your-first-model',
          ],
        },



        {
          type: 'category',
          label: 'TT-Forge',
          collapsed: false,
          items: [
            'tenstorrent-sdks/tt-forge/tt-forge-overview',

            {
              type: 'doc',
              id : 'tenstorrent-sdks/tt-forge/tt-forge-fe-installation',
              label: 'Installing - TT-Forge-fe',
              customProps: {isNew: true},
            },
            
            {
              type: 'doc',
              id : 'tenstorrent-sdks/tt-forge/tt-torch-installation',
              label: 'Installing - TT-Torch',
              customProps: {isNew: true},
            },
            
            'tenstorrent-sdks/tt-forge/run-your-first-model',


          ],
        },
      ],
    },





    {
      type: 'category',
      label: 'Guide',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'LLM',
          collapsed: false,
          items: [
            'guide/llm/overview',
            'guide/llm/vllm_setup_guide',
          ],
        },
      ],
    },


    


     
  ],
};


export default sidebars;
