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
- User-Centric Approach: We recognized the importance of a user-centric approach, especially for an app like ours. Prioritizing the needs of the potential users we may be serving guided our development. Driving *empathy, accessibility, and inclusivity* in all the domains - from UI to model development and implementation.
- The challenges faced while implementing advanced computer vision and AI technologies across different frameworks pushed us beyond what we had ever done, bringing us into the realm of a steep learning curve - both conceptual and technical.
- Depth of model variety in TensorFlow: We learned about how small fine-tuning changes to CNN models can have a huge impact on the outcome. The eventual strength in understanding all the technologies that we developed also helped us use an efficient iterative model to test models in a real-world environment and analyze the pros and cons of different features. Grappling with the complexity of freezing or changing different layers and affecting the weights of layers trained successively through transfer learning was a truly exciting experience. 

## What's next for Sign Sense
- Refinement and Optimization: As we'll have more time we'll refine deep-learning models, applying 3D CNN layers to video data to apply the technology to not just letters but a wide host of Sign Language *communication and teaching requirements*. Having identified very specific features that we need in our model, our goal is to develop a model in C++ from scratch that will be highly efficient in both training and deployment. 
- Developing Inclusive AI: We have done research into biases that build up in certain models due to the larger presence of certain groups of people in the dataset; we'll use techniques like adversarial attacks to make the app's AI truly *inclusive and accessible*.
- Real-Time Performance: Optimize algorithms for faster real-time translation. This would have already been done, but often such models take very long times to train and don't fit into the iterative flow over the 24 hours that were required to deliver this project.
- User Testing: We agree that the project will benefit greatly from extensive user testing with diverse communities to gather feedback for interface improvements - focusing on making it extremely accessible to the people who most need it!
- Democratize decisions and scale open-source: The only way to have an impact is to include the people we're impacting in our decision-making. We would like to work towards making this a popular open-source hub for hackers, researchers, and most of all, every person who feels touched by the effect of the problem we are solving.
- Community Empowerment through training: Develop training programs for educators and caregivers to effectively use the app in educational and other settings. Offer vocational and technology skill development workshops through the app to empower local communities in maintaining and enhancing the app interface and including it whenever required.
