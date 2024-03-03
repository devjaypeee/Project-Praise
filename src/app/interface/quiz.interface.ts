interface Quiz {
    id: number,
    difficulty: string;
    moduleName: string;
    quizno: string;
    instruction: string;
    story: string;
    questions: Array<Question>;
}

interface Question {
    id: number;
    question: string;
    choice: Array<Choices>;
    answer: string;
}

interface Choices {
    id: number;
    letter: string;
    choices: string;
}

export const quiz = [

   // Comparing and Contrasting

   {
        id: 1,
        difficulty: "Easy",
        moduleName: "Comparing and Contrasting",
        quizno: "Quiz #1",
        instruction: "Determine whether the statement is True or False",
        story: `<h2><strong>Ice Cream vs Frozen Yogurt</strong></h2> <p>Years ago, ice cream was the frozen dessert that one could order on a cone. My, how times have changed! Frozen yogurt is now just as popular of a tasty treat as good, old fashioned ice cream. So, what are some similarities and di¬fferences between frozen yogurt and ice cream?</p> <p>Frozen yogurt, also known as fro-yo, contains the healthy, gut bacteria called probiotics. If a frozen yogurt brand contains these probiotics, it is marked with the Live and Active Cultures label. Frozen yogurt substitutes yogurt in place of the bulk of the cream used in ice cream. As a result, frozen  yogurt contains anywhere from 0.5-6% milkfat by weight, whereas ice cream contains as much as 10-18%. Less isn’t always more, though, because there is typically more sugar in frozen yogurt than ice cream. Lastly, unlike frozen yogurt, ice cream has air blended into it to increase its volume and give it its fluff¬y texture.</p> <p>Among these diff¬erences, frozen yogurt and ice cream do share some similar characteristics. For one, they are both frozen and you can purchase either one of them in the freezer aisle of your grocery store. Also, both of these treats can be served in a cone or a cup. And, if you’re in the mood for a milkshake, either one of these products can be used to blend up this drink. With all of this information swirling around in your mind, which of these sweet snacks would you choose on a hot, summer day?</p>`,
        questions: [
            {
                id: 1,
                question: "The selection read is an example of compare and contrast text.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "True"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "False"
                    },
                ],
                answer: 'a',
            },
            {
                id: 2,
                question: "Frozen yogurt tends to have more sugar than an ice cream.",
                
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "True"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "False"
                    },
                ],
                answer: 'a',
            },
            {
                id: 3,
                question: "Only ice cream can be served in a cone.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "True"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "False"
                    },
                ],
                answer: 'b',
            },
            {
                id: 4,
                question: "Both ice cream and fro-yo can be used in milkshake.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "True"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "False"
                    },
                ],
                answer: 'a',
            },
            {
                id: 5,
                question: "Both ice cream and fro-yo has air blended into it to give its fluffy texture.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "True"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "False"
                    },
                    
                    ],
                answer: 'b',
            },                                               
        ]
    },
    {
        id: 2,
        difficulty: "Easy",
        moduleName: "Comparing and Contrasting",
        quizno: "Quiz #2",
        instruction: "Transition words and phrases keep the ideas together. It makes the writing more coherent. This also signals the reader knowing the structure of the text for better understanding. Choose the appropriate transition words.",
        story: '',
        questions: [
            {
                id: 1,
                question: "_______basketball and volleyball are team sports.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "similar"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "both"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "like"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "whereas"
                    },
                ],
                answer: 'b',
            },
            {
                id: 2,
                question: "A basketball has two rings on each end of the court _______ a net in the middle of the court is used for volleyball.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "whereas"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "similar"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "conversely"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "likewise"
                    },
                    
                    ],
                answer: 'a',
            },
            {
                id: 3,
                question: "Basketball is played in four quarters _________ volleyball is played in 3 sets.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "however"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "whereas"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "unlike"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "in contrast"
                    },
                
                    ],
                answer: 'c',
            },
            {
                id: 4,
                question: "Men ______ women can play basketball and volleyball.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "like"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "equally"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "similar"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "similarly"
                    },
                
                    ],
                answer: 'a',
            },
            {
                id: 5,
                question: "_______sports are considered ball games.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "in the same way"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "both"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "on the one hand"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "conversely"
                    },
                
                    ],
                answer: 'b',
            },                                               
        ]
    },
    {
        id: 3,
        difficulty: "Easy",
        moduleName: "Comparing and Contrasting",
        quizno: "Quiz #3",
        instruction: "Reading Activity. Choose the letter of the best answer",
        story: `<h2><strong>Which Tennis?</strong></h2> <p>by Erica Angela N. Paraiso</p> 
        
        <p>When people learned that I play tennis, my reply surprises them – “Which tennis?” Most people only know the one tennis that I play. Many say that the two sports are essentially the same. Be the judge on how true this claim is.</p> <p>Both lawn and soft tennis are played on the same court. The court used for the both tennis that I play has the same dimensions and markings for singles and doubles court. Soft tennis is played in singles and doubles format, similar to lawn tennis. Just like in lawn tennis, soft tennis starts with a serve followed by a back and forth returns. Balls are only allowed to bounce once before it is returned. Points are awarded if the opponent fails to return the ball.</p> <p>The primary difference of the two tennis that I play is the ball. A lawn tennis ball is hard and is usually yellow. The soft tennis ball on the other hand is white and from the name of the sport, it is soft. Because of this difference, the surface of the court where it is played matters. Lawn tennis are usually played on hard, clay, synthetic, and grass courts. Although soft tennis is almost played on similar courts, it is not the case for grass court. With soft tennis being a soft ball, the bounce is lower compared to lawn tennis ball; thus, players approach the ball faster compared to a lawn tennis ball. Racquets used may look similar at a glance but close inspection will show that a soft tennis racquet is thinner and holding them will also tell you that it is lighter. Soft tennis originated in Japan and can be watched mostly in Asian Games and South East Asian (SEA) Games. Lawn tennis originated in England and has many followings internationally. Aside from the games mentioned, there are also popular tournaments such as US Open, Australian Open, and Wimbledon.</p> <p>I initially learned lawn tennis. Knowledge on how this sport is played gave me an opportunity to explore soft tennis. Although there are many similarities on its physical aspects, playing it is quite different. Since I learned this two tennis, I always thought and considered learning another tennis – table tennis. And when I have successfully learned this sport, there will be more fun for me in asking, “Which tennis?”</p>`,
        questions: [
            {
                id: 1,
                question: "Which of the following tennis games is not played by the author?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "soft Tennis"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "lawn Tennis"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "table Tennis"
                    },
                    ],
                answer: 'c',
            },
            {
                id: 2,
                question: "The primary difference of lawn tennis and soft tennis is the __________used.",
                
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "racquet"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "court Surface"
                    },
                    {
                        id: 2,
                        letter: "c",
                        choices: "ball"
                    },
                    
                    ],
                answer: 'c',
            },
            {
                id: 3,
                question: "Lawn tennis is played in the following events except ",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Australian Open"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Wimbledon"
                    },
                    {
                        id: 2,
                        letter: "c",
                        choices: "Philippine Olympics"
                    },
                
                    ],
                answer: 'c',
            },
            {
                id: 4,
                question: "Soft tennis is played in the following events except ",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "SEA Games"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Asian Games"
                    },
                    {
                        id: 2,
                        letter: "c",
                        choices: "US Open"
                    },
                
                    ],
                answer: 'c',
            },
            {
                id: 5,
                question: "The authorized learned________initially.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Soft Tennis"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Lawn Tennis"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Table Tennis"
                    },
                
                    ],
                answer: 'b',
            },                                               
        ]
    },
    // Identifying Problem and Solution
    {
        id: 4,
        difficulty: "Easy",
        moduleName: "Identifying Problem and Solution",
        quizno: "Quiz #1",
        instruction: "Reread the passage and answer the questions",
        story: '<h2><strong>Title: The Stray Dog</strong></h2> <p>Kwan was in his neighborhood walking home from the bus stop when a medium-size dog came running up to him. Kwan bent down for a closer look. The dog was a big fluffy ball of dirt and had no tags. Kwan’s neighborhood was small and he knew no one had a dog like this. There was no doubt about it. The dog was a stray. The dog followed Kwan all the way to his front door. Kwan picked up the dog and walked inside. The dog felt like a huge sack of marbles in Kwan’s arms as Kwan walked into the kitchen. His father was there pouring orange juice into a glass. He took one look at Kwan and the dog and nearly dropped the glass. “You can’t keep it, Kwan,” his father said. “I know, Dad,” said Kwan, putting the dog down on the floor. “But he’s definitely a stray, and I really want to help him.” The dog immediately ran over to the kitchen door where Kwan’s dad kept a pair of running shoes. The dog took both shoes in his mouth and ran back over to Kwan and plopped the shoes down in front of him. Just then, Kwan’s mom walked in. “I guess he likes shoes,” she said. “Why don’t you take him to Uncle Bae’s and see if he wants the dog?” She looked at Kwan pointedly and said, “He gets so few visitors.” Kwan took the hint.</p> <p>“Ok, ok. I’ll go see Uncle Bae,” said Kwan. He grabbed an old belt from the closet to use as a leash and walked out the door. Uncle Bae was Kwan’s least favorite relative. He was about as warm as a block of ice. He was never happy and would sometimes yell at Kwan for no good reason. As a young man, Uncle Bae had been in the army and had his vision severely damaged so that now he could barely see. When Kwan reached his uncle’s house, he rang the bell. “Come in!” his uncle called from inside the house. Kwan walked in to the living room with the dog, saying, “Hi, Uncle Bae. It’s me, Kwan.” His uncle was sitting in an easy chair, frowning. “This stray dog followed me home this afternoon and we thought you might like to keep him.” The dog walked right up to Uncle Bae and wagged his tail, as if he understood Kwan perfectly. “What am I going to do with a dog?” said Uncle Bae angrily. “Get him out. But first, get me my shoes from my bedroom.” Kwan looked at the dog knowingly and smiled. He walked the dog back into Uncle Bae’s bedroom and brought him to the pair of shoes. He took the leash off and the dog grabbed the shoes in his mouth and ran back to Uncle Bae. He plopped the shoes right in Uncle Bae’s lap. Uncle Bae’s face lit up like the sun. It was the first time in a while that Kwan had seen his uncle smile. He looked over at Kwan and said, “So? What should I name him?”</p>',
        questions: [
            {
                id: 1,
                question: "What is the main problem Kwan faces in the story?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Kwan is lost."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Kwan wants to help a stray dog."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Kwan’s dad drops a carton of orange juice."
                    },
                    
                ],
                answer: 'b',
            },
            {
                id: 2,
                question: "What does Kwan’s mother suggest?",
                
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "That Kwan ask Uncle Bae if he wants the dog"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "That Kwan go play at the park"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "That Kwan help his father fi x his shoes"
                    },
                ],
                answer: 'a',
            },
            {
                id: 3,
                question: "What is the solution to Kwan’s problem?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Kwan takes the dog to an animal shelter."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Kwan keeps the dog for himself."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Uncle Bae decides to keep the dog.",

                    },
                ],
                answer: 'c',
            },
        ]
    },
    {
        id: 5,
        difficulty: "Easy",
        moduleName: "Identifying Problem and Solution",
        quizno: "Quiz #2",
        instruction: "Choose the letter of the word from this sentence that tells there is a problem:",
        story: `
        <h2><strong>Title: The Oregon Treaty</strong></h2> 
        <p>For seven decades after its founding, the United States spread west. Different regions were acquired, or added, at different times. By the mid-1800s, the country was as wide as the continent. Sometimes the United States clashed with other countries. It clashed with Great Britain over the Oregon Territory.</p> 
        
        <strong>The Claims</strong> 
        <p>Great Britain wanted the land for its North American colony. That colony would later become Canada. The United States wanted the land for its people. Both the United States and Great Britain had valid, or reasonable, claims to the land. Explorers from both countries had traveled there. Both countries had trading posts there.</p> 
        
        <strong>The Conflict</strong>
        <p>The United States and Great Britain fought each other in the War of 1812. There was still tension between the countries after the war. In 1818 they signed treaties to ease that tension. One treaty assigned, or named, the 49th parallel as the border between the United States and Great Britain’s colony. The border stopped at the Rocky Mountains.</p>
        
        <p>The countries could not decide how to split the Oregon Territory. They said that settlers from both countries could move there. United States citizens migrated to the Oregon Territory by the thousands. To migrate is to move from one place to another. Many used the Oregon Trail, which opened in 1843. The United States felt it had to force its claim to the land. Great Britain saw that it would never rule the whole Territory. Both sides were ready to end the conflict.</p>
        
        <strong>The Compromise</strong> 
        
        <p>In 1845 James Polk became president of the United States. He had used the campaign slogan, or motto, “54–40 or fight!” The 54–40 line formed the Oregon Territory’s northern edge. Polk promised that the United States would own the whole Territory. If needed, he would go to war to get it. In the mid-1840s, the United States was close to going to war with Mexico over Texas. The United States was not strong enough to fight two wars at the same time. For economic reasons, Great Britain was not ready for war either. The two sides agreed to discuss a deal. To discuss something is to talk about it. Polk offered to split the land at the 49th parallel. Britain would get the land north of the line. The United States would get the land south of it. Great Britain had one condition. A border at the 49th parallel would split Vancouver Island. Great Britain wanted the island. Polk agreed. The Oregon Treaty of 1846 was signed. The border was set at the 49th parallel, except at Vancouver Island. There, the line curved south to give the island to Great Britain</p>`,
        questions: [
            {
                id: 1,
                question: "Sometimes the United States clashed with other countries.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Sometimes"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Clashed"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Other"
                    },
                    
                ],
                answer: 'b',
            },
            {
                id: 2,
                question: "Choose the letter of the subhead that indicates a solution to the problem",
                
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "The Claims"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "The Conflict"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "The Compromise"
                    },
                ],
                answer: 'c',
            },
            {
                id: 3,
                question: "Read the map in the passage and choose the letter of the correct answer. Who owned the land south of the Oregon Territory?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Russia"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Mexico"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "United States",

                    },
                ],
                answer: 'b',
            },
        ]
    },
   {
        id: 6,
        difficulty: "Easy",
        moduleName: "Identifying Problem and Solution",
        quizno: "Quiz #3",
        instruction: "Choose the letter of the best answer to each question",
        story: `
            <h2><strong>Title:John Glenn</strong></h2> 
            <p>Many people admire John Glenn as an American hero. He was a pilot, an astronaut, and a U.S. senator. He even became the oldest person ever to fly in space.</p> 

            <strong>Serving His Country</strong> 
            <p>World War II broke out when John Glenn was 20 years old. He joined the army. The problem was that Glenn was not called to serve. He wanted to serve his country. So, he joined the navy. He became a pilot and fought in the war. Later, he joined the marines.</p> 

            <strong>First Place</strong> 
            <p>After the war, John Glenn kept flying. He was picked to be in NASA, the U.S. space program. In 1962 Glenn was the first American to orbit, or fly all the way around, Earth.</p>

            <strong>Serving in the Senate</strong>
            <p>John Glenn was famous because of his trip to space. Still, he had a new goal. He wanted to be a member of the U.S. Senate. In 1964 Glenn ran for the senate. Sadly, he had an accident and hit his head. He was badly hurt. He could not keep running for office. Yet Glenn tried again ten years later. He used his skills as an orator, or public speaker. This time, he won the senate seat. John Glenn served in the senate for 24 years. During this time he wrote a law. The law tried to stop people from getting and making nuclear weapons. It gave rewards to countries that helped.</p> 

            <strong>One More Flight</strong> 
            <p> When John Glenn left the senate, he went back to NASA. He was 77! NASA wanted to find out how space travel would affect older people. So they asked Glenn to help, and he agreed. He flew one final time. He flew around the earth for nine days. He is the oldest person ever to fly in space. John Glenn is a real hero.</p>
        `,
        questions: [
            {
                id: 1,
                question: "Reread paragraph 2. What problem did John Glenn face?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Glenn fought in the war "
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Glenn was not called to serve  "
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Glenn hurt his back"
                    },
                    
                ],
                answer: 'b',
            },
            {
                id: 2,
                question: "What was the solution to Glenn’s problem from question 1 above?",
                
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Glenn joined the navy."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Glenn quit trying."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Glenn went to college instead"
                    },
                ],
                answer: 'a',
            },
            {
                id: 3,
                question: "Reread paragraph 1 on the second page of the passage. What problem did John Glenn face?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Glenn was old and sick"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Glenn hurt himself and could not run for senate"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Glenn was too famous",

                    },
                ],
                answer: 'b',
            },
            {
                id: 4,
                question: "What was the solution to Glenn’s problem from question 3 above?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Glenn became a hero"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Glenn orbited the  earth"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Glenn tried again ten years later",

                    },
                ],
                answer: 'c',
            },
        ]
    },

    // AVERAGE
    {
        id: 7,
        difficulty: "Average",
        moduleName: "Identifying Problem and Solution",
        quizno: "Quiz #4",
        instruction: "Choose the letter of the best answer to each question",
        story: `
        <h2><strong>Title: The Father of Earth Day</strong></h2>
        <p>Imagine a world where pollution filled the sky and turned rivers orange. What would the world be like if the soil was too poisoned to grow food? The world might look like that today if not for Senator Gaylord Nelson.</p>
        
        <strong>A Commitment to the Environment</strong>
        <p>Gaylord Nelson developed an affection, or liking, for nature growing up in northern Wisconsin. He brought his love of the land to his career. In 1959 he became governor of Wisconsin. Governor Nelson worked hard to protect his state’s natural resources. He preserved, or saved, thousands of acres of unspoiled land. The government bought private lands and turned them into public parks. Nelson also started a program that taught young people about the environment and gave them jobs in the state’s parks.</p>
        
        <p>In 1962 Nelson joined the U.S. Senate. He wanted to do for his country what he had done for his state: protect the environment. Few other senators felt the same way. Nelson hoped President John F. Kennedy could produce support for the environment. In 1963 the senator helped plan a national tour for the president. The tour did not create the support that Nelson hoped it would.</p>
        
        <strong>Taking It to the People</strong>
        <p>Senator Nelson looked for another way to show Congress that the environment was important. In 1969, he read about college students protesting against the Vietnam War. Why not plan a protest against pollution? At the time, pollution was a big problem. There were no laws about clean air or clean water. Nelson wanted Congress to pass such laws, but he needed to show that people supported the legislation. He hoped a national protest would do that. Nelson called for pro-environment demonstrations around the country. The protests were held on April 22, 1970. Nelson called the day “Earth Day.” About 20 million people took part. Congress heard the message. It created the Environmental Protection Agency. It passed some of the country’s most important environmental legislation. These laws included the Clean Water Acts, the Clean Air Act, and the Endangered Species Act. Gaylord Nelson left the Senate in 1981. He joined the Wilderness Society, a group that protects public wild lands. In 1995, Nelson won the Presidential Medal of Honor for his work.</p>
        
        <strong>Nelson’s Legacy</strong>
        <p>Gaylord Nelson died in 2005, but Earth Day lived on. Every year since 1970, people around the world have gathered on April 22 to celebrate the environment. Earth Day’s message, however, has changed. Today, Earth Day focuses on what private individuals can do to help the environment. As Gaylord Nelson showed, one person can do a lot.</p>`,
        questions: [
            {
                id: 1,
                question: "Gaylord Nelson wanted to solve a problem. Which sentence from the text best states that problem? ",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Gaylord Nelson developed an affection, or liking, for nature growing up in northern Wisconsin."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "The government bought private lands and turned them into public parks."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Senator Nelson looked for another way to show Congress that the environment was important."
                    },
                    
                ],
                answer: 'c',
            },
            {
                id: 2,
                question: "Which sentence explains where Senator Nelson found an idea for a solution?",
                
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "In 1963 the senator helped plan a national tour for the president."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "In 1969, he read about college students protesting against the Vietnam War."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "About 20 million people took part."
                    },
                ],
                answer: 'b',
            },
            {
                id: 3,
                question: "The solution to Senator Nelson’s problem is also the main idea of the text. Which sentence from the text best describes that solution?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Nelson called for pro-environment demonstrations around the country."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "It passed some of the country’s most important environmental legislation."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "He joined the Wilderness Society, a group that protects public wild lands.",

                    },
                ],
                answer: 'a',
            },
            
        ]
    },



    // AVERAGE
    {
        id: 8,
        difficulty: "Average",
        moduleName: "Identifying Problem and Solution",
        quizno: "Quiz #5",
        instruction: "Choose the letter of the best answer to each question",
        story: `
            <h2><strong>Title:A Race Against the Clock</strong></h2>
            <p>Lian gazed in awe at the enormous redwood trees towering overhead. Her family had toured many fantastic historic sites during their vacation to Northern California. Visiting the majestic redwoods, something Lian had always wanted to do, was the icing on the cake. Lian’s father interrupted her thoughts. He said, “Shake a leg, everyone. We need to hurry to the airport.” Lian and her older brother Shing sprinted to the rental car. Their mother sat in the front passenger seat, anxiously tapping her fingertips against the window. Lian knew her mother was concerned about missing their flight home. After a few moments on the road, Shing said, “Dad, I think you were supposed to turn back there.” He pointed over his shoulder at a road marker. Mr. Yee replied, “Good catch, Shing.” They retraced their route and tried again. Mr. Yee instructed Lian and Shing to keep their eyes peeled and watch for road markers. They successfully exited the park.
            </p>
            <p>Lian and Shing were chatting quietly when they heard a loud “Bang!” Lian’s side of the car sagged low to the ground. Mr. Yee slowed the car and pulled over to the emergency lane. He got out to inspect the left rear wheel. When he returned he told them, “The axle is damaged.” Mrs. Yee telephoned the rental car company. It was decided that a taxi would take the Yees to the airport and a tow truck would bring the car to a repair shop. Lian was on pins and needles while they waited. What would happen if they missed their flight? She was still nervous as they piled into the bright yellow cab. The taxi driver wasn’t worried. He insisted that traffic would not be a problem. He assured them, “Don’t worry. It’s smooth sailing from here on out.” Unfortunately, traffic was a problem. A line of slow-moving cars blocked the airport road. The taxi halted three blocks away from the main terminal. Mr. Yee groaned. Mrs. Yee said, “Kids, grab your things. If we hustle, we can still catch our flight.” Mr. Yee paid the driver. Mrs. Yee, Lian, and Shing removed their luggage from the trunk. Suitcases in hand, they jogged past the line of stopped cars. The Yees charged through the airport and arrived at their gate with minutes to spare. Mrs. Yee studied her family. Their faces were red as they tried to catch their breath. A grin spread across her face as she said, “Next time, we stay near the airport.”</p>
        `,
        
        questions: [
            {
                id: 1,
                question: "What sound marks the beginning of the Yees’ first big problem?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "A loud “bang” from the car"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "A falling redwood in the forest"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "A honking horn in traffic "
                    },
                    
                ],
                answer: 'a',
            },
            {
                id: 2,
                question: "What is the taxi driver wrong about?",
                
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "The rental car’s axle"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Whether the Yees should visit the redwoods"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "What the traffic on the way to the airport will be like"
                    },
                ],
                answer: 'c',
            },
            {
                id: 3,
                question: "How do the Yees travel the last three blocks to the airport?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "The taxi driver takes them to the main terminal."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "They jog the last three blocks to the main terminal."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Mr. Yee drives them to the main terminal.",

                    },
                ],
                answer: 'b',
            },
        ]
    },
    
    // DIFFICULT

    {
        id: 9,
        difficulty: "Difficult",
        moduleName: "Identifying Problem and Solution",
        quizno: "Quiz #6",
        instruction: "Reread the passage and answer the questions.",
        story: `
            <h2><strong>Title:How Zebras Got Their Stripes</strong></h2>
            <p>This story happened a long time ago in Africa. Baboon was very fierce. He was so mean that he told all the other animals that the land belonged to him. Baboon said that only he was allowed to drink from the river. The animals were upset. They needed water to survive. They were sad, and also afraid of Baboon. He had a big head with thick eyebrows and long, sharp teeth. He often showed his teeth to scare the other animals. They did not know what to do. At this time, zebras had all white coats. Young Zebra was brave. He was fearless a
            nd handsome in his white coat. Zebra said, “I am not afraid of Baboon.” So Zebra challenged Baboon to a brawl. Baboon laughed. He rarely lost a fight. They agreed that the loser of the fight would go live on the barren hill. The empty hill was not a nice place to live. The next day, Zebra met Baboon by the river. Baboon had built a bonfire there. Zebra’s white coat glowed. It looked like Zebra had a light inside his body. All of the animals watched the fight.
            </p>
            <p>Both animals leaped and scratched. Zebra jumped at Baboon, but Baboon ducked. Zebra fell into the bonfire and the fire began to burn Zebra. Baboon was busy laughing. He did not see Zebra running out of the fire, straight at him. Zebra kicked Baboon as hard as he could. Baboon flew over the river and onto the empty hill. He was not injured. But his pride was hurt. He had lost. The animals could drink from the river. Zebra won, but the fire had burned long black stripes on his white coat. After that, all zebras had black stripes. Their stripes were a symbol. They make zebras feel proud. They are a reminder of how Zebra won the river and kept water free for all animals.
            </p>
        `,
        questions: [
            {
                id: 1,
                question: "What is the problem, or thing that is wrong, in this story",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Baboon will not let the other animals use the river. He says it is only his."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Baboon will let the other animals use the river."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Everyone can passed through the river."
                    },
                    
                ],
                answer: 'a',
            },
            {
                id: 2,
                question: "What solution, or way to fix the problem, does Zebra have?",
                
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Talk to each other to fix the problem."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "He will not fight Baboon."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "He will fight Baboon. The winner will control the river."
                    },
                ],
                answer: 'c',
            },
            {
                id: 3,
                question: "What are two consequences, or things that happen, because of this solution?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Zebra fell into the bonfire and the fire began to burn Zebra."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Zebra gets burned. He has black stripes on his coat. Baboon loses. He has to live away from the jungle."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Both animals leaped and scratched.",

                    },
                ],
                answer: 'b',
            },
        ]
    },
    {
        id: 10,
        difficulty: "Difficult",
        moduleName: "Identifying Problem and Solution",
        quizno: "Quiz #7",
        instruction: "Choose the letter of the best answer to each question",
        story: `
            <h2><strong>Title:Breaking the Silence American Sign Language</strong></h2>
            <p>(ASL) is used by people who cannot hear. Science student Jose Hernandez-Rebollar realized that not many hearing people knew ASL. He thought of a new tool to help them. 
            </p>
            <strong>Early Years</strong>
            <p>Hernandez-Rebollar is from Mexico, where he was an engineer. He even helped make the largest telescope in the world! In 1998, he came to study in the United States and began to work on his new tool. It was a glove called the AcceleGlove. </p>
            <strong>His Invention</strong>
            <p>The logic behind his glove is that people use their hands to sign. When someone puts the glove on, the glove sends signals when the hand and wrist move. The glove turns the motion into words. A computer reads the signals. It sorts the type of hand movement. The hand movement is matched with the right word. An automatic computer voice says the word.</p>
            <strong>Uses for the Glove </strong>
            <p>The AcceleGlove can do many things. It can help people talk quickly. It can be used to teach sign language. The glove can also translate ASL into Spanish as well as English. This can help people who move to this country. One day the glove may help make one common sign language. More studies are planned for the glove. The glove will learn more words. It will make fewer mistakes. People who can hear can also use the glove. The armed forces use a communication technique that involves silent hand movements out in the field. The glove can help them send notes just by moving their hands. The glove might also be used to play games on a computer. It could help people play in a new way. One day, the glove could end up meeting the needs of both people who can and cannot hear.
            </p>
        `,
        questions: [
            {
                id: 1,
                question: "What is one problem explained in paragraph 1?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "ASL is very common to people."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Few people who could hear knew ASL."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Many people knew ASL."
                    },
                    
                ],
                answer: 'b',
            },
            {
                id: 2,
                question: "What is a solution to the problem in paragraph 1?",
                
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Jose Hernandez-Rebollar decided to make a new tool that would help th limp"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Jose Hernandez-Rebollar decided to make a new tool that would help the people with vision impairment  "
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Jose Hernandez-Rebollar decided to make a new tool that would help the hearing impaired speak with the hearing."
                    },
                ],
                answer: 'c',
            },
            {
                id: 3,
                question: "Paragraph 6 discusses the hearing impaired who move to the United States. What is the problem that Jose Hernandez-Rebollar’s invention tries to prevent? What is the solution his invention offers?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "The problem is that hearing-impaired people who move to this country and only speak Spanish may have trouble understanding ASL. The solution is that the invention translates ASL into Spanish as well as English."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "The problem is that people who has vision impairment may experience vision blurry when they are outside during the night."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "The problem is that limp people is prone to accident during natural disasters or calamities.",

                    },
                ],
                answer: 'a',
            },
        ]
    },
    {
        id: 11,
        difficulty: "Difficult",
        moduleName: "Identifying Problem and Solution",
        quizno: "Quiz #8",
        instruction: "Choose the letter of the best answer to each question",
        story: `
            <h2><strong>Title:The Mysterious Olmecs</strong></h2>
            <p>The Olmec people were an ancient people who lived around 1200–400 b.c. in Middle America. Today we call that area Mexico and Central America. There is a lot that is mysterious about the Olmecs. We know that they made their own written language. They invented a complex calendar. Yet their numbers and written language are hard for us to figure out. We also see the Olmecs’ mark on later cultures, such as the Mayans and Aztecs. One thing we know is that the Olmecs were advanced for an ancient people. The Olmec name means “people of rubber country.” They lived where rubber trees grew. The Olmecs were likely the first people to make what we think of as rubber. They mixed vine juice with a liquid from the trees. With this mixture, they made balls that bounced high. Later cultures continued playing ball games and using rubber products. </p>
            <strong>Early Writing in the Americas </strong>
            <p>Archaeologists learned that the Olmecs were the first people in the Americas to write. Scientists found a stone dating back to abou t 900 b.c. It had symbols and pictures carved into it. More symbols were on statues and masks. One rock slab has 465 carvings. So far, no one has been able to break the written code.</p>
            <strong>A Matter of Time Olmec </strong>
            <p>Calendars combined two working calendars. Priests wanted to keep track of their ceremonies, so they first made a calendar with 260 days. They created another calendar with 360 days for other events. The two calendars together were called the Long Count calendar. Long Count dates used five simple numbers made up of lines and dots.</p>
            <strong>Zero and Counting </strong>
            <p>Scientists give credit to the Olmecs for inventing zero. The Olmecs used a base-20 counting system. They wrote separate numbers from 1–20, just as we do for 1–10 today. To make their system work, they needed a zero. The idea of zero is common to us. However, it is really a very complex idea. Sometimes zero serves as a placeholder to help other numbers. Zero also stands on its own as a whole number. The Olmecs understood that. Most ancient people did not. </p>
            <strong>Stone Sculptures </strong>
            <p>Huge stone faces were found at several Olmec sites. The reason for the stone heads is unknown. These rock carvings range in size from five to nine feet tall. The images all have grim, flat faces. Each head wears what looks like a helmet. Perhaps they are images of the leaders. Maybe these leaders made the artisans and laborers carve their images. We still have a lot to learn about the Olmecs. What we have learned so far points to an early, advanced culture. Scientists have many mysteries to figure out as they study the Olmec people.</p> 
        
        `,
        questions: [
            {
                id: 1,
                question: "Look at the text under the heading “A Matter of Time.” What problem did the Olmec priests have with their ceremonies?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "The Olmec priests wanted to keep track of their ceremonies."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "The Olmec priests did not wanted to keep track of their ceremonies."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "The Olmec priests let others to keep track of ceremonies."
                    },  
                    
                ],
                answer: 'a',
            },
            {
                id: 2,
                question: "Keep reading the text under “A Matter of Time.” What did the Olmec priests create to solve this problem?",
                
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "They created one working calendars with different numbers of days on each one."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "They created two working calendars with different numbers of days on each one."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "They created three working calendars with different numbers of days on each one."
                    },
                    ],
                answer: 'b',
            },
            {
                id: 3,
                question: "How did the Olmecs solve the problem of counting from 1 to 20?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "They invented the zero."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "They created a written language."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "They carved numbers into huge stone faces.",

                    },
                ],
                answer: 'a',
            },
        ]
    },
    

    // Finding Cause and Effect

    {
        id: 13,
        difficulty: "Easy",
        moduleName: "Finding Cause and Effect",
        quizno: "Quiz #1",
        instruction: "Reread the passage and answer the questions",
        story: `
            <h2><strong>Title: The Electric Car</strong></h2>
            <p>We charge our phones. We charge our computers. But have you ever seen a person charge his or her car? Some cars use electricity to run instead of gas. An electric car uses a battery. It is plugged in to recharge. Would you buy an electric-powered car? 
            </p>
            <strong>History</strong>
            <p>In the 1890s, many people used electric cars. They were easy to drive. They were great in cities. The cars drove smoothly. They made little noise. They did not smell like gas cars. 
            </p>
            <p>Then, in 1908, Henry Ford made the Model T. It was gas-powered. It ran better than the old gas cars. Many were made. And they were cheap. People could buy them. People stopped using the electric car.</p>
            <strong>Benefits</strong>
            <p>Today, more people are driving electric cars. They are good for the planet. They do not pollute the air. They are easy to care for. There are fewer parts to their engines. This often means fewer problems. 
            </p>
            <p>These cars do not need oil changes or trips to the gas station. Unlike gas, we do not need to buy electricity from other countries. 
            </p>
            <strong>Problems</strong>
            <p>There are a few problems with the electric-powered car. There are only a few places to recharge these cars. A full charge can take a few hours. Most electric cars do not go very far on just one charge. A car can go farther on a full tank of gas. </p>
            <p>The batteries may also need to be changed or replaced. They are also big and heavy. They cost a lot of money</p>
            <strong>Future</strong>
            <p>The electric car has a long history. Today, electric cars are working better. We will soon see more of these cars on the road!
            </p>
        `,
        questions: [
            {
                id: 1,
                question: "A cause is why something happens. In paragraph 2, what was a possible cause of people driving electric cars in cities?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Electric cars were used by many people in the 1890s."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Electric cars were easy to drive."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "People liked the smell of gas-powered cars."
                    },
                    
                ],
                answer: 'b',
            },
            {
                id: 2,
                question: "An effect is what happens. In paragraph 3, what was the effect of the Model T?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Electric cars became more popular."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Gas-powered cars became less popular."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Electric cars became less popular"
                    },
                    ],
                answer: 'c',
            },
            {
                id: 3,
                question: "Under the heading Benefits, what is a possible cause of a person choosing an electric car over a gas-powered car? ",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Electric cars do not pollute the air."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Electric car batteries cost a lot of money to replace."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Electric cars are hard to care for."
                    },
                    ],
                answer: 'a',
            },
        ],
    },
    {
        id: 14,
        difficulty: "Easy",
        moduleName: "Finding Cause and Effect",
        quizno: "Quiz #2",
        instruction: "Reread the passage and answer the questions",
        story: `
            <h2><strong>Title: Stars</strong></h2>
            <p>Long ago, people thought a big dome was over Earth, like a cover. They thought stars were lights on the dome. The stars seemed to move. Now, we know this is not true. Stars are big glowing balls of plasma, the fourth state of matter. Stars look small because they are far away. </p>
            <strong>What Is a Star? </strong>
            <p>Stars are mostly made up of hydrogen. The core of a star is very hot. When lots of pressure squeezes this hot center, hydrogen is changed into helium. This change releases a lot of energy, causing the star to shine brightly</p>
            <p>Stars lie on a spectrum of color. It ranges from red to yellow to blue. Blue stars, like Betelgeuse (BEE-tehl-jooz), are the hottest. A red star, like Rigel (RIGH-jehl), is not as hot. The blue star has the higher core temperature</p>
            <strong>The Sun </strong>
            <p>The sun is the star at the center of our solar system. It looks bigger than other stars because it is much closer to Earth. The sun is very important to Earth. It gives off most of the energy Earth needs to support life. Without the sun, Earth would be a lifeless rock floating in space!
            </p>
            <strong>Turning Out the Lights </strong>
            <p>Stars do not last forever. After billions of years, a star will use up all of its hydrogen. Then, a small star will stop shining. This will happen to the sun billions of years from now. 
            </p>
            <p>A large star, though, ends in an explosion. This is called a supernova (soo-per-NO-va). Then, all of the star’s material gets crushed and the star stops shining. Very large stars become black holes. In a black hole, the crushed material becomes heavy, causing a strong inward pull. This pull sucks in anything close by. Even light cannot escape from a black hole! 
            </p>
            <p>The sun and other stars have amazed people for years. Stars light up the sky, and they make life on Earth possible. Look up at the sky on a clear night. What do you see?
            </p>
        `,
        questions: [
            {
                id: 1,
                question: "A cause is why something happens. What is the cause in paragraph 2?  ",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Lots of pressure squeezes the core of a star, changing hydrogen into helium. The change releases a lot of energy."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "The sun will eventually stop shining."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Red stars are not as hot as blue stars."
                    },
                    
                ],
                answer: 'a',
            },
            {
                id: 2,
                question: "An effect is what happens. What is the effect of the cause in paragraph 2? ",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Stars lie on a color spectrum."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "The star shines brightly."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Large stars end in explosions."
                    },
                ],
                answer: 'b',
            },
            {
                id: 3,
                question: "What is one example of a cause and an effect in paragraph 4?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "When a large star explodes, the star’s material becomes crushed and heavy. Effect: A black hole forms that has a strong inward pull that sucks in anything close by."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Stars do not last forever. After billions of years, a star will use up all of its hydrogen. "
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "The crushed material becomes heavy, causing a strong inward pull. This pull sucks in anything close by. Even light cannot escape from a black hole"
                    },
                    
                    ],
                answer: 'a',
            },
        ]
    },
    {
        id: 15,
        difficulty: "Easy",
        moduleName: "Finding Cause and Effect",
        quizno: "Quiz #3",
        instruction: "Reread the passage and answer the questions",
        story: `
            <h2><strong>Title: Is There Life Out There? </strong></h2>
            <p>Scientists who study astrobiology look for life in space. They have been studying one of Jupiter’s moons. That moon is Europa. 
            </p>
            <p>Europa is a little smaller than Earth’s moon. It is covered by a sheet of ice. Its surface is too cold and has too much radiation for anything to live there. Scientists want to know what is under the ice. They believe that is where life on Europa might be. 
            </p>
            <strong>What Life Needs </strong>
            <p>For years, scientists thought all life on Earth depended on energy from the sun. During a process called photosynthesis, plants use energy from sunlight to make food and to put oxygen into the atmosphere, or air. Aerobic creatures use that oxygen to breathe. Sunlight also provides warmth. 
            </p>
            <p>Scientists believed that nothing could live in extreme, or severe, temperatures. Scientists once thought that all food chains led back to plants and photosynthesis. New discoveries have changed what scientists think about life. They have found creatures living around hydrothermal vents, or openings, on the ocean floor. These creatures do not depend on the sun or plants for food and energy.
            </p>
            <p>The animals living around hydrothermal vents eat bacteria that live on or below the ocean floor. The bacteria get energy through a process called chemosynthesis. Hydrothermal vents spit warm water filled with chemicals from inside the earth. The bacteria use these chemicals as a source of food and energy. </p>
            <strong>New Possibilities </strong>
            <p>The discovery of life near the vents changed the way scientists think about life in space. They no longer have to look only for places with sunlight and oxygen. Planets with oceans and hydrothermal vents might also support life. Based on these discoveries.
            </p>
            <p>Europa began to seem like a place where life might exist. Europa has oxygen in its atmosphere, but the oxygen does not come from photosynthesis. Europa is too far from the sun and too cold for plants to live. Its surface temperature is usually more than 200 degrees below zero Fahrenheit. 
            </p>
            <p>Europa does have oceans. The ice on this moon covers what looks like moving liquid water. Are there hydrothermal vents in the oceans? Scientists do not know. If the oceans have vents, they might support life. People need to visit Europa to find out. 
            </p>
            <p>Until then, scientists are studying the most Europa-like environment they can find on Earth: Lake Vostok in Antarctica. Like Europa’s oceans, Lake Vostok sits miles beneath a frozen surface. It does not receive direct sunlight, either. Therefore, like Europa, the lake cannot support photosynthetic life. If scientists find life in the lake, it would support the idea that Europa might also have life.
            </p>
        `,
        questions: [
            {
                id: 1,
                question: "Why did scientists initially think life could not exist on Europa?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "There is no oxygen on Europa"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Europa's water is frozen."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Europa lacks sunlight"
                    },
                    
                ],
                answer: 'c',
            },
            {
                id: 2,
                question: "Which discovery changed how scientists think about life in space?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Europa"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Chemosynthesis"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Lake Vostok"
                    },
                    ],
                answer: 'b',
            },
            {
                id: 3,
                question: "If scientists find life in Lake Vostok, how would that affect their ideas about Europa?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Finding life on Europa would seem more likely."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Finding life on Europa would seem less likely."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Ideas about life on Europa would not change."
                    },
                    
                    ],
                answer: 'a',
            },
        ]
    },

    // Average

    {
        id: 16,
        difficulty: "Average",
        moduleName: "Finding Cause and Effect",
        quizno: "Quiz #4",
        instruction: "Reread the passage and answer the questions",
        story: `
            <h2><strong>Title: Victor Ochoa’s New Idea </strong></h2>
            <p>Inventors are people who make new things. Victor Ochoa was an inventor. One thing he made was a flying machine. It was one of the first airplanes ever made. Victor watched birds fly. He used what he learned about flying to build a plane. 
            </p>
            <strong>Many Jobs </strong>
            <p>Victor was born long ago in Mexico, but grew up in Texas. He had many jobs. One job was for a newspaper. He wrote stories for the paper. He even started two new newspapers of his own! Sometimes the jobs were hard, but Victor never gave up. 
            </p>
            <strong>A New Plane</strong>
            <p>Victor’s mind was a motor that did not turn off. He was always thinking of new ways to make life better. In 1908, he was still thinking about how birds fly. He wondered how he could fly too. He began to work on a plane that could fly like a bird. 
            </p>
            <p>Victor’s plane was made of two bicycles, side by side. There was a small motor in the middle, between the bikes. The back of the plane looked like a bird’s tail. The wings were made of canvas, a tough cloth. He put the cloth on strong, metal pipes shaped like wings. The wings of his plane folded, like a bird’s wings. He could put his plane in a small shed or barn.
            </p>
            <p>Victor worked very hard to make his plane work. He worked on it for over twenty years. He wrote the Navy a letter about his invention. In the letter, he told them why his plane was a good idea. But no one knows if his plane ever flew. 
            </p>
            <strong>Other New Ideas </strong>
            <p>Victor did not stop. Making new things from new ideas was the blood that pumped through his body. He made new tools. Some are still used today. He made a pen that held its o wn ink. 
            </p>
            <strong>Never Give Up </strong>
            <p>Victor was a spinning top. He kept going and going. He was always working. His ideas did not always work. But Victor Ochoa never stopped trying. That was the important thing.</p>
        `,
        questions: [
            {
                id: 1,
                question: "In the third paragraph, what does the text say caused Victor to think of new inventions?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Victor wanted more jobs"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Victor wanted to make life better."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Victor wanted to make more plane"
                    },
                    
                ],
                answer: 'b',
            },
            {
                id: 2,
                question: "What effect did thinking about how birds fly have on Victor?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "He wanted to make a plane that could fly like a bird"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "He wanted to fly like a bird"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "He wants a plane"
                    },
                    ],
                answer: 'a',
            },
            {
                id: 3,
                question: "What are two things that Victor invented to make life better?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "He invented a flying machine with wings like a bird. He made a pen that held its own ink."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "He invented a telescope with high definition vision"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "He invented a super computer"
                    },
                    ],
                answer: 'a',
            },
        ]
    },
    {
        id: 17,
        difficulty: "Average",
        moduleName: "Finding Cause and Effect",
        quizno: "Quiz #5",
        instruction: "Reread the passage and answer the questions",
        story: `
            <h2><strong>Title: A Letter to Helen Keller</strong></h2>
            <p>Dear Ms. Keller,</p>
            <p>My name is Amelia Grant. I live in Nome, Texas. My papa runs an oil factory there. When I was eight, one of the oil wells blew up. I was very close to it. Because of this, I lost my hearing. 
            Now I am 12, and a lot has changed. For one, I cannot hear music or my mother sing. I feel music instead of hearing it. Also, I have to go to a new school, which is far away. It is called Texas School for the Deaf. It is a long stretch from Nome. I read a book you wrote called The Story of My Life. You tell how you made loud noises and got mad when people did not understand you. Your mom and dad were frustrated by the way you acted. You must have driven your parents up the wall! I also read about your teacher, Ms. Sullivan. She taught you about words. Because of Ms. Sullivan, you can read and write.</p>
            <p>Just like you, I ask lots of questions to learn. I am learning more now than I ever did when I could hear. My mom always says that “every cloud has a silver lining.” Maybe she is right. Even when something really bad happens, a good thing can come from it. Back in Nome, my best friend is Anna Bailey. When I lost my hearing, I thought Anna might not be my friend. But I was wrong. Anna stayed friends with me, even though I could not hear. Anna said, “It might take some time, but you will learn to live a good life.” Anna was right. She really made me feel better. You have inspired me with your life and your book. Even though you are deaf and blind, you can do almost anything! You even went to college. You are a hero to me. That is why I am writing to you. I hope that one day I can visit you, and we can learn more about each other. 
            </p>
            <p>Sincerely,<br> Amelia Grant <br>January 15, 1912</p>
        `,
        questions: [
            {
                id: 1,
                question: "Reread the first paragraph. What happened to Amelia when the oil well blew up? ",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Amelia lost most of her smell"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Amelia lost most of her eyesight."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Amelia lost most of her hearing."
                    },
                    
                ],
                answer: 'c',
            },
            {
                id: 2,
                question: "Reread paragraph 2. What changed for Amelia when she lost her hearing? ",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Amelia cannot hear music or her mother sing."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Amelia cannot hear music or her father sing."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Amelia cannot hear music or her sister sing."
                    },
                    ],
                answer: 'a',
            },
            {
                id: 3,
                question: "Look for signal words and phrases like “as a result,” “so,” and “because of” in the fi fth paragraph. How was Helen Keller able to read and write?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "because every cloud has a silver lining. "
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "because Helen’s parents were frustrated "
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "because of Ms. Sullivan"
                    },
                    
                    ],
                answer: 'c',
            },
        ]
    },
    {
        id: 18,
        difficulty: "Average",
        moduleName: "Finding Cause and Effect",
        quizno: "Quiz #6",
        instruction: "Reread the passage and answer the questions",
        story: `
            <h2><strong>Title: History of Human Flight</strong></h2> 
            <p>Wanting to Fly Like Birds Humans have always wanted to fly. They even tried to copy birds by putting wings on their arms. But there was a problem. The wings did not work because birds and humans do not have the same kind of muscles.</p> 
            <p>The first big step for human flight was the kite. Some kites were used for fun. Others were used to test the weather. But kites could not carry people. For that, people made balloons and gliders.</p> 

            <strong>Hot Air Balloons</strong> 
            <p>The first hot air balloon was a silk bag. It was filled with smoke. This made the balloon lighter than the air. Because of this, the bag rose into the sky. People could ride in this kind of balloon.</p>

            <strong>Gliders</strong>
            <p>The next big step in human flight was the glider. A glider does not float. It falls to earth. It falls slowly, so it can stay in the air a long time. People can fly gliders where they want to go.</p> 
            <p>Some people made gliders better. George Cayley added a tail. It made the glider more stable and easier to fly. Otto Lilienthal made a glider that could go far. Sam Langley added an engine.</p>
            
            <strong>Really Flying</strong> 
            <p>A glider would allow people to fly, but it would not let them go far. Octave Chanute wrote a book about human flight. Two brothers, Wilbur and Orville Wright, read the book. The Wright brothers were great thinkers. First, they did tests with balloons and kites to learn about wind. Then they worked on an engine. After five years of study, they used all their knowledge to make their “Flyer.” On December 17, 1903, the Wright brothers tested their flying machine. It worked! Orville Wright flew 120 feet in twelve seconds. Humans had learned to fly at last.</p>
        `,
        questions: [
            {
                id: 1,
                question: "Why did wooden wings not work?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "They did not work because wooden wings is heavy"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "They did not work because birds and humans do not have the same kind of muscles."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "They did not work because wooden wings is not properly assembled "
                    },
                    
                ],
                answer: 'b',
            },
            {
                id: 2,
                question: "Why did people make balloons and gliders?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "People made balloons and gliders to carry people."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "People made balloons and gliders to have fun"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "People made balloons and gliders to sell in the market."
                    },
                    ],
                answer: 'a',
            },
            {
                id: 3,
                question: "What was the effect of adding a tail to the glider?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "The tail made the glider more unstable to fly"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "The tail made the glider heavy to fly"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "The tail made the glider more stable and easier to fly"
                    },
                    
                    
                        ],
                answer: 'c',
            },
            {
                id: 4,
                question: "“Really Flying.” What was the effect of the Wright brothers’ work?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Humans could finally sell wooden wings."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Humans could finally fly."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Humans could finally travel."
                    },
                    
                    
                    ],
                answer: 'b',
            },
        ]
    },
    {
        id: 19,
        difficulty: "Average",
        moduleName: "Finding Cause and Effect",
        quizno: "Quiz #7",
        instruction: "Reread the passage and answer the questions",
        story: `
            <h2><strong>Title: A Firehouse Lesson</strong></h2>
            <p>Julie sat at a table in the firehouse, doing her homework. Her older brother Charlie, a firefighter, sat nearby. Julie said, “Why do I have to be here? It is so noisy.” “Mom is not home so it is better if you are with me,” Charlie reminded her. “What are you working on a nyway?” “A difficult science lesson from Mrs. Krandle,” Julie said. Charlie looked at her book and said, “Maybe I can help.”</p> 

            <strong>The Pull of Gravity</strong> 
            <p>Charlie walked over to the fire pole, a metal pole which ran through a hole in the floor. It joined the two floors of the firehouse. Charlie explained, “Using this pole helps firefighters get downstairs.” Then he slid down the pole. Charlie yelled up, “Gravity pulled me down here.” He walked back upstairs. “Gravity pulls objects toward each other.”</p>

            <strong>A Ball in Motion</strong> 
            <p>Charlie took another look in Julie’s notebook. He took a ball from a table drawer and placed it on the floor. Then, he called out to the firehouse’s young dog, Wheels, who came running. He said, “Let’s try a test. Look at this ball. Inertia means that an object at rest tends to stay at rest.” The ball didn’t move. The ball excited Wheels, the dog. Charlie signaled to Wheels to stay in place, too. Charlie said, “A force is something that moves, stops, or changes the motion of an object. Look what happens when I use force to move the ball.” Charlie pushed the ball, and it rolled across the floor. Charlie explained, “The ball keeps rolling. That’s inertia again. Inertia means that an object in motion tends to stay in motion unless acted on by an outside force.” Charlie called out to Wheels again. “Wheels, fetch the ball!” Wheels ran to the ball and picked it up with his mouth. “Did you see how quickly Wheels got to the ball? And how far he went to get it?” Charlie asked. “That is speed. Speed is the distance an object moves in a certain amount of time.” Julie laughed and said, “Thanks Charlie, this helped a lot. Maybe I will even come back to the firehouse tomorrow to learn more.”</p>
        
        `,
        questions: [
            {
                id: 1,
                question: "A cause is why something happens. What is the cause in this sentence from the passage? Charlie pushed the ball, and it rolled across the floor",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Charlie pushed the ball."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Charlie kick the ball."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Charlie pass the ball."
                    },
                    
                ],
                answer: 'a',
            },
            {
                id: 2,
                question: "An effect is what happens. What is the effect in this sentence from the passage? Charlie pushed the ball, and it rolled across the floor.",
                
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "It rolled across the road"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "It rolled across the floor."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "It rolled towards the door"
                    },
                    ],
                answer: 'b',
            },
            {
                id: 3,
                question: "In the passage, what is one example of cause and effect under the head The Pull of Gravity? What is the cause of this effect?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "The tail made the glider more unstable to fly"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "The tail made the glider heavy to fly"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Charlie sliding down the pole is the effect, and gravity is the cause.",

                    },
                    ],
                answer: 'c',
            },
        ]
    },
    {
        id: 20,
        difficulty: "Average",
        moduleName: "Finding Cause and Effect",
        quizno: "Quiz #8",
        instruction: "Reread the passage and answer the questions",
        story: `
            <h2><strong>Title: Working on the Weather</strong></h2>
            <p>The summer of 1849 was very hot. It was so hot that it is still called the Great Heat. At the time, wagon trains carried many people from the Midwest to California where gold made people rich. They heard the w eather was beautiful all year. 
            </p>
            <p>One group was about to leave, when Febold Feboldson came along. He told the people how he could fix the weather, and they decided to stay. It soon began to rain. 
            </p>
            <p>The problem was that because it was so hot, all the rain turned to steam when it got close to the ground. The steam cooled off and soon the land was covered in a thick fog. It was so thick that animals drank water right out of the air! The fog blocked the sun so that it was dark. Without light, the seeds could not grow.</p>
            <p>Febold Feboldson quickly ordered some fog scissors from London, a city where it is very foggy. He cut the fog out of the air in strips. He laid the strips down on the roads so that they would not drown the fields, which made the farmers glad. After a while, dust and dirt covered the roads and buried the fog.
            </p>
            <p>For a while, it seemed as if the wea ther had been fixed in the Midwest. But, the next spring, the fog came leaking out of the ground. It turned country roads into rivers of mud! </p>
            <p>The people were mad because they could not travel on the muddy roads. They begged Febold to help dry up the mud. So, Febold built a huge fan to blow away the fog and dry the roads. The sun began to shine brightly again, but for too long. It caused a long drought. There was just not enough rain, and crops began to die again! It was worse than before! 
            </p>
            <p>Febold was annoyed that it was so hard to work with this weather! He had to start the rain again, so he built the biggest bonfires anyone had ever seen. He wanted to get the fires really hot. Soon, water in the lakes began to evaporate and form clouds. Before long, the rain began to fall! 
            </p>
            <p>Once Febold started the rain, it rained again from time to time. But for a while, the people in the Midwest had nowhere to swim. There was no water in the lakes!
            </p>
        `,
        questions: [
            {
                id: 1,
                question: "What is one reason many people moved from the Midwest to California?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "They heard the weather was beautiful every 6 months."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "They heard the weather was beautiful all year."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "They heard the weather was beautiful every December."
                    },
                    
                ],
                answer: 'b',
            },
            {
                id: 2,
                question: "What caused one group to say they would stay?",
                
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Febold Feboldson told them that he will build biggest bonfires."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Febold Feboldson told them that he will start the rain"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Febold Feboldson told them he could fix the weather."
                    },
                    ],
                answer: 'c',
            },
            {
                id: 3,
                question: "Reread paragraphs 5-8 of the passage. Why were people mad?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Because they could not travel on the muddy roads."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Because of the strong heat."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Because they was covered with dust and fog.",

                    },
                    ],
                answer: 'a',
            },
            {
                id: 4,
                question: "What did Febold do to start the rain again?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "He cut the fog out of the air in strips."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "He built the biggest bonfires anyone had ever seen."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "He built a largest container of water",

                    },
                    ],
                answer: 'b',
            },
        ]
    },

    // Difficult

    {
        id: 21,
        difficulty: "Difficult",
        moduleName: "Finding Cause and Effect",
        quizno: "Quiz #9",
        instruction: "Reread the passage and answer the questions",
        story: `
            <h2><strong>Title: At Home in the Desert</strong></h2>
            <p>Georgia O’Keeffe always thought of herself as an artist. At the age of 41, O’Keeffe was living in New York City and becoming a well-known painter. Her husband was a famous photographer who helped her show her work. It was the life she had always dreamed about, but O’Keeffe wasn’t happy. O’Keeffe felt like she needed a change. She had visited New Mexico in 1917 with her sister, and the wide open space had thrilled her. “Maybe I should go back,” she thought. Her friend Mabel Dodge Luhan agreed. In April of 1929, O’Keeffe packed her bags and went to stay with Luhan in her home in Taos, New Mexico. O’Keeffe wrote to her husband, “Mabel’s place beats anything you can imagine about it—it is simply astonishing.” The wide open space drew O’Keeffe in. Because the light was so clear, she felt like she could see for the first time. O’Keeffe began painting with more energy. Animal skulls and desert flowers filled her canvas es. The colors of the desert inspired her, and she began using them in her artwork.</p>
            <p>That August, O’Keeffe went home to New York. It was the start of a pattern. Each spring, she traveled to New Mexico to paint. These trips restored her spirit. Then, in the fall, she would return to New York to show her work. Each time O’Keeffe visited New Mexico, she explored a little more. Every day, she would set out to look for new scenes to paint. She started keeping her paints in the backseat of her car. That way, she could pull them out whenever she saw something she wanted to paint. The bleached animal bones and skulls that O’Keeffe found excited her. She could see their special beauty. The bones didn’t mean death to O’Keeffe. To her, they showed the enduring beauty of the desert. The landscapes, clear light, and bright colors pleased her. She often painted close-ups of the rocks and mountains. Later, she began to travel more in search of new ideas. However, she always came back to New Mexico. As O’Keeffe grew older, her eyesight began to fail, and it became hard to paint. Still, O’Keeffe wasn’t ready to give up. Her friend Juan Hamilton helped her paint with watercolors. He also taught her to sculpt. As a result, she made art into her 90s. When O’Keeffe died at the age of 98, Hamilton sprinkled her ashes over the desert. Her body became part of the land that had touched her art and her life.</p>
        `,
        questions: [
            {
                id: 1,
                question: "What caused Georgia O’Keeffe to visit New Mexico?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "She wants to start a new life."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "She wants to travel."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "She wasn’t happy and felt she needed a change."
                    },
                    
                ],
                answer: 'c',
            },
            {
                id: 2,
                question: "What things in New Mexico affected Georgia O’Keeffe’s art the most?",
                
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "The clear light, desert colors, skulls, and flowers interested O’Keeffe."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "New scenes to paint."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Close-ups of rocks and mountains."
                    },
                    ],
                answer: 'a',
            },
            {
                id: 3,
                question: "What happened when Georgia O’Keeffe’s eyesight grew weak?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "She focused on sculpture."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Her friend Juan Hamilton helped her paint with watercolors and taught her to sculpt."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "She continue to paint a close-ups of rocks and mountains.",

                    },
                    ],
                answer: 'b',
            },
        ]
    },
    {
        id: 22,
        difficulty: "Difficult",
        moduleName: "Finding Cause and Effect",
        quizno: "Quiz #10",
        instruction: "Reread the passage and answer the questions",
        story: `
            <h2><strong>Title: Roberto Clemente: A Sports Legend </strong></h2>
            <p>	American baseball Hall of Famer Roberto Clemente was born in 1934 in Puerto Rico. He was a poor Latino boy growing up, but his future was bright. Clemente was outstanding in most sports as a child. Then in high school, he started focusing on baseball. Baseball recruiters learned of his exceptional talent. </p>
            <p>Soon Clemente was offered a baseball contract with the Dodgers when he was still in high school. He accepted. One year later Clemente was traded to the Pittsburgh Pirates. He then played ball with the Pirates for 18 seasons. Clemente died an untimely death at age 38 in a tragic plane crash. </p>
            <strong>Strike One </strong>
            <p>Clemente didn’t speak English when he arrived in America. Then he discovered the problem of discriminati on. As a black Latino, Clemente had not thought much about his race. However, in the 1950s, the United States had laws that separated blacks and whites. Clemente had to find separate hotels during spring training. He often ate his meals alone on the team bus.</p>
            <p>Sports reporters did not rally around Clemente. They teased him for his strong Latino accent. He felt like an outsider in America. Clemente learned to speak out. He let everyone know when someone was treated unfairly. Reporters tried to call him the American nicknames “Bob” and “Bobby.” Clemente said words to the effect of “I’m Puerto Rican. My name is Roberto.” He was proud of his heritage. </p>
            <strong>Play Ball </strong>
            <p>Clemente was a hard hitter. His lifetime batting average was .317. He won four National League batting titles and got 3,000 base hits. He routinely kept batters from getting to base. He could outrun balls hit between right and center field. Clemente won 12 Gold Glove awards, which are given to the best fielding players. </p>
            <strong>Making a Difference </strong>
            <p>Clemente was a planner and a doer. In 1972 Nicaragua suffered a huge earthquake. Clemente wanted to take supplies to the victims. On New Year’s Eve, Clemente boarded a plane to Nicaragua. The plane took off, and quickly one of the engines exploded. Then there was another blast. Two more explosions followed. The plane went down lik e a fireball. Fans around the world mourned the death of Clemente. 
            </p>
            <p>Clemente had seen people struggle, and he wanted to help. Those who knew him best would say that Clemente was a model of hard work. He was a man of integrity who stood by what he believed. Clemente was willing to break down barriers and lead the way for others to follow. Roberto Clemente was a true success.</p>
        `,
        questions: [
            {
                id: 1,
                question: "Look at the paragraph under the heading “Strike One.” What were two ways Clemente faced discrimination in the 1950s?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Clemente had to find separate hotels and often ate meals alone on the team bus."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Clemente was bullied and harassed"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Clemente had to find separate team bus."
                    },
                    
                ],
                answer: 'a',
            },
            {
                id: 2,
                question: "Which statement below describes an effect of Clemente’s great skill in baseball? ",
                
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Clemente spoke out against unfair treatment. "
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Clemente wanted people to call him “Roberto,” not “Bob.” "
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Clemente won many awards, including 12 Gold Gloves."
                    },
                    ],
                answer: 'c',
            },
            {
                id: 3,
                question: "Look at the text under the heading “Making a Difference.” What caused Clemente to fly to Nicaragua in 1972?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "A typhoon had hit there, and he wanted to help the victims."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "An earthquake had hit there, and he wanted to help the victims."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "A tsunami had hit there, and he wanted to help the victims.",

                    },
                    ],
                answer: 'b',
            },
        ]
    },
    {
        id: 23,
        difficulty: "Difficult",
        moduleName: "Finding Cause and Effect",
        quizno: "Quiz #11",
        instruction: "Reread the passage and answer the questions",
        story: `
            <h2><strong>Title: The New York City Triangle Shirtwaist Fire In 1911 </strong></h2>
            <p>New York City was crowded with factories. One of the largest employers was the garment industry, which made clothes. There were so many garment factories that owners had to compete to make money. As a result, they didn’t pay their workers much. The factories were crowded and dirty. Immigrant women and girls often took these jobs to help support their families. The women there worked long hours cutting and sewing fabric. 
            </p>
            <p>The Triangle Shirtwaist Factory made a popular women’s blouse called the shirtwaist. The factory occupied the top three floors of a building. Sewing machines and cutting tables crowded every inch of space. There was barely room to walk. Cloth scraps littered the floors. Thread and cloth hung over chairs and tables.</p>
            <p>At 4:45 p.m. on March 25, 1911, a blazing fire broke out at the Triangle Shirtwaist Factory. It was a tragic irony for the 148 people who died that day. They were trapped in flames just minutes before their workday was finished! 
            </p>
            <p>	A man on the eighth floor heard the first cry of fire. He and the manager tried tossing buckets of water to stop the flame s. The fabric was so flammable that the room quickly became a wildfire.</p>
            <strong>A Picture Is Worth a Thousand Words </strong>
            <p>As clouds gather before a storm, the first flames warned of the terrible disaster to come. There was chaos inside the factory. The workers found exit doors locked. There was only one fire escape. There was also only one elevator, which worked for just a short time. Stairwells soon filled with fire. Because the workers had nowhere to go, they faced impossible choices.</p>
            <p>A young woman named Sarah worked on the ninth floor that tragic day. She said, “There was screaming and shoving and many girls tried to climb over the machine tables.” Sarah saw flames coming from all sides as she waited for the elevator. “Suddenly I was holding the sides of the door looking down the elevator shaft with girls screaming and pushing behind me.” Sarah grabbed the elevator cable and went sliding down the shaft. She passed out as she fell on top of the elevator below. Others fell on top of her. </p>
            <p>Some girls rushed to the windows to escape. The crowd on the streets yelled, “Don’t jump!” The girls jumped anyway with flames burning their hair and skirts. Fire Captain Frank Rubino said, “People began to holler, ‘Raise the ladders, raise the ladders.’ But we had ladders up.” Five girls held hands and leaped together when they saw the ladders couldn’t reach them. </p>
            <p>In this factory, advice when most needed was least heeded. The Triangle Factory had a histo ry of fires. In 1909 union workers protested. The owners ignored cries for safety regulations. The own ers did not go to jail, but public outrage l ed to change. Political leaders took action. People would say the reforms were better late than never. For the people who died, however, it was too little too late.
            </p>
        `,
        questions: [
            {
                id: 1,
                question: "Look at paragraph 1 on the first page of the passage.What was the effect of factory owners competing to make money?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "The effect was the workers file a resignation letter."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "The effect was company sales decreased. "
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "The effect was that they didn’t pay their workers much."
                    },
                    
                ],
                answer: 'c',
            },
            {
                id: 2,
                question: "Look at the fifth paragraph of the passage.What caused the workers in the factory to face impossible choices?",
                
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "The workers had nowhere to go, so they faced impossible choices."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "The doors were locked"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "There were no elevators"
                    },
                    ],
                answer: 'a',
            },
            {
                id: 3,
                question: "Look at the fifth paragraph of the passage. What caused the women to be trapped in the factory during the fire?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "The exit doors were locked. "
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "It was the end of the workday"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "There were no elevators",

                    },
                    ],
                answer: 'a',
            },
                
        ]
    },
    {
        id: 24,
        difficulty: "Difficult",
        moduleName: "Finding Cause and Effect",
        quizno: "Quiz #12",
        instruction: "Reread the passage and answer the questions",
        story: `
            <h2><strong>Title: Life in the Desert</strong></h2>
            <p>What do you think of when you hear the word desert? You might picture in your mind a place that is hot and dry. Some deserts are cold, but most are very dry and very hot. </p>
            <p>A desert is an area that gets less than ten inches of rain each year. Animals must adapt, or change, to be able to live there. 
            </p>
            <strong>Structural Adaptation </strong>
            <p>One way to adapt is structural. This means the animal’s body must change so that it can survive, or live. For example, a gundi is a small African desert animal that gets its water from plants. Gundis have thick fur that keeps them cool during the day and warm at night. 
            </p>
            <strong>Behavioral Adaptation </strong>
            <p>Another way to adapt is behavioral. Desert animals act in ways that help them survive. The days are very hot, so many animals are nocturnal. They come out after dark to hunt for food. In the daytime, many rest in the shade of a rock or under the sand</p>
            <strong>Thriving in the Desert </strong>
            <p>Desert animals adapt in a combination of ways. Dromedary camels can live for days without eating or drinking. Their bodies store fat to use for energy when they have no food.
            </p>
            <p>The fennec fox is a tiny fox that weighs only about three pounds. Fennec foxes live in the African and Arabian deserts. Their sand-colored fur makes it hard for their enemies to see them. It also keeps them cool during the day. They have fur on the bottoms of their feet that helps them walk on hot sand. Their bodies lose water slowly, so they can go for days without drinking. They hunt at night and during the day they rest in burrows under the sand. </p>
            <p>The deserts of the southwestern United States and northern Mexico are home to a large lizard called a Gila monster. Gila monsters store fat in their bodies. This lets them live for months without eating. They come out only at night during the summer. In winter they hibernate. This means that they rest and use little food and energy.</p>
            <p>Many different types of snakes live in the desert. Because they are cold-blooded, snakes’ body temperatures change with their surroundings. To keep from getting too hot, they find shelter under bushes or rocks. Some rattlesnakes bury themselves in the sand during the day. In the hottest part of the year, many snakes rest for a long period. 
            </p>
            <p>Meerkats are members of the mongoose family that live in Africa. They hunt early in the day to stay out of the heat. They live in mobs, or groups, of as many as thirty members. Predators, such as jackals, are often frightened away by a meerkat mob. 
            </p>
            <p>Even though deserts are harsh, the animals that live in them have bodies that are adapted for these conditions. These adaptations help the animals avoid heat, store food and water, and protect themselves from enemies.
            </p>
        `,
        questions: [
            {
                id: 1,
                question: "What causes animals that live in deserts to adapt, or change?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Their bodies store fat to use for energy when they have no food."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Deserts are very hot and very dry, so animals must adapt to live there. "
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "They are trying to keep from getting too hot."
                    },
                ],
                answer: 'b',
            },
            {
                id: 2,
                question: "What effects does a desert climate have on dromedary camels?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Their bodies store fat to use for energy when they have no food."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Deserts are very hot and very dry, so animals must adapt to live there. "
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "They are trying to keep from getting too hot."
                    },
                ],
                answer: 'a',
            },
            {
                id: 3,
                question: "What causes some snakes to bury themselves in the sand during the day?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Their bodies store fat to use for energy when they have no food."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Deserts are very hot and very dry, so animals must adapt to live there. "
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "They are trying to keep from getting too hot."
                    },
                ],
                answer: 'c',
            },
                
        ]
    },

   //GETTING THE MAIN IDEA
    {
        id: 28,
        difficulty: "Easy",
        moduleName: "Getting The Main Idea",
        quizno: "Quiz #4",
        instruction: "Read the following paragraph and answer the question that follows each one by choosing the letter of the BEST answer.",
        story: 'In the middle of Sta. Cruz, near the post office, is the clinic of Dr. Mark Tongson. Everybody in town knows Dr. Tongson. He is a very good dentist. He’s also a popular person. He likes to tell funny stories to his patients. They forget about their teeth when they listen to him. On weekends, Dr. Tongson likes to go to basketball game. Sometimes, he also watches sports on TV. But his favorite activity is fishing. Every Saturday, he gets up early in the morning and meets his friends at the lake for fishing. He truly is an adventurous person who loves to be with people.',
        questions: [
            {
                id: 1,
                question: "This passage is about",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "a dentist"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Dr. Tongson"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "fishing"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "what Dr.Tongson likes to do"
                    },
                ],
                answer: 'b',
            },
            {
                id: 2,
                question: "Dr.Tongson is popular because",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Everyone in town knows him "
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "He likes to go fishing"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "He tells his patients funny stories"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "He listens to his patients"
                    },
                ],
                answer: 'a',
            },
            {
                id: 3,
                question: "Fishing is Dr.Tongson's",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "dream"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "favorite Activity"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "job"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "patient"
                    },
                ],
                answer: 'b',
            },
            {
                id: 4,
                question: "Dr. Tongson likes to be",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "patient"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "alone"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "quiet"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "with people"
                    },
                ],
                answer: 'd',
            },
            {
                id: 5,
                question: "The following statements are true about Dr. Tongson except for ____.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Dr. Tongson is an outgoing person"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Dr. Tongson is friendly"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Dr. Tongson likes to bond with his friends. "
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "Dr. Tongson pretends to be happy when he sees his patients."
                    },
                ],
                answer: 'd',
            },
        ],
    },
