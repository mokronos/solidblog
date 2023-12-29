---
title: Human Robot Interaction
layout: base
---

# Comparison of Human Robot Interaction Interfaces
## Task
HRI interface comparisons with examples (VR, AR, bio-signal-based)

## Comparison VR, AR, Bio-signal-based

Advantage of all of them is that the user can often interact with the robot in a natural way through hand and body gestures. This makes it possible for users without the technical knowledge of controlling the robot traditionally, to control the robot.

### Virtual reality(VR)
Virtual reality puts a human into a virtual world to interact with a robot. The human can see the robot and the robot can see the human. The human can interact with the robot by using a controller or by using their hands. 
One important aspect is ability to get almost instant feedback from the robot motion. This is important for the human to be able to learn how to control the robot.
VR headsets can often be uncomfortable to wear for long periods of time. Newer headsets have batteries instead of cable connections, which can be better or worse depending on the use case.
VR could technically do the save as AR does, by just recording the world around the human and displaying parts of it in VR. However the technology isn't there yet to perfectly display reality, so there is still clearly a difference.
Could pre-render the actions given to the robot, before executing them.

### Augmented reality(AR)
Augmented reality enhances the real world around the human with digital information to better interact with a robot. The human can see the robot and the robot can see the human. The human can interact with the robot by using a controller or by using their hands.
One difference to VR is the ability to also see and better interact with the real world around the human.

### Bio-signal-based

Bio-signal-based devices can be used to control robots. Many different types of bio-signal-based devices exist, such as EEG, EOG, EMG, ECG, ERG, EGG, GSR and EDA.

- Electroencephalography (EEG): Measures electrical activity of the brain.
- Electrooculography (EOG): Measures electrical activity of the eye.
- Electromyography (EMG): Measures electrical activity of the muscles.
- Electrocardiography (ECG): Measures electrical activity of the heart.
- Electroretinography (ERG): Measures electrical activity of the retina.
- Electroglottography (EGG): Measures electrical activity of the vocal cords.
- Galvanic skin response (GSR)/Electrodermal activity (EDA): Measures electrical activity of the skin.

These devices can be used to control robots in many different ways. For example, a person can control a robot by thinking about moving it, or by moving their eyes to look at different parts of the robot. Bio-signal-based devices can also be used to control robots by measuring the person's heart rate, or by measuring the person's sweat levels.

### Some abbreviations

- ROS: Robot Operating System


### General papers
- https://link.springer.com/content/pdf/10.1007/s43154-020-00005-6.pdf
    - overview of different HRI interfaces

- https://graphics.cs.wisc.edu/Papers/2017/LRMG17/roman-vr-2017.pdf
    - general paper about VR as a HRI interface

- http://ti.rutgers.edu/publications/papers/1999_ieee_tra.pdf
    - paper about using VR for HRI
    - decent overview of VR

- https://robotics.mit.edu/teleoperating-robots-virtual-reality
    - MIT article

- https://www.allerin.com/blog/ar-vr-and-other-ways-of-controlling-robots
    - article about different HRI interfaces
    - might be perfect overview

- https://www.mdpi.com/1424-8220/21/20/6863
    - huge summary/survey of bio-signal-based solutions
    - for assistance/rehabilitation

- https://arxiv.org/pdf/2203.03254.pdf
    - AR summary
    - 2022 paper
### General comparisons

- https://reader.elsevier.com/reader/sd/pii/S2212827120314815?token=674B622691122E381C72A6FD9A55D0F0163342C7E2F3F3785601BAECC912EB05ED29318E11A2834A7D0B9019B9EE27A6&originRegion=eu-west-1&originCreation=20221104125245
    - Review of VR/AR solutions for HRI

- https://cs.brown.edu/people/er35/publications/SIEDS_2020.pdf
    - comparison of different VR approaches
    - positional control (waypoint navigation)
    - trajectory control (click and drag)

### get at least one paper with an example for every interface type (VR, AR, bio-signal-based)

#### VR
- https://arxiv.org/pdf/1903.10064.pdf
    - controlling a swarm of robots with VR
    - manipulating the environment in VR, zooming in and out
    - placing walls in the environment to block the robots
    - highlights intuitiveness of VR
    - gestures are intuitive, but need some training
    - visual information from the robots gets sent to pc and dynamically rendered in VR
    - technically human swarm interaction (HSI)
    - summary:
    VR is used in \cite to control a swarm of robots. The robots are able to navigate and interact with each other on their own.
    The user can use VR to manipulate the environment, zoom in and out, and place walls in the environment to block or guide the robots. Additionally the robots can be picked up and placed in a new location. Leap Motion is used to identify the users motions.
    Thus the user can propose future actions or locations in the virtual environment and the robots will try to execute or move to them in the real world.
    The authors conducted a usability study with 10 participants between the ages 20 and 35 with an engineering background. Is showed that the controls are intuitive and the test missions are accelerated with the help of human intervention. They note however that some of the gestures, specifically the wall placement and the world resizing, need some training to get used to.


