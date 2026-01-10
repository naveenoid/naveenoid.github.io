---
title: Large Behavior Models
summary: Fleet-scale robot learning for generalizable manipulation
tags:
  - Robot Learning
  - Foundation Models
  - Data
date: '2024-01-01'
external_link: ''
image:
  caption: 'TRI bimanual manipulation fleet'
  focal_point: Smart
links:
  - icon: globe
    icon_pack: fas
    name: TRI LBM
    url: https://www.tri.global/news/tri-teaching-robots-to-help-people-their-homes
url_code: ''
url_pdf: ''
url_slides: ''
url_video: ''
---

## Robot Data Lead, LBM 1.0

I lead the robot data strategy for TRI's Large Behavior Models initiative—our effort to build foundation models for robot manipulation at scale.

### The Challenge

Training generalizable manipulation policies requires massive, diverse datasets. But robot data is expensive: every hour of teleoperation costs real human time, and distribution matters as much as volume.

### My Contributions

**Data Collection Strategy**
- Designed fleet-wide data collection protocols across 20+ bimanual stations
- Developed quality metrics beyond simple success rate
- Established cross-task data sharing frameworks

**Policy Evaluation**
- Co-authored best practices paper for rigorous policy evaluation (ICRA 2025)
- Built statistical frameworks for comparing learned policies
- Created failure mode taxonomies for systematic debugging

**Cross-Embodiment Transfer**
- Working on data conversion pipelines between robot platforms
- Exploring how tactile/audio modalities transfer across embodiments

### Key Insight

Vision-only foundation models plateau on contact-rich tasks. The next breakthrough requires integrating haptic feedback—which is why my tactile sensing work directly informs our LBM roadmap.

### Related Work
- [Best Practices for Policy Evaluation](/publication/best-practices-2025) (ICRA 2025)
- [PolyTouch](/publication/polytouch-2025) (ICRA 2025 Best Paper)
