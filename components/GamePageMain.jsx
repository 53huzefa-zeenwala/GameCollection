import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import GameHeader from './GameHeader'
import DropDownSearchResults from './DropDownSearchResults'
import { useStateContext } from '../context/useContext'

export default function GamePageMain() {
    const { query: { id } } = useRouter()
    const BASE_URL = "https://api.rawg.io/api/games"
    const { gameSearchResults } = useStateContext()

    const [loading, setLoading] = useState(false)
    // const [gameResult, setGameResult] = useState()

    // useEffect(() => {
    //     const fetchResults = async () => {
    //         setLoading(true)
    //         const results = await axios.get(`${BASE_URL}/${id}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`)
    //         setGameResult(results.data)
    //         setLoading(false)
    //     }
    //     fetchResults()
    // }, [])
    const gameResult = {
        "id": 28,
        "slug": "red-dead-redemption-2",
        "name": "The Horror Red Dead Redemption 2",
        "name_original": "Red Dead Redemption 2",
        "description": "<p>America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. </p>\n<p>After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.</p>\n<p>From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age.</p>",
        "metacritic": 96,
        "metacritic_platforms": [
          {
            "metascore": 97,
            "url": "https://www.metacritic.com/game/playstation-4/red-dead-redemption-2",
            "platform": {
              "platform": 18,
              "name": "PlayStation 4",
              "slug": "playstation4"
            }
          },
          {
            "metascore": 93,
            "url": "https://www.metacritic.com/game/pc/red-dead-redemption-2",
            "platform": {
              "platform": 4,
              "name": "PC",
              "slug": "pc"
            }
          },
          {
            "metascore": 97,
            "url": "https://www.metacritic.com/game/xbox-one/red-dead-redemption-2",
            "platform": {
              "platform": 1,
              "name": "Xbox One",
              "slug": "xbox-one"
            }
          }
        ],
        "released": "2018-10-26",
        "tba": false,
        "updated": "2022-08-29T11:37:20",
        "background_image": "/trailPhoto.webp",
        "background_image_additional": "https://media.rawg.io/media/screenshots/f3d/f3d6c0eaf1db2bdbb44ad84f15e43f4f.jpg",
        "website": "https://www.rockstargames.com/reddeadredemption2/",
        "rating": 4.59,
        "rating_top": 5,
        "ratings": [
          {
            "id": 5,
            "title": "exceptional",
            "count": 3088,
            "percent": 73.04
          },
          {
            "id": 4,
            "title": "recommended",
            "count": 780,
            "percent": 18.45
          },
          {
            "id": 3,
            "title": "meh",
            "count": 237,
            "percent": 5.61
          },
          {
            "id": 1,
            "title": "skip",
            "count": 123,
            "percent": 2.91
          }
        ],
        "reactions": {
          "1": 48,
          "2": 8,
          "3": 30,
          "4": 9,
          "5": 6,
          "6": 6,
          "7": 19,
          "8": 2,
          "9": 2,
          "10": 24,
          "11": 6,
          "12": 17,
          "13": 1,
          "14": 3,
          "15": 2,
          "16": 3,
          "20": 1,
          "21": 2
        },
        "added": 12609,
        "added_by_status": {
          "yet": 770,
          "owned": 6560,
          "beaten": 2506,
          "toplay": 1435,
          "dropped": 503,
          "playing": 835
        },
        "playtime": 22,
        "screenshots_count": 47,
        "movies_count": 0,
        "creators_count": 8,
        "achievements_count": 198,
        "parent_achievements_count": 40,
        "reddit_url": "https://www.reddit.com/r/Red_Dead_Redemption_2/",
        "reddit_name": "Red Dead Redemption 2 Subreddit",
        "reddit_description": "Red Dead Redemption 2 Subreddit",
        "reddit_logo": "",
        "reddit_count": 1541,
        "twitch_count": 196,
        "youtube_count": 1000000,
        "reviews_text_count": 84,
        "ratings_count": 4144,
        "suggestions_count": 601,
        "alternative_names": [
          "RDR 2",
          "RDR2"
        ],
        "metacritic_url": "https://www.metacritic.com/game/xbox-one/red-dead-redemption-2",
        "parents_count": 0,
        "additions_count": 1,
        "game_series_count": 3,
        "user_game": null,
        "reviews_count": 4228,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "parent_platforms": [
          {
            "platform": {
              "id": 1,
              "name": "PC",
              "slug": "pc"
            }
          },
          {
            "platform": {
              "id": 2,
              "name": "PlayStation",
              "slug": "playstation"
            }
          },
          {
            "platform": {
              "id": 3,
              "name": "Xbox",
              "slug": "xbox"
            }
          }
        ],
        "platforms": [
          {
            "platform": {
              "id": 4,
              "name": "PC",
              "slug": "pc",
              "image": null,
              "year_end": null,
              "year_start": null,
              "games_count": 474775,
              "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            },
            "released_at": "2018-10-26",
            "requirements": {
              "minimum": "Minimum:\nRequires a 64-bit processor and operating system\nOS: Windows 7 - Service Pack 1 (6.1.7601)\nProcessor: Intel® Core™ i5-2500K / AMD FX-6300\nMemory: 8 GB RAM\nGraphics: Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB\nNetwork: Broadband Internet connection\nStorage: 150 GB available space\nSound Card: Direct X Compatible",
              "recommended": "Recommended:\nRequires a 64-bit processor and operating system\nOS: Windows 10 - April 2018 Update (v1803)\nProcessor: Intel® Core™ i7-4770K / AMD Ryzen 5 1500X\nMemory: 12 GB RAM\nGraphics: Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB\nNetwork: Broadband Internet connection\nStorage: 150 GB available space\nSound Card: Direct X Compatible"
            }
          },
          {
            "platform": {
              "id": 18,
              "name": "PlayStation 4",
              "slug": "playstation4",
              "image": null,
              "year_end": null,
              "year_start": null,
              "games_count": 6439,
              "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
            },
            "released_at": "2018-10-26",
            "requirements": {}
          },
          {
            "platform": {
              "id": 1,
              "name": "Xbox One",
              "slug": "xbox-one",
              "image": null,
              "year_end": null,
              "year_start": null,
              "games_count": 5362,
              "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
            },
            "released_at": "2018-10-26",
            "requirements": {}
          }
        ],
        "stores": [
          {
            "id": 257732,
            "url": "",
            "store": {
              "id": 3,
              "name": "PlayStation Store",
              "slug": "playstation-store",
              "domain": "store.playstation.com",
              "games_count": 7780,
              "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
            }
          },
          {
            "id": 374316,
            "url": "",
            "store": {
              "id": 11,
              "name": "Epic Games",
              "slug": "epic-games",
              "domain": "epicgames.com",
              "games_count": 1073,
              "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
            }
          },
          {
            "id": 384218,
            "url": "",
            "store": {
              "id": 1,
              "name": "Steam",
              "slug": "steam",
              "domain": "store.steampowered.com",
              "games_count": 66223,
              "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
            }
          },
          {
            "id": 48782,
            "url": "",
            "store": {
              "id": 2,
              "name": "Xbox Store",
              "slug": "xbox-store",
              "domain": "microsoft.com",
              "games_count": 4741,
              "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            }
          }
        ],
        "developers": [
          {
            "id": 10,
            "name": "Rockstar Games",
            "slug": "rockstar-games",
            "games_count": 25,
            "image_background": "https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg"
          }
        ],
        "genres": [
          {
            "id": 4,
            "name": "Action",
            "slug": "action",
            "games_count": 159718,
            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
          },
          {
            "id": 3,
            "name": "Adventure",
            "slug": "adventure",
            "games_count": 121142,
            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
          }
        ],
        "tags": [
          {
            "id": 31,
            "name": "Singleplayer",
            "slug": "singleplayer",
            "language": "eng",
            "games_count": 179107,
            "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          },
          {
            "id": 7,
            "name": "Multiplayer",
            "slug": "multiplayer",
            "language": "eng",
            "games_count": 32472,
            "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
          },
          {
            "id": 13,
            "name": "Atmospheric",
            "slug": "atmospheric",
            "language": "eng",
            "games_count": 24098,
            "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
          },
          {
            "id": 42,
            "name": "Great Soundtrack",
            "slug": "great-soundtrack",
            "language": "eng",
            "games_count": 3209,
            "image_background": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg"
          },
          {
            "id": 18,
            "name": "Co-op",
            "slug": "co-op",
            "language": "eng",
            "games_count": 8773,
            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
          },
          {
            "id": 118,
            "name": "Story Rich",
            "slug": "story-rich",
            "language": "eng",
            "games_count": 15718,
            "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
          },
          {
            "id": 36,
            "name": "Open World",
            "slug": "open-world",
            "language": "eng",
            "games_count": 5419,
            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
          },
          {
            "id": 8,
            "name": "First-Person",
            "slug": "first-person",
            "language": "eng",
            "games_count": 23732,
            "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
          },
          {
            "id": 149,
            "name": "Third Person",
            "slug": "third-person",
            "language": "eng",
            "games_count": 7707,
            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
          },
          {
            "id": 40845,
            "name": "Partial Controller Support",
            "slug": "partial-controller-support",
            "language": "eng",
            "games_count": 8737,
            "image_background": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg"
          },
          {
            "id": 30,
            "name": "FPS",
            "slug": "fps",
            "language": "eng",
            "games_count": 11109,
            "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
          },
          {
            "id": 9,
            "name": "Online Co-Op",
            "slug": "online-co-op",
            "language": "eng",
            "games_count": 3716,
            "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
          },
          {
            "id": 26,
            "name": "Gore",
            "slug": "gore",
            "language": "eng",
            "games_count": 4606,
            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
          },
          {
            "id": 37,
            "name": "Sandbox",
            "slug": "sandbox",
            "language": "eng",
            "games_count": 5192,
            "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
          },
          {
            "id": 6,
            "name": "Exploration",
            "slug": "exploration",
            "language": "eng",
            "games_count": 16524,
            "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
          },
          {
            "id": 34,
            "name": "Violent",
            "slug": "violent",
            "language": "eng",
            "games_count": 5417,
            "image_background": "https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg"
          },
          {
            "id": 150,
            "name": "Third-Person Shooter",
            "slug": "third-person-shooter",
            "language": "eng",
            "games_count": 2493,
            "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          },
          {
            "id": 157,
            "name": "PvP",
            "slug": "pvp",
            "language": "eng",
            "games_count": 5992,
            "image_background": "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg"
          },
          {
            "id": 40837,
            "name": "In-App Purchases",
            "slug": "in-app-purchases",
            "language": "eng",
            "games_count": 1791,
            "image_background": "https://media.rawg.io/media/games/1e5/1e5e33b88be978f451196a751424a72e.jpg"
          },
          {
            "id": 192,
            "name": "Mature",
            "slug": "mature",
            "language": "eng",
            "games_count": 1577,
            "image_background": "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg"
          },
          {
            "id": 89,
            "name": "Historical",
            "slug": "historical",
            "language": "eng",
            "games_count": 2135,
            "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
          },
          {
            "id": 110,
            "name": "Cinematic",
            "slug": "cinematic",
            "language": "eng",
            "games_count": 1025,
            "image_background": "https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg"
          },
          {
            "id": 77,
            "name": "Realistic",
            "slug": "realistic",
            "language": "eng",
            "games_count": 2802,
            "image_background": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg"
          },
          {
            "id": 144,
            "name": "Crime",
            "slug": "crime",
            "language": "eng",
            "games_count": 2335,
            "image_background": "https://media.rawg.io/media/screenshots/4f4/4f4722571e32954af43a4508607c1748.jpg"
          },
          {
            "id": 478,
            "name": "3rd-Person Perspective",
            "slug": "3rd-person-perspective",
            "language": "eng",
            "games_count": 86,
            "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          },
          {
            "id": 270,
            "name": "Blood",
            "slug": "blood",
            "language": "eng",
            "games_count": 1791,
            "image_background": "https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg"
          },
          {
            "id": 45878,
            "name": "Online PvP",
            "slug": "online-pvp",
            "language": "eng",
            "games_count": 2430,
            "image_background": "https://media.rawg.io/media/games/8bd/8bda6d876f3e241c6024022299553efd.jpg"
          },
          {
            "id": 78,
            "name": "America",
            "slug": "america",
            "language": "eng",
            "games_count": 355,
            "image_background": "https://media.rawg.io/media/screenshots/794/7943eb38a763c014c84ddae7378b865c.jpg"
          },
          {
            "id": 578,
            "name": "Masterpiece",
            "slug": "masterpiece",
            "language": "eng",
            "games_count": 244,
            "image_background": "https://media.rawg.io/media/games/151/151e79f397328419c64aabe93d9d5a31.jpg"
          },
          {
            "id": 577,
            "name": "Beautiful",
            "slug": "beautiful",
            "language": "eng",
            "games_count": 1779,
            "image_background": "https://media.rawg.io/media/games/694/694ba14510656e8787536349220cb168.jpg"
          },
          {
            "id": 181,
            "name": "Hunting",
            "slug": "hunting",
            "language": "eng",
            "games_count": 767,
            "image_background": "https://media.rawg.io/media/games/b4d/b4d2004ef9afea5c14317fe94bcc8996.jpg"
          },
          {
            "id": 152,
            "name": "Western",
            "slug": "western",
            "language": "eng",
            "games_count": 1122,
            "image_background": "https://media.rawg.io/media/games/546/5464304424db26e3fbc7eaa8b7748f97.jpg"
          },
          {
            "id": 5452,
            "name": "3rd-person",
            "slug": "3rd-person",
            "language": "eng",
            "games_count": 92,
            "image_background": "https://media.rawg.io/media/screenshots/9bf/9bf177abafbb1e1a9c77dad20a623a88.jpg"
          }
        ],
        "publishers": [
          {
            "id": 2155,
            "name": "Rockstar Games",
            "slug": "rockstar-games",
            "games_count": 74,
            "image_background": "https://media.rawg.io/media/games/bcd/bcdadb5dd2be66dd4dd1f657275b3f8e.jpg"
          }
        ],
        "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature"
        },
        "clip": null,
        "description_raw": "America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. \r\n\r\nAfter a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.\r\n\r\nFrom the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age."
      }

    const loader = (
        <div className='h-screen w-screen flex justify-center items-center pb-8'>
            <div>
                <svg className="inline mr-2 w-10 h-10 animate-spin text-gray-700 fill-teal-600" viewBox="0 0 100 101" fill="none">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )

    console.log(gameResult)
    return (
        <div className='bg-black overflow-x-hidden'>
            {gameSearchResults.length !== 0 && <DropDownSearchResults results={gameSearchResults} />}
            {loading && loader}
            <Navbar />
            <Sidebar />

            <GameHeader backgroundImage={gameResult?.background_image} name={gameResult?.name || gameResult?.name_original} rating={gameResult?.rating} website={gameResult?.website || null} released={gameResult?.released} genres={gameResult?.genres} publishers={gameResult?.publishers} ratings_count={gameResult.ratings_count} description={gameResult.description} shortDescription={gameResult.description_raw} />
        </div>
    )
}