- https://h2r.cs.brown.edu/wp-content/uploads/whitney18.pdf
- https://cs.brown.edu/people/gdk/pubs/vr_teleop.pdf
    - controlling robots over the internet with VR (teleoperation)
    - created interface to be used by other researchers
    - can be used with consumer-grade headsets
    - testing approach: https://cs.brown.edu/people/er35/publications/testing.pdf
        - establishes baseline for other research
- https://arxiv.org/pdf/1703.01270.pdf
    - control of robot arms in VR
    - VR Control Room
    - highlights collocation capabilities of VR
    - pick, place, assembly, manufacturing tasks
    - summary:
    In \cite a team of researchers use VR to control a robot arm. The robot has two arms and is equipped with a camera at its "head". The user uses the consumer-grade headset Oculus Rift CV1 and two Razer Hydra hand trackers as controllers.
    In VR the robot can then be controlled from a control room, which includes the view of the main camera and two optional views from the two robot arms. So the user feels as if they were in the robots head.
    To test the system, the authors made an expert user pick up and assemble a Lego piece. They compared it to an automated algorithm on the same task and were able to show that the human performed perfect, whereas the algorithm showed some weakness on the assembly. The user reported that the cameras in the robot arms helped with the alignment of the pieces.
    The teleoperation allows the user to perform actions from a save environment.
    The paper highlights the ability of VR to utilize consumer-grade hardware.

#### AR
- https://www.frontiersin.org/articles/10.3389/frobt.2017.00020/full
    - uses tablet
    - displays information about the robots motion on the tablet
    - one tiltable camera, 1/3 of workspace visible at a time
    - uses the tablet to control the robot
    - 3 interfaces: control with accelerometer of tablet
        - egocentric: user sees the workspace from the robots perspective. Parts of the workspace are not observable due to the lack of field of view and movement of the camera.
        - exocentric: user sees the workspace from a fixed position on the ceiling. Vision under the robot arm is blocked, so some objects can't be interacted with.
        - mobile mixed reality: user sees workspace from tablet in arbitrary position. Can access any location.
    - pretrial (place one box somewhere else)  was easier with AR plot over workspace enabled
    - mobile performs best
    - article about it: https://thenewstack.io/smartphone-app-can-control-robots-augmented-reality/
    - summary:
    AR can be used to enhance the environment. In \cite the authors compare 3 interfaces. One egocentric, with a tiltable camera on the robots head, one exocentric, with the camera on the ceiling looking down, and the proposed method of using a mobile tablet as the camera. All three approaches use the tablets accelerometer to control the robots arms. The main advantage of the proposed method is, that its cameras field of view can reach all places, unlike the other two.
    The users can see an overlay over the workspace on the tablet screen, where the robots maximum range of motion and potential actions can be projected.
    When testing the system, users performed better on the pretrial, when having the AR plot enabled. Additionally the mobile reality interface shows better performance than the other two.
    The main points to take away, are that this approach needs visual markers in the environment, the user and the robot need to be in the same environment for the mobile version and the AR overlay helps the user and the robot interact better.


#### Bio-signal-based
- https://link.springer.com/article/10.1007/s10514-020-09916-x
    - earlier work used only EEG: http://groups.csail.mit.edu/drl/wiki/images/e/ec/Correcting_Robot_Mistakes_in_Real_Time_Using_EEG_Signals.pdf
    - Uses EMG(muscle) + EEG(brain) to give swift feedback to robot
    - EMG is used to detect the users intention, EEG is used to detect potential errors the robot or the human makes
    - summary:
    In the paper \cite the authors used a hybrid of electromyography (EMG) and electroencephalography (EEG) to control a arm with a tool on it. The robot was supposed to hit one of three holes in the wall in front of it with the electric screwdriver in their hand. The user is equipped with electrodes on their head and surface bar electrodes are applied to their forearms. The signals of those devices are processed separately and then used to determine the action of the robot arm.
    The user observes the robot and its environment directly and tries to move the tool in the robots hand via muscle movements. When the robot or the user themself make a mistake, the users brain reacts a certain way, often unconsciously, which can be detected by the EEG processor. Those signals are then used to stop and then correct the robot.
    The system was evaluated on 7 participants. The users were untrained, to reduce the hurdle for new users. The correct target was hit in roughly 70% of the trials, when the robot randomly chose. With the help of the correction through the participant, the success rate jumped to 97%.
    The authors concluded, that the reliability needs to be improved to be able to deploy the system in safety critical situations. Specifically, the neural network that classified the EEG signal into mistake or no-mistake, had only a 54% accuracy. They also highlight that more users would be needed to make the system more robust towards inter-person variations. However, the system shows potential for an effective supervision system.

