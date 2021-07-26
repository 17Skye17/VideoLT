var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

var data = [{
    name: 'animal',
    itemStyle: {
        color: '#da0d68'
    },
    children: [{
        name: 'amphibians',
        value: 1,
        itemStyle: {
            color: '#975e6d'
        },
        children:[{
            name:'frog',
            value:1,
            itemStyle:{
                color:'#502727'
            }
        }]
    }, 
    {
        name: 'birds',
        value: 2,
        itemStyle: {
            color: '#e0719c'
        },
        children:[
            {name: "chicken",
        value: 0.1818,
        itemStyle: {
            color: '#e0719c'
        }},
    {name: "dove",
        value: 0.1818,
        itemStyle: {
            color: '#e0719c'
        }},
    {name: "duck",
        value: 0.1818,
        itemStyle: {
            color: '#e0719c'
        }},
    {name: "goose",
        value: 0.1818,
        itemStyle: {
            color: '#e0719c'
        }},
    {name: "hawk",
        value: 0.1818,
        itemStyle: {
            color: '#e0719c'
        }},
    {name: "ostrich",
        value: 0.1818,
        itemStyle: {
            color: '#e0719c'
        }},
    {name: "owl",
        value: 0.1818,
        itemStyle: {
            color: '#e0719c'
        }},
    {name: "parrot",
        value: 0.1818,
        itemStyle: {
            color: '#e0719c'
        }},
    {name: "peacock",
        value: 0.1818,
        itemStyle: {
            color: '#e0719c'
        }},
    {name: "penguin",
        value: 0.1818,
        itemStyle: {
            color: '#e0719c'
        }},
    {name: "woodpecker",
        value: 0.1818,
        itemStyle: {
            color: '#e0719c'
        }},
]
    },
    {
        name: 'fishes',
        value:2,
        itemStyle:{
            color: '#D6514F'
        },
        children:[{name: "goldfish",
        value:0.666,
        itemStyle:{
            color: '#D6514F'
        }},
    {name: "manta ray",
        value:0.666,
        itemStyle:{
            color: '#D6514F'
        }},
    {name: "shark",
        value:0.666,
        itemStyle:{
            color: '#D6514F'
        }},
]
    },
      {
          name: 'invertebrates',
          value:2,
          itemStyle:{
              color: '#C92822'
          },
          children:[{name: "bee",
          value:0.166,
          itemStyle:{
              color: '#C92822'
          }},
    {name: "butterfly",
          value:0.166,
          itemStyle:{
              color: '#C92822'
          }},
    {name: "crab",
          value:0.166,
          itemStyle:{
              color: '#C92822'
          }},
    {name: "earthworm",
          value:0.166,
          itemStyle:{
              color: '#C92822'
          }},
    {name: "jellyfish",
          value:0.166,
          itemStyle:{
              color: '#C92822'
          }},
    {name: "mantis",
          value:0.166,
          itemStyle:{
              color: '#C92822'
          }},
    {name: "mantis shrimp",
          value:0.166,
          itemStyle:{
              color: '#C92822'
          }},
    {name: "octopus",
          value:0.166,
          itemStyle:{
              color: '#C92822'
          }},
    {name: "sea horse",
          value:0.166,
          itemStyle:{
              color: '#C92822'
          }},
    {name: "sea star",
          value:0.166,
          itemStyle:{
              color: '#C92822'
          }},
    {name: "snail",
          value:0.166,
          itemStyle:{
              color: '#C92822'
          }},
    {name: "spider",
          value:0.166,
          itemStyle:{
              color: '#C92822'
          }},]
      },
      {
          name: 'mammals',
          value:2 ,
          itemStyle:{
              color: '#9D393A'
          },
          children:[{name: "alpaca",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "antelope",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "arctic fox",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "ass",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "bat",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "bear",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "beaver",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "camel",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "capybara",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "cat",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "chinchilla",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "cow",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "deer",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "dog",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "dolphin",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "elephant",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "ferret",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "fox",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "gibbon",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "giraffe",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "goat",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "gorilla",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "guinea pig",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "hamster",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "hedgehog",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "hippo",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "horse",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "kangaroo",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "koala",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "lemur",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "leopard",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "lion",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "manatee",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "monkey",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "panda",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "pangolin",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "pig",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "platypus",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "polar bear",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "rabbit",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "raccoon",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "rhinoceros",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "sea lion",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "sheep",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "squirrel",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "swan",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "tiger",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "walrus",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "wolf",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }},
    {name: "zebra",
          value:0.04 ,
          itemStyle:{
              color: '#9D393A'
          }}   
          ]
      },
      {
          name: 'reptiles',
          value:2,
          itemStyle:{
              color: '#BF3B4F'
          },
          children:[{
              name:'snake',
              value:1,
              itemStyle:{
                  color:'#CE4569'
              }
          },
          {
              name:'turtle',
              value:1,
              itemStyle:{
                  color:'#CF5F93'
              }
              
          }]
      }
    ]
}, {
    name: 'art',
    itemStyle: {
        color: '#da1d23'
    },
    children:[
        {
            name: 'acting',
            value: 2,
            itemStyle:
            {
                color: '#dd4c51'
            },
            children:[ {name: "acrobatics",
            value: 0.285,
            itemStyle:
            {
                color: '#dd4c51'
            }},
    {name: "dance drama",
            value: 0.285,
            itemStyle:
            {
                color: '#dd4c51'
            }},
    {name: "opera",
            value: 0.285,
            itemStyle:
            {
                color: '#dd4c51'
            }},
    {name: "pantomime",
            value: 0.285,
            itemStyle:
            {
                color: '#dd4c51'
            }},
    {name: "puppet show",
            value: 0.285,
            itemStyle:
            {
                color: '#dd4c51'
            }},
    {name: "shadow play",
            value: 0.285,
            itemStyle:
            {
                color: '#dd4c51'
            }},
    {name: "traditional opera",
            value: 0.285,
            itemStyle:
            {
                color: '#dd4c51'
            }}]
        },
        {
            name: 'dancing',
            value: 2,
            itemStyle:{
                color: '#c94a44'
            },
            children:[{name: "ballet",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "belly dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "conga dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "fan dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "fire dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "hip hop dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "hula dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "Indian dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "Latin dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "long sleeve dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "salsa dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "Scotland dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "square dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "step dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "sword dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "tango",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "umbrella dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "waltz dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "xinjiang dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "yangko",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }},
    {name: "zumba dance",
            value: 0.095,
            itemStyle:{
                color: '#c94a44'
            }}]
        },
        {
            name: 'painting',
            value: 2,
            itemStyle:{
                color: '#D63865'
            },
            children:[{name: "painting",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
    {name: "3D painting",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
    {name: "car painting",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
    {name: "crayon drawing",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
    {name: "doing graffiti",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
    {name: "face painting",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
    {name: "finger painting",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
    {name: "ink and wash painting",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
    {name: "oil painting",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
    {name: "pen painting",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
    {name: "pencil painting",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
    {name: "printmaking",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
    {name: "rock painting",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
    {name: "spray painting",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
    {name: "wall painting",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
    {name: "watercolour painting",
            value: 0.125,
            itemStyle:{
                color: '#D63865'
            }},
]
        },
        {
            name: 'design',
            value: 2,
            itemStyle:{
                color: '#f7a128'
            },
            children:[{name: "design",
            value: 0.1818,
            itemStyle:{
                color: '#f7a128'
            }},
    {name: "Chinese brush writing",
            value: 0.1818,
            itemStyle:{
                color: '#f7a128'
            }},
    {name: "making ceramic craft",
            value: 0.1818,
            itemStyle:{
                color: '#f7a128'
            }},
    {name: "metal design",
            value: 0.1818,
            itemStyle:{
                color: '#f7a128'
            }},
    {name: "paper cutting",
            value: 0.1818,
            itemStyle:{
                color: '#f7a128'
            }},
    {name: "pen calligraphy",
            value: 0.1818,
            itemStyle:{
                color: '#f7a128'
            }},
    {name: "photography",
            value: 0.1818,
            itemStyle:{
                color: '#f7a128'
            }},
    {name: "sand art",
            value: 0.1818,
            itemStyle:{
                color: '#f7a128'
            }},
    {name: "sculpting",
            value: 0.1818,
            itemStyle:{
                color: '#f7a128'
            }},
    {name: "wood burning",
            value: 0.1818,
            itemStyle:{
                color: '#f7a128'
            }},
    {name: "wood carving",
            value: 0.1818,
            itemStyle:{
                color: '#f7a128'
            }},]
        }]
}, {
    name: 'beauty \& fashion',
    itemStyle: {
        color: '#ebb40f'
    },
    children: [{
        name: 'beauty',
        value: 2,
        itemStyle: {
            color: '#e1c315'
        },
        children:[{name: "applying a wig",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }},
    {name: "applying consealer",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }},
    {name: "applying facial mask",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }},
    {name: "dyeing hair",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }},
    {name: "eye makeup",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }},
    {name: "eyebrow tattooing",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }},
    {name: "eyebrow threading",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }},
    {name: "eyelash grafting",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }},
    {name: "face massage",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }},
    {name: "face steaming ",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }},
    {name: "hairstyle design",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }},
    {name: "nail art design",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }},
    {name: "putting on a teeth retainer",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }},
    {name: "shaving legs",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }},
    {name: "tattooing",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }},
    {name: "wear lipstick",
        value: 0.125,
        itemStyle: {
            color: '#e1c315'
        }}]
    }, {
        name: 'fashion',
        value:2,
        itemStyle: {
            color: '#b09733'
        },
        children: [{name: "showing fashionable down jackets",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }},
    {name: "showing fashionable earrings",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }},
    {name: "showing fashionable full dresses",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }},
    {name: "showing fashionable glasses",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }},
    {name: "showing fashionable handbags",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }},
    {name: "showing fashionable hats",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }},
    {name: "showing fashionable high heels",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }},
    {name: "showing fashionable jackets",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }},
    {name: "showing fashionable jeans",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }},
    {name: "showing fashionable necklaces",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }},
    {name: "showing fashionable rings",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }},
    {name: "showing fashionable scarfs",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }},
    {name: "showing fashionable shirts",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }},
    {name: "showing fashionable skirts",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }},
    {name: "showing fashionable suits",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }},
    {name: "showing fashionable watches",
        value:0.125,
        itemStyle: {
            color: '#b09733'
        }}]
    }]
}, {
    name: 'cooking',
    itemStyle: {
        color: '#187a2f'
    },
    children: [{
        name:'alcoholic drinks',
        value:2,
        itemStyle:{
            color:'#418C26'
        },
        children:[
            {name: "making beer",
        value:1,
        itemStyle:{
            color:'#418C26'
        }},
     {name: "making cider",
        value:1,
        itemStyle:{
            color:'#418C26'
        }},
        ]
    },{
        name: 'staple food',
        value: 2,
        children:[
            {name: "cooking pasta",value:0.0909},
    {name: "cooking rice noodles",value:0.0909},
    {name: "making bread",value:0.0909},
    {name: "making burritos",value:0.0909},
    {name: "making chinese dumplings",value:0.0909},
    {name: "making congee",value:0.0909},
    {name: "making crepes",value:0.0909},
    {name: "making fried rice",value:0.0909},
    {name: "making hamburgers",value:0.0909},
    {name: "making hotdog",value:0.0909},
    {name: "making mooncakes",value:0.0909},
    {name: "making pancakes",value:0.0909},
    {name: "making pizza",value:0.0909},
    {name: "making potato cakes",value:0.0909},
    {name: "making rice dumplings",value:0.0909},
    {name: "making sandwich",value:0.0909},
    {name: "making spring rolls",value:0.0909},
    {name: "making steamed stuffed bun",value:0.0909},
    {name: "making sushi",value:0.0909},
    {name: "making tacos",value:0.0909},
    {name: "making toast",value:0.0909},
    {name: "making waffles",value:0.0909},
            ]
    },{
        name:'cuisines',
        value:2,
        itemStyle:{
            color:'#ABCF38'
        },
        children:[
            {name: "baking ham",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "barbecue",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "boiling fish",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "cooking an omelette",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "cooking bacon",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "cooking beef steak",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "cooking fried pork chop",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "cooking goose liver",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "cooking lemon chicken",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "cooking offal",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "cooking pork legs",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "cooking seafood",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "cooking tofu",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "frying eggplants",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "frying fish",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "frying mushroom",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "frying rice cake",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "making boiled eggs",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "making curry chicken",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "making fried chicken",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "making fried eggs",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "making hot pot",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "making mutton curry",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "making salad",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "making sashimi",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "making scrambled eggs",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "making skewers",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "making soup",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "making steamed egg",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "roasting fish",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "roasting peppers",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }},
    {name: "roasting turkey",
        value:0.0625,
        itemStyle:{
            color:'#ABCF38'
        }}
            ]
    },{
        name: 'soft drinks',
        value: 2,
        itemStyle: {
            color: '#a2b029'
        },
        children:[{
            name:'making coffee',
            value:0.1818,
            itemStyle:{
                color:'#418C26'
            }
            
        },{
            name:'making juice',
            value:0.1818,
            itemStyle:{
                color:'#418C26'
            }
            
        },
        {
            name:'making milk tea',
            value:0.1818,
            itemStyle:{
                color:'#418C26'
            }
            
        },
        {
            name:'making milk tea',
            value:0.1818,
            itemStyle:{
                color:'#418C26'
            }
            
        }
            ,{
            name:'making milkshakes',
            value:0.1818,
            itemStyle:{
                color:'#418C26'
            }
            
        },{
            name:'making mixed drinks',
            value:0.1818,
            itemStyle:{
                color:'#418C26'
            }
            
        },
        {
            name:'making sorbet',
            value:0.1818,
            itemStyle:{
                color:'#418C26'
            }
            
        }, {
            name:'making soybean milk',
            value:0.1818,
            itemStyle:{
                color:'#418C26'
            }
            
        }, {
            name:'making tea',
            value:0.1818,
            itemStyle:{
                color:'#418C26'
            }
            
        }, {
            name:'making yogurt',
            value:0.1818,
            itemStyle:{
                color:'#418C26'
            }
            
        },
        {
            name:'making lemonade',
            value:0.1818,
            itemStyle:{
                color:''
            }
        }]
    }, 
    {
        name: 'snacks',
        value:2,
        itemStyle:{
            color:'#9AB82E'
        },
        children:[{name: "cooking mashed potato",
        value:0.333,
        itemStyle:{
            color:'#9AB82E'
        }},
    {name: "making banana chips",
        value:0.333,
        itemStyle:{
            color:'#9AB82E'
        }},
    {name: "making cookies",
        value:0.333,
        itemStyle:{
            color:'#9AB82E'
        }},
    {name: "making french fries",
        value:0.333,
        itemStyle:{
            color:'#9AB82E'
        }},
    {name: "making popcorn",
        value:0.333,
        itemStyle:{
            color:'#9AB82E'
        }},
    {name: "roasting corn",
        value:0.333,
        itemStyle:{
            color:'#9AB82E'
        }},
]
    },
    {
        name: 'desserts',
        value:2,
        itemStyle:{
            color: '#41C246'
        },
        children:[{name: "making apple pie",
        value:0.25,
        itemStyle:{
            color: '#41C246'
        }},
    {name: "making candy apples",
        value:0.25,
        itemStyle:{
            color: '#41C246'
        }},
    {name: "making caramel",
        value:0.25,
        itemStyle:{
            color: '#41C246'
        }},
    {name: "making chocolate",
        value:0.25,
        itemStyle:{
            color: '#41C246'
        }},
    {name: "making donuts",
        value:0.25,
        itemStyle:{
            color: '#41C246'
        }},
    {name: "making cake",
        value:0.25,
        itemStyle:{
            color: '#41C246'
        }},
    {name: "making egg tarts",
        value:0.25,
        itemStyle:{
            color: '#41C246'
        }},
    {name: "making ice cream",
        value:0.25,
        itemStyle:{
            color: '#41C246'
        }},]
    },
    {
        name:'ingredients',
        value:2,
        itemStyle:{
            color: '#3ECFA4'
        },
        children:[{name: "cleaning fruits and vegetables",
        value:0.181,
        itemStyle:{
            color: '#3ECFA4'
        }},
    {name: "crushing garlic",
        value:0.181,
        itemStyle:{
            color: '#3ECFA4'
        }},
    {name: "curing meat",
        value:0.181,
        itemStyle:{
            color: '#3ECFA4'
        }},
    {name: "cutting fruits",
        value:0.181,
        itemStyle:{
            color: '#3ECFA4'
        }},
    {name: "making butter",
        value:0.181,
        itemStyle:{
            color: '#3ECFA4'
        }},
    {name: "making cheese",
        value:0.181,
        itemStyle:{
            color: '#3ECFA4'
        }},
    {name: "making noodles from scratch",
        value:0.181,
        itemStyle:{
            color: '#3ECFA4'
        }},
    {name: "making pickles",
        value:0.181,
        itemStyle:{
            color: '#3ECFA4'
        }},
    {name: "making sausage",
        value:0.181,
        itemStyle:{
            color: '#3ECFA4'
        }},
    {name: "making strawberry sauce",
        value:0.181,
        itemStyle:{
            color: '#3ECFA4'
        }},
    {name: "peeling onion",
        value:0.181,
        itemStyle:{
            color: '#3ECFA4'
        }},]
    }]
}, {
    name: 'diy',
    itemStyle: {
        color: '#0aa3b5'
    },
    children: [{
        name:'festival',
        value:2,
        itemStyle:{
            color:'#417B8F'
        },
        children:[
            {name: "carving a pumpkin",
        value:0.5,
        itemStyle:{
            color:'#417B8F'
        }},
    {name: "making festival cards",
        value:0.5,
        itemStyle:{
            color:'#417B8F'
        }},
    {name: "making halloween custumes",
        value:0.5,
        itemStyle:{
            color:'#417B8F'
        }},
    {name: "making masks",
        value:0.5,
        itemStyle:{
            color:'#417B8F'
        }},
            ]
    },
    {
        name:'toys',
        value:2,
        itemStyle:{
            color:'#5e777b'
        },
        children:[
            {name: "building a sandcastle",
        value:0.2,
        itemStyle:{
            color:'#5e777b'
        }},
    {name: "growing crystals",
        value:0.2,
        itemStyle:{
            color:'#5e777b'
        }},
    {name: "making a bottle rocket",
        value:0.2,
        itemStyle:{
            color:'#5e777b'
        }},
    {name: "making a leprechaun trap",
        value:0.2,
        itemStyle:{
            color:'#5e777b'
        }},
    {name: "making a paper puppet",
        value:0.2,
        itemStyle:{
            color:'#5e777b'
        }},
    {name: "making dolls",
        value:0.2,
        itemStyle:{
            color:'#5e777b'
        }},
    {name: "making kite",
        value:0.2,
        itemStyle:{
            color:'#5e777b'
        }},
    {name: "making model cars",
        value:0.2,
        itemStyle:{
            color:'#5e777b'
        }},
    {name: "making paper plane",
        value:0.2,
        itemStyle:{
            color:'#5e777b'
        }},
    {name: "making plasticine model",
        value:0.2,
        itemStyle:{
            color:'#5e777b'
        }},]
    },
    {
        name:'ornaments',
        value:2, 
        itemStyle:{
            color:'#9db2b7'
        },
        children:[
            {name: "arranging flowers",
        value:0.25, 
        itemStyle:{
            color:'#9db2b7'
        }},
    {name: "making a dream catcher",
        value:0.25, 
        itemStyle:{
            color:'#9db2b7'
        }},
    {name: "making a gift basket",
        value:0.25, 
        itemStyle:{
            color:'#9db2b7'
        }},
    {name: "making a wreath",
        value:0.25, 
        itemStyle:{
            color:'#9db2b7'
        }},
    {name: "making bouquets",
        value:0.25, 
        itemStyle:{
            color:'#9db2b7'
        }},
    {name: "making paper flowers",
        value:0.25, 
        itemStyle:{
            color:'#9db2b7'
        }},
    {name: "string art",
        value:0.25, 
        itemStyle:{
            color:'#9db2b7'
        }},
    {name: "wrapping the gift",
        value:0.25, 
        itemStyle:{
            color:'#9db2b7'
        }},
    ]
    }
    ,{
        name: 'jewelry',
        value: 2,
        itemStyle: {
            color: '#38A9CF'
        },
        children:[{name: "making a brooch",
        value: 0.285,
        itemStyle: {
            color: '#38A9CF'
        }},
    {name: "making a crown",
        value: 0.285,
        itemStyle: {
            color: '#38A9CF'
        }},
    {name: "making bracelets",
        value: 0.285,
        itemStyle: {
            color: '#38A9CF'
        }},
    {name: "making earrings",
        value: 0.285,
        itemStyle: {
            color: '#38A9CF'
        }},
    {name: "making hair pins",
        value: 0.285,
        itemStyle: {
            color: '#38A9CF'
        }},
    {name: "making necklaces",
        value: 0.285,
        itemStyle: {
            color: '#38A9CF'
        }},
    {name: "making rings",
        value: 0.285,
        itemStyle: {
            color: '#38A9CF'
        }},
]
    }, {
        name: 'commodity',
        value:2,
        itemStyle: {
            color: '#76c0cb'
        },
        children: [{name: "making a pot holder",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making bath bombs",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making a book cover",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making a calendar",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making a candle holder",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making a chair",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making a headboard",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making a key holder",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making a lamp",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making a mousepad",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making a notebook",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making a piggy bank",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making a pillow",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making a planter",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making a rubber stamp",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }
    },
    {name: "making a skirt",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making basket",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making bookmark",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making candle",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making curtains",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making gloves",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making pencil cases",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making phone cases",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making photo frame",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making rug",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making shoes",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making shorts",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making skin cream",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making soap",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making violin",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }},
    {name: "making wallet",
        value:0.0645,
        itemStyle: {
            color: '#76c0cb'
        }}]
    },
    {
        name: 'needlework',
        value:2,
        itemStyle:{
            color:'#2884B5'
        },
        children:[{name: "embroidery",
        value:0.333,
        itemStyle:{
            color:'#2884B5'
        }},
    {name: "knitting",
        value:0.333,
        itemStyle:{
            color:'#2884B5'
        }},
    {name: "making lace",
        value:0.333,
        itemStyle:{
            color:'#2884B5'
        }},
    {name: "sewing a button",
        value:0.333,
        itemStyle:{
            color:'#2884B5'
        }},
    {name: "tying a bow",
        value:0.333,
        itemStyle:{
            color:'#2884B5'
        }},
    {name: "tying a tie",
        value:0.333,
        itemStyle:{
            color:'#2884B5'
        }},]
    },
    {
        name: 'outdoor facilities',
        value:2,
        itemStyle:{
            color:'#38299E'
        },
        children:[{name: "building a fire pit",
        value:0.666,
        itemStyle:{
            color:'#38299E'
        }},
    {name: "building an outdoor bench",
        value:0.666,
        itemStyle:{
            color:'#38299E'
        }},
    {name: "pitching a tent",
        value:0.666,
        itemStyle:{
            color:'#38299E'
        }},]
    }]
}, {
    name: 'education \& tech',
    itemStyle: {
        color: '#c94930'
    },
    children: [{
        name: 'education',
        value: 2,
        itemStyle: {
            color: '#caa465'
        },
        children:[{name: "cleaning a whiteboard",
        value: 0.5,
        itemStyle: {
            color: '#caa465'
        }},
    {name: "doing chemistry experiments",
        value: 0.5,
        itemStyle: {
            color: '#caa465'
        }},
    {name: "oral quiz",
        value: 0.5,
        itemStyle: {
            color: '#caa465'
        }},
    {name: "writing on board",
        value: 0.5,
        itemStyle: {
            color: '#caa465'
        }},
]
    },   {
        name: 'tech',
        value: 2,
        itemStyle: {
            color: '#ddaf61'
        },
        children: [{name: "tech",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "3D printer",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "aircraft",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "airwheel",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "artificial limb",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "ATM",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "blood glucose meter",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "dishwasher",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "ebook reader",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "electric toothbrush",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "energy saving bulbs",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "fire extinguisher",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "GPS navigation device",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "head-mounted display",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "hearing aid",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "home theatre",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "humidifier",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "image scanner",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "industrial robot",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "infrared thermometer",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "laptop",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "Laser projection keyboard",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "maglev train",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "massage chair",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "microscope",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "motion sensing game",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "nebulizer",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "polaroid",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "PSP",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "safes",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "single lens reflex camera",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "smart bracelet",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "smart glasses",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "smart TV",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "smartpen",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "smartphone",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "smoke detector",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "sweeping robot",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "tablet PC",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "telescope",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "UAV",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "usb flash drive",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "vacuum cleaner",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "velometer",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "wind turbines",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }},
    {name: "wireless headphones",
        value: 0.0434,
        itemStyle: {
            color: '#ddaf61'
        }}]
    }]
}, {
    name: 'everydaylife',
    itemStyle: {
        color: '#ad213e'
    },
    children: [{
        name: 'activities',
        value:2,
        itemStyle: {
            color:'#794600'
        },
        children:[
            {name: "beach walking",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "blowing a soap bubble",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "blowing dry hair",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "blowing up a balloon",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "brushing teeth",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "charging",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "clapping hands",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "coin collecting",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "combing hair",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "crying",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "cutting nail",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "doll collectings",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "drinking beer",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "driving",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "eating popcorn",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "eating with chopsticks",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "escalator ride",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "fastening the seat belt",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "fuel filling",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "hacking a lighter",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "hair cutting",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "hugging",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "kissing",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "lacing shoes",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "making fire",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "mattress jumping",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "ordering food",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "parking cars",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "physical examination",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "playing water gun",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "putting on contact lenses",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "putting on shoes",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "screen printting",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "shaving beard",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "shell collecting",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "stamp collecting",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "taking makeup off",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "typing",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "using a wheelchair",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "vaccinating",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "vocal training",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "walking with a stick",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "walking with dog",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "washing face",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "washing feet",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "washing hair",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},
    {name: "washing hands",
        value:0.042,
        itemStyle: {
            color:'#794600'
        }},]
    },{
        name: 'family events',
        value: 2,
        itemStyle:{
            color:'#794634'
        },
        children:[
            {name: "birthday",
        value: 0.4,
        itemStyle:{
            color:'#794634'
        }},
    {name: "decorating christmas tree",
        value: 0.4,
        itemStyle:{
            color:'#794634'
        }},
    {name: "family dinner at home",
        value: 0.4,
        itemStyle:{
            color:'#794634'
        }},
    {name: "family night",
        value: 0.4,
        itemStyle:{
            color:'#794634'
        }},
    {name: "housewarming party",
        value: 0.4,
        itemStyle:{
            color:'#794634'
        }},]
    },{
        name: 'pets \& others',
        value: 2,
        itemStyle: {
            color: '#794752'
        },
        children:[ {name: "bathing dog",
        value: 0.166,
        itemStyle: {
            color: '#794752'
        }},
    {name: "cat taking a bath",
        value: 0.166,
        itemStyle: {
            color: '#794752'
        }},
    {name: "cat using litter box",
        value: 0.166,
        itemStyle: {
            color: '#794752'
        }},
    {name: "clicker training",
        value: 0.166,
        itemStyle: {
            color: '#794752'
        }},
    {name: "clock",
        value: 0.166,
        itemStyle: {
            color: '#794752'
        }},
    {name: "delicious food",
        value: 0.166,
        itemStyle: {
            color: '#794752'
        }},
    {name: "dog going up the stairs",
        value: 0.166,
        itemStyle: {
            color: '#794752'
        }},
    {name: "fireplace",
        value: 0.166,
        itemStyle: {
            color: '#794752'
        }},
    {name: "house plants",
        value: 0.166,
        itemStyle: {
            color: '#794752'
        }},
    {name: "tacking up a horse",
        value: 0.166,
        itemStyle: {
            color: '#794752'
        }},
    {name: "toy",
        value: 0.166,
        itemStyle: {
            color: '#794752'
        }},
    {name: "toy figures",
        value: 0.166,
        itemStyle: {
            color: '#794752'
        }},
]
    }, {
        name:'job position',
        value: 2,
        itemStyle:{
            color:'#793340'
        },
        children:[{name: "archaeologist",
        value: 0.25,
        itemStyle:{
            color:'#793340'
        }},
    {name: "astronaut",
        value: 0.25,
        itemStyle:{
            color:'#793340'
        }},
    {name: "bodyguard",
        value: 0.25,
        itemStyle:{
            color:'#793340'
        }},
    {name: "coach",
        value: 0.25,
        itemStyle:{
            color:'#793340'
        }},
    {name: "detective",
        value: 0.25,
        itemStyle:{
            color:'#793340'
        }},
    {name: "journalist",
        value: 0.25,
        itemStyle:{
            color:'#793340'
        }},
    {name: "machinist",
        value: 0.25,
        itemStyle:{
           color:'#793340'
        }},
    {name: "traffic policeman",
        value: 0.25,
        itemStyle:{
            color:'#793340'
        }},
]
    },
    {
        name:'kids',
        value: 2,
        itemStyle:{
            color:'#cc3d50'
        },
        children:[{name: "baby crawling",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "baby eating snack",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "baby learning to eat with spoon",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "baby sucking finger",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "calming a crying baby",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "changing a baby diaper",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "injection for kids",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "playground",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "kids fighting",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "kids getting dressed",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "kids making faces",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "kids playing doctor",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "kids playing on the slide",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "kids playing with blocks",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "kindergarten",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "playing on the seasaw",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "tricycle riding",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
    {name: "washing an infant",
        value: 0.111,
        itemStyle:{
            color:'#cc3d50'
        }},
        ]
    }
        ,{
        name: 'places',
        value: 2,
        itemStyle: {
            color: '#cc3d41'
        },
        children:[{name: "amusement park",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
    {name: "bookshop",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
    {name: "bridge",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
    {name: "canteen",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
    {name: "cathedral exterior",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
    {name: "classroom",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
    {name: "departure hall",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
    {name: "dormitory",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
    {name: "hotel",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
    {name: "internet cafe",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
    {name: "museum",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
    {name: "night market",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
    {name: "operating room",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
    {name: "pub",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
    {name: "shopping mall",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
    {name: "temple",
        value: 0.125,
        itemStyle: {
            color: '#cc3d41'
        }},
]
    }, {
        name: 'public events',
        value: 2,
        itemStyle: {
            color: '#b14d57'
        },
        children: [{name: "air crash",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "bearing the stretcher",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "begging for money",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "building construction",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "calligraphy exhibition",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "car accidents",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "car exhibition",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "car towing",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "cardiopulmonary resuscitation",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "cheerleading",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "circus animal performance",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "debate",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "digging out a car from snow",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "donating blood",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "emergency ambulance",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "exploding",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "fan meeting",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "fire fighting",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "fireworks show",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "first aid for chocking",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "flag raising",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "gold panning",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "hackathon",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "hosting a show",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "job fair",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "job interview",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "lion dancing",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "lumbering",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "marching band",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "medal presentation",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "military parade",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "military training",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "parade",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "press conference",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "public speech",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "road construction",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "shipwrecks",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "slipping on ice",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "snowplows",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "stealing",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "street fighting",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "swearing an oath",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "town hall meeting",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "traffic jam",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "trial court",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "vehicles crossing rivers",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "volunteer work",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }},
    {name: "wrapping a wound",
        value: 0.0416,
        itemStyle: {
            color: '#b14d57'
        }}]
    },
    {
        name: 'social events',
        value:2,
        itemStyle:{
            color:'#B53652'
        },
        children:[{name: "baby shower",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "bridal shower",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "camping",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "celebrating new year",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "christmas party",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "communicating with sign language",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "dining at restaurant",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "fancy dress party",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "farewell party",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "funeral",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "giving gifts",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "graduation",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "group banquet",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "halloween party",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "marriage proposal",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "opening celebration",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "picnic",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "sleepover party",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "tailgate party",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "tea party",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "team building activities",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "visiting grave",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "visiting patients",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "wedding ceremony",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "wedding dance",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "wedding photography",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "wedding reception",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
    {name: "welcome party",
        value:0.0714,
        itemStyle:{
            color:'#B53652'
        }},
]
        
    }]
}, {
    name: 'housework',
    itemStyle: {
        color: '#a87b64'
    },
    children: [{
        name: 'assembling',
        value:2,
        itemStyle: {
            color: '#c78869'
        },
        children: [ {name: "assembling a bike",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
    {name: "assembling a computer",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
    {name: "changing guitar strings",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
    {name: "changing brake pads",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
    {name: "changing oil",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
    {name: "changing tires",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
    {name: "fixing a chair",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
    {name: "fixing broken windows",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
    {name: "fixing leaks",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
    {name: "putting air in tires",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
    {name: "repairing a mobile",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
    {name: "repairing a refrigerator",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
    {name: "repairing a washer",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
    {name: "repairing a watch",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
    {name: "repairing musical instruments",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
    {name: "replacing ink cartridges",
        value:0.125,
        itemStyle: {
            color: '#c78869'
        }},
]
    }, {
        name: 'chores',
        value:2,
        itemStyle: {
            color: '#bb764c'
        },
        children: [{name: "applying a phone screen protector",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "carding wool",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "chopping wood",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "folding clothes",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "folding a napkin",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "hammering",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "ironing clothes",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "making the bed",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "opening a bottle",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "opening a can",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "operating a chainsaw",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "organizing cables",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "organizing shoes",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "packing boxes",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "polishing shoes",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "pouring concrete",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "removing mold",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "setting the table",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "sharpening a pencil",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "sharpening knives",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},
    {name: "using a fire steel",
        value:0.095,
        itemStyle: {
            color: '#bb764c'
        }},]
    },
    {
        name: 'cleaning',
        value:2,
        itemStyle:{
            color:'#B8893B'
        },
        children:[{name: "car washing",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning a bathroom",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning a bicycle",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning a chimney",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning a latop fan",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning a microwave oven",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning a monitor screen",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning a motorcycle",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning a silverware",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning a stove",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning a toilet",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning an air conditioner",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning carpet",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning closets",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning curtains",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning floor",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning glasses",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning jewelry",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning oil paint brushes",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning out closets",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning painted walls",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "cleaning windows",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "doing the laundry",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "shoveling snow",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "sidewalk sweeping",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "washing dishes",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }},
    {name: "washing shoes",
        value:0.074,
        itemStyle:{
            color:'#B8893B'
        }}]
    },
    {
        name: 'decorating',
        value:2,
        itemStyle:{
            color:'#A17733'
        },
        children:[{name: "assembling a crib",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "building a cabinet",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "building a fence",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "building a shed",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "building a table",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "building brick columns",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "building a pole barn",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "fitting tiles",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "framing a door",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "hanging a picture on the wall",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "hanging wallpaper",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "installing a bathtub",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "installing a ceiling",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "installing a garage door",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "installing a sink",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "installing a window",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "installing ceramic tile floor",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "installing curtain rods",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "installing floor heating",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "making a brick walkway",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "making a shelf",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "plastering",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "removing drywall",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "residential wiring",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "striping paint",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},
    {name: "mounting a TV",
        value:0.076,
        itemStyle:{
            color:'#A17733'
        }},]
    
    },
    {
        name:'farm work',
        value:2,
        itemStyle:{
            color:'#82602A'
        },
        children:[{name: "applying pesticides",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "beekeeping",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "building a greenhouse",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "cattle herding",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "fertilizing a garden",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "fruit tree pruning",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "grafting a tree",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "milking a cow",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "milking a goat",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "mowing",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "picking corns",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "picking fruits",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "planting a tree",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "plough",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "poultry farming",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "shearing a sheep",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "sheep herding",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "spreading mulch",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "transplanting rice seedlings",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "trimming garden plants",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
    {name: "watering a lawn",
        value:0.095,
        itemStyle:{
            color:'#82602A'
        }},
]
    }]
}, {
    name: 'leisure \& tricks',
    itemStyle: {
        color: '#e65832'
    },
    children: [{
        name: 'leisure',
        value:2,
        itemStyle: {
            color: '#EB4054'
        },
        children: [{name: "arm wrestling",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "bamboo rafting",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "banana riding",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "beach swimming",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "bull fighting",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "bumper cars",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "caber tossing",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "camel riding",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "camel wrestling",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "catching a crab",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "catching a frog in a pond",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "catching a squirrel",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "Chinese chess ",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "cock fighting",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "dog racing",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "elephant rides",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "fire balloon",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "flying kites",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "geocaching",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "hold breath challenge",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "horse racing",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "ice boating",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "ice bucket challenge",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "ice fishing",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "kicking shuttlecock",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "making snowman",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "paint balling",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "pig racing",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "pigeon racing",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "play a balloon prank",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "play puzzle",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "playing chess",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "playing craps",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "playing mahjong",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "playing with nun chucks",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "playing with remote controlled aircraft",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "playing with remote controlled cars",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "poker",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "ropes course",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "sledding",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "snow rafting",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "snow volleyball",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "snowball fight",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "tetherball",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "thumb wrestling",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "toe wrestling",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "tree climbing",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }},
    {name: "water filled balloon",
        value:0.041,
        itemStyle: {
            color: '#EB4054'
        }}
]
    }, {
        name: 'trick',
        value: 2,
        itemStyle: {
            color: '#EB7054'
        },
        children:[{name: "blowing fire",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "blowing bubblegum bubbles",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "butterfly knife tricks",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "card manipulation",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "cat's cradle",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "diabolo tricks",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "gasing",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "juggling balls",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "pen spinning",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "claw machine tricks",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "smoke tricks",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "soccer juggling",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "solving magic cube",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "spinning basketball",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "sport stacking",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "tying rope knots",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "unicycle tricks",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "walking on stilts",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "whistling with fingers",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "wirewalking",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},
    {name: "yoyo tricks",
        value: 0.095,
        itemStyle: {
            color: '#EB7054'
        }},]
    }]
},
{
    name: 'music',
    itemStyle: {
        color: '#C98538'
    },
     children: [{
        name: 'without instruments',
        value: 2,
        itemStyle: {
            color: '#DB9A47'
        },
         children:[{name: "a cappella",
            value: 0.25,
            itemStyle:{
                color:'#DB9A47'
            }},
    {name: "beatbox",
            value: 0.25,
            itemStyle:{
                color:'#DB9A47'
            }},
    {name: "chorus",
            value: 0.25,
            itemStyle:{
                color:'#DB9A47'
            }},
    {name: "rap music",
            value: 0.25,
            itemStyle:{
                color:'#DB9A47'
            }},
    {name: "singing in ktv",
            value: 0.25,
            itemStyle:{
                color:'#DB9A47'
            }},
    {name: "singing in studio",
            value: 0.25,
            itemStyle:{
                color:'#DB9A47'
            }},
    {name: "singing on stage",
            value: 0.25,
            itemStyle:{
                color:'#DB9A47'
            }},
    {name: "whistle",
            value: 0.25,
            itemStyle:{
                color:'#DB9A47'
            }},
]
     },
        {
            name: 'instruments',
            value: 2,
            itemStyle:{
                color:'#E79946'
            },
            children:[{name: "accordion performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "bagpipe performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "banjo performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "bass performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "blowing a conch shell",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "cello performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "chamber music",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "chime performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "Chinese flute performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "clarinet performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "cymbal performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "Daf performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "dhol performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "djing performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "drum performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "electronic organ performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "flute performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "French horn performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "guitar performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "handbell performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "harmonica performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "harp performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "maracas performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "oboe performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "pan flute performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "piano performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "pipa performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "rock band performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "saxophone performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "sitar performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "suona performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "symphony orchestra performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "tabla performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "triangle performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "trombone performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "trumpet performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "ukulele performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "violin performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "xun performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "xylophone performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }},
    {name: "zheng performance",
            value: 0.048,
            itemStyle:{
                color:'#E79946'
            }}]
            
        }]
},
{
    name:'nature',
    itemStyle:{
        color: '#D67F4F'
    },
    children: [{
        name: 'phenomenon',
        value: 2,
        itemStyle: {
            color: '#d45a59'
        },
        children:[{name: "aurora polaris",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "black cloud",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "debris flow",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "earthquake",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "falling tide",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "flood",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "fog",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "ice rain",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "iceberg collapse",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "lightning",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "lunar eclipse",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "rain weather",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "rainbow",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "sand storm",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "snow weather",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "solar eclipse",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "starry night sky",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "sunset",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "tornado",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "tsunami wave",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }},
    {name: "volcano eruption",
        value: 0.095,
        itemStyle: {
            color: '#d45a59'
        }}]
    },
        {
            name:'sceneries',
            value:2,
            itemStyle:{
                color:'#DB4432'
            },
            children:[{name: "bamboo forest",
            value:0.14,
            itemStyle:{
                color:'#DB4432'
            }},
    {name: "beach",
            value:0.14,
            itemStyle:{
                color:'#DB4432'
            }},
    {name: "canyon",
            value:0.14,
            itemStyle:{
                color:'#DB4432'
            }},
    {name: "desert",
            value:0.14,
            itemStyle:{
                color:'#DB4432'
            }},
    {name: "forest",
            value:0.14,
            itemStyle:{
                color:'#DB4432'
            }},
    {name: "glacier",
            value:0.14,
            itemStyle:{
                color:'#DB4432'
            }},
    {name: "hot spring",
            value:0.14,
            itemStyle:{
                color:'#DB4432'
            }},
    {name: "karst cave",
            value:0.14,
            itemStyle:{
                color:'#DB4432'
            }},
    {name: "lake",
            value:0.14,
            itemStyle:{
                color:'#DB4432'
            }},
    {name: "lavender garden",
            value:0.14,
            itemStyle:{
                color:'#DB4432'
            }},
    {name: "mountain",
            value:0.14,
            itemStyle:{
                color:'#DB4432'
            }},
    {name: "river",
            value:0.14,
            itemStyle:{
                color:'#DB4432'
            }},
    {name: "waterfall",
            value:0.14,
            itemStyle:{
                color:'#DB4432'
            }},
    {name: "wetland",
            value:0.14,
            itemStyle:{
                color:'#DB4432'
            }},]
        },]
        
},
{
    name:'sports',
    itemStyle:{
        color:'#8A007C'
    },
        children: [{
        name: 'extreme sports',
        value: 2,
        itemStyle: {
            color: '#D098F5'
        },
            children:[   {name: "bike tricks", value:0.125, itemStyle:{
                    color:'#D098F5'
                }},
    {name: "bridge jumping",  value:0.125, itemStyle:{
                    color:'#D098F5'
                }},
    {name: "bungee jumping",  value:0.125, itemStyle:{
                    color:'#D098F5'
                }},
    {name: "cliff diving", value:0.125, itemStyle:{
                    color:'#D098F5'
                }},
    {name: "dune bashing",value:0.125, itemStyle:{
                    color:'#D098F5'
                }},
    {name: "ice climbing",value:0.125, itemStyle:{
                    color:'#D098F5'
                }},
    {name: "kite surfing",value:0.125, itemStyle:{
                    color:'#D098F5'
                }},
    {name: "paragliding",value:0.125, itemStyle:{
                    color:'#D098F5'
                }},
    {name: "parkour",value:0.125, itemStyle:{
                    color:'#D098F5'
                }},
    {name: "rafting",value:0.125, itemStyle:{
                    color:'#D098F5'
                }},
    {name: "rock climbing",value:0.125, itemStyle:{
                    color:'#D098F5'
                }},
    {name: "skateboarding",value:0.125, itemStyle:{
                    color:'#D098F5'
                }},
    {name: "skydiving",value:0.125, itemStyle:{
                    color:'#D098F5'
                }},
    {name: "surfing",value:0.125, itemStyle:{
                    color:'#D098F5'
                }},
    {name: "trampoline dunk",value:0.125, itemStyle:{
                    color:'#D098F5'
                }},
    {name: "wingsuit flying",value:0.125, itemStyle:{
                    color:'#D098F5'
                }},]
        },
        {
            name:'health',
            value:2,
            itemStyle:{
                color:'#9900FF'
            },
            children:[{name: "back massage", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "barbell workout", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "body weight squats", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "dumbbell workout", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "eye exercises", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "gym ball", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "handstand", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "having acupuncture", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "head massage", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "hula hoop", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "jumping jack", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "leg massage", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "lunges", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "pull ups", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "punching bag workout", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "push ups", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "rehabilitation", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "riding stationary bicycle", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "rope skipping", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "sit ups", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "soak feet", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "tai chi chuan", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "tire workout", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "treadmill", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "wall pushup", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "warm up activities", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},
    {name: "yoga", value:0.074, itemStyle:{
                    color:'#9900FF'
                }},]
        },
        {
            name:'leisure sports',
            value:2,
            itemStyle:{
                color:'#7C00CF'
            },
            children:[{name: "beach football", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "beach volleyball", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "boating", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "bowling", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "capture the flag", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "Chinese jump rope", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "darts", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "disc golf", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "dodgeball", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "fishing", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "golfing", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "hide-and-seek", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "hiking", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "horse riding", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "hunting", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "landsailing", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "playing frisbee with dog", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "playing frisbee with people", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "roller skating", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "sandboarding", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
    {name: "snorkeling", value:0.095, itemStyle:{
                    color:'#7C00CF'
                }},
]
        },
        {
            name:'sports amateur',
            value:2,
            itemStyle:{
                color:'#A51CBD'
            },
            children:[{name: "american football", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "badminton", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "baseball", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "basketball", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "biking", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "billiard", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "cudgel", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "diving", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "ice skating", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "jousting", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "kendo", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "knife fighting", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "playing racquetball", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "shooting", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "shuffleboard", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "skiing", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "soccer", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "spearplay", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "sport aerobics", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "table tennis", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "tennis", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "trampoline jumping", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},
    {name: "tug of war", value:0.086, itemStyle:{
                    color:'#A51CBD'
                }},]
        },
        {
            name:'sports disabled',
            value:2,
            itemStyle:{
                color:'#A31895'
            },
            children:[
                {name: "disabled water skiing",value:0.333, itemStyle:{
                    color:'#A31895'
                }},
    {name: "wheelchair basketball",value:0.333, itemStyle:{
                    color:'#A31895'
                }},
    {name: "wheelchair fencing",value:0.333, itemStyle:{
                    color:'#A31895'
                }},
    {name: "wheelchair race",value:0.333, itemStyle:{
                    color:'#A31895'
                }},
    {name: "wheelchair softball",value:0.333, itemStyle:{
                    color:'#A31895'
                }},
    {name: "wheelchair tennis",value:0.333, itemStyle:{
                    color:'#A31895'
                }},]
        },
        {
            name:'sports professional',
            value:2,
            itemStyle:{
                color:'#DB87D2'
            },
            children:[{name: "american football",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "archery",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "backstroke",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "balance beam",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "basketball",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "baton twirling",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "boxing",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "breaststroke",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "butterfly stroke",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "car racing",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "cricket",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "fencing",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "front crawl",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "hammer throw",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "handball",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "high jump",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "horizontal bar",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "hurdling",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "ice dancing",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "ice hockey",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "javelin throw",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "jetski",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "judo",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "kayaking",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "long jump",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "marathon",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "martial arts",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "motocross",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "parallel bars",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "pole vault",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "polo",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "pommel horse",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "roller hockey",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "rope climbing",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "rowing",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "rugby",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "scuba diving",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "soccer",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "softball",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "speed walking",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "sports track",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "still rings",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "sumo wrestling",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "synchronized swimming",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "taekwondo",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "throw discus2",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "uneven bars",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "volleyball",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }},
    {name: "water polo",value:0.04, itemStyle:{
                    color:'#DB87D2'
                }}
]
        }
    ]
},
{
    name:'travel',
    itemStyle:{
        color:'#CC4B94'
    },
        children: [
        {
            name:'spots',
            value:2,
            itemStyle:{
                color:'#BE4DC7'
            },
            children:[
    {name: "Acropolis of Athens",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Angkor Wat",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "arch of triumph",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Big Ben",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Colosseum",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "egyptian pyramids",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "eiffel tower",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Empire State Building",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Great Golden Stupa",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "inside the oriental pearl tv tower",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Kolner Dom",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Leshan Giant Buddha",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Louvre",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Mount Rushmore National Memorial",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "outside the oriental pearl tv tower",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Potala Palace",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Rio de Jesus",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Stonehenge",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Sydney Opera House",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "taj mahal",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Terracotta Army",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "The Forbidden City",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "the great wall",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "the Leaning Tower of Pisa",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "the Palace of Versailles",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "the statue of liberty",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Tower Bridge",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Tower of London",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "Windsor Castle",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }},
    {name: "winery tour",
            value:0.066,
            itemStyle:{
                color:'#BE4DC7'
            }}]
        },
        {
            name:'transportations',
            value:2,
            itemStyle:{
                color:'#DB4EE6'
            },
            children:[
                {name: "cable car",
            value:0.133,
            itemStyle:{
                color:'#DB4EE6'
            }},
    {name: "carriage driving",
            value:0.133,
            itemStyle:{
                color:'#DB4EE6'
            }},
    {name: "cruise ship",
            value:0.133,
            itemStyle:{
                color:'#DB4EE6'
            }},
    {name: "duck tour",
            value:0.133,
            itemStyle:{
                color:'#DB4EE6'
            }},
    {name: "inside airplane",
            value:0.133,
            itemStyle:{
                color:'#DB4EE6'
            }},
    {name: "inside bus",
            value:0.133,
            itemStyle:{
                color:'#DB4EE6'
            }},
    {name: "outside airplane",
            value:0.133,
            itemStyle:{
                color:'#DB4EE6'
            }},
    {name: "outside bus",
            value:0.133,
            itemStyle:{
                color:'#DB4EE6'
            }},
    {name: "palanquin",
            value:0.133,
            itemStyle:{
                color:'#DB4EE6'
            }},
    {name: "rocket",
            value:0.133,
            itemStyle:{
                color:'#DB4EE6'
            }},
    {name: "submarine",
            value:0.133,
            itemStyle:{
                color:'#DB4EE6'
            }},
    {name: "taxi",
            value:0.133,
            itemStyle:{
                color:'#DB4EE6'
            }},
    {name: "train",
            value:0.133,
            itemStyle:{
                color:'#DB4EE6'
            }},
    {name: "underground subway",
            value:0.133,
            itemStyle:{
                color:'#DB4EE6'
            }},
    {name: "wind sailing",
            value:0.133,
            itemStyle:{
                color:'#DB4EE6'
            }},]
        }]
}];

option = {
    title: {

        textStyle: {
            fontSize: 14,
            align: 'center'
        },
        subtextStyle: {
            align: 'center'
        },
        sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/'
    },
    series: {
        type: 'sunburst',

        data: data,
        radius: [0, '95%'],
        sort: null,

        emphasis: {
            focus: 'ancestor'
        },

        levels: [{}, {
            r0: '15%',
            r: '40%',
            itemStyle: {
                borderWidth: 2
            },

        }, {
            r0: '40%',
            r: '70%',
            label: {
                align: 'right'
            },
            // nodeClick:false,
        }, {
            r0: '70%',
            r: '72%',
            label: {
                position: 'outside',
                padding: 3,
                silent: false
            },
            itemStyle: {
                borderWidth: 3,
            }
        }]
    }
};

option && myChart.setOption(option);