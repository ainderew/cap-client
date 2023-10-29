export const sizelist = ['Less than 10', '10 - 50', '51 - 500', 'More than 500']
export const industrylist = [
  'Restaurants and Food Service',
  'Retail Stores',
  'Health and Wellness',
  'Automotive',
  'Technology and Electronics',
  'Home and Garden',
  'Fashion and Apparel',
  'Arts and Crafts',
  'Real Estate',
  'Financial Services',
  'Entertainment and Media',
  'Education and Training',
  'Construction and Contracting',
  'Travel and Tourism',
  'Professional Services',
  'Manufacturing and Industrial',
  'Agriculture and Farming',
  'Non-Profit Organizations',
  'Hospitality and Lodging',
  'Legal and Law Services',
]
export function ConfigIndustry(labels: any[], color: any[], type: string) {
  return labels?.map((label: any, index: any) => ({
    key: index,
    hexColor: color[index],
    rgbaColor: [
      'rgba(0, 180, 255, 1)',
      'rgba(249, 217, 183, 0.2)',
      'rgba(240, 167, 160, 0.2)',
      'rgba(231, 119, 167, 0.2)',
      'rgba(162, 215, 198, 0.2)',
    ][index],
    label,
    type: type,
  }))
}
export const configIndustry = [
  {
    hexColor: '#0bb4ff',
    rgbaColor: '#0bb4ff',
    label: 'previous',
    type: 'line',
  },
  {
    hexColor: '#F9D9B7',
    rgbaColor: 'rgba(249, 217, 183, 0.2)',
    label: 'color1',
    type: 'line',
  },
  {
    hexColor: '#F0A7A0',
    rgbaColor: 'rgba(240, 167, 160, 0.2)',
    label: 'color2',
    type: 'line',
  },
  {
    hexColor: '#E777A7',
    rgbaColor: 'rgba(231, 119, 167, 0.2)',
    label: 'color3',
    type: 'line',
  },
  {
    hexColor: '#A2D7C6',
    rgbaColor: 'rgba(162, 215, 198, 0.2)',
    label: 'color4',
    type: 'line',
  },
  {
    hexColor: '#F4D06F',
    rgbaColor: 'rgba(244, 208, 111, 0.2)',
    label: 'color5',
    type: 'line',
  },
  {
    hexColor: '#FF7855',
    rgbaColor: 'rgba(255, 120, 85, 0.2)',
    label: 'color6',
    type: 'line',
  },
  {
    hexColor: '#FFE194',
    rgbaColor: 'rgba(255, 225, 148, 0.2)',
    label: 'color7',
    type: 'line',
  },
  {
    hexColor: '#70D6FF',
    rgbaColor: 'rgba(112, 214, 255, 0.2)',
    label: 'color8',
    type: 'line',
  },
  {
    hexColor: '#B76D68',
    rgbaColor: 'rgba(183, 109, 104, 0.2)',
    label: 'color9',
    type: 'line',
  },
  {
    hexColor: '#FFE7C6',
    rgbaColor: 'rgba(255, 231, 198, 0.2)',
    label: 'color10',
    type: 'line',
  },
  {
    hexColor: '#A7D7F0',
    rgbaColor: 'rgba(167, 215, 240, 0.2)',
    label: 'color11',
    type: 'line',
  },
  {
    hexColor: '#C8A1A1',
    rgbaColor: 'rgba(200, 161, 161, 0.2)',
    label: 'color12',
    type: 'line',
  },
  {
    hexColor: '#FFC3A0',
    rgbaColor: 'rgba(255, 195, 160, 0.2)',
    label: 'color13',
    type: 'line',
  },
  {
    hexColor: '#D9A0A0',
    rgbaColor: 'rgba(217, 160, 160, 0.2)',
    label: 'color14',
    type: 'line',
  },
  {
    hexColor: '#A07777',
    rgbaColor: 'rgba(160, 119, 119, 0.2)',
    label: 'color15',
    type: 'line',
  },
  {
    hexColor: '#E6F1ED',
    rgbaColor: 'rgba(230, 241, 237, 0.2)',
    label: 'color16',
    type: 'line',
  },
  {
    hexColor: '#BFD7EA',
    rgbaColor: 'rgba(191, 215, 234, 0.2)',
    label: 'color17',
    type: 'line',
  },
  {
    hexColor: '#A37C80',
    rgbaColor: 'rgba(163, 124, 128, 0.2)',
    label: 'color18',
    type: 'line',
  },
  {
    hexColor: '#FF9A8B',
    rgbaColor: 'rgba(255, 154, 139, 0.2)',
    label: 'color19',
    type: 'line',
  },
]

// Will be used later
// const textArray: string[] = ["restaurant", "resource", "caress", "reassure", "cores"];
// const resultArray: string[] = textArray.filter(text => text.includes("res"));
