---
title: "Bram Stoker's Dracula Pinball"
date: 2020-07-10T12:00:00-07:00
draft: false
subtext: 吸血鬼
---

_This is a repost of an article from my old site originally posted in 2017, in the hopes that the information within still proves useful for somebody._  

## Background
Most pinball machines manufactured have a "killer feature". While there is absolutely a collection of standard features that have been ubiquitous on nearly every machine, almost every game has tried to offer a unique design element of it's very own. [Terminator 2](http://www.ipdb.org/machine.cgi?id=2524) has it's rotating cannon, [Black Knight](http://www.ipdb.org/machine.cgi?id=310) has the magna-save, and [Medieval Madness](http://www.ipdb.org/machine.cgi?id=4032) has it's crumbling castle. For Bram Stoker's Dracula, most people would say that this is the "Mist Ball" multiball.  

As a little preface, since I have not to this point written anything on it, Dracula was my first pinball, and certainly the one I've spent the most time on so far. I love the theme and art style, and as a huge gothic horror and Castlevania fan, it instantly drew me in when deciding on what pinball machine I first wanted. The gameplay feels very rewarding, if notoriously difficult. I've also tried to bring it into the 21st century with a complete LED overhaul and LED strips, as well as a Color DMD (They did an [awesome](https://www.youtube.com/watch?v=aoWvsoIphbw) job with the coloring on this ROM, I **very** highly recommend it).  

{{< imgresize title="" src="/img/bsd/attract.gif" resize="35%" >}}  

While I will usually call it "Dracula", this game is actually named Bram Stoker's Dracula, after the 1992 movie. It is usually shorted as **BSD**. This game is completely separate from the 1979 Stern [Dracula](http://www.ipdb.org/machine.cgi?id=728).  

That being said, let's continue on to the main feature. I will explain Mist Multiball and what it entails gameplay-wise, go over it's technical details and operation, and explain some basic troubleshooting steps for common issues.  

## Gameplay

> In pinball, multiball is simply the presence of 2 or more playable balls on the playfield at once. Gameplay-wise, this usually means that special scoring features are active until multiball is over (generally when the player is back down to one or zero balls), and scoring certain shots will win jackpots or otherwise abnormal amounts of points.  
> 
> While multiball is almost a guaranteed feature on pretty much any solid state game past 1980 or so, it wasn't very common beforehand. It did occur previously in more well-known Electro-Mechanical games such as Fireball. Nothing would stop you from shooting up multiple balls in rapid succession on the very early self-loading games, although this did nothing for you score-wise.  
>
> In modern games, multiball is generally a gameplay goal that will require some time and skill to obtain, and most offer different multiball events that could also include different numbers of balls on the playfield. Often, you have to lock in a ball 3 times in order to start the event. As an example, Star Trek: The Next Generation has a couple different storyline multiball events (from 2-3 balls), but there is a more-or-less final event called Final Frontier that will basically throw you 6 balls at once and allow you to cash in on various things you may have or have not accomplished prior in your game. The game Apollo 13 has a 13 ball multiball!! I have not played it, so couldn't personally speak to what that experience is like..  
>
> Note that this does not include captive balls, of course, which are balls on the playfield that you can interact with, but usually are held inside of small area or somehow restrained to something.  

Dracula contains 3 multiball modes, and the generally agreed-upon major goal of the game is to combine all 3 multiballs (Castle, Coffin, and Mist) simultaneously.  

Having a multiball active will score 10 million points on each major shot (i.e. Coffin/Castle Ramp, Mystery Hole, etc). Having 2 active will score 20 million, and 3 Thirrrtttyyyy million! (Really, the voice drags out the 30 in-game, it's quite amusing).  
Castle multiball can be achieved by lighting the castle lock (hitting certain targets), and then shooting the castle ramp. The ramp will redirect the ball, if the lock is lit, to the castle where it gets locked and you start with a new ball. Coffin multiball is started by shooting the coffin ramp enough times to open it, which will then lock balls into the coffin. Castle is supposed to represent you killing Dracula's brides, while coffin is killing Dracula himself.  

{{< imgresize title="" src="/img/bsd/mist2.gif" resize="35%" >}}  

Now mist ball is a 2 ball multiball (the others are 3), which can be started by making enough castle ramps. This will light up the mist ball at the mystery hole. If you then shoot the mystery hole, it will start mist ball. Mist ball is also lit automatically on the last ball of the game for each player.  
When you get mist ball, a second ball will begin moving across the playfield. If you can hit it hard enough to knock it off of it's trajectory, you immediately start Mist Ball multiball. From here, you can start making your vital shots, and try to start the other multiballs if they aren't already going.  

{{< imgresize title="" src="/img/bsd/mist1.gif" resize="35%" >}}  

The mist ball can start from either side, although the default is the right side. When you start up a game, it usually drops the ball from the left side and reloads it to the right side. Just know that if a player before you missed the ball, that for you, it will actually start coming from the left.  

## How it Works
Underneath the playfield is a motor, a traveling assembly containing an electromagnet (only magnetic when induced with an electrical current), and a long reversing shaft. This allows the magnet to travel bidirectionally.  

{{< imgresize title="Motor" src="/img/bsd/bsd_mist_motor.jpg" resize="35%" >}}  

{{< imgresize title="Entire Mechanism" src="/img/bsd/bsd_mist_mechanism.jpg" resize="35%" >}}  

{{< imgresize title="Magnet Assembly" src="/img/bsd/bsd_magnet_assembly.jpg" resize="35%" >}}  

{{< imgresize title="Magnet in Action" src="/img/bsd/mist3.gif" resize="35%" >}}  

The path can easily be seen on the bottom of the playfield, by the direction of the reversing shaft, but also on the top by simply looking at the green mist graphic. It follows directly above this line.  

{{< imgresize title="" src="/img/bsd/bsd_mist_line.jpg" resize="35%" >}}  

It should also be noted that there are actually a series of inserts below the green mist line, which allows a light mounted on the magnet assembly to shine through, giving the appearance of a light traveling across the mist. The socket on my light likes to be tricky; it doesn't always light up.  
The magnet is stopped at it's limits by two switches, 81 and 83, (Magnet Left and Magnet Right) that indicate the magnet has reached the end of it's travel.  
There are two pockets on each side of the playfield that can contain a ball. They are closed off by solenoid-operated gates. The game is aware of the ball's location (or absence) through the use of optical sensors in each pocket, which for the left side is switch 52, Opto Magnet L. Pocket.  

{{< imgresize title="Right Pocket" src="/img/bsd/bsd_mist_right_pocket.jpg" resize="35%" >}}  

{{< imgresize title="Left Pocket" src="/img/bsd/bsd_mist_left_pocket.jpg" resize="35%" >}}  

How does the game know if the ball is still sitting on top of the magnet or not? There is actually a special infrared sensor (Switch 82, Ball-On-Magnet) that transmits from the right pocket into a receiver on the left side. This beam is normally obstructed by the ball, so it is actually switched on when the beam makes contact (like when the ball is knocked off it's path by the active ball).  

This sensor is controlled by a special board just for it, that is only used in a couple other games (I believe [Star Wars Episode I](http://www.ipdb.org/machine.cgi?id=4458) and [The Shadow](http://www.ipdb.org/machine.cgi?id=2528)).  

{{< imgresize title="" src="/img/bsd/24opto_schematic.png" resize="35%" >}}  

The manual labels this chipset as the "24-Switch Opto Assembly", but it's more than likely that they meant "24-inch Opto Assembly", as the optical sensor operates over a much longer distance than the normal sensors do. It was probably mixed up with the "10-Switch Opto Assembly", which actually does manage multiple optos.  

The ball is "loaded" into the right magnet pocket by lifting up the ramp in the shooter lane, and shooting the ball down this lane instead. If you are in the middle of a game, it can look a little confusing for new players to see a ball loaded into the shooter lane (you may think you are getting a ball saved from multiball or something), but it instead shoots underneath the ramp to the right ramp pocket.  

{{< imgresize title="This metal ramp is lifted up" src="/img/bsd/bsd_shooter_ramp.jpg" resize="35%" >}}  

## Troubleshooting
I will start off immediately with this - If your magnet/motor components are non-functional in any way, whether it is a sensor issue causing the magnet to just go back and forth, or the motor is failing to work or something else, simply disable the magnet feature until you can get it to work.  

This setting can be found in Feature Adjustments -> #42: Magnet. Set this to DISABLE to simply turn off the entire magnet system. This bypasses the magnet feature, so that when the mystery hole is shot with Mist lit, the 2nd ball is just immediately shot into play. Obviously, this is a less than ideal situation, and the player doesn't have to go through the work of knocking the ball off it's path, but it does allow the game to be playable.  

### Diagnostics
Luckily for us, the game, like other solid state games, offers a somewhat comprehensive diagnostic toolset in regards to the magnet features. Entering the test menu will allow you to run the magnet tests, that will go through a number of diagnostic tests for magnet operation. Here are the steps and what they mean:  

- **Unload Magnet** - The magnet will move towards the center of the playfield and then release the ball so that it drains.
- **Opto Check 1** - Lamps and flashers will blink to test interference with the optical sensor.
- **Load Magnet** - A ball is ejected into the shooter lane, ramp lifted, and then shot into the right ball pocket.
- **Opto Check 2** - Lamps and flashers will blink again to test interference. Unlike check 1, this check could indicate grounding issues as opposed to optical ones.
- **Magnet On + Left** - The magnet moves the ball to the left pocket.
- **Opto Check 3** - Lamps and flashers blink to test optical interference one more time.
- **Magnet On + Right** - The magnet moves the ball to the right pocket.
- **Magnet Off + Left** - The magnet moves to the left pocket deactivated (without the ball).
- **Magnet Off + Right** - The magnet moves to the right pocket deactivated.

You can run the steps in sequence, or repeat a test until stopped. During these tests, a status display is shown on the DMD that indicates the state of the various related components of the system. Here is an excerpt from the manual chapter on the Magnet Test:  

{{< imgresize title="" src="/img/bsd/magnet_test_dmd.png" resize="35%" >}}  

As above, all of this is detailed in the manual, and I highly recommend that any owner of a BSD also obtains a manual along with it.  

### 24 Opto Board
(I diagnosed this issue a while ago, and did not do my normal routine of taking snapshots of each step.. my apologies)  

After owning the game for a period of time, my Mist ball stopped working. It actually caused the motor to spin the magnet back and forth several minutes at the start of each game, which was incredibly annoying (The motor is quite noisy), and also worried me regarding wear to the motor. Although it took some switch diagnostics, I determined that the Ball-On-Magnet switch was permanently ON, as it did not react to any changes.  

You should be able to test the operation of this switch simply by moving your finger across the playfield (if the sensors are correctly aligned). Otherwise, you can actually point a cell phone camera at the right-hand emitter and pick up what appears to be a purple blinking light. This is actually the IR beam of the emitter, which is beyond the spectrum of what our eyes can perceive. The camera interprets this as a visual purple light, however. At least for my cell phone!  

In my case, nothing was happening at all. If I had to guess, the magnet couldn't tell that the ball was not on the magnet, and thus kept moving back and forth in an attempt to let the non-existent ball go. This was also why the ball would refuse to load, and why if I manually placed a ball into the right pocket, it would carry it out and let go of it halfway-through, but continue moving.  

I was unable to find anything visually wrong with the emitter, so moved on to the 24 Opto Board. I pulled the board out from under the playfield. Hm.. well it was pretty obvious what the issue was, or at least what one of them was. Component L1, the inductor, had one of it's leads completely disconnected from the board. I ordered an inductor of equivalent rating and soldered it in place, but it had no effect. I will freely admit that operating on the circuitry itself is not one of my strengths, and is something I am working on improving. I very well may have been able to successfully repair the board in another way, but wasn't at this point comfortable with going forward on this board, or paying for a professional repair on it.  

After a good amount of research, I kept running into a replacement board manufactured by Homepin, an Australian group (single or multiple person?) that creates replacement PCBs for pinball machines using newer parts and more reliable designs. This board was a completely reimplemented version of the 24 Opto Board, but with more reliable components and a few additional features. The problem was that the initial manufacturing run was several years back, and I couldn't find one for sale anywhere. I even emailed a few online stores to see if they had any in stock.. no luck.  

I found an expired ad on Pinside (over a year old) for the replacement chip that had gone unsold. I messaged the user, and to my surprise, they still had it and were willing to sell! Back in action, I received the new board and installed it. The magnet immediately worked as expected. Success! As a bonus, the new board even has a nifty LED that lets you know if the beam is connecting or not.  

{{< imgresize title="Original Board" src="/img/bsd/24opto_original.jpg" resize="35%" >}}  

{{< imgresize title="Replacement Board" src="/img/bsd/24opto_replacement.jpg" resize="35%" >}}  

### Switch Column
Not too long ago, I ran into the magnet not working once again. Lifting up the playfield, I was able to quickly test the optical sensor did indeed work, thanks to the LED on the new replacement board. It did not register on the game's switch matrix test. That means that while the component itself was working, I had an issue somewhere else up the chain. Looking at the switch matrix, I noticed that there were several other switches on the same column, including the middle bank of three targets. Testing them, I confirmed that they did not work. Furthermore, looking underneath the right target revealed a wire that had come loose. A quick re-solder, and the game was fully functional again. Thanks to the new board, I was able to quickly switch my diagnosis to somewhere else, instead of focusing incorrectly on the opto and it's new chip.  

{{< imgresize title="" src="/img/bsd/bsd_target_bank_switch.jpg" resize="35%" >}}  

### Right Gate
I had several issues with the ball not correctly entering the right pocket. Essentially, the gate was angled too low, so the ball would be unable to enter the pocket as the magnet moved to the right, and would fall into the playfield. While the game can account for the ball errantly being in the playfield (and doesn't count it as a drain), it is a very annoying issue. The solution is simple: bend the gate upwards so that you have a little more clearance for the ball when the gate is lifted.  

## Conclusion
I hope this was a handy introduction into the Mist Multiball feature of the Dracula pinball game. While I went over just a couple issues that I encountered, there are a number of things that can go wrong, and I'd highly encourage owners of BSD read online about various owner's experiences with various magnet issues. I will update it if I can locate it again, but I do remember running into a website that contained a large number of detailed issues with the Mist components.  

I highly recommend that anybody with BSD buy the reproduction opto boards if they ever run into them, regardless of whether their current board is running or not. The original boards seem to have a high failure rate, and can be annoying to diagnose. It is my hope that Homepin or somebody else can continue the manufacture of replacement 24" Opto Boards.  

## Update Jan 2019
It looks like [PinballLife.com has these in stock](https://www.pinballlife.com/24-opto-replacement-board-a-15646.html) at the moment, good news for anyone else searching for the boards.  
I haven't had any issues in the past 2 years with the board I've ordered.  

{{< imgresize title="" src="/img/bsd/bsd_playfield_up.jpg" resize="35%" >}}  
