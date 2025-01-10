
export default {
    name: 'browseCard',
    title: 'Browse Card Section',
    type: 'document',
    fields: [
      {
        name: 'sectionTitle',
        title: 'Section Title',
        type: 'string',
      },
      {
        name: 'sectionSubtitle',
        title: 'Section Subtitle',
        type: 'string',
      },
      {
        name: 'cards',
        title: 'Cards',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Card Title',
                type: 'string',
              },
              {
                name: 'image',
                title: 'Card Image',
                type: 'image',
                options: { hotspot: true },
              },
            ],
          },
        ],
      },
    ],
  };
  