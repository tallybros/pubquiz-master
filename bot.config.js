// ============================================================
//  BOT CONFIGURATION — edit ONLY this file per bot
// ============================================================

module.exports = {

  // --- Identity ---
  name:       "Rick - the pubquiz master",
  tagline:    "It's pub quiz time - but bring your own beer (or not)",
  avatar:     "",                  // paste base64 data URI here
  promptedBy: "Tally Brostowsky",  // shown in footer as "Prompted by ..."

  // --- API & Model ---
  api:   "openai",              // "anthropic" or "openai"
  model: "gpt-4o",
  // Anthropic models: claude-haiku-4-5-20251001 | claude-sonnet-4-6 | claude-opus-4-6
  // OpenAI models:    gpt-4o-mini | gpt-4o

  // --- Web search ---
  webSearch: true,   // true = live internet access (recommended with OpenAI)

  // --- Conversation starters (leave [] to hide) ---
  starters: ["Let's play"],

  // --- System prompt ---
  prompt: `##Role & Task
You are an old pop star, Rick, that is now hosting pub quizzes. 
Your task is to keep the player engaged and enthusiastic.

##Context
While pub quizzes are normally played in a pub, this one will be played at home. 
Keep the player happy as if they were in a pub.

##Instructions
Explain the game
A pub quiz contains 5 rounds of 5 questions.
Each round has a topic.
Use your data source for some questions.
Be creative - the questions can also be quotes, pictures, songs, etc... Just keep the round itself consistent.
Ask only one question at a time. 
Give one point for each correct answer.
Calculate round score at the end of each round.
Calculate total score at the end of the 5th round.
Do not repeat questions, answers or topics.
Allow typos.


##Tone of Voice
Keep it fun.
Be encouraging if they make a mistake.
Celebrate correct answers.
No questions about Michael Jackson.

##Output format
Ask one question at a time.
the question itself should be in bold.
Before asking the next question, give the correct answer to the previous one.

`,

  // --- Knowledge base / RAG (server-side only, never sent to browser) ---
  knowledge: `Question	Answer
On which 'mountain', at 322 meters above sea level, can you find the highest point in the Netherlands?	The Vaalserberg
Which Dutch painter created The Night Watch?	Rembrandt
What century do we call The Golden Age in the Netherlands? The 16th or 17th century?	17th century
What is the largest lake in the Netherlands?	The IJsselmeer
Which is the largest port in the Netherlands, Amsterdam or Rotterdam?	Rotterdam
The Rutte administration fell early Friday night, July 7, 2023. Which # cabinet Rutte was this?	Cabinet‑Rutte IV
The inventor of Bluetooth is a Dutchman, true or false?	True (Jaap Haartsen)
Since 2014, King’s Day has fallen on April 27. What day did it fall on in 2013?	April 30
Which Dutch soccer club has won the most national titles, Ajax or PSV?	Ajax
In what year did the Netherlands win the European Championship in soccer (men)?	1988
Which energy label must an office building in the Netherlands have as of January 1, 2023?	Energy label C
Which Dutch festival was sold out within fourteen minutes in February 2023?	Lowlands
In which city can you find the Dutch Open Air Museum (Openluchtmuseum)?	Arnhem
In which century did the so-called Rampjaar take place in the Netherlands?	17th century (1672)
Who painted the painting Starry Night? A. Picasso B. van Gogh C. Dalí D. Monet	B. Vincent van Gogh
Are there more chickens or pigs in the Netherlands?	Chickens
Which king lived from 1815–1840, William 1 or William 2?	William 2
From which Dutch song do we know the sentence “In een discotheek zat ik van de week, en ik voelde mij daar zo alleen”?	Een beetje verliefd (André Hazes)
In early July 2023, a very severe summer storm swept through the Netherlands. What was the name given to the storm?	Poly
In what year was slavery abolished in the Netherlands? A. 1789 B. 1806 C. 1848 D. 1863	D. 1863
With which political party did Pieter Omtzigt participate in the November 22, 2023 elections to the House of Representatives?	New Social Contract (NSC)
Which Dutchman has played the most international matches for the Dutch national team (men)?	Wesley Sneijder
Complete the saying: "Beer after wine brings venom, wine after beer brings…"?	Fun
Where is the Netherlands Film Festival held? A. Amsterdam B. Rotterdam C. Utrecht D. Wageningen	C. Utrecht
How many provinces does the Netherlands have, 12 or 13?	12 provinces
In which Dutch city is the Dom tower located?	Utrecht
Who was king of the Netherlands during World War I?	Wilhelmina
In which Dutch village was Vincent van Gogh born?	Zundert
KLM is the oldest national airline in the world, true or false?	True (1919)
Who is considered the founder of parliamentarianism in the Netherlands?	Johan Rudolph Thorbecke
Who wrote the book Oorlogswinter? A. Mulisch B. Terlouw C. Hermans D. Reve	B. Jan Terlouw
Which count has been given a place in the Canon of the Netherlands?	Floris V (Floris the Fifth)
Which Dutch concert series will celebrate its 20th anniversary in 2023 and will celebrate with the biggest concert series ever in the Netherlands?	The Friends of Amstel LIVE
Which Dutch bicycle factory was founded in 1892 and has been allowed to call itself Royal since 1992?	Gazelle
What was the only Dutch‑language song in the top 10 of the 2022 NPO Radio 2 Top 2000?	Avond by Boudewijn de Groot
Which famous artist created the painting View of Delft?	Johannes Vermeer
Which feminist and physician was the first woman ever to graduate as a physician in the Netherlands?	Aletta Jacobs
What is the name of the largest top sports training center in the Netherlands?	Sports center Papendal
Groningen is home to the largest café in Europe, true or false?	True (the Three Sisters)
There are more bicycles in the Netherlands (more than 18 million) than there are people, true or false?	TRUE
Who was Queen Wilhelmina’s father? A. William 3 B. William 2 C. William 1 D. William of Orange	A. King William 3
Which Dutchman went into space earlier, Wubbo Ockels or André Kuipers?	Wubbo Ockels
In which city was the 1928 Olympics held?	Amsterdam
Who did the Dutch team play against in the eighth final of the World Cup in Qatar?	United States
Who wrote Pluk van de Petteflet and Minoes?	Annie M.G. Schmidt
In 2022, who was the longest‑serving prime minister in Dutch history?	Mark Rutte
In what year was Pim Fortuyn assassinated?	2002
Which Dutch film won an Oscar for Best Foreign Film in 1996?	Antonia
Which Dutch motocross rider won the MXGP world championship in 2021?	Jeffrey Herlings
Which King William married his full cousin Wilhelmina of Prussia in 1791?	King William 1
Which naval hero named Michiel was nicknamed Bestevaêr?	Michiel de Ruyter
Which Dutch singer do we know from the songs Testament and Het Land van Maas en Waal?	Boudewijn de Groot
Since what year has the Netherlands been a kingdom?	1815
What is the name of the largest nature reserve in the Netherlands, the Veluwe or the Oostvaardersplassen?	The Veluwe
In which Dutch city can you find Brewery De Leckere?	Utrecht
What was the name of the anarchist protest movement founded in the Netherlands on May 25, 1965, and disbanded after two years?	Provo
In which Dutch amusement park can you find the Sprookjesbos (Fairytale Forest)?	The Efteling
Between which 2 cities ran the first railroad in the Netherlands?	Amsterdam and Haarlem
Which Dutch city is also called the city of lights (Lichtstad)?	Eindhoven
In which Dutch province can you find the Oostvaardersplassen?	Flevoland
When was slavery abolished in the Netherlands?	1863
Who is the lead singer of the Dutch band Kensington? A. Eloi Youssef B. Casper Starreveld C. Jan Haker D. Niles Vandenberg	A. Eloi Youssef
Which political party was Maarten van Rossem’s list-pusher in 2012? A. VVD B. GroenLinks C. D66 D. PvdA	D. PvdA
Which Dutchman received the 2016 Nobel Prize in Chemistry for the development of molecular machines?	Ben Feringa
Which Dutch beer magnate was kidnapped in 1983?	Freddy Heineken
What is the name of the official residence of the Prime Minister of the Netherlands?	The Catshuis
What is the name of the song by the band Bots that begins with the line “Wat zullen we drinken”?	Zeven dagen lang
Which Dutch artist created the work Victory Boogie?	Piet Mondriaan
Under what pseudonym did Eduard Douwes Dekker write Max Havelaar?	Multatuli
What is the statue of Paul McCarthy standing on Eendrachtsplein in the Dutch city of Rotterdam popularly called?	Gnome Buttplug
What is the largest paid music festival in the Netherlands and also the largest motocross in the world?	Zwarte Cross
In which year did the flood disaster take place in the Netherlands?	1953
Which Dutch philosopher is considered one of the founders of rationalism, and one of the inspirers of the Enlightenment?	Spinoza
Which Dutch city is also called the key city (Sleutelstad)?	Leiden
On which Dutch island is Eierland lighthouse located?	Texel
Which member of the royal family is the heir to the throne after King Willem‑Alexander?	(Princess) Amalia
What nickname do Volendammers give people who are not from Volendam?	‘Jas’ (Jacket)
Who was the Dutch politician known as the founder of the welfare state in the Netherlands?	Willem Drees
Which Dutch poet created the famous poem Remembrance of Holland?	Hendrik Marsman
Which comedian was the “Slimste Mens” 2022 in the Netherlands?	Jasper van Kuijk
In which sport was Fanny Blankers‑Koen a Dutch world champion?	Athletics
What is the name of the well‑known Dutch festival for documentary films, DocuNL or IDFA?	IDFA
Which Dutch band scored a big hit in 1983 with the song “Twilight Zone”?	Golden Earring
From 1586 to 1619, who was Raadpensionaris of Holland, and thus the most important administrator in the Republic of the Seven United Netherlands?	Johan van Oldenbarnevelt
Of whom is the saying “You’re not going to see it until you realise it’?	Johan Cruijff
Which Dutch province has the most inhabitants?	South Holland`,

};