- https://www.jmir.org/2019/10/e16194/
    - neuralink whitepaper
    - uses brain signals to control a robot
    - might be interesting, but not used on humans yet
    - don't know if it "counts" as an example
    - mainly describes a way to get information out of the human brain, not however how to interpret it or control a robot.
    - but really important

- https://static.aminer.org/pdf/PDF/000/329/658/emg_based_human_machine_interface_system.pdf
    - example of using EMG to control a robot
    - really old paper


## Comparison

AR is the cheapest of the three, as no special hardware is needed most of the time. VR however has huge upside of remote operation, by emerging the user in the distant environment. Additionally VR can be more intuitive because the user can be "in the skin" of the robot. Bio-signal-based solutions are in the early stages but offer huge potential for swift intuitive interaction with robots.

|                  | Example use cases | Example devices | ease of use | unique functions | cost | future potential |
| ---------------- | ----------------- | --------------- | ----------- |------------------| ---- | ---------------- |
| VR               |control robot motion over internet by moving controllers and observing results|Oculus rift, Meta quest pro, smartphone| special equipment necessary (headset and controllers), often uncomfortable for long periods of time, either battery (limited work time) or cables (limited motion range)| teleoperation, see whole environment of the robot from somewhere else; ego perspective and feel of robot (step into skin of robot, more hands on), but strong stable internet connection necessary|expensive special equipment, getting cheaper when consumer grade equipment can be used|might become important to remotely help out "almost fully" autonomous systems in difficult situations; need better form factors|
| AR               |display important robot information about the robot(range of motion, wear and tear, pre-rendering of action)|google glasses, tablet, smartphone|really simple|no special equipment required|pretty low, no special equipment|integration into normal glasses, or contact lenses|
| Bio-signal-based |signal if robot did right or wrong action directly with ones mind, control of prosthesis via muscle signals(EMG)|implants (Neuralink), EEG, EMG, etc.|some special equipment needed, sometimes easy to use (wrist bands), sometimes permanent augment (implant)|if implemented well, can read the humans mind and make robot smooth extension of human|ranges from cheap(wrist bands) to expensive(implants)|huge potential to merge with robots and full control of a robot with a humans thoughts|

### Use cases
- VR
    - teleoperation
    - swarm operation
    - full birds eye view or different perspective
- AR
    - display important information about the environment and the robot

- Bio-signal-based
    - control of robot
    - possibly more complex, and faster controls possible

- Comparison
VR has the special property that it can transport the user into a completely different environment to control a robot through teleoperation. Additionally one can view the environment from any perspective, for example a birds eye view, as in \ref. This can help to gain an overview over the environment and thus control swarms or other robots.
AR and bio-signal-based technologies have direct visual contact from the user or through the camera of a handheld device, like a tablet \ref, most of the time.
However, AR can enhance the real environment with important information about the workspace and the robot. This can help the user to perform the tasks faster and saver. It is to be noted that technically VR can do the same, by recording the environment with its front camera and displaying the information in the headset, but the user might have a lower field of view compared to AR glasses or a tablet.
Bio-signal-based technologies can be used to control the robot directly with ones mind (EEG) or muscles (EMG), like in \ref. The applications are still limited to simple controls of robot arms or the detection of mistakes with the human mind.
The main difference to AR and VR is the fact that the reactions can be faster as the thinking about the mistake can be detected unconsciously by the system. The main issue is that the reliability is still low and thus not save to use with big and powerful robots.

### Devices
- VR
    - Meta quest 2
    - smartphone

- AR
    - google glasses
    - tablet
    - smartphone

- Bio-signal-based
    - EEG
    - EMG
    - implants (Neuralink)

- Comparison
VR devices are mostly headsets to display the environment with controllers to control the robot and the position of the user. For headsets, the Meta Quest 2/Pro or the Valve Index can be used. For the controllers, Razer Hydra hand trackers or the default VR controllers that come with the headsets are available. The user can also use a smartphone as a headset, but the field of view is limited, the performance might not be enough and the resolution is not as good as with a dedicated headset.
For AR, dedicated glasses are still early in the development. However handheld devices like tablets or smartphones can be used as well, as in \ref.
Bio-signal-based devices can be wrist bands, that measure muscle contraction, electrodes on the scalp to measure signals from the brain or various other specialized technology. One main difference is that VR and AR devices are bought on the consumer market, which can help with cost and development, whereas bio-signal-based devices aren't often used in everyday live.

