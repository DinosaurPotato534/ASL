# Sign Sense
## Inspiration
According to the US National Institute of Health, individuals with hearing loss have 1.58 times higher odds of being under the global poverty line. This data is only for the US, where government support and schemes like Medicaid provide some degree of relief. Now, consider the plight of those in developing, underdeveloped, or conflict-ridden regions where such support is often scarce. For countless children in these corners of the world, impaired hearing and speech act as insurmountable barriers, robbing them of the chance at a good life. This alarming truth serves as our unwavering inspiration. Fueled by empathy and a deep sense of responsibility, we are committed to breaking these chains.

## What it does
- By leveraging deep-learning models built on the latest research but also our own innovative and agile thinking for quick training and implementation (relatively), the app interprets sign language gestures in real time, translating them into written or spoken language.
- Tailored to various languages and dialects, it facilitates seamless communication, breaking down barriers to education and social interaction.
- Inclusivity and accessibility: English (American Sign Language and Indian Sign Language), Arabic, Spanish, and Bangladeshi.
- The app provides means not only to support communication but also self-learning/teaching sign language
- This app is intended as a proof of concept, evidence of what thoughtful innovation, even just overnight, can make for improving millions of lives

## How we built it

## Challenges we ran into
- One of the biggest challenges was getting everyone's coding environment set up as we were implementing multiple frameworks across different programming languages and we had members using both Windows and Mac. We learned a lot from this as we developed team communication despite working online with people we had never met before. There was all the mutual support to get each other on par with the different technologies being deployed.
- Having never worked with TensorFlow in JavaScript before, we had some issues working out how best to use/store the models and retrieve the relevant information for each call and how to space out calling the model to use memory efficiently. We did rigorous research into using TensorFlowJs and finally, we managed to deploy not one but multiple models. By the end, we were so comfortable with it that we were tweaking different aspects of the models and weights of the layers in Python and immediately deploying them in JavaScript to find the best combinations. 
- We also had a team member who joined our group but then at the last moment realized would be unable to participate. However, we made sure our planning and action right from the minute the hackathon started was on point, working through the night. We didn't even feel the lack of a member.
- Finally, building the models itself was a monumental task. We realized that because of the high precision required in the images being processed and the sheer number of images in the datasets, a regular implementation of TensorFlow CNN would have been impossible to train in the given time. But we came up with innovative solutions, augmenting our data for efficient flow, using model characteristics that are efficient, and making up for this by increasing data flow (the trade-off was positive based on our research!

## Accomplishments that we're proud of

## What we learned

## What's next for Sign Sense

