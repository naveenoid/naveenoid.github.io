---
title: "PolyTouch: A Robust Multi-Modal Tactile Sensor for Contact-rich Manipulation Using Tactile-Diffusion Policies"
authors:
  - Jialiang Zhao
  - admin
  - Siyuan Feng
  - Benjamin Burchfiel
  - Edward Adelson
date: '2025-05-15'
publishDate: '2025-01-01'
publication_types: ['paper-conference']
publication: 'IEEE International Conference on Robotics and Automation (ICRA)'
publication_short: 'ICRA 2025'
abstract: |
  We introduce PolyTouch, a novel robot finger that integrates camera-based tactile sensing, acoustic sensing, and peripheral visual sensing into a single design that is compact and durable. PolyTouch provides high-resolution tactile feedback across multiple temporal scales, which is essential for efficiently learning complex manipulation tasks. Experiments demonstrate an at least 20-fold increase in lifespan over commercial tactile sensors, with a design that is both easy to manufacture and scalable. We then use this multi-modal tactile feedback along with visuo-proprioceptive observations to synthesize a tactile-diffusion policy from human demonstrations; the resulting contact-aware control policy significantly outperforms haptic-oblivious policies in multiple contact-aware manipulation tasks.
tags:
  - Tactile Sensing
  - Diffusion Policy
  - Multimodal
featured: true
links:
  - name: Project
    url: 'https://polytouch.alanz.info'
image:
  caption: 'PolyTouch finger with tactile, acoustic, and peripheral vision sensing'
  focal_point: ''
  preview_only: false
awards:
  - 'Best Paper Award'
---

## 🏆 ICRA 2025 Best Paper Award

### Key Contributions

1. **Multi-modal sensing in one finger**: Tactile imaging + contact microphone + peripheral vision
2. **20× durability improvement**: VHB tape-based elastomer vs. standard silicone gels
3. **Tactile-diffusion policies**: First integration of multi-modal tactile sensing with diffusion policy learning

### Results

| Task | Vision-Only | Tactile-Inclusive | Improvement |
|------|-------------|-------------------|-------------|
| Insert Wrench | 0% | 18% | +18% |
| Sort Fruit | 33% | 46% | +13% |
| Crack Egg | 50% | 54% | +3% |
| Serve Egg | 66% | 100% | +34% |

### My Contribution

- Co-conceived multimodal sensing approach
- Designed bimanual evaluation tasks
- Contributed to tactile-diffusion policy architecture

### Collaborators

- **Jialiang Zhao** (MIT) — Lead, sensor design
- **Siyuan Feng** (TRI) — Policy learning
- **Benjamin Burchfiel** (TRI) — Infrastructure
- **Edward Adelson** (MIT) — Tactile sensing foundations
