interface Module {
    codes: number;
    name: string;
    lessons: Array<Lesson>;
}

interface Lesson {
    id: number;
    title: string;
    name: string;
    isQuiz: boolean;
    quizes: Array<Quiz>,
    firstp: string;
    secondp: string;
    thirdp: string;
    img: string;
    example: string;
    lessonLink: string;
}

interface Quiz {
    id: number,
    quiznum: string,
    difficulty: string,
    score: number,
}

export const lesson: Module[] = [
    {
        codes: 1,
        name: 'Module 1 - Comparing and Contrasting',
        lessons: [
            {
                id: 1,
                title: 'Lesson 1',
                name: 'Comparing and Contrasting',
                isQuiz: false,
                quizes: [
                ],
                firstp: 'Compare and contrast is a rhetorical style that discusses the similarities and differences of two or more things: ideas, concepts, items, places, etc. This rhetorical style is one that you’ll see often as a complete essay, but you may also use it quite a lot within paragraphs of any kind of essay in which you need to make some kind of comparison to help illustrate a point.',

                img: 'https://owl.excelsior.edu/wp-content/uploads/2018/09/Compare-and-Contrast-Essay-3.png',
                secondp: 'A compare and contrast essay does two things: It discusses the similarities and differences of at least two different things. First, you must find a basis of comparison to be sure that the two things have enough in common. After that, you identify their differences. You may structure the compare and contrast essay using either the alternating method (stating one aspect of one thing and immediately discussing the same aspect of the other item and how they are similar or different) or the block method (discussing all of the aspects of one thing and then discussing all of the aspects of another).',

                example: '',

                thirdp: 'NOTE: When you write a compare and contrast essay, be sure that the two things have enough in common. Even if you have many differences to analyze, if the topics or items you’re comparing don’t have much in common, your audience may wonder why you’re writing about the two things. For example, you would have a difficult time writing an essay comparing and contrasting your favorite television program with a popular vacation spot in your state.',
                lessonLink: 'https://owl.excelsior.edu/rhetorical-styles/compare-and-contrast-essay/',
            },
            {
                id: 2,
                title: 'Quiz',
                name: 'Quiz for Comparing and Contrasting',
                isQuiz: true,
                quizes: [
                    {
                        id: 1,
                        difficulty: 'Task 1.1',
                        quiznum: 'Quiz #1',
                        score: 5,
                    },
                    {
                        id: 2,
                        difficulty: 'Task 1.2',
                        quiznum: 'Quiz #2',
                        score: 5,
                    },
                    {
                        id: 3,
                        difficulty: 'Task 1.3',
                        quiznum: 'Quiz #3',
                        score: 5,
                    },
                ],
                firstp: '',
                secondp:'',
                thirdp: '',
                img: '',

                example: '',
                lessonLink: '',
            },
]
        },
    {
        codes: 2,
        name: 'Module 2 - Identifying Problem and Solution',
        lessons: [
            {
                id: 1,
                title: 'Lesson 1',
                name: 'Problem and Solution',
                isQuiz: false,
                quizes: [
                ],
                firstp: 'Problem and Solution is a pattern of organization where information in a passage is expressed as a dilemma or concerning issue (a problem) and something that was, can be, or should be done to remedy this issue (solution or attempted solution). The problem and solution text structure may seem like it would be easy to recognize, but it can be moderately difficult to identify because it is frequently confused with the cause and effect pattern of organization, as they both have relational structures; however, if you read the passage and look specifically for both a problem and a solution to the problem, you should find it pretty easy to distinguish from cause and effect, as cause and effect passages do not propose solutions to any negative occurrences within the passage but rather just explain why or how they happen.',
                secondp:'There are also a few signal words which may indicate that information in a passage is ordered in the problem and solution pattern of organization: propose, solution, answer, issue, problem, problematic, remedy, prevention, and fix.',
                thirdp: '',
                img: 'https://www.ereadingworksheets.com/images/problem-and-solution.png',

                example: 'Example: It seems like there has been a surge in teen pregnancies these days. Teen pregnancies make it very difficult for young mothers to pursue their dreams and meet the demands of an infant. Fortunately, most teen pregnancies can be easily prevented by using birth control; however, even birth control is not 100% effective. The most effective way to prevent teen pregnancies is abstinence, which is 100% effective.',
                lessonLink: 'https://www.ereadingworksheets.com/text-structure/patterns-of-organization/problem-and-solution/',
            },
            {
                id: 2,
                title: 'Quiz',
                name: 'Quiz for Identifying Problem and Solution',
                isQuiz: true,
                quizes: [
                    {
                        id: 4,
                        difficulty: 'Task 1.1',
                        quiznum: 'Quiz #1',
                        score: 3,
                    },
                    {
                        id: 5,
                        difficulty: 'Task 1.2',
                        quiznum: 'Quiz #2',
                        score: 3,
                    },
                    {
                        id: 6,
                        difficulty: 'Task 1.3',
                        quiznum: 'Quiz #3',
                        score: 3,
                    },
                    {
                        id: 7,
                        difficulty: 'Task 2.1',
                        quiznum: 'Quiz #4',
                        score: 4,
                    },
                    {
                        id: 8,
                        difficulty: 'Task 2.2',
                        quiznum: 'Quiz #5',
                        score: 3,
                    },
                    {
                        id: 9,
                        difficulty: 'Task 3.1',
                        quiznum: 'Quiz #6',
                        score: 3,
                    },
                    {
                        id: 10,
                        difficulty: 'Task 3.2',
                        quiznum: 'Quiz #7',
                        score: 3,
                    },
                    {
                        id: 11,
                        difficulty: 'Task 3.3',
                        quiznum: 'Quiz #8',
                        score: 3,
                    },
                ],
                firstp: '',
                secondp:'',
                thirdp: '',
                img: '',

                example: '',
                lessonLink: '',
            },
        ]
    },
    {
        codes: 3,
        name: 'Module 3 - Finding Cause & Effect',
        lessons: [
            {
                id: 1,
                title: 'Lesson 1',
                name: 'Reading Comprehension: Cause & Effect',
                isQuiz: false,
                quizes: [
                ],
                firstp: 'Almost all of the time, we hear “cause and effect,” not “effect and cause.” However, I actually think it’s often easier to start with the effect of something – what happened? Then, work your way backwards. Why did that happen? What made that happen? Take the example of a popsicle that’s dripping. A student wouldn’t see that popsicle and immediately think “The sun melted the popsicle so therefore it’s dripping down. To stop the cause of this, I’ll go inside to move away from the hot sun.” Instead, the student would think “Yikes! I better hurry up and eat this!” Normally in our day to day lives, we tend to see the effects more than think about the causes. This is true of texts as well. If we read about a character who is feeling sad, the first inclination would be to ask “How is the character feeling?” That is the effect. We would then move backwards to determine the why, or the cause. “What made the character feel sad?”',
                secondp:'Step one to teaching cause and effect is to utilize texts, both fiction and nonfiction, that really lend itself to this skill. (Not all texts do.) Cause and effect should be fairly easy to determine so that students can utilize the questions provided above – “What happened?” (effect) and “What made that happen?” (cause)',
                thirdp: '',
                img: 'https://learningattheprimarypond.com/wp-content/uploads/2022/02/image-500x374.png',
                example: 'Having a graphic organizer to support this skill can be helpful for visual learners. Above is an example of a graphic organizer from my 2nd Grade Decodable Safari resource. Something as simple as the arrow can help students see that one box is the end product and the other explains how that happened. ',
                lessonLink: 'https://learningattheprimarypond.com/blog/reading-comprehension-cause-effect/',
            },
            {
                id: 2,
                title: 'Quiz',
                name: 'Quiz for Finding Cause & Effect',
                isQuiz: true,
                quizes: [
                    {
                        id: 13,
                        difficulty: 'Task 1.1',
                        quiznum: 'Quiz #1',
                        score: 3,
                    },
                    {
                        id: 14,
                        difficulty: 'Task 1.2',
                        quiznum: 'Quiz #2',
                        score: 3,
                    },
                    {
                        id: 15,
                        difficulty: 'Task 2.1',
                        quiznum: 'Quiz #3',
                        score: 3,
                    },
                    {
                        id: 16,
                        difficulty: 'Task 2.2',
                        quiznum: 'Quiz #4',
                        score: 3,
                    },
                    {
                        id: 17,
                        difficulty: 'Task 2.3',
                        quiznum: 'Quiz #5',
                        score: 3,
                    },
                    {
                        id: 18,
                        difficulty: 'Task 2.4',
                        quiznum: 'Quiz #6',
                        score: 4,
                    },
                    {
                        id: 19,
                        difficulty: 'Task 2.5',
                        quiznum: 'Quiz #7',
                        score: 3,
                    },
                    {
                        id: 20,
                        difficulty: 'Task 3.1',
                        quiznum: 'Quiz #8',
                        score: 3,
                    },
                    {
                        id: 21,
                        difficulty: 'Task 3.2',
                        quiznum: 'Quiz #9',
                        score: 3,
                    },
                    {
                        id: 22,
                        difficulty: 'Task 3.3',
                        quiznum: 'Quiz #10',
                        score: 3,
                    },
                    {
                        id: 23,
                        difficulty: 'Task 3.4',
                        quiznum: 'Quiz #11',
                        score: 3,
                    },
                    {
                        id: 24,
                        difficulty: 'Task 3.5',
                        quiznum: 'Quiz #12',
                        score: 3,
                    },
                ],
                firstp: '',
                secondp:'',
                thirdp: '',
                img: '',

                example: '',
                lessonLink: '',
            },
        ]
    },
    {
        codes: 4,
        name: 'Module 4 - Getting the Main Idea',
        lessons: [
            {
                id: 1,
                title: 'Lesson 1',
                name: 'Stated Main Ideas',
                isQuiz: false,
                quizes: [
                ],
                firstp: 'In this lesson, you will learn how to locate the main idea of a reading, which is the most important idea or central thought the author wants the reader to understand about the topic he or she has chosen to write about. A stated main idea, as opposed to an implied main idea, is one the author writes specifically in the reading, usually within the first or second paragraph.',
                secondp:'Conclusions are the judgements or decisions reached based on information learned. It requires reasoning or deep thinking and observation skills. I think of drawing conclusions as solving a mystery. Drawing conclusions is deeper than an inference. In fact, making inferences helps us draw conclusions.Take the title image with the little guy sitting in the suitcase. Where is he going? How can you tell? Well, this is a really fun way to give a concrete example to kids. Most of us have a suitcase on hand, so fill it with items you’d use at a beach. Pull one item out at a time, and let the kids make simple inferences about the activities you’ll do on your vacation. Then, discuss the conclusions they can make based on all of the evidence in the suitcase and based on your discussions',
                thirdp: '',
                img: 'https://www.comprehensionconnection.net/wp-content/uploads/2019/03/infer2B1-4838943.png',

                example: 'WHAT WE INFER: In this example, the facts we see are that the sky is cloudy, the ground is wet, and the umbrella is inverted. These facts indicate that it’s rainy because the ground’s wet and because she has an umbrella. We can infer that it is windy based on the fact that the man is holding on to the woman and because the umbrella is inverted. WHAT WE CONCLUDE:From this same photo, you could also gather clues for a conclusion. You might wonder, “How will the weather impact the couples plans later in the day?” The couple has plans to go hiking. Well, we would conclude that they will cancel their plans because it will be muddy and impossible to hike without having their shoes stuck in the mud.',
                lessonLink: 'https://content.nroc.org/DevelopmentalEnglish/unit02/Foundations/stated-main-ideas.html',
            },
            {
                id: 2,
                title: 'Quiz',
                name: 'Quiz for Getting the Main Idea',
                isQuiz: true,
                quizes: [

                    {
                        id: 28,
                        difficulty: 'Task 1.1',
                        quiznum: 'Quiz #1',
                        score: 5,
                    },
                    {
                        id: 29,
                        difficulty: 'Task 2.1',
                        quiznum: 'Quiz #2',
                        score: 5,
                    },
                    {
                        id: 30,
                        difficulty: 'Task 3.1',
                        quiznum: 'Quiz #3',
                        score: 6,
                    },
                ],
                firstp: '',
                secondp:'',
                thirdp: '',
                img: '',

                example: '',
                lessonLink: '',
            },
        ]
    },

    {
        codes: 5,
        name: 'Module 5 - Drawing Conclusions',
        lessons: [
            {
                id: 1,
                title: 'Lesson 1',
                name: 'The Difference With Drawing Conclusions and Making Inferences',
                isQuiz: false,
                quizes: [
                ],
                firstp: 'Making  inferences is the process of figuring out missing information from information that IS included. Inferences can be made with pictures, with characters, with plot, with the setting, and even with vocabulary. To infer is a thinking process of reading between the lines. We can use pictures and text clues to infer, and making inferences are more situational.',
                secondp:'Conclusions are the judgments or decisions reached based on information learned. It requires reasoning or deep thinking and observation skills. I think of drawing conclusions as solving a mystery. Drawing conclusions is deeper than an inference. In fact, making inferences helps us draw conclusions. ',
                thirdp: '',
                img: 'https://www.comprehensionconnection.net/wp-content/uploads/2019/03/infer2B1-4838943.png',
                example: 'In this example, the facts we see are that the sky is cloudy, the ground is wet, and the umbrella is inverted. These facts indicate that it’s rainy because the ground’s wet and because she has an umbrella. We can infer that it is windy based on the fact that the man is holding on to the woman and because the umbrella is inverted. From this same photo, you could also gather clues for a conclusion. You might wonder, “How will the weather impact the couples plans later in the day?” The couple has plans to go hiking. Well, we’d conclude that they’ll cancel their plans because it will be muddy and impossible to hike without having their shoes stuck in the mud.',
                lessonLink: 'https://www.comprehensionconnection.net/2019/03/exploring-difference-between-making.html?fbclid=IwAR2Xfbi8i-jr7wmbevNXudWB_ZHYC-ekpMgrdayvIUAO_Wwp9ceKs-rhAuc',
            },
            {
                id: 2,
                title: 'Quiz',
                name: 'Quiz for Drawing Conclusion',
                isQuiz: true,
                quizes: [
                    {
                        id: 31,
                        difficulty: 'Task 1.1',
                        quiznum: 'Quiz #1',
                        score: 5,
                    },
                    {
                        id: 32,
                        difficulty: 'Task 1.2',
                        quiznum: 'Quiz #2',
                        score: 5,
                    },
                    {
                        id: 33,
                        difficulty: 'Task 2.1',
                        quiznum: 'Quiz #3',
                        score: 5,
                    },
                    {
                        id: 34,
                        difficulty: 'Task 2.2',
                        quiznum: 'Quiz #4',
                        score: 2,
                    },
                    {
                        id: 35,
                        difficulty: 'Task 2.3',
                        quiznum: 'Quiz #5',
                        score: 2,
                    },
                    {
                        id: 36,
                        difficulty: 'Task 3.1',
                        quiznum: 'Quiz #6',
                        score: 2,
                    },
                    {
                        id: 37,
                        difficulty: 'Task 3.2',
                        quiznum: 'Quiz #7',
                        score: 2,
                    },
                    {
                        id: 38,
                        difficulty: 'Task 3.3',
                        quiznum: 'Quiz #8',
                        score: 1,
                    },
                ],
                firstp: '',
                secondp:'',
                thirdp: '',
                img: '',
                example: '',
                lessonLink: '',
            },
        ]
    },
]

