const categoriesData = [
  {
    categoryID: 0,
    data: [
      {
        id: 0,
        songImg: 'https://avatars.yandex.net/get-music-content/95061/4f3808a0.a.5307396-3/m1000x1000',
        songName: 'Группa крови',
        singer: 'КИНО',
        songAudio: '/audio/plus/Виктор Цой - Группа крови.mp3',
        description: 'Kino is one of the most popular Soviet rock bands of the 1980s. Viktor Tsoi invariably remained the leader and author of almost all lyrics and music, after whose death the collective, which had released more than a hundred songs on studio albums in nine years, ceased to exist.',
      },
      {
        id: 1,
        songImg: 'https://avatars.yandex.net/get-music-content/98892/2e55ba2b.a.61622-2/m1000x1000',
        songName: 'Take On Me',
        singer: 'A-ha',
        songAudio: '/audio/plus/a-ha - take on me.mp3',
        description: 'A-ha is a Norwegian synth-pop band formed in Oslo in 1982. Founded by Paul Waaktaar-Savoy (guitars), Magne Furuholmen (keyboards, guitars), and Morten Harket (vocals), the band rose to fame during the mid-1980s.',
      },
      {
        id: 2,
        songImg: 'https://avatars.yandex.net/get-music-content/49707/c35255ac.a.227551-1/m1000x1000',
        songName: 'Another One Bites The Dust',
        singer: 'Queen',
        songAudio: '/audio/plus/Queen - Another One Bites The Dust.mp3',
        description: 'Queen are a British rock band that formed in London in 1970. They are one of the most commercially successful music acts of all time, selling over 300 million records worldwide. The members were Freddie Mercury, Brian May, Roger Taylor, and John Deacon.',
      },
      {
        id: 3,
        songImg: 'https://avatars.yandex.net/get-music-content/149669/1c06a6dd.a.5803152-1/m1000x1000',
        songName: 'In The Army Now',
        singer: 'Status Quo',
        songAudio: '/audio/plus/Status Quo - In The Army Now.mp3',
        description: 'Status Quo are an English boogie rock band that formed in 1962. The group originated in The Spectres and was founded by Francis Rossi and Alan Lancaster, while they were still schoolboys.',
      },
      {
        id: 4,
        songImg: 'https://avatars.yandex.net/get-music-content/119639/ea30b115.a.67181-3/m1000x1000',
        songName: 'Billie Jean',
        singer: 'Michael Jackson',
        songAudio: '/audio/plus/Michael Jackson - Billie Jean.mp3',
        description: 'Michael Joseph Jackson was an American singer, songwriter, and dancer. Dubbed the "King of Pop", he is regarded as one of the most significant cultural figures of the 20th century and one of the greatest entertainers in the history of music.',
      },
      {
        id: 5,
        songImg: 'https://avatars.yandex.net/get-music-content/49876/ab1c08ed.a.2299184-1/m1000x1000',
        songName: 'Eye Of The Tiger',
        singer: 'Survivor',
        songAudio: '/audio/plus/Survivor - Eye Of The Tiger.mp3',
        description: 'Survivor is an American rock band, formed in Chicago in 1978 around Jim Peterik and Frankie Sullivan. The band achieved its greatest success in the 1980s, producing many charting singles, especially in the United States.',
      },
      {
        id: 6,
        songImg: 'https://avatars.yandex.net/get-music-content/49876/11e43a44.a.3777427-1/m1000x1000',
        songName: 'Died in Your Arms Tonight',
        singer: 'Cutting Crew',
        songAudio: '/audio/plus/Cutting Crew - (I Just) Died In Your Arms.mp3',
        description: 'Cutting Crew are an English rock band formed in London in 1985. They are best remembered for their debut album Broadcast and hit singles, "(I Just) Died in Your Arms", "Ive Been in Love Before", "One for the Mockingbird", and "Everything But My Pride".',
      },
      {
        id: 7 ,
        songImg: 'https://avatars.yandex.net/get-music-content/149669/1900276c.a.661801-1/m1000x1000',
        songName: 'Трава у дома',
        singer: 'Сергей Скачков',
        songAudio: '/audio/plus/Сергей Скачков - Трава у дома.mp3',
        description: 'Sergey Rostislavovich Skachkov (born April 19, 1956, Leningrad, USSR) is a Soviet and Russian rock musician, vocalist, keyboard player, composer, arranger, lead singer and frontman of the Zemlyane group.',
      }
    ]
  },
  {
    categoryID: 1,
    data: [
      {
        id: 9,
        songImg: 'https://avatars.yandex.net/get-music-content/41288/df5ca482.a.1936-2/m1000x1000',
        songName: 'My Favourite Game',
        singer: 'The Cardigans',
        songAudio: '/audio/plus/The Cardigans - My Favorite Game.mp3',
        description: 'Nirvana was an American rock band formed in Aberdeen, Washington, in 1987. Founded by lead singer and guitarist Kurt Cobain and bassist Krist Novoselic, the band went through a succession of drummers before recruiting Dave Grohl in 1990.',
      },
      {
        id: 10,
        songImg: 'https://avatars.yandex.net/get-music-content/32236/26735255.a.2390201-1/m1000x1000',
        songName: 'Californication',
        singer: 'Red Hot Chili Peppers',
        songAudio: '/audio/plus/Red Hot Chili Peppers - Californication.mp3',
        description: 'Red Hot Chili Peppers (commonly abbreviated as RHCP) are an American rock band formed in Los Angeles in 1983. Their music incorporates elements of alternative rock, funk, punk rock and psychedelic rock.',
      },
      {
        id: 11,
        songImg: 'https://avatars.yandex.net/get-music-content/143117/71becd03.a.5576245-1/m1000x1000',
        songName: 'Smells Like Teen Spirit',
        singer: 'Nirvana',
        songAudio: '/audio/plus/Nirvana - Smells Like Teen Spirit.mp3',
        description: 'Nirvana was an American rock band formed in Aberdeen, Washington, in 1987. Founded by lead singer and guitarist Kurt Cobain and bassist Krist Novoselic, the band went through a succession of drummers before recruiting Dave Grohl in 1990.',
      },
      {
        id: 12,
        songImg: 'https://avatars.yandex.net/get-music-content/34131/83f8a1ac.a.487550-1/m1000x1000',
        songName: 'Song 2',
        singer: 'Blur',
        songAudio: '/audio/plus/Blur - Song 2.mp3',
        description: 'Blur are an English alternative rock band. Formed in London in 1988 originally under the name Seymour, the group consists of singer Damon Albarn, guitarist Graham Coxon, bassist Alex James and drummer Dave Rowntree.',
      },
      {
        id: 13,
        songImg: 'https://avatars.yandex.net/get-music-content/2806365/bfe80838.a.89827-3/m1000x1000',
        songName: 'Zombie',
        singer: 'The Cranberries',
        songAudio: '/audio/plus/The Cranberries - Zombie.mp3',
        description: 'The Cranberries were an Irish rock band[2] formed in Limerick, Ireland, in 1989 by lead singer Niall Quinn, guitarist Noel Hogan, bassist Mike Hogan, and drummer Fergal Lawler.',
      },
      {
        id: 14,
        songImg: 'https://avatars.yandex.net/get-music-content/33216/e7d2965d.a.71504-1/m1000x1000',
        songName: 'Butterfly',
        singer: 'Crazy Town',
        songAudio: '/audio/plus/Crazy Town - Butterfly.mp3',
        description: 'Crazy Town (sometimes abbreviated as CXT) is an American rap rock band, formed in Los Angeles, California in 1995. Crazy Town is best known for their 2000 hit single, "Butterfly", which reached number one on the US Billboard Hot 100 chart.',
      },
      {
        id: 15,
        songImg: 'https://cdnimg.rg.ru/img/content/162/79/29/RIAN_185326.HR.ru_d_850.jpg',
        songName: 'Люби меня, люби',
        singer: 'Отпетые мошенники',
        songAudio: '/audio/plus/Отпетые Мошенники - Люби Меня, Люби.mp3',
        description: '"Отпетые мошенники" is a Russian pop group. The producer of the group is Evgeny Orlov. Over the years, the collective has recorded 7 albums.',
      },
      {
        id: 16,
        songImg: 'https://avatars.yandex.net/get-music-content/63210/87eafd0a.a.948624-1/m1000x1000',
        songName: 'Батарейка',
        singer: 'Жуки',
        songAudio: '/audio/plus/Жуки - Батарейка.mp3',
        description: '"Жуки" is a Soviet and Russian rock group founded in 1991. The founder and leader of the group is Valery Zhukov.',
      },
      {
        id: 17,
        songImg: 'https://avatars.yandex.net/get-music-content/41288/c8ad5f3f.a.60058-2/m1000x1000',
        songName: 'Выхода нет',
        singer: 'Сплин',
        songAudio: '/audio/plus/Сплин - Выхода Нет.mp3',
        description: '"Сплин" is a Russian rock band from St. Petersburg. The permanent leader is Alexander Vasiliev. The date of birth of the group is May 27, 1994.',
      }
    ]
  },
  {
    categoryID: 2,
    data: [
      {
        id: 18,
        songImg: 'https://avatars.yandex.net/get-music-content/142001/a92a262f.a.21940-7/m1000x1000',
        songName: 'Numb',
        singer: 'Linkin Park',
        songAudio: '/audio/plus/Linkin Park - Numb.mp3',
        description: 'Linkin Park is an American rock band from Agoura Hills, California. The bands current lineup comprises Mike Shinoda, Brad Delson, Dave Farrell, Joe Hahn and Rob Bourdon, all of whom are founding members.',
      },
      {
        id: 19,
        songImg: 'https://avatars.yandex.net/get-music-content/192707/8676a5d1.a.6681581-1/m1000x1000',
        songName: 'Seven Nation Army',
        singer: 'The White Stripes',
        songAudio: '/audio/plus/The White Stripes - Seven Nation Army.mp3',
        description: 'The White Stripes were an American rock duo formed in Detroit, Michigan, in 1997. The group consisted of Jack White and Meg White. After releasing several singles and three albums within the Detroit music scene, The White Stripes rose to prominence in 2002 as part of the garage rock revival scene.',
      },
      {
        id: 20,
        songImg: 'https://avatars.yandex.net/get-music-content/34131/21210334.a.2347459-1/m1000x1000',
        songName: 'Clint Eastwood',
        singer: 'Gorillaz',
        songAudio: '/audio/plus/Gorillaz - Clint Eastwood.mp3',
        description: 'Nirvana was an American rock band formed in Aberdeen, Washington, in 1987. Founded by lead singer and guitarist Kurt Cobain and bassist Krist Novoselic, the band went through a succession of drummers before recruiting Dave Grohl in 1990.',
      },
      {
        id: 21,
        songImg: 'https://avatars.yandex.net/get-music-content/3226792/12613a5b.a.88089-2/m1000x1000',
        songName: 'Stronger',
        singer: 'Kanye West',
        songAudio: '/audio/plus/Kanye West - Stronger.mp3',
        description: 'Kanye Omari West is an American rapper, producer, and fashion designer.Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.',
      },
      {
        id: 22,
        songImg: 'https://avatars.yandex.net/get-music-content/38044/ced4e882.a.3109-1/m1000x1000',
        songName: 'Feel Good Inc.',
        singer: 'Gorillaz, Jamie Hewlett, De La Soul',
        songAudio: '/audio/plus/Gorillaz feat. De La Soul - Feel Good Inc.mp3',
        description: 'Gorillaz are a British virtual band created in 1998 by musician Damon Albarn and artist Jamie Hewlett. The band primarily consists of four animated members: Stuart "2-D" Pot, Murdoc Niccals, Noodle, and Russel Hobbs.',
      },
      {
        id: 23,
        songImg: 'https://m.media-amazon.com/images/I/81RgehdSm8L._SS500_.jpg',
        songName: 'Boulevard of Broken Dreams',
        singer: 'Green Day',
        songAudio: '/audio/plus/Green Day - Boulevard of Broken Dreams.mp3',
        description: 'Green Day is an American rock band formed in the East Bay of California in 1987 by lead vocalist and guitarist Billie Joe Armstrong and bassist and backing vocalist Mike Dirnt.',
      },
      {
        id: 24,
        songImg: 'https://avatars.yandex.net/get-music-content/149669/7b328816.a.7886116-1/m1000x1000',
        songName: 'In The Shadows',
        singer: 'The Rasmus',
        songAudio: '/audio/plus/The Rasmus - In The Shadows.mp3',
        description: 'The Rasmus is a Finnish rock band that formed in 1994 in Helsinki while the band members were in upper comprehensive school. The original band members were Lauri Ylönen, Eero Heinonen, Pauli Rantasalm and Jarno Lahti. ',
      },
      {
        id: 25,
        songImg: 'https://avatars.yandex.net/get-music-content/49876/ad96e14a.a.2874-1/m1000x1000',
        songName: 'Behind Blue Eyes',
        singer: 'Limp Bizkit',
        songAudio: '/audio/plus/Limp Bizkit - Behind Blue Eyes.mp3',
        description: 'Limp Bizkit is an American rap rock band from Jacksonville, Florida. Their lineup consists of Fred Durst (lead vocals), Sam Rivers (bass, backing vocals), John Otto (drums, percussion), DJ Lethal (turntables), and Wes Borland (guitars, vocals). ',
      },
      {
        id: 26,
        songImg: 'https://avatars.yandex.net/get-music-content/34131/6fd4311d.a.4846-2/m1000x1000',
        songName: 'Mockingbird',
        singer: 'Eminem',
        songAudio: '/audio/plus/Eminem - Mockingbird.mp3',
        description: 'Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter, and record producer. Credited with popularizing hip hop in Middle America.',
      }
    ]
  },
  {
    categoryID: 3,
    data: [
      {
        id: 27,
        songImg: 'https://avatars.yandex.net/get-music-content/103235/b4090198.a.6858756-1/m1000x1000',
        songName: 'Siren Song',
        singer: 'MARUV',
        songAudio: '/audio/plus/Maruv - Siren Song.mp3',
        description:'MARUV is a Ukrainian singer, composer, poetess and producer. Lives in Kiev. Music directions: pop, electronic music. Performs solo since 2018.',
      },
      {
        id: 28,
        songImg: 'https://avatars.yandex.net/get-music-content/1880735/3363b536.a.9095707-1/m1000x1000',
        songName: 'Leave a Light On',
        singer: 'Tom Walker',
        songAudio: '/audio/plus/tom-walker-leave-a-light-on.mp3',
        description:'Thomas Alexander Walker is a British singer-songwriter. He was trained at the stage school London College of Creative Media, and was given a contract soon after.',
      },
      {
        id: 29,
        songImg: 'https://avatars.yandex.net/get-music-content/49707/b74e65a6.a.440668-1/m1000x1000',
        songName: 'Too Close',
        singer: 'Alex Clare',
        songAudio: '/audio/plus/Alex Clare - Too Close.mp3',
        description:'Alexander George Clare is an English singer and songwriter. His debut album, The Lateness of the Hour, was released in the UK on 11 July 2011 on Island Records and was produced by Mike Spencer and Major Lazer.',
      },
      {
        id: 30,
        songImg: 'https://avatars.yandex.net/get-music-content/38044/dd445ed3.a.68299-1/m1000x1000',
        songName: 'Love The Way You Lie',
        singer: 'Eminem, Rihanna',
        songAudio: '/audio/plus/eminem_and_rihanna-love_the_way_you_lie.mp3',
        description:'"Love the Way You Lie" is a song recorded by the American rapper Eminem, featuring the Barbadian singer Rihanna, from Eminems seventh studio album Recovery (2010). The singer and songwriter Skylar Grey wrote and recorded a demo of the song alongside the producer Alex da Kid when she felt she was in an abusive romantic relationship with the music industry.',
      },
      {
        id: 31,
        songImg: 'https://avatars.yandex.net/get-music-content/99892/0a911a32.a.7190880-1/m1000x1000',
        songName: 'bad guy',
        singer: 'Billie Eilish',
        songAudio: '/audio/plus/Billie Eilish - bad guy.mp3',
        description:'Billie Eilish Pirate Baird O Connell, known professionally as only "Billie Eilish", is an American singer and songwriter. She first gained attention in 2015 when she uploaded the song "Ocean Eyes" to SoundCloud, which was subsequently released by the Interscope Records subsidiary Darkroom.',
      },
      {
        id: 32,
        songImg: 'https://avatars.yandex.net/get-music-content/28589/aba9e76b.a.1597165-1/m1000x1000',
        songName: 'Radioactive',
        singer: 'Imagine Dragons',
        songAudio: '/audio/plus/Imagine Dragons feat. Kendrick Lamar - Radioactive.mp3',
        description:'Imagine Dragons is an American pop rock band from Las Vegas, Nevada, consisting of lead singer Dan Reynolds, lead guitarist Wayne Sermon, bassist Ben McKee, and drummer Daniel Platzman.',
      },
      {
        id: 33,
        songImg: 'https://avatars.yandex.net/get-music-content/32236/0719cba3.a.2747498-1/m1000x1000',
        songName: 'Stressed Out',
        singer: 'twenty one pilots',
        songAudio: '/audio/plus/Twenty One Pilots - Stressed Out.mp3',
        description:'Twenty One Pilots (stylized in all lowercase or as twenty øne piløts) is an American musical duo from Columbus, Ohio. The band was formed in 2009 by lead vocalist Tyler Joseph along with Nick Thomas and Chris Salih, both of whom left in 2011.',
      },
      {
        id: 34,
        songImg: 'https://avatars.yandex.net/get-music-content/163479/e72c2751.a.625175-2/m1000x1000',
        songName: 'Summertime Sadness',
        singer: 'Lana Del Rey',
        songAudio: '/audio/plus/Lana Del Rey - Summertime Sadness.mp3',
        description:'Elizabeth Woolridge Grant, known by her stage name Lana Del Rey, is an American singer, songwriter, and poet. Her music and writing are noted for stylized cinematic quality; themes of tragic romance, glamor, and melancholia.',
      },
      {
        id: 35,
        songImg: 'https://avatars.yandex.net/get-music-content/41288/386ef450.a.1585407-1/m1000x1000',
        songName: 'Wake Me Up',
        singer: 'Avicii',
        songAudio: '/audio/plus/Avicii Feat. Aloe Blacc - Wake Me Up.mp3',
        description:'Tim Bergling, better known by his stage name Avicii, was a Swedish DJ, remixer, record producer, musician, and songwriter who specialized in audio programming, remixing, and record producing.',
      },
    ]
  },
  {
    categoryID: 4,
    data: [
      {
        id: 36,
        songImg: 'https://avatars.yandex.net/get-music-content/2114230/3fb7e90c.a.10130567-1/m1000x1000',
        songName: 'UNO',
        singer: 'Little Big',
        songAudio: '/audio/plus/little-big_-_uno.mp3',
        description: 'Little Big is a Russian punk-pop-rave group, formed in 2013 in St. Petersburg. The team was nominated from Russia for the Eurovision 2020 song contest.',
      },
      {
        id: 37,
        songImg: 'https://avatars.yandex.net/get-music-content/2810397/2392f211.a.10327453-1/m1000x1000',
        songName: 'Blinding Lights',
        singer: 'The Weeknd',
        songAudio: '/audio/plus/weeknd-blinding-lights.mp3',
        description: 'Abel Makkonen Tesfaye, known professionally as The Weeknd, is a Canadian singer, songwriter, and record producer. He began his recording career in 2010, anonymously uploading several songs to YouTube.',
      },
      {
        id: 38,
        songImg: 'https://avatars.yandex.net/get-music-content/2266607/3f984bf7.a.9917688-1/m1000x1000',
        songName: 'No Time To Die',
        singer: 'Billie Eilish',
        songAudio: '/audio/plus/Billie Eilish - No time to die.mp3',
        description: 'Billie Eilish Pirate Baird O Connell, known professionally as only "Billie Eilish", is an American singer and songwriter. She first gained attention in 2015 when she uploaded the song "Ocean Eyes" to SoundCloud, which was subsequently released by the Interscope Records subsidiary Darkroom.',
      },
      {
        id: 39,
        songImg: 'https://avatars.yandex.net/get-music-content/2358262/6489ace6.a.9425747-1/m1000x1000',
        songName: 'August',
        singer: 'Intelligency',
        songAudio: '/audio/plus/intelligency-august.mp3',
        description: 'Intelligency is a Belarusian multilingual musical group playing in the techno style. The musicians themselves call their style "techno-blues"',
      },
      {
        id: 40,
        songImg: 'https://avatars.yandex.net/get-music-content/2442093/0ef3ac15.a.11561085-1/m1000x1000',
        songName: 'the 1',
        singer: 'Taylor Swift',
        songAudio: '/audio/plus/Taylor Swift - The 1.mp3',
        description: 'Taylor Alison Swift is an American singer-songwriter. Her narrative songwriting, which often centers around her personal life, has received widespread media coverage.',
      },
      {
        id: 41,
        songImg: 'https://avatars.yandex.net/get-music-content/2442093/4fbbbcb3.a.10362566-1/m1000x1000',
        songName: 'Плачу на техно',
        singer: 'CREAM SODA, Хлеб',
        songAudio: '/audio/plus/Cream Soda & Хлеб - Плачу На Техно.mp3',
        description: 'Since 2012, the Moscow group "Cream Soda" has been delighting fans of electronic music with their non-standard creativity. Throughout the history of their existence, the guys have repeatedly experimented with the sound, the directions of the old and new schools. But their most striking self-expression was the ethno-house style, which was accepted and loved by hundreds of thousands of music lovers.',
      },
      {
        id: 42,
        songImg: 'https://avatars.yandex.net/get-music-content/2390047/b8ab4315.a.9613082-1/m1000x1000',
        songName: 'Луна не знает пути',
        singer: 'Тайпан, Agunda',
        songAudio: '/audio/plus/Тайпан feat. Agunda - Луна Не Знает Пути.mp3',
        description: 'Агунда Цирихова, she is just Agunda, is a 16-year-old schoolgirl from Vladikavkaz, who conquered the countrys leading venues with her first track. The composition "The moon does not know the way", which the singer recorded together with the group "Taipan", won first places in the charts "Shazam", "Like FM" and "VKontakte".',
      },
      {
        id: 43,
        songImg: 'https://avatars.yandex.net/get-music-content/2424959/e093353d.a.10561462-1/m1000x1000',
        songName: 'Brooklyn',
        singer: 'Miyagi & Andy Panda, TumaniYO',
        songAudio: '/audio/plus/MiyaGi & Andy Panda feat. TumaniYO - Brooklyn.mp3',
        description: 'Miyagi & Andy Panda have released the clip "Brooklyn", which looks like a quivering stylization of American rap videos from the turn of the 90s and 00s. They rap under a bridge, light up from a flaming microphone, pray for posters with portraits of J Dilla and Madlib, and also "fry sausages" by burning barrels.',
      },
    ]
  }
];

export default categoriesData;