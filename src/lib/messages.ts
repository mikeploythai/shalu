const messages = [
  {
    author: "Steph",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNaemRTZGxrdFkyb2ZSYlhxU1kwNWZKcHJGLnBuZyJ9",
    content:
      "Shaleen, shalube, shloppy toppy, and one of my dearest friends. Our friendship has definitely been a wild fuckin ride. Thank you so much for being in my life and I am so excited to see you grow into yourself further. From tweaking as an NPC in ACM to getting your family to yak from getting zooted together, you've definitely grown the most out of everyone I've known. You're so epicly poggers and I know you're gonna get some South Ohio hoes!!! Please visit us soon! We love and miss you!!!",
    imageUrl:
      "https://uploadthing.com/f/32aca386-d202-4c05-9491-cb0a48d665f9_Screenshot_20230714_141125_Gallery.jpg",
  },
  {
    author: "Angela",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNVd0xsYTJveHNtUHZvZnNKZFVVSEVVSlNELnBuZyJ9",
    content:
      "Hi Shaleen,\n\nCongrats on this new opportunity. I know you will do great in North Carolina. We didn't talk much but you always came across as very kind to me. I hope everything goes well (　＾ω＾)! - Angela",
  },
  {
    author: "Chris",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNaNFlZMkpxenlyZ1FVQjRJSzRCMDBIaWIwLmdpZiJ9",
    content:
      "hi shaleen,\nI don’t know where to even begin to express my gratitude for welcoming me into your life as your friend. It’s been a memorable few years whether that be R2-D2 screaming in public or losing your mind over the Lakers. You are one of the most genuine and unique people I’ve ever met at CSUF and I could not even begin to express my gratitude for all the fun we’ve had. I will always be grateful for your generosity to host movies and hangouts. Your presence will be missed dearly. - chris ",
    imageUrl:
      "https://uploadthing.com/f/fdeaebf8-13d3-4939-abbd-c5c57dc340a7_BDD3688E-4D92-49CC-BABB-C8C98A2F35B8.jpeg",
  },
  {
    author: "Aaron",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNZdTZDTE91UGF4aXhHS3dpWU43SEhuOTc4LnBuZyJ9",
    content: "Trulys > white claws\n\nPonder this while in NC",
  },
  {
    author: "Mike",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNVYnN4Y2JUWlBYVWFFTHNEZ0NZVms1MDc2LnBuZyJ9",
    content:
      "Shaleen,\n\nI truly don't know how I can show my gratitude towards you for keeping me sane and making me laugh to the point of wheezing during college. You've been nothing but amazing to me and all of our friends, and I'm so proud of your growth as a human since I first met you. From panicking over crabs to eating edibles every weekend, you sure have come a long way LMFAO\n\nWe're all so proud of you, and we hope you have a good time as a software engineer. You made it! We'll miss you so much.",
    imageUrl:
      "https://uploadthing.com/f/93107868-13b5-4816-a1bb-2bed26527d74_IMG_0190.jpeg",
  },
  {
    author: "Dania",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNYVnRvODFLa2NIMTU2bWxacUttS1hjUXh6LnBuZyJ9",
    content:
      "Hello Shaleenth,\nI am so glad I met u bc, without u, my classes would have been hella boring lmao. I am so glad we became friends over the years. Ur very epic, even during your crackhead outbursts. Hanging out with u and the cock gang has been really fun and made my time at CSUF less shitty. Even though ur moving to NC, we will always be here for u! I know you're going to do such great things, and I just can't wait to cheer u on! I hope u have a good time in NC and good luck out there!!\n- Dania",
  },
  {
    author: "Shelly",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNYVmtrR291SnFsQkJKbVNaREJIN1NBZ3UzLmpwZWcifQ",
    content: "hi shaleen! best of luck in NC and at your new job!! - shelly",
  },
  {
    author: "Jacob",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNXblNWNm9tUERjaGdHMXBaRndtaHBRalJOLmdpZiJ9",
    content:
      "Shaleen 😢!!! Dude please enjoy NC we’re all gonna miss you a lot. Thank you for being one of the first friends I made at CSUF. I hope your journey in life moving forward is fulfilling and you achieve everything you want out of life. Let’s cross paths agains one day 🙂.\n- Jacob",
  },
  {
    author: "Kirsten",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNYUjZoRm93cVFlWFVZZ3JWV0tyUzc3WTZiLmpwZWcifQ",
    content:
      "hi shaleen :D so so grateful for our fun memories together in classes. i am wishing you all the best!! -kirsten",
  },
  {
    author: "Gerry",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNXeDZyYmI0UlpicXpYSHU3TnB3c1RKN2NFLmdpZiJ9",
    content:
      "Hi Mr. Shaleen.\n\nIt feels like only yesterday that I saw your discord pfp for the first time. It was Indian Snoop Dogg. I thought it was sick af. Anywho, I know that this is going to be a big change in your life. I'm sorry you have to head out somewhere new and unfamiliar. But please know that you still have your friends here. Get some experience and make sure to have fun while you are out there making us proud. You are going to do big things. Love you lots - Gerry. \n\nPS, join discord calls.",
  },
  {
    author: "Kinsey",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNWVGI0NFJ0bUowOFY2MXFQQXV0eE1nQWZsLmpwZWcifQ",
    content:
      "To Ezra Miller’s fan, congratulations on the job! These past few years have been crazy, good and bad, but I wouldn’t have it any other way. You’ve done a lot for me & I appreciate it & can never repay u 💀. I’m going to throw a chair at this char limit. It’s been a blast hanging out and getting to know u better from CPSC 121 (nonexistent) to MATH 338 to PLN 313 to Orange Outlets. I could go on but just know I hope our story doesn’t end here. You are and shall always be one of my best friends. 💜",
  },
  {
    author: "Nurhaliza",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNWR1FLN0RNdzdZNG0xd0w4bmZyemR0Z3lZLmpwZWcifQ",
    content:
      "SHAAAAALEEEEEEN! CONGRATS ON THIS EXCITING OPPORTUNITY! Wishing you the best on this next chapter of your life. I hope that success and happiness follow you wherever you go. You got this bro! 🥳👍🏻✨ Stay blessed. ✨✨",
  },
  {
    author: "Sam",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNWNGd2NmJwYTN0cXBnbXVscFU0M2RmRGsyLmpwZWcifQ",
    content:
      "Hi Shaleen,\nSuper thankful for the past few years college together with classes and clubs. I wanted to wish the best of luck on the move to this new job. I hope this new chapter of your life is fun and you learn a lot.  Good luck and Go Clippers (or Lakers or whatever team you like lol)",
  },
  {
    author: "Kelvin",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNWOEVxTHFteUlzWFpqSW5KVkRKVU9zcllzLnBuZyJ9",
    content:
      "Hey Shaleen, I haven't had much interaction with you in person but from what I have seen in the server and heard in passing you sound like a good person. Congratulations on the job that you got! I know you probably had to put a lot of hard work to get to where you're at so I'm rooting for you to succeed!!! Stay in contact and don't be afraid to come back to visit!!!! We know you're gonna do great things not only for the people around you but wherever you grace your presence with! Best of luck!",
  },
  {
    author: "Liv",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNVd3N0TTd1V2NWek1La3VVZVM0V2xTSnZDLnBuZyJ9",
    content:
      "shaleen!!!! i'll miss you so so much :( i'm incredibly happy for you and so proud of you for getting this job and taking this huge step in ur life. these past few years have been awesome! ill never forget that before i met u i was so excited bc u had a honda accord LMAO. you're one of the best guys ive ever met and you've always been so supportive. we'll support you forever and we're here for you always. i hope north carolina treats you well, we'll visit as soon as we can! GO LAKERS :D\n\n- liv <3",
  },
  {
    author: "Iggy",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNVZTBSWE5Ta3I5MkFrM1JjMXpxQmtheW8zLnBuZyJ9",
    content:
      "Congratulations on the job!! It was a pleasure getting to know you and hang out with you in person. I hope everything goes well! I'm certain you'll do amazing. If you ever get lonely or something, we are all a message away. ",
  },
  {
    author: "Ozzy",
    avatarUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMlNVcHB0dlZvM3hFaHNBTDQ4Q1BsWVRuYkY1LnBuZyJ9",
    content:
      "Hey Shaleen Just wanted to properly congratulate you on your new job. Its crazy that you just graduated and have jobs lined up and ready for you. I just want to say that I know we didn't get to hang out a lot but the times we did I really had fun with you around my guy. You have this energy that just infects everyone around you and everybody is just hyped and having funny. But I wish you all the best of luck on your new job and your new environment. I know you'll do great in your job. :)",
  },
];

export default messages;