//AVERAGE
    {
        id: 29,
        difficulty: "Average",
        moduleName: "Getting The Main Idea",
        quizno: "Quiz #5",
        instruction: "Read the following paragraph and answer the question that follows each one by choosing the letter of the BEST answer.",
        // story: '1. Before clocks were made, people kept track of time by other means. In ancient Egypt, people used a water clock. Water dripped slowly from one clay pot into another. People measured time according to how long it took one pot to empty and the other one to fill. Candle clocks were common during the Middle Ages. As such, when a candle burned, marks on its side showed about how much time had passed. A final ancient way to measure time was the sundial, which used the movement of the sun across the sky. The shadows moving across the face of the sundial showed the current time.What is the main idea?',
        questions: [
            {
                id: 1,
                question: "Before clocks were made, people kept track of time by other means. In ancient Egypt, people used a water clock. Water dripped slowly from one clay pot into another. People measured time according to how long it took one pot to empty and the other one to fill. Candle clocks were common during the Middle Ages. As such, when a candle burned, marks on its side showed about how much time had passed. A final ancient way to measure time was the sundial, which used the movement of the sun across the sky. The shadows moving across the face of the sundial showed the current time.What is the main idea?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "As such, when a candle burned, marks on its side showed about how much time had passed."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Before clocks were made, people kept track by other means."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "In ancient Egypt, people used a water clock."
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "All the above."
                    },
                ],
                answer: 'b',
            },
            {
                id: 2,
                question: "One common example of instinct is the spider's spinning of its intricate web. 2 No one teaches a spider how to spin: its inborn instinct allows it to accomplish the task. 3 Another example of instinctive behavior is the salmon's struggle to swim upstream to lay eggs. 4 It would be much easier for the salmon to follow the current downstream, but instinct overrides all other considerations. 5 Instinct is clearly a strong influence on animal behavior. What is the main idea?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Sentence 1"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Sentence 2"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Sentence 3"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "Sentence 5"
                    },
                ],
                answer: 'd',
            },
            {
                id: 3,
                question: "In response to customers' bitter complaints about long lines, banks are trying new ways to shorten the wait or at least to make it more pleasant. 2 One bank provides coffee and cookies so customers can munch while they wait. 3 Other banks show action movies on a large video screen. 4 One daring bank in California will pay a customer five dollars if he or she must wait more than five minutes for service. 5 Still other banks offer the most obvious solution of all...they simply hire more bank tellers.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Sentence 3"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Sentence 4"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Sentence 1"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "Sentence 2"
                    },
                ],
                answer: 'c',
            },
            {
                id: 4,
                question: "Caffeine is a natural ingredient in coffee, cocoa, tea, and chocolate, and is added to some prescription and non-prescription drugs. 2. Despite being natural,caffeine is also a powerful drug which greatly affects the body. 3. In healthy, rested people, a dose of 100 milligrams (about one cup of coffee) increases alertness, banishes drowsiness, quickens reaction time, it enhances intellectual and muscular effort, and increases heart and respiratory rates. 4. Drinking one to two cups of coffee an hour before exercise encourages the body to preserve glycogen and burn fat -----something that results in greater endurance. 5. In addition, caffeine masks fatigue. 6. In doses above 300 milligrams, caffeine can produce sleeplessness, nervousness, irritability, headaches, heart palpitations, and muscle twitches. 7. Caffeine is also habit-forming, and those who try to suddenly stop after heavy use may experience such withdrawal symptoms as headaches, lethargy, irritability, and difficulty in concentrating. The main idea of this passage is that caffeine",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Is a powerful drug that affects the body in numerous ways."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Is good to drink before working out."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Is linked to various health concerns."
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "Is a strong drug that only enhances the body when used."
                    },
                ],
                answer: 'a',
            },
            {
                id: 5,
                question: "Human beings have always polluted their environment, but in the past, it was easier for them to move on and live somewhere else. 2.They knew that given time, the environment would take care of pollution they left behind and they relied on the out of sight, out of mind philosophy. 3. Today, an increasing human population, which uses an increasing amount of energy sources, no longer has the luxury to ignore pollution. 4. The human population is approximately 7 billion. 5. Our overall energy consumption has gone up by a hundredfold from 2,000 per/person/day to 230,000 per/person/day in modern industrial nations like the United States. 6. This high energy consumption allows us to mass produce many useful and economically affordable organic products that pollute the atmosphere and groundwater damage forests and lakes causing global warming, and even deplete the ozone layer. (Borrowed from a biology textbook) The main idea of this passage is that",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Pollution is difficult on the environment regardless of your location."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Due to growth in the human population, humans can no longer ignore pollution."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Pollution is destroying our environment."
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "Modern nations like the United States should find ways to reduce the rapid growth of their populations."
                    },
                ],
                answer: 'b',
            },
        ],
    },

    //DIFFICULT

    {
        id: 30,
        difficulty: "Difficult",
        moduleName: "Getting The Main Idea",
        quizno: "Quiz #6",
        instruction: "Read the following paragraph and answer the question that follows each one by choosing the letter of the BEST answer.",
        // story: '1. Before clocks were made, people kept track of time by other means. In ancient Egypt, people used a water clock. Water dripped slowly from one clay pot into another. People measured time according to how long it took one pot to empty and the other one to fill. Candle clocks were common during the Middle Ages. As such, when a candle burned, marks on its side showed about how much time had passed. A final ancient way to measure time was the sundial, which used the movement of the sun across the sky. The shadows moving across the face of the sundial showed the current time.What is the main idea?',
        questions: [
            {
                id: 1,
                question: "Almost everyone would agree that cleaning up the environment and keeping it that way is a good thing. The obvious negative impacts on human health and the ecosystems on Earth are well understood. Yet, there are underlying consequences to compliance to this most basic need that need to be studied, as well. The government of the U.S. has requested voluntary action from citizens and industry, and it has also legislated action to start the clean-up process. An example of this is the Clean Air Act. The good news is that this law requires that emissions into the air meet certain standards that will help clean up the environment. Under this act, cars must reduce emissions of nitrous oxides by 60%, and clean coal technologies must reduce harmful emissions by 20%. Industry is required to reduce emissions of over 200 compounds that are known to cause health problems. The bad news is the cost of compliance. Estimates of consumer costs for a cleaner environment go as high as $50 billion a year, and that study does not even consider the loss of jobs from reshaping industries to meet the new standards. Which of the following statements best expresses the main idea of the paragraph? ",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Industries in nations across the United States need to unite to maintain the standards created by the Clean Air Act despite the costs to the country."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Industries are doing their part to reduce emissions that are known to have ill effects on the environment and human health. "
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Although legislation that supports cleaning up the environment is a good idea; the costs of such efforts need to be evaluated. "
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "Cleaning up the environment is best accomplished through both legislation like the Clean Air Act and volunteerism from humans impacted by emissions. "
                    },
                ],
                answer: 'c',
            },
            {
                id: 2,
                question: "A child with Asperger's Syndrome may move into the personal space of others, failing to recognize body language and even verbal cues that he or she has transgressed. Friends and new acquaintances alike may be acknowledged with tight and enthusiastic hugs. Bypassing typical greetings like Hi, how are you? an older child with Asperger's may launch into discourse on the latest topic of concern. This narrow special interest (e.g., Civil War maritime strategies, accuracy of train schedules) may be age-inappropriate (e.g., Power Rangers cartoons at age 16) or boring, but a child with this disorder will often continue to clarify, oblivious to disinterest, looks, or snickers from the people close by. Which of the following statements best expresses the main idea of the paragraph?  ",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Asperger's Syndrome is a disorder that affects an afflicted child's social interactions. "
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Asperger's Syndrome is a disorder that affects many different aspects of an afflicted child's life."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Asperger's Syndrome is a disorder causing an afflicted child to have narrow special interests that are often age inappropriate. "
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "Asperger's Syndrome is a disorder causing an afflicted child to act especially reserved around new experiences and people."
                    },
                ],
                answer: 'a',
            },
            {
                id: 3,
                question: "Often, students are not capable of performing within a designated range of expectations in school. Those students who hover below the normative range due to physical or cognitive impairments must be evaluated to determine if special services or accommodations are needed. High schools are required to offer a wide array of special services to those students who are evaluated as incapable of staying within the normative range of performance standards in the classroom. The special services offered can help these students reach their maximum potential, but before they can be administered, a teacher has to identify that there is a problem. Which of the following statements best expresses the main idea of the paragraph?  ",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "High schools are required to help students with special needs achieve their maximum potential. "
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "High schools are required to help students who have been identified by a teacher as having special needs, achieve their maximum potential. "
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "High schools serve the needs of various types of students, including those who have been identified as having special needs. "
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "High schools serve the needs of various types of students, but only offer special services to those who have been identified as having cognitive impairments."
                    },
                ],
                answer: 'a',
            },
            {
                id: 4,
                question: "Legends make children dream of princesses riding bare back through fields of fragrant heather. They immortalize noble knights, champions for humanity, who fought tyranny as they raced through a village with sword brandished and banner waving in the afternoon breeze. Legends awaken imagination in the young and spur creativity in the old. The famous and trustworthy story of King Arthur is one of those great legends made famous through repeated telling. According to the stories about King Arthur, he was a man of valor, integrity, and honor in the face of challengers and opposition. He strove to lead all of England down the path of goodness and prosperity without any foolish moves or attacks of cowardice. He supposedly did all of these wonderful things, but as it seems, not one person knows how this legend came to be, and some even debate that he was once alive. Which of the following statements best expresses the main idea of the paragraph? ",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "King Arthur's legends have been inspirational for both the old and the young. "
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Legends, like that of King Arthur, can be inspirational despite their muddled beginnings or deficient proof. "
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Legends can inspire both the young and the old. "
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "Legends, like that of King Arthur, are inspirational to those who want to believe in fairy tales."
                    },
                ],
                answer: 'b',
            },
            {
                id: 5,
                question: "As important as water conservation is, it is also very easy. A few simple habits can significantly reduce the water consumption of a household. One way to save water is to turn off the faucet when reduce the water consumption of a household. One way to save water is to turn off the faucet when brushing your teeth.  Also, don’t allow faucets to drip; one drip can waste a large amount of water over a short period of time. Baths require less water than showers, so by taking a bath instead of a shower, you can reduce the amount of water your home uses. In the kitchen, running a dishwasher when it is completely full, rather than half full, can save up to 20 gallons a day. These simple changes will save water and save money. Which of the following statements best expresses the main idea of the paragraph?  ",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Water conservation is important."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Consumers can save money by conserving water."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "A few simple changes can save water in the home."
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "Baths take less water than showers."
                    },
                ],
                answer: 'c',
            },
            ],
    },

    // Drawing Conclusion

    {
        id: 31,
        difficulty: "Easy",
        moduleName: "Drawing Conclusion",
        quizno: "Quiz #1",
        instruction: "Read the following passage and answer the questions. You will need to use the information given to draw conclusions based on what you know.",
        story: 'John went downstairs. He opened the door and the cold breeze touched his skin. As he glanced over the veranda, the table was set with a warm loaf of bread, butter, egg, and brewed coffee. There was an aroma in the air. A note was left on the table. It said, "Hi, John. Have a nice day ahead. Good Luck at your new job. Love, Marjorie" Next to the note, there was a watch wrapped with a blue handkerchief.',
        questions: [
            {
                id: 1,
                question: "Who is John?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "a brother"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "a husband"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "a student"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "a nice person"
                    },
                ],
                answer: 'b',
            },
            {
                id: 2,
                question: "What time of day is it?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "morning "
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "afternoon"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "evening"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "midnight"
                    },
                ],
                answer: 'a',
            },
            {
                id: 3,
                question: "Who is Marjorie?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "his wife"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "his boss"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "his neighbor"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "his friend"
                    },
                ],
                answer: 'a',
            },
            {
                id: 4,
                question: "What is John’s new job?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "store clerk"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "baker"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "real estate agent"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "not enough information given"
                    },
                ],
                answer: 'd',
            },
            {
                id: 5,
                question: "Why was there a present on the table?",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "to congratulate"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "a thank you gift"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "to say sorry"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "not enough information given"
                    },
                ],
                answer: 'a',
            },
        ],
    },
    {
        id: 32,
        difficulty: "Easy",
        moduleName: "Drawing Conclusion",
        quizno: "Quiz #2",
        instruction: "Read the following passage about a neighborhood and then answer the questions.",
        story: 'Few people passed. The man out of the last house passed on his way home; she heard his footsteps clacking along the concrete pavement and afterwards crunching on the cinder path before the new red houses. One time there used to be a field there in which they used to play every evening with other people’s children. Then a man from Belfast bought the field and built houses in it – not like their little brown houses but bright brick houses with shining roofs. The children of the avenue used to play together in that field – the Devines, the Waters, the Dunns, little Keogh the cripple, she and her brothers and sisters. Ernest, however, never played: he was too grown up. Her father used often to hunt them in out of the field with his blackthorn stick; but usually little Keogh used to keep nix and call out when he saw her father coming. Still they seemed to have been rather happy then. Her father was not so bad then; and besides, her mother was alive. That was a long time ago; she and her brothers and sisters were all grown up, her mother was dead. Tizzie Dunn was dead, too, and the Waters had gone back to England. Everything changes. Now she was going to go away like the others, to leave her home.',
        questions: [
            {
                id: 1,
                question: "The title that would best express the main idea of this selection is",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "A Quiet Street"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "How Tizzie Dunn Died."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "Dreams."
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "Everything Changes."
                    },
                ],
                answer: 'd',
            },
            {
                id: 2,
                question: "If her father had found the woman playing in the field when she was younger, he would probably have",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "sent her home"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "chased the other children"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "yelled at her for playing with Keogh the cripple"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "beaten her"
                    },
                ],
                answer: "d",
            },
            {
                id: 3,
                question: "We may conclude that the woman’s home is probably in",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "English"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Ireland"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "New York"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "None of the above"
                    },
                ],
                answer: "b",
            },
            {
                id: 4,
                question: "About the idea of leaving home the woman is",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "deeply worried"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "somewhat concerned"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "greatly relieved and happy"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "frightened because of her father"
                    },
                ],
                answer: "d",
            },
            {
                id: 5,
                question: "One conclusion we cannot safely draw on the basis of this selection is that",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "The Waters family returned to England because they were unhappy where they lived."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "The houses built by the man from Belfast changed the way the neighborhood looked."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "The woman lives on a quiet street."
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "Ernest did not join in the games of the young children"
                    },
                ],
                answer: "a",
            },
        ],
    },
    {
        id: 33,
        difficulty: "Easy",
        moduleName: "Drawing Conclusion",
        quizno: "Quiz #3",
        instruction: "INSTRUCTION: Read the following selection and answer the questions after it.",
        story: 'The Manus baby is accustomed to water from the first years of his life. Lying on the slatted floor he watches the sunlight gleam on the surface of the lagoon as the changing tide passes and repasses beneath the house. When he is nine or ten months old his mother or father will often sit in the cool of the evening on the little verandah, and his eyes grow used to the sight of the passing canoes and the village set in the sea. When he is about a year old, he has learned to grasp his mother firmly about the throat, so that he can ride in safety, poised on the back of her neck. She has carried him up and down the long house, dodged under low-hanging shelves, and climbed up and down the rickety ladders which lead from house floor down to the landing verandah. The decisive, angry gesture with which he was reseated on his mother’s neck whenever his grip tended to slacken has taught him to be alert and sure-handed. At last it is safe for his mother to take him out in a canoe, to punt or paddle the canoe herself while the baby clings to her neck. If a sudden wind roughens the lagoon or her punt catches in a rock, the canoe may swerve and precipitate mother and baby into the sea. The water is cold and dark, acrid in taste and blindingly salt; the descent into its depths is sudden, but the training within the house holds good. The baby does not loosen his grip while his mother rights the canoe and climbs out of the water.',
        questions: [
            {
                id: 1,
                question: "The main idea of this paragraph is_______",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "to show how Manus babies learn about water"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "to show how to survive the dangers of the sea"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "to illustrate the way in which Manus families pass their time "
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "all of these"
                    },
                ],
                answer: 'a',
            },
            {
                id: 2,
                question: "The Manus houses are built_______",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "in the mountains"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "in bush country"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "on slats above the lagoon"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "with shells from the sea"
                    },
                ],
                answer: "c",
            },
            {
                id: 3,
                question: "We can conclude that a Manus child who falls by accident into the sea with the mother_______",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "will probably drown"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "will probably be attacked by sharks"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "will be rescued by the father"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "will swim to safety"
                    },
                ],
                answer: "d",
            },
            {
                id: 4,
                question: "When traveling as a baby with the mother the Manus child_______",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "rides in a backpack"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "sits in a straw carriage"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "hangs from the mother’s neck"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "paddles a canoe"
                    },
                ],
                answer: "c",
            },
            {
                id: 5,
                question: "As rowers along the lagoon Manus mothers are_______",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "not as good as the fathers"
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "quite inexperienced"
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "quite capable"
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "usually involved in accidents"
                    },
                ],
                answer: "c",
            },
        ],
    },
    {
        id: 34,
        difficulty: "Easy",
        moduleName: "Drawing Conclusion",
        quizno: "Quiz #4",
        instruction: "Read the paragraph and answer the questions.",
        story: 'What’s the secret of a winning cyclist? Skill, daring, and good preparation do make a difference, of course, but another answer is technology. Since bicycle races are often very close, riders need every advantage they can get. For instance, a racer might wear a suit designed so that it has no creases or wrinkles to affect airflow. Special racing shoes are covered with a seamless silver fabric for the same reason. Aerodynamic brakes and a bike frame made to cut through the air effectively are also part of a racer’s equipment.',
        questions: [
            {
                id: 1,
                question: "From this paragraph, you can conclude that_______.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "cyclists like to look good when racing."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "many riders wear the wrong kind of clothing."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "air resistance affects a rider’s speed."
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "some riders don’t spend enough time training."
                    },
                ],
                answer: 'c',
            },
            {
                id: 2,
                question: "From the paragraph, you cannot tell_______.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "what materials are used in making racing bikes."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "that riders need every advantage they can get."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "that bicycle must have skill to win a race."
                    },
                    ],
                answer: "b",
            },
        ]
    },
    {
        id: 35,
        difficulty: "Intermediate",
        moduleName: "Drawing Conclusion",
        quizno: "Quiz #5",
        instruction: "Read the paragraph and answer the questions. Choose the answer that best completes each sentence",
        story: 'Veteran’s Day is celebrated on November 11. It honors soldiers who fought in wars for the United States. Observance takes place all over the country. Some are held on battleships or military bases. Others take place in cemeteries, churches, or government buildings. People give speeches, march in parades, and say prayers. For many people, red poppies are a symbol of Veteran’s Day. These flowers once grew on the battlefields of Europe during World War I (1914-1918) and are now symbols of the blood shed there and in other places.',
        questions: [
            {
                id: 1,
                question: "From this paragraph, you can conclude that ____",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Veteran’s Day is a time of joyful feasting."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "most battles happen on fields of flowers."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "few communities celebrate Veteran’s Day."
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "Veteran’s Day is a sad time for some people."
                    },
                ],
                answer: 'd',
            },
            {
                id: 2,
                question: "From the paragraph, you cannot tell ___.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "why poppies are a symbol of Veteran’s Day."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "how many people have been lost in wars."
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "how people observe Veteran’s Day."
                    },
                    ],
                answer: "a",
            },
            
        ],
    },
    {
        id: 36,
        difficulty: "Difficult",
        moduleName: "Drawing Conclusion",
        quizno: "Quiz #6",
        instruction: "Choose the answer that best completes each sentence.",
        story: 'Elephants don’t usually dress up, but some clothing designers thought that these large animals could be quite fashionable. So the designers made some oversize outfits such as tweed suits, a cloak, and some dresses. They even included gigantic earrings and shoes. The designers had to use stepladders to get their models dressed, but the elephants were very well behaved. When all was ready, a photographer took pictures for a fashion magazine. The money the elephants made from their modeling was donated to some elephant cause.',
        questions: [
            {
                id: 1,
                question: "From this paragraph, you can conclude that ____",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "elephants enjoy reading fashion magazines."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "the clothing designers wanted to get attention."
                        
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "many people bought elephant clothes."
                        
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "the elephants often work as fashion models."
                        
                    },
                ],
                answer: 'd',
            },
            {
                id: 2,
                question: "From the paragraph, you cannot tell ___.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "how the elephants’ earrings were used."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "why the designers made elephant clothes."
                        
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "what color clothes the elephants modeled."
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "how the elephants acted when they were dressed."
                    },
                    ],
                answer: "b",
            },
            
        ],
    },
    {
        id: 37,
        difficulty: "Difficult",
        moduleName: "Drawing Conclusion",
        quizno: "Quiz #7",
        instruction: "Read the paragraph. Answer the questions.",
        story: 'Most trees have leaves growing from their branches, but a cottonwood tree along the U.S. Highway 50 near Middle Gate, Nevada, has something else. Hanging from the branches of this tree are shoes. High heels, work boots, flip-flops, baby booties, sandals, running shoes, even snorkeling flippers all dangle from this tree. Some people buy shoes just to put in the tree. Others take them as needed. To the people who live in the area, the tree is a symbol of charity and decency. Many passersby have benefitted from its unusual and useful offerings.',
        questions: [
            {
                id: 1,
                question: "From this paragraph, you can conclude that ____",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "flip-flops are the most popular footwear in the tree."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "the shoes fall from the tree when autumn comes."
                        
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "people living nearby are proud of the tree."
                        
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "most of the shoes are worn and old and unusable."
                        
                    },
                ],
                answer: 'c',
            },
            {
                id: 2,
                question: "From the paragraph, you cannot tell ___.",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "where the cottonwood tree with shoes is located."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "why some of the shoes in the tree are new"
                        
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "what kinds of shoes are found in the tree."
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "how the tradition	 a tree with shoes got started."
                    },
                    ],
                answer: "d",
            },
            
        ],
    },
    {
        id: 38,
        difficulty: "Difficult",
        moduleName: "Drawing Conclusion",
        quizno: "Quiz #8",
        instruction: "Read the paragraph. Answer the questions.",
        story: 'When she was young, Madame C. J. Walker’s hair began falling out. She tried a lot of remedies, but none helped. So, she invented her own mixture - and it worked. Soon after, she decided to start her own hair-care business. At first, she sold her products door-to-door. Then she began selling products by mail. Madame Walker set up factories and opened beauty parlors in many cities. She also started training schools for her workers. By the time of her death in 1919, 25,000 women worked for Madame Walker. She was the first black female millionaire. Much of her wealth went to help others.',
        questions: [
            {
                id: 1,
                question: "From this paragraph, you can conclude that ____",
                choice: [
                    {
                        id: 1,
                        letter: "a",
                        choices: "Madame C. J. Walker was a good businesswoman."
                    },
                    {
                        id: 2,
                        letter: "b",
                        choices: "Madame Walker’s products were very expensive."
                        
                    },
                    {
                        id: 3,
                        letter: "c",
                        choices: "no one used hair products before Madame Walker."
                        
                    },
                    {
                        id: 4,
                        letter: "d",
                        choices: "most hair products today are sold door-to-door."
                        
                    },
                ],
                answer: 'a',
            },
            
            
        ],
    },
    
                 
]