### Ease of use
- VR
    - special equipment necessary (headset and controllers), often uncomfortable for long periods of time, either battery (limited work time) or cables (limited motion range)
    - intuitive, ego perspective
- AR
    - really simple
    - need to control by touchscreen, which is not as intuitive as VR

- Bio-signal-based
    - some special equipment needed, sometimes easy to use (wrist bands), sometimes permanent augment (implant)

- comparison

### Cost

Table:

| technology | device | cost | link |
| ---------- | ------ | ---- | ---- |
| VR         | Meta Quest 2 | 450$ | https://www.meta.com/de/en/quest/products/quest-2/ |
| VR         | Valve Index | 1079$ | https://store.steampowered.com/valveindex |
| AR         | I-pad | 449$ | https://www.apple.com/shop/buy-ipad/ipad |
| AR         | Galaxy Tab S8 | 200$ | https://www.samsung.com/us/tablets/galaxy-tab-s8/buy/ |
| AR         | Google Glasses | 999$ | https://www.theverge.com/2019/5/20/18632689/google-glass-enterprise-edition-2-augmented-reality-headset-pricing |
| Bio-signal-based | EEG electrode hat | 1500$ | https://shop.openbci.com/collections/frontpage |

- comparison
To compare the cost of the different technologies, The prices of the different devices were looked up and summarized in \ref. Note that this is only a fraction of possible devices.
The low end Meta Quest 2 in the same price range as the high end I-Pad. But when comparing the more powerful Valve Index, to a more budget tablet, like the Galaxy Tab S8, VR devices are considerably more expensive than a basic AR device. Additionally for most VR headsets, an additional high end PC is necessary to process the visuals.
Another alternative for AR are the Google Glasses, which come at a higher price, similar to the VR headsets.
Bio-signal-based devices, specifically EEG, are starting at the price of a VR headset. They might however get cheaper if those devices get produced in higher numbers. The prices can get way higher as well, if implants through operations are used.
So in general, AR is the cheapest option, as one can simply use a smartphone or a tablet. VR requires some special technology in form of a headset and probably a high end PC. Finally, the bio-signal-based devices come out as most expensive, as they are still early in development.


### Problems
The main ways VR and AR can improve from today are general hardware improvements like better batteries, 
### Future potential
- VR
    - might become important to remotely help out "almost fully" autonomous systems in difficult situations
    - need better form factors and better hardware:
        - batteries
        - more comfortable
- AR
    - integration into normal glasses, or contact lenses
    - more powerful hardware, or remote processing

- Bio-signal-based
    - huge potential to merge with robots and full control of a robot with a humans thoughts
    - more consumer based hardware
    - improved reliability

- Comparison:
VR might be used at some point to have the human help out almost fully autonomous systems by stepping in the perspective of the robot. Or it can be used to fully control robots remotely and remove the need for humans to work in dangerous environments.
AR could have a huge jump in usability if it were to be integrated into everyday glasses or even contact lenses. This could enable people without training to use them. If robots are more common in everyday life this might increase the trust in the robots by displaying certain information about the robots future actions in the environment.
Bio-signal-based technologies could be used to completely and reliably control robots with human thoughts, which would be a huge step in the field of human-robot interaction. If this technology is achieved, most other control devices might be obsolete.
So the biggest potential certainly lies within EEG technologies, as they can enable a direct link between human and robot. However the other two technologies might also play a crucial role in some more niche cases.


## Conclusion
- Summarize the key points and findings of the paper:
In summary, it is difficult to compare the three technologies, because they each have their different use cases, as seen in \ref. Additionally, they are never tested against each other, with regard to user feedback.
When comparing the use cases, VR shows a clear advantage in teleoperation, AR in merging digital information into the real world environment and bio-signal-based technology can use quick reactions directly from the human brain to mitigate mistakes.

- Highlight the main contributions of the paper and its impact on the field of HRI interfaces:
This paper compares some examples of the three technologies and their use cases. It also extrapolates those comparisons to the whole categories. Hopefully it can give some ideas on the future research directions of the field. Additionally, this is an encouragement to further investigate how to better compare the three technologies to then be able to better predict what technology is worth more efforts. To conclude this report, some recommendations for future research are the following.

- Discuss future directions for research in HRI interfaces, including VR, AR, and bio-signal-based:

The final achievement would be to have a direct link between human and robot in both directions. Until then, all three technologies will need to be improved gradually.
For VR, the ability to wear the headset for a long time and training programs should be the focus.
AR might be more useful, if the technology gets integrated better into glasses to not need an extra tablet while working with a robot in the workspace. 
Bio-signal-based technologies first need to improve their reliability before they can be used in real-world applications. A next step would be to improve the designs behind the devices, so they can be used more for consumer products and accelerate the development.

## todo
- add picture maybe
- add VR/AR review
