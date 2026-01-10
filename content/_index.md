---
title: ''
date: 2024-01-01
type: landing

design:
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      username: admin
      text: ""
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        text_color_light: true

  - block: stats
    content:
      items:
        - statistic: "1000+"
          description: |
            Citations
        - statistic: "17+"
          description: |
            Patents
        - statistic: "3"
          description: |
            Best Paper Awards
        - statistic: "4"
          description: |
            ICRA 2025 Papers
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"

  - block: markdown
    content:
      title: '🤖 Research Focus'
      subtitle: ''
      text: |-
        **Haptic feedback is the missing ingredient for scaling robot foundation models.**
        
        Vision-only policies plateau on contact-rich manipulation. The next breakthrough requires robots that *feel* the world—through tactile sensors, audio feedback, and adaptive compliance.
        
        At TRI, I work at the intersection of **Large Behavior Models** and **tactile intelligence**:
        
        - 🎯 **Robot Data Lead** for LBM 1.0 — fleet-scale policy training
        - 🖐️ **Tactile Sensing Pioneer** — SoftBubble, Punyo, PolyTouch
        - 📊 **Evaluation Rigor** — best practices for policy assessment
        
        Previously: iCub humanoid dynamics at IIT, morphological computation PhD at UZH.
    design:
      columns: '1'

  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      text: ''
      count: 5
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      offset: 0
      order: desc
    design:
      view: date-title-summary
      columns: '1'

  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: article-grid
      columns: 2

  - block: collection
    id: projects
    content:
      title: Research Projects
      filters:
        folders:
          - project
    design:
      view: article-grid
      columns: 3

  - block: markdown
    content:
      title: '💬 Philosophy'
      text: |-
        > "I have a relatively low interest in robots that work in the lab and a carefully constructed world. I want to see robots out in the real world."
        > 
        > — Rodney Brooks
        
        This quote guides my research. We don't need perfect robots—we need **good enough** robots that handle the messy reality of homes and workplaces.
    design:
      columns: '1'

  - block: cta-card
    content:
      title: "Let's Collaborate"
      text: |-
        Interested in tactile sensing, robot foundation models, or contact-rich manipulation?
      button:
        text: Get in Touch
        url: mailto:naveen.kuppuswamy@tri.global
    design:
      card:
        css_class: "bg-primary-700"
---
