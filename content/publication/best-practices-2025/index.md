---
title: "Robot Learning as an Empirical Science: Best Practices for Policy Evaluation"
authors:
  - Hadas Kress-Gazit
  - Kunimatsu Hashimoto
  - admin
  - Paarth Shah
  - Phoebe Horgan
  - Gordon Richardson
  - Siyuan Feng
  - Benjamin Burchfiel
date: '2025-05-15'
publishDate: '2025-01-01'
publication_types: ['paper-conference']
publication: 'IEEE International Conference on Robotics and Automation (ICRA)'
publication_short: 'ICRA 2025'
abstract: |
  The robot learning community has made great strides in recent years, proposing new architectures and showcasing impressive new capabilities; however, the dominant metric used in the literature, especially for physical experiments, is "success rate." Furthermore, it is common for papers to report this number with little to no information regarding the number of runs, the initial conditions, and the success criteria. In this paper we argue that to move the field forward, researchers should provide a nuanced evaluation of their methods, especially when evaluating and comparing learned policies on physical robots. We propose best practices for future evaluations: explicitly reporting the experimental conditions, evaluating several metrics designed to complement success rate, conducting statistical analysis, and adding a qualitative description of failure modes.
tags:
  - Evaluation
  - Best Practices
  - Policy Learning
featured: false
links:
  - name: PDF
    url: 'https://arxiv.org/abs/2409.09491'
image:
  caption: 'Beyond success rate: nuanced policy evaluation'
  focal_point: ''
  preview_only: false
---

## Moving Beyond "Success Rate"

The robot learning field has a reproducibility problem. Papers report "85% success rate" without telling you:
- How many trials?
- What were the initial conditions?
- What counts as success?
- What do failures look like?

This paper establishes best practices for rigorous policy evaluation.

### Key Recommendations

1. **Explicit success criteria**: Define unambiguous, detailed success conditions before evaluation
2. **Controlled initial conditions**: Match ICs across policies; use image overlays
3. **A/B testing**: Interleave policy rollouts blind to evaluator
4. **Multiple metrics**: Beyond success rate—subgoal completion, STL robustness, trajectory smoothness
5. **Statistical analysis**: Bayesian analysis over point estimates
6. **Failure documentation**: Categorize and describe failure modes

### Signal Temporal Logic (STL)

We propose using STL specifications to automatically compute nuanced metrics from rollout data—capturing both *correctness* (Boolean) and *quality* (robustness score).

### My Contribution

- Co-developed evaluation framework from LBM policy development experience
- Contributed manipulation task design (Bowl, Pancake, Shirt folding)
- Statistical analysis methodology

### Impact

This paper codifies lessons learned from evaluating hundreds of policies on TRI's robot fleet. Essential reading for anyone doing physical robot learning experiments.
