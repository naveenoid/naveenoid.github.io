---
title: Haptic-informed Large Behavior Models
summary: The roadmap for integrating tactile sensing into robot foundation models
tags:
  - Foundation Models
  - Tactile Sensing
  - Robot Learning
date: '2024-06-01'
external_link: ''
image:
  caption: 'Vision-only models plateau on contact-rich tasks'
  focal_point: Smart
url_code: ''
url_pdf: ''
url_slides: ''
url_video: ''
---

## HiLBMs: A Research Vision

**Haptic-informed Large Behavior Models (HiLBMs)** is my framework for the next generation of robot foundation models—ones that understand the world through touch, not just vision.

---

### The Problem with Vision-Only Models

Current VLAs (Vision-Language-Action models) achieve impressive results on pick-and-place, but plateau on:

- **Contact-rich manipulation**: wiping, scrubbing, polishing
- **Force-sensitive tasks**: inserting, tightening, assembling
- **Deformable objects**: cloth, food, cables
- **Occluded interactions**: reaching into bags, drawers

These aren't edge cases—they're the majority of useful household tasks.

---

### The HiLBM Thesis

> **Tactile feedback is essential for scaling robot capabilities beyond vision-only limitations.**

This isn't about adding another modality. It's about fundamentally changing how robots understand contact:

1. **Temporal richness**: Haptic signals evolve during manipulation; vision shows static snapshots
2. **Force grounding**: Language can describe "gentle" but only touch defines it
3. **Occlusion robustness**: You can feel what you can't see

---

### Research Directions

**Near-term (2025)**
- Tactile-diffusion policies with PolyTouch
- Audio-visual learning with ManiWAV
- Cross-embodiment tactile transfer

**Medium-term (2026-2027)**
- Tactile foundation models (pre-trained on diverse contact data)
- Haptic tokenization for VLA integration
- Sim-to-real for deformable contact

**Long-term**
- Multimodal world models with haptic prediction
- Language-grounded force control
- Whole-body tactile policies (Punyo + LBM)

---

### Why This Matters

The goal isn't building better sensors—it's building robots that can actually help in homes. Every sensor I've built (SoftBubble, Punyo, PolyTouch) is a step toward policies that handle the messy, contact-rich reality of domestic manipulation.

---

### Collaborators

This vision is shaped by collaboration with:
- **Russ Tedrake** (TRI/MIT) — manipulation fundamentals
- **Shuran Song** (Stanford) — diffusion policies, in-the-wild learning
- **Ted Adelson** (MIT) — tactile sensing foundations
- **Marco Hutter** (ETH) — legged manipulation (emerging)
