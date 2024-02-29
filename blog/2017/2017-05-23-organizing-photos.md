---
title: "Organizing Photos"
date: "2017-05-23"
categories: 
  - "tech"

tags:
  - "tutorial"
---

I recently switched my personal file hosting/sharing to [NextCloud](https://nextcloud.com/),  from OwnCloud. Among other features and improvements, it will automatically sort uploaded photos from my phone into folders by date. 

This great new feature created a glaring contrast with the many years' worth of previous photos, mostly all in a single directory, some sorted manually by event.  The process of grammatically identifying, sorting, and deduplicating was simple enough once all the tools were lined up, but finding them was not. What follows are the tools I used to get my photos in order.

<!-- truncate -->

[jhead](https://linux.die.net/man/1/jhead) is a tool that can read and manipulate JPEG Exif data. This is the metadata where your camera stores information on the photo. Moving/migrating my photos across servers and platforms several times left me with lots of photos that Linux all saw as last modified on the same date. To set the file system modified date to the data stored in the image:

`jhead -ft *`

[Exiftool](https://linux.die.net/man/1/exiftool) is another command-line tool to play with Exif data. The command below reads the datestamp, and sorts images into directories, following the YEAR/Month/day format.

`exiftool -o ./unsorted '-Directory<DaeTimeOriginal' -d   %Y/%m\  -r ./`

Depending on what your file structure looked like before, you might be left with a bunch of empty directories, which you can remove all at once:

`find . -type d -empty -delete`

Being that everyone's setup and goals are different, and the fact that I actually did this months ago and am trying to redo it now, these commands may not do the trick the first time.  If you find yourself with duplicates of your photos, you can remove them all at once:

`fdupes -rdN .`
