# Archeeko - WebXR Version | [Try it out!](https://archeeko-f3fc01.web.app/) 



[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

___

<p align="center">
<a href="https://giphy.com/"><img src="https://media.giphy.com/media/07naAP7H91JsrTusi4/giphy.gif" alt="Archeeko-poster" border="0"></a>
</p>

## Description
An archery exercise that is designed to address and measure the various variables of attention assessed by the **Test of Variables of Attention** ([TOVA](https://www.tovatest.com/)).
It consists of 3 levels with progressing difficulty, taking place in an immersive environment

## Story
The module takes place in a forest with an empty space that has a big fir tree in front of the player which contains the targets that the player has to shoot at.

The player must shoot at the targets on the fir tree. The player should have 5 to 15 extra arrows than the number of targets on the tree, so that the player has 2 extra lives. If the player misses, the arrow that has been thrown away (anywhere other than on the targets) disappears after a small period of time.
If the player hits a target, it falls from the tree and produces a particle system, a sound should be played to indicate that the player was successful in hitting a target and the NPC should tell the player good job and encourage the player to continue.
The score of the player and the number of arrows left should appear at the top corner of the player’s vision.

## Levels
###  Level One: 
In level one, the gameplay is played out as described in the scenes.

###  Level Two (*distractor* included):
The main objective is the same as **Level 1**. However,distractions should appear around the tree to try to distract the player from sustaining their attention on the needed objects.

Distractions appear in the form of butterflies or car.

###	Level Three (*distractor* and *interaction* are included):
The main objective is the same as **Level 2**. However,after the player hits a target, a small ball is popping up from the target's position to the player, and he should move away before hitting him because he will lose one of his  lives.

To know more about the design of the gamified thepautic VR application, check our [GDD](https://drive.google.com/file/d/1od28M_qhC0D6l5wUmtykHoFs0XNPkWLz/view?usp=sharing) (Game Design Document)

##  Statistics
 In each session, we need collect data to measure the progress of the player. More information about the collected information could be found [here](https://drive.google.com/file/d/13o9tlypHxnBL0X3sSX34iIsZ0B88QBUv/view?usp=sharing).

## Technologies Used

 - [A-Frame](https://aframe.io/)
	 - [Animation Mixer](https://www.8thwall.com/8thwall/animation-mixer-aframe)
	 - [AABB Colider](https://github.com/supermedium/superframe/tree/master/components/aabb-collider/)
	 - [SPE Particles](https://github.com/harlyq/aframe-spe-particles-component)
 - HTML, CSS, JavaScript

## Installation Guide

### 1 | Install and run the project locally using NPM
---

> node v15.5.0
> npm v7.3.0

 1. Clone the repository `git clone https://github.com/vrapeutic/Archeeko-WebXR.git`
 2. Go to the repo's directory `cd Archeeko-WebXR`
 3. Run `npm install` to install the required dependecies
 4. Run `npm run dev` command to start the WebXR app in your local envirotnment
 5. Go to the localhost URL specified in the terminal
 6. Congrats! You've got your local development environment ready!



### 2 | Run the project on Glitch platform
---
 1. Go to [Glitch](https://glitch.com/) platform
 2. Create an account if you don't already have one
 3. On your dashboard, then click **New project**, then choose the **Import from GitHub** option
 4. Paste the repo's full [url](https://github.com/vrapeutic/Archeeko-WebXR.git), then click **Ok**
 5. You're ready to go!
 
 ### Preferred platform
 ---
 If you are going to be using a VR Headset, then we recommend trying the app (either the [hosted version](https://archeeko-f3fc01.web.app/) or on [Glitch](https://glitch.com/)) on the [Oculus Browser](https://developer.oculus.com/webxr/).
 
 For local development and testing, modern browsers could be used, where mouse and keyboard interactions will be the main source of interaction with the VR environment.

## Code structures

*  **Assets** directory

	* All GLTF models could be found in [assets folder](https://glitch.com/edit/#!/truth-elated-ocicat?path=assets%3A1%3A0)

* **index.html**

	* Contains environment entities .

* **index.js**

	* Here we define most of our variables used for [statistics](#Statistics) computation


* **js** directory
	* Contains all logic and based on AFrame and JS code. 


## Contributions

First off, thanks for taking the time to contribute! You can check out our contribution guidelines from this [link](https://github.com/vrapeutic/Archeeko-WebXR/blob/main/CONTRIBUTING.md).

Please note that this project is released with a Contributor Code of Conduct, which can be found [here](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). By participating in this project you agree to abide by its terms.

