---
title: Contact-Aware Policies
summary: Learning manipulation from audio, tactile, and force feedback
tags:
  - Robot Learning
  - Tactile Sensing
  - Diffusion Policy
date: '2024-01-01'
external_link: ''
image:
  caption: 'ManiWAV ear-in-hand gripper'
  focal_point: Smart
links:
  - icon: globe
    icon_pack: fas
    name: ManiWAV
    url: https://maniwav.github.io
  - icon: globe
    icon_pack: fas
    name: Adaptive Compliance
    url: https://adaptive-compliance.github.io
url_code: ''
url_pdf: ''
url_slides: ''
url_video: ''
---

## Beyond Vision-Only Policies

Most robot learning research treats manipulation as a vision problem. But contact-rich tasks—wiping, flipping, inserting—require sensing *through* interaction, not just *before* it.

This project explores how to learn manipulation policies that incorporate audio, tactile, and force feedback.

---

### ManiWAV (ICRA 2025)

**Key Insight:** Sound is tactile information. A contact microphone in the gripper finger captures:
- Contact events (spatula touching pan)
- Surface materials (velcro hook vs. loop)
- Object states (dice in a cup)

**Results:** Audio-visual policies outperform vision-only by 50%+ on contact-rich tasks.

**My Role:** TRI collaboration lead, hardware design support

Led by Zeyi Liu from Prof. Shuran Song's lab at Stanford.

[Project Page](https://maniwav.github.io) | [Paper](/publication/maniwav-2024)

---

### Adaptive Compliance Policy (ICRA 2025)

**Key Insight:** Robots need to be stiff for precision AND compliant for contact. The solution: let diffusion policies predict *spatially-varying compliance* alongside position targets.

**Results:** 50%+ improvement on flipping and wiping tasks.

**My Role:** Concept support, TRI collaboration

Led by Yifan Hou from Prof. Shuran Song's lab at Stanford.

[Project Page](https://adaptive-compliance.github.io) | [Paper](/publication/adaptive-compliance-2025)

---

### Tactile-Diffusion Policies

**Current Work:** Integrating PolyTouch's multi-modal sensing (tactile + acoustic + peripheral vision) with diffusion policy learning.

Early results show tactile-inclusive policies are more robust than state-of-the-art visuomotor policies across bimanual manipulation tasks.

---

## The Bigger Picture

These projects validate my core thesis: **haptic feedback is the missing ingredient for scaling robot foundation models.** Vision gets you 80% of manipulation—but the last 20% requires feeling the world.
