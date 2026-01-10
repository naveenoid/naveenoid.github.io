---
title: "Adaptive Compliance Policy: Learning Approximate Compliance for Diffusion Guided Control"
authors:
  - Yifan Hou
  - Zeyi Liu
  - Cheng Chi
  - Eric Cousineau
  - admin
  - Siyuan Feng
  - Benjamin Burchfiel
  - Shuran Song
date: '2025-05-15'
publishDate: '2025-01-01'
publication_types: ['paper-conference']
publication: 'IEEE International Conference on Robotics and Automation (ICRA)'
publication_short: 'ICRA 2025'
abstract: |
  Compliance plays a crucial role in manipulation, as it balances between the concurrent control of position and force under uncertainties. Yet compliance is often overlooked by today's visuomotor policies that solely focus on position control. This paper introduces Adaptive Compliance Policy (ACP), a novel framework that learns to dynamically adjust system compliance both spatially and temporally for given manipulation tasks from human demonstrations. Our approach enables robots to handle complex contact-rich manipulation tasks and achieves over 50% performance improvement compared to state-of-the-art visuomotor policy methods.
tags:
  - Compliance Control
  - Diffusion Policy
  - Force Control
featured: true
links:
  - name: Project
    url: 'https://adaptive-compliance.github.io'
image:
  caption: 'Adaptive compliance for contact-rich manipulation'
  focal_point: ''
  preview_only: false
---

## Teaching Robots When to Be Gentle and When to Be Firm

🤖 What if robots could learn to naturally vary their "softness" through demonstration?

Just like an expert craftsperson knows exactly how much pressure to apply when shaping delicate pottery versus sanding wood, robots need this same intuitive control over compliance.

### The Problem

Traditional approaches force robots to be either:
- Always stiff (precise but breaks on contact)
- Always soft (safe but imprecise)

Real manipulation requires *adaptive* compliance—stiff for precision, soft for contact.

### The Solution

Expand the action space: let diffusion policies predict both **positional targets** AND **spatially-varying compliance**.

This enables robots to:
- Adapt compliance in real-time based on contact forces
- Stay precise in motion directions while being soft in contact directions
- Handle delicate tasks without excessive force or position errors

### Results

**>50% improvement** over baseline approaches on:
- Object flipping
- Vase wiping
- Contact-rich insertion

### My Role

Concept support and TRI collaboration infrastructure.

### Team

Led by **Yifan Hou** from Prof. Shuran Song's lab at Stanford.
