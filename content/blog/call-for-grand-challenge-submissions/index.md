---
title: Multimedia Grand Challenges
datePublished: "2021-07-15"
dateModified: "2021-08-07"
description: A new challenge "Multi-modal Video Understanding in a Noisy Environment" has been released.
---

## Challenge 1: Multi-modal Video Understanding in a Noisy Environment

[*https://midas-research.github.io/noisy-mmvu/*](https://midas-research.github.io/noisy-mmvu/)

### Challenge Overview

In this challenge, we present a novel but challenging task of video understanding in a multi- modal noisy environment. While image based object detection and recognition has improved significantly in the last decade, the same has not been replicated in the video domain. Unlike images, understanding videos has proven to be difficult due to the added complexities of extra dimension and complicated sequence of motions. One of the major obstacle in learning better techniques that can understand complex actions in videos is the sheer lack of large scale annotated data. Large annotated datasets such as ImageNet and Open Image have propelled research in image understanding. The issue with doing this for videos is the massive cost of annotating millions of videos, which is why only a handful of large scale video datasets have been produced such as Kinetics 400/600/700, AVA and Youtube8M. An alternative to annotating such large video datasets is to accumulate the data from the web using specific search queries. However, this automatic annotation comes at a cost of variable noise in the data and annotation. As such, there is an ever growing need to generate better techniques for video action understanding based on such noisy datasets.

### Task Descriptions

In this grand challenge we propose three different tasks.

- **Task 1: Multi-modal Noisy Learning for Action Recognition**
- **Task 2: Multi-modal Noisy Learning for Video Retrieval**
- **Task 3: Multi-modal Noisy Video Understanding**

### About The Dataset

We are releasing two splits: 100k and 25k, along with its meta data.

- Full Split: [*Metadata*](https://drive.google.com/file/d/1Zj0Lf4JYUc_8pnHyKe23ctAWWn3JCR9q/view), [*Tags*](https://drive.google.com/file/d/12Hc1bUrTxzB9mKDwJ2bT4HFtx4AqKucZ/view)
- 100k Split: [*Videos*](https://drive.google.com/file/d/19_ddJZkgTVDNC2Hwp4ZWKhV4hfF2N6zv/view) (Compressed Size:1.3TB , Uncompressed Size: 1.4TB), [*Metadata*](https://drive.google.com/file/d/1f81Q-N7DY21wFenS1ThbgO7kWpWGJseb/view), [*Tags*](https://drive.google.com/file/d/11uSVC3dw9Om7bT25hC_pqh7WPNRBQMXW/view), [*Features*](https://drive.google.com/file/d/19qIUb4iOprVm-M3cI7d_5fJzTnzArepO/view)
- 25k Split: [*Videos*](https://drive.google.com/file/d/1frvv3JXRoiTn7hubMTl5BQDdVIcY9XO9/view) (Compressed Size: 420GB, Uncompressed Size: 425GB), [*Metadata*](https://drive.google.com/file/d/1y_QP0Vm4KKCaTSTiY3MrX347Fs14kZ1o/view), [*Tags*](https://drive.google.com/file/d/1grVNqoR1MobJe0vWYe77zSdbdyYVvHMP/view), [*Features*](https://drive.google.com/file/d/1gpwLppZ_noSHxFTXvXDH1zWK27q-7e2z/view)

#### Please note:
- For the full split of 2.4M, participants will have to download the videos themselves from Flickr.
- Tags json file contains tags associated with each video, as the main metadata file only contains tag IDs.
- Files are compressed using bzip2.

<br/>
<br/>

***

## Challenge 2: Deep Video Understanding

[*https://sites.google.com/view/dvu-asia-challenge-2021*](https://sites.google.com/view/dvu-asia-challenge-2021)

Deep video understanding is a difficult task which requires systems to develop a deep analysis and understanding of the relationships between different entities in video, to use known information to reason about other, more hidden information, and to populate a knowledge graph (KG) with all acquired information. To work on this task, a system should take into consideration all available modalities (speech, image/video, and in some cases text). The aim of this new challenge is to push the limits of multimodal extraction, fusion, and analysis techniques to address the problem of analyzing long duration videos holistically and extracting useful knowledge to utilise it in solving different types of queries. The target knowledge includes both visual and non-visual elements. As videos and multimedia data are getting more and more popular and usable by users in different domains, the research, approaches and techniques we aim to be applied in this Grand Challenge will be very relevant in the coming years and near future.

### Challenge Overview

Interested participants are invited to apply their approaches and methods on an extended novel Deep Video Understanding (DVU) dataset being made available by the challenge organisers. This includes total of 14 movies with a Creative Commons license. The dataset are annotated by human assessors and final ground truth, both at the overall movie level (Ontology of relations, entities, actions & events, Knowledge Graph, and names and images of all main characters), and the individual scene level (Ontology of relationships, interactions, locations, scene sentiments, character emotional states, and scene textual summaries) will be provided for 70% of the dataset to participating researchers for training and development of their systems. The organisers will support evaluation and scoring for a hybrid of main query types, at the overall movie level and at the individual scene level distributed with the dataset (please refer to the [*dataset webpage*]((https://sites.google.com/view/dvu-asia-challenge-2021/home/supported-datasets)) for more details): 

#### Example Question types at Overall Movie Level:
- Multiple choice question answering on part of Knowledge Graph for selected movies.
- Possible path analysis between persons / entities of interest in a Knowledge Graph extracted from selected movies.
- Fill in the Graph Space - Given a partial graph, systems will be asked to fill in the graph space.

#### Example Question types at Individual Scene Level:
- Find next or previous interaction, given two people, a specific scene, and the interaction between them.
- Find a unique scene given a set of interactions and a scene list.
- Fill in the Graph Space - Given a partial graph for a scene, systems will be asked to fill in the graph space.
- Match between selected scenes and set of scene descriptions written in natural language.
- Classify scene sentiment.

<!-- **For more information regarding this topic**, please refer to the link: [*https://sites.google.com/view/dvu-asia-challenge-2021*](https://sites.google.com/view/dvu-asia-challenge-2021). -->



