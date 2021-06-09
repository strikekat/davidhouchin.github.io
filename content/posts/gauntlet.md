---
title: "Fixing Gauntlet in MAME"
date: 2020-07-10T13:00:00-07:00
draft: false
subtext: 手套
---

_This is a repost of an article from my old site originally posted in 2017, in the hopes that the information within still proves useful for somebody._  

## Running MAME
A few days ago, I decided to go ahead and update the MAME setup on my machine. I have a mostly-working MAME cabinet in the arcade, but it still needs some work on the controls and display, not to mention it's not exactly portable. I also didn't know the state of MAME on MacOS. Since I work with my personal laptop now, which is my MacBook, I've been using MacOS for most of my computing needs outside of work as well.  
The good news is that MAME actually works quite well. I installed the latest version from [this site](http://sdlmame.lngn.net/) (Why isn't this linked from the download page on mamedev.org?).  
After extracting, you can throw ROM files into the roms folder and launch mame64 to actually get started. I personally like using [this controller](https://www.amazon.com/Buffalo-iBuffalo-Classic-Gamepad-BSGP815GY/dp/B06XWD8QQJ) for all of my emulation needs. It's been recognized on every system I've tried, and has enough buttons for most classic systems. For MAME, I like to have the Select button insert coins, and the Start button be Player 1 Start.

## Issue with Gauntlet
Now one of my favorite arcade games has been Gauntlet. I love the tile-based aesthetic of it, the ability to have up to 4 players, and the variety (and amount) of levels in it. Unfortunately, attempting to start it gives me an error right off the bat:  

{{< imgresize title="" src="/img/gauntlet/gauntlet_mame_error.png" resize="60%" >}}  

Seriously? I was just playing this on my MAME machine.  
Well, it was probably a much older version of MAME. You can use multiple version of MAME on a Raspberry Pi, but the more common choice is to usually use MAME4ALL, which is based off of MAME 0.37b5, with some additional support for newer games. Even though it's an older version, it performs much faster than the newer versions of MAME, at the cost of ROM compatibility and accuracy.  
On the computer, I'm running the newest release of it, so there's going to be some difference in the way ROMs get executed.I was still quite surprised, as Gauntlet is quite a well-known and popular arcade game, that compatibility would just be broken like that.  

Looking through the 0.191 release notes, I found this:  
`gauntlet.cpp: Reinstated correct size for ‘gfx1’ ROM, which was chopped off a long time ago. [f205v]`  
Ok.. that's great, except now it doesn't work. So what options do we have to run this, outside of an older version of MAME, or recompiling it with that change reverted?  

Well, it's a simple file size change. Let's look at the [source](https://github.com/mamedev/mame/blob/master/src/mame/drivers/gauntlet.cpp) for the Gauntlet driver on GitHub and see the exact change at line 596:  
`ROM_LOAD( "136037-104.6p", 0x000000, 0x004000, CRC(6c276a1d) SHA1(ec383a8fdcb28efb86b7f6ba4a3306fea5a09d72) ) // 27128, second half 0x00`  

The key is the comment at the end there. The second half of the file is pure zeroes. Also looking at the error from before, it's expecting a file size double what is already there. So we literally just need to expand the file by double what it is, with zeroes.

## Fixing the File
First, we want to extract the actual contents of the rom file. Inside of each ROM archive, are the actual binary images of each chip that comprises the arcade game data and code.  

On a *Nix system such as Linux or MacOS, we can use dd to pad our extracted file:  
`dd if=/dev/zero of=136037-104.6p bs=1 count=1 seek=16383`  

`dd` is a low-level Unix tool for reading and writing data. Here, we are specifying the input file as the "zero" device, which is a special file on Unix systems that you can read nulls (0x00) from. The output is our ROM image that needs to be expanded, which we saw in the error and line of code from before. We're keeping block size at 1 since we're just going to write 1 null. Seek will be 16383, since we want to write a single 0x00 to byte 16383. Even though we don't touch any of that space in-between, it's okay as we want it to all be empty anyways!  
The end result is still a 16KB file.  

I do not know a Windows equivalent command for padding a binary file out-of-the-box, but there are tools like padbin.exe and userland environments like Cygwin and Windows Subsystem for Linux that can provide you these (much needed) CLI utilities.  
(Update - A comment noted that you can use [this tool](http://frhed.sourceforge.net/en/) and use Edit->Append to add 8192 bytes to the file.)  

Compress the files back into a gauntlet.zip, and the result should be a working game: 

{{< imgresize title="" src="/img/gauntlet/gauntlet_mame.png" resize="50%" >}}  

## Conclusion
That's a lot of writing for just a simple one-command fix, but I enjoy the process of documenting the cause of an issue and digging for the solution. I hope that it helps somebody.  
I have plenty of things coming up that I'm excited to write on. Our arcade has recently seen the addition of a Terminator themed slot machine (Pachislo, specifically) that I'm excited to dig into, and as the new garage gets cleaned up, I hope to really get started on the restoration of Space Shuttle.  
I've also had a lot of interesting projects and restores with classic computers and consoles. Until next time! 
