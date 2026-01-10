---
title: "ManiWAV: Learning Robot Manipulation from In-the-Wild Audio-Visual Data"
authors:
  - Zeyi Liu
  - Cheng Chi
  - Eric Cousineau
  - admin
  - Benjamin Burchfiel
  - Shuran Song
date: '2025-05-15'
publishDate: '2025-01-01'
publication_types: ['paper-conference']
publication: 'IEEE International Conference on Robotics and Automation (ICRA)'
publication_short: 'ICRA 2025'
abstract: |
  Audio signals provide rich information for robot interaction and object properties through contact. This information can surprisingly ease the learning of contact-rich robot manipulation skills, especially when the visual information alone is ambiguous or incomplete. We introduce ManiWAV: an 'ear-in-hand' data collection device to collect in-the-wild human demonstrations with synchronous audio and visual feedback, and a corresponding policy interface to learn robot manipulation policy directly from the demonstrations. We demonstrate the capabilities of our system through four contact-rich manipulation tasks that require either passively sensing the contact events and modes, or actively sensing the object surface materials and states.
tags:
  - Audio Sensing
  - Imitation Learning
  - In-the-Wild Data
featured: true
links:
  - name: PDF
    url: 'https://arxiv.org/abs/2406.19464'
  - name: Project
    url: 'https://maniwav.github.io'
  - name: Video
    url: 'https://youtu.be/SzHENLZ7_tc'
image:
  caption: 'Ear-in-hand gripper for in-the-wild audio-visual data collection'
  focal_point: ''
  preview_only: false
---

## Sound as Tactile Information

🎵 *Sound isn't just for our ears—it's an incredible source of tactile information!*

Just like how you can instantly tell if you're cutting through bread or hitting a bone while cooking, robots can leverage audio to understand physical interactions.

### Key Insight

A simple contact microphone in the robot's "fingers" reveals crucial information that even expensive tactile sensors struggle to capture:
- **Contact events**: when the spatula touches the pan
- **Surface materials**: distinguishing velcro hook vs. loop sides
- **Object states**: are there dice in the cup?

### Results

Audio-visual policies significantly outperform vision-only approaches across tasks:
- Wiping whiteboards
- Flipping bagels
- Pouring objects
- Velcro strapping

### Scalability

By collecting data "in-the-wild" with a handheld device, we can scale up data collection without needing a robot—addressing a key bottleneck in robot learning.

### My Role

TRI collaboration lead. Supported hardware design and experimental infrastructure.

### Team

- **Zeyi Liu** (Stanford) — Lead
- **Cheng Chi** (Stanford/Columbia) — Diffusion policy
- **Eric Cousineau** (TRI) — Infrastructure
- **Prof. Shuran Song** (Stanford) — Advisor
