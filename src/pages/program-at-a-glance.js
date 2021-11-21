import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const ProgramAtAGlance = ({ location }) => {
  const datePublished = "2021-11-16";
  const dateModified = "2021-11-16";
  const dateModifiedFormatted = "16 November, 2021";
  const pageMeta = {
    title: "Program at a Glance",
    description: "Program at a Glance",
    datePublished,
    dateModified,
    pathname: location.pathname
  };

  return (
    <Layout location={location} footerWide>
      <Seo pageMeta={pageMeta} />
      <div className="max-w-7xl mx-auto py-10 px-8 lg:px-24">
        <h1 className="text-4xl mb-10 font-extrabold font-headingStyle tracking-semiWide text-semiBlack">
          Program at a Glance
        </h1>
        
        <section className="text-sm">
          <h2 className="text-2xl font-bold mt-4 sm:mt-6 mb-4 text-mainPurple 
              font-headingStyle tracking-semiWide">1 December, 2021</h2>
          <div className="mb-6 w-full overflow-x-scroll md:overflow-hidden table">
            <table className="table-custom mb-0 text-center table-auto overflow-x-scroll md:overflow-hidden">
              <tbody className="border-t text-gray-600 table-text font-normal">
                <tr className="bg-gray-100">
                  <td className="font-bold">Beijing UTC +8</td>
                  <td className="font-bold">AEST (BNE) UTC +10</td>
                  <td className="font-bold">AEDT (SYD) UTC +11</td>
                  <td className="font-bold">Session</td>
                  <td className="font-bold" colSpan="2">Details (Paper List)</td>
                </tr>
                <tr>
                  <td>9:00 - 9:10 a.m.</td>
                  <td>11:00 a.m.</td>
                  <td>12:00 p.m.</td>
                  <td>Opening</td>
                  <td colSpan="2"></td>
                </tr>
                <tr>
                  <td>9:10 - 10:10 a.m.</td>
                  <td>11:10 - 12:10 p.m.</td>
                  <td>12:10 - 13:10 p.m.</td>
                  <td>Keynote 1: Mohan Kankanhalli</td>
                  <td colSpan="2">TBA</td>
                </tr>
                <tr>
                  <td colSpan="6">5 mins break</td>
                </tr>
                <tr>
                  <td rowSpan="6">10:15 - 11:45 a.m.</td>
                  <td rowSpan="6">12:15 - 13:45 p.m.</td>
                  <td rowSpan="6">13:15 - 14:45 p.m.</td>
                  <td rowSpan="6">Session 1: Video Understanding in Multimedia</td>
                  {/* <!-- <td></td> --> */}
                  <td className="paper" colSpan="2">Motion = Video - Content: Towards Unsupervised Learning of Motion Representation from Videos</td>
                </tr>
                {/* <!-- <tr>
                  <td>Motion = Video - Content: Towards Unsupervised Learning of Motion Representation from Videos</td>
                </tr> --> */}
                <tr>
                  <td className="paper" colSpan="2">Blindly Predict Image and Video Quality in the Wild</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Hierarchical Deep Residual Reasoning for Temporal Moment Localization</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Video Saliency Prediction via Deep Eye Movement Learning</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Conditional Extreme Value Theory for Open Set Video Domain Adaptation</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Intra- and Inter-frame Iterative Temporal Convolutional Networks for Video Stabilization</td>
                </tr>
                <tr>
                  <td rowSpan="3">11:45 - 12:30 p.m.</td>
                  <td rowSpan="3">13:45 - 14:30 p.m.</td>
                  <td rowSpan="3">14:45 - 15:30 p.m.</td>
                  <td rowSpan="3">Session 2: Best Paper Candidates</td>
                  {/* <!-- <td></td> --> */}
                  <td className="paper" colSpan="2">Language Based Image Quality Assessment</td>
                </tr>
                {/* <!-- <tr>
                  <td>Motion = Video - Content: Towards Unsupervised Learning of Motion Representation from Videos</td>
                </tr> --> */}
                <tr>
                  <td className="paper" colSpan="2">Towards Discriminative Visual Search via Semantically Cycle-consistent Hashing Networks</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Latent Pattern Sensing: Deepfake Video Detection via Predictive Representation Learning</td>
                </tr>
                <tr>
                  <td rowSpan="6">12:30 - 14:00 p.m.</td>
                  <td rowSpan="6">14:30 - 16:00 p.m.</td>
                  <td rowSpan="6">15:30 - 17:00 p.m.</td>
                  <td rowSpan="6">Session 3: Deep Learning for Multimedia</td>
                  {/* <!-- <td></td> --> */}
                  <td className="paper" colSpan="2">A Local-Global Commutative Preserving Functional Map for Shape Correspondence</td>
                </tr>
                {/* <!-- <tr>
                  <td>Motion = Video - Content: Towards Unsupervised Learning of Motion Representation from Videos</td>
                </tr> --> */}
                <tr>
                  <td className="paper" colSpan="2">Differentially Private Learning with Grouped Gradient Clipping</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Structural Knowledge Organization and Transfer for Class-Incremental Learning</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Improving Hyperspectral Super-Resolution via Heterogeneous Knowledge Distillation</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Patch-Based Deep Autoencoder for Point Cloud Geometry Compression</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Score Transformer: Generating Musical Score from Note-level Representation</td>
                </tr>
                <tr>
                  <td rowSpan="6">14:00 - 15:30 p.m.</td>
                  <td rowSpan="6">16:00 - 17:30 p.m.</td>
                  <td rowSpan="6">17:00 - 18:30 p.m.</td>
                  <td rowSpan="6">Session 4: Multimodality Learning in Multimedia</td>
                  {/* <!-- <td></td> --> */}
                  <td className="paper" colSpan="2">BRUSH: Label Reconstructing and Similarity Preserving Hashing for Cross-modal Retrieval</td>
                </tr>
                {/* <!-- <tr>
                  <td>Motion = Video - Content: Towards Unsupervised Learning of Motion Representation from Videos</td>
                </tr> --> */}
                <tr>
                  <td className="paper" colSpan="2">Local Self-Attention on Fine-grained Cross-media Retrieval</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Self-Adaptive Hashing for Fine-Grained Image Retrieval</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Hierarchical Composition Learning for Composed Query Image Retrieval</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Few-shot Egocentric Multimodal Activity Recognition</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Inter-modality Discordance for Multimodal Fake News Detection</td>
                </tr>
                <tr>
                  <td colSpan="6">10 minutes break for transition from Zoom to Gather.Town</td>
                </tr>
                <tr>
                  <td rowSpan="7">15:40 - 16:30 p.m.</td>
                  <td rowSpan="7">17:40 - 18:30 p.m.</td>
                  <td rowSpan="7">18:40 - 19:30 p.m.</td>
                  <td rowSpan="7">Lightning Talk Session 1</td>
                  {/* <!-- <td></td> --> */}
                  <td rowSpan="3">Brave New Idea</td>
                  <td className="paper">Discovering Social Connections using Event Images</td>
                </tr>
                <tr>
                  <td className="paper">SangeetXML: An XML Format for Score Retrieval for Indic Music</td>
                </tr>
                <tr>
                  <td className="paper">Holodeck: Immersive 3D Displays Using Swarms of Flying Light Specks</td>
                </tr>
                <tr>
                  <td rowSpan="3">Demo Papers</td>
                  <td className="paper">RoadAtlas: Intelligent Platform for Automated Road Defect Detection and Asset Management</td>
                </tr>
                <tr>
                  <td className="paper">Private-Share: A Secure and Privacy-Preserving De-Centralized Framework for Large Scale Data Sharing</td>
                </tr>
                <tr>
                  <td className="paper">An Efficient Bus Crowdedness Classification System</td>
                </tr>
                <tr>
                  <td rowSpan="1">Short Papers - Part 1</td>
                  <td className="paper">*Paper list is shown on Short Paper List below</td>
                </tr>
                <tr>
                  <td rowSpan="5">16:30 - 17:30 p.m.</td>
                  <td rowSpan="5">18:30 - 19:30 p.m.</td>
                  <td rowSpan="5">19:30 - 20:30 p.m.</td>
                  <td rowSpan="5">Workshop: Multi-Modal Embedding and Understanding</td>
                  {/* <!-- <td></td> --> */}
                  <td className="paper" colSpan="2">Focusing Attention across Multiple Images for Multi-Modal Event Detection</td>
                </tr>
                {/* <!-- <tr>
                  <td>Motion = Video - Content: Towards Unsupervised Learning of Motion Representation from Videos</td>
                </tr> --> */}
                <tr>
                  <td className="paper" colSpan="2">Adaptive Cross-stitch Graph Convolutional Networks</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Generation of Variable-Length Time Series from Text using Dynamic Time Warping-Based Method</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Hierarchical Graph Representation Learning with Local Capsule Pooling</td>
                </tr>
                <tr>
                  <td className="paper" colSpan="2">Deep Adaptive-Attention Triple Hashing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-8 sm:mt-6 mb-4 text-mainPurple
              font-headingStyle tracking-semiWide">2 December, 2021</h2>
          <div className="mb-6 w-full overflow-x-scroll md:overflow-hidden table">
            <table className="table-custom mb-0 text-center table-auto overflow-x-scroll md:overflow-hidden">
              <tbody className="border-t text-gray-600 table-text font-normal">
                <tr className="bg-gray-100">
                  <td className="font-bold">Beijing UTC +8</td>
                  <td className="font-bold">AEST (BNE) UTC +10</td>
                  <td className="font-bold">AEDT (SYD) UTC +11</td>
                  <td className="font-bold">Session</td>
                  <td className="font-bold">Details</td>
                </tr>
                <tr>
                  <td>9:00 - 9:10 a.m.</td>
                  <td>11:00 - 11:10 a.m.</td>
                  <td>12:00 - 12:10 p.m.</td>
                  <td>Best Paper Award Announcement</td>
                  <td></td>
                </tr>
                <tr>
                  <td>9:10 - 10:00 a.m.</td>
                  <td>11:10 - 12:00 p.m.</td>
                  <td>12:10 - 13:00 p.m.</td>
                  <td>Keynote 2: Yong Rui</td>
                  <td>TBA</td>
                </tr>
                <tr>
                  <td rowSpan="2">10:00 - 10:30 a.m.</td>
                  <td rowSpan="2">12:00 - 12:30 p.m.</td>
                  <td rowSpan="2">13:00 - 13:30 p.m.</td>
                  <td rowSpan="2">Grand Challenges</td>
                  {/* <!-- <td></td> --> */}
                  <td className="paper">Introduction to two Grand Challenges</td>
                </tr>
                {/* <!-- <tr>
                  <td>Motion = Video - Content: Towards Unsupervised Learning of Motion Representation from Videos</td>
                </tr> --> */}
                <tr>
                  <td className="paper">Paper: Hybrid Improvements in Multimodal Analysis for Deep Video Understanding</td>
                </tr>
                <tr>
                  <td rowSpan="6">10:30 - 12:00 p.m.</td>
                  <td rowSpan="6">12:30 - 14:00 p.m.</td>
                  <td rowSpan="6">13:30 - 15:00 p.m.</td>
                  <td rowSpan="6">Session 5: Vision and Language in Multimedia</td>
                  {/* <!-- <td></td> --> */}
                  <td className="paper">Semantic Enhanced Cross-modal GAN for Zero-shot Learning</td>
                </tr>
                {/* <!-- <tr>
                  <td>Motion = Video - Content: Towards Unsupervised Learning of Motion Representation from Videos</td>
                </tr> --> */}
                <tr>
                  <td className="paper">TS2TD: A Tree-Structured Decoder for Image Paragraph Captioning</td>
                </tr>
                <tr>
                  <td className="paper">Entity Relation Fusion for Real-Time One-Stage Referring Expression Comprehension</td>
                </tr>
                <tr>
                  <td className="paper">Visual Storytelling with Hierarchical BERT Semantic Guidance</td>
                </tr>
                <tr>
                  <td className="paper">Efficient Proposal Generation with U-shaped Network for Temporal Sentence Grounding</td>
                </tr>
                <tr>
                  <td className="paper">Zero-shot Recognition with Image Attributes Generation using Hierarchical Coupled Dictionary Learning</td>
                </tr>
                <tr>
                  <td colSpan="6">5 mins break</td>
                </tr>
                <tr>
                  <td rowSpan="6">12:05 - 13:35 p.m.</td>
                  <td rowSpan="6">14:05 - 15:35 p.m.</td>
                  <td rowSpan="6">15:05 - 16:35 p.m.</td>
                  <td rowSpan="6">Session 6: Computer Vision in Multimedia</td>
                  {/* <!-- <td></td> --> */}
                  <td className="paper">Source-Style Transferred Mean Teacher for Source-data Free Object Detection</td>
                </tr>
                {/* <!-- <tr>
                  <td>Motion = Video - Content: Towards Unsupervised Learning of Motion Representation from Videos</td>
                </tr> --> */}
                <tr>
                  <td className="paper">Improving Camouflaged Object Detection with the Uncertainty of Pseudo-edge Labels</td>
                </tr>
                <tr>
                  <td className="paper">MIRecipe: A Recipe Dataset for Stage-Aware Recognition of Changes in Appearance of Ingredients</td>
                </tr>
                <tr>
                  <td className="paper">Learning to Decompose and Restore Low-light Images with Wavelet Transform</td>
                </tr>
                <tr>
                  <td className="paper">Hard-Boundary Attention Network for Nuclei Instance Segmentation</td>
                </tr>
                <tr>
                  <td className="paper">A Model-Guided Unfolding Network for Single Image Reflection Removal</td>
                </tr>
                <tr>
                  <td colSpan="6">5 minutes break for transition from Zoom to Gather.Town</td>
                </tr>
                <tr>
                  <td rowSpan="6">13:40 - 14:55 p.m.</td>
                  <td rowSpan="6">15:40 - 16:55 p.m.</td>
                  <td rowSpan="6">16:40 - 17:55 p.m.</td>
                  <td rowSpan="6">Workshop: Multi-Model Computing of Marine Big Data</td>
                  {/* <!-- <td></td> --> */}
                  <td className="paper">Deep Reinforcement Learning and Docking Simulations for autonomous molecule generation in de novo Drug Design</td>
                </tr>
                {/* <!-- <tr>
                  <td>Motion = Video - Content: Towards Unsupervised Learning of Motion Representation from Videos</td>
                </tr> --> */}
                <tr>
                  <td className="paper">Joint label refinement and contrastive learning with hybrid memory for Unsupervised Marine Object Re-Identification</td>
                </tr>
                <tr>
                  <td className="paper">Prediction of transcription factor binding sites using deep learning combined with DNA sequences and shape feature data</td>
                </tr>
                <tr>
                  <td className="paper">A reinforcement learning-based reward mechanism for molecule generation that introduces activity information</td>
                </tr>
                <tr>
                  <td className="paper">A Fine-Grained River Ice Semantic Segmentation based on Attentive Features and Enhancing Feature Fusion</td>
                </tr>
                <tr>
                  <td className="paper">Multi-Scale Graph Convolutional Network and Dynamic Iterative Class Loss for Ship Segmentation in Remote Sensing Images</td>
                </tr>
                <tr>
                  <td colSpan="6">5 mins break</td>
                </tr>
                <tr>
                  <td>15:00 - 16:00 p.m.</td>
                  <td>17:00 - 18:00 p.m.</td>
                  <td>18:00 - 19:00 p.m.</td>
                  <td>Special Session</td>
                  <td className="paper">Women in Multimedia Roundtable</td>
                </tr>
                <tr>
                  <td colSpan="6">5 mins break</td>
                </tr>
                <tr>
                  <td>16:05 - 17:05 p.m.</td>
                  <td>18:05 - 19:05 p.m.</td>
                  <td>19:05 - 20:05 p.m.</td>
                  <td>Lightning Talk Session 2 - Short Papers - Part 2</td>
                  <td className="paper">*Paper list is shown on Short Paper List below</td>
                </tr>
                <tr>
                  <td>17:05 - 17:40 p.m.</td>
                  <td>19:05 - 19:40 p.m.</td>
                  <td>20:05 - 20:40 p.m.</td>
                  <td>Social Connections on Gather.Town</td>
                  <td className="paper">Posters and Q&amp;A for all tracks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-mainPurple 
              font-headingStyle tracking-semiWide">3 December, 2021</h2>
          <div className="mb-6 w-full overflow-x-scroll md:overflow-hidden table">
            <table className="table-custom mb-0 text-center table-auto overflow-x-scroll md:overflow-hidden">
              <tbody className="border-t text-gray-600 table-text font-normal">
                <tr className="bg-gray-100">
                  <td className="font-bold">Beijing UTC +8</td>
                  <td className="font-bold">AEST (BNE) UTC +10</td>
                  <td className="font-bold">AEDT (SYD) UTC +11</td>
                  <td className="font-bold">Session</td>
                  <td className="font-bold">Details</td>
                </tr>
                <tr>
                  <td>9:00 - 10:00 a.m.</td>
                  <td>11:00 - 12:00 p.m.</td>
                  <td>12:00 - 13:00 p.m.</td>
                  <td>Keynote 3: Divesh Srivastava</td>
                  <td className="paper">How to do Research for Fun and Profit</td>
                </tr>
                <tr>
                  <td>10:00 - 11:00 p.m.</td>
                  <td>12:00 - 13:00 p.m.</td>
                  <td>13:00 - 14:00 p.m.</td>
                  <td>HDR Lightning Talks</td>
                  <td className="paper">TBA</td>
                </tr>
                <tr>
                  <td>11:00 - 12:00 p.m.</td>
                  <td>13:00 - 14:00 p.m.</td>
                  <td>14:00 - 15:00 p.m.</td>
                  <td>Keynote 4: Klara Nahrstedt</td>
                  {/* <!-- <td></td> --> */}
                  <td className="paper">Navigation Models for Interactive 360-Degree Video Streaming Systems</td>
                </tr>
                <tr>
                  <td colSpan="6">5 mins break</td>
                </tr>
                <tr>
                  <td>12:05 - 14:05 p.m.</td>
                  <td>14:05 - 16:05 p.m.</td>
                  <td>15:05 - 17:05 p.m.</td>
                  <td>Tutorial 1:<br/> Recent Advances in Video Summarization: Conventional and Deep Learning based Approaches</td>
                  {/* <!-- <td></td> --> */}
                  <td className="paper">Zhiyong Wang (USyd), Zhou Zhao (ZJU), Xi Li (ZJU), Kun Kuang (ZJU), and Fei Wu (ZJU)</td>
                </tr>
                <tr>
                  <td colSpan="6">10 mins break</td>
                </tr>
                <tr>
                  <td>14:15 - 16:00 p.m.</td>
                  <td>16:15 - 18:00 p.m.</td>
                  <td>17:15 - 19:00 p.m.</td>
                  <td>Tutorial 2:<br/> Modeling User Behavior for Vertical Search: Images, Apps and Products</td>
                  {/* <!-- <td></td> --> */}
                  <td className="paper">Xiaohui Xie (THU), Jiaxin Mao (THU), Yuqun Liu (THU), and Maarten de Rijke (UvA)</td>
                </tr>
                <tr>
                  <td rowSpan="3">16:00 - 16:45 p.m.</td>
                  <td rowSpan="3">18:00 - 18:45 p.m.</td>
                  <td rowSpan="3">19:00 - 19:45 p.m.</td>
                  <td rowSpan="3">Applied Research Track</td>
                  {/* <!-- <td></td> --> */}
                  <td className="paper">Goldeye: Enhanced Spatial Awareness for the Visually Impaired using Mixed Reality and Vibrotactile Feedback</td>
                </tr>
                {/* <!-- <tr>
                  <td>Motion = Video - Content: Towards Unsupervised Learning of Motion Representation from Videos</td>
                </tr> --> */}
                <tr>
                  <td className="paper">Convolutional Neural Network-Based Pure Paint Pigment Identification Using Hyperspectral Images</td>
                </tr>
                <tr>
                  <td className="paper">CFCR: A Convolution and Fusion Model for Cross-platform Recommendation</td>
                </tr>
                <tr>
                  <td colSpan="6">5 minutes break for transition from Zoom to Gather.Town</td>
                </tr>
                <tr>
                  <td rowSpan="4">16:50 - 17:50 p.m.</td>
                  <td rowSpan="4">18:50 - 19:50 p.m.</td>
                  <td rowSpan="4">19:50 - 20:50 p.m.</td>
                  <td rowSpan="4">Workshop: Visual Tasks and Challenges under Low-quality Multimedia Data</td>
                  {/* <!-- <td></td> --> */}
                  <td className="paper">Local-enhanced Multi-resolution Representation Learning for Vehicle Re-identification</td>
                </tr>
                {/* <!-- <tr>
                  <td>Motion = Video - Content: Towards Unsupervised Learning of Motion Representation from Videos</td>
                </tr> --> */}
                <tr>
                  <td className="paper">Dedark+Detection: A Hybrid Scheme for Object Detection under Low-light Surveillance</td>
                </tr>
                <tr>
                  <td className="paper">Making Video Recognition Models Robust to Common Corruptions With Supervised Contrastive Learning</td>
                </tr>
                <tr>
                  <td className="paper">Visible-Infrared Cross-Modal Person Re-identification based on Positive Feedback</td>
                </tr>
                <tr>
                  <td>17:50 p.m.</td>
                  <td>19:50 p.m.</td>
                  <td>20:50 p.m.</td>
                  <td>Closing</td>
                  <td className="paper"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-mainPurple 
              font-headingStyle tracking-semiWide">*Short Paper List - Part 1</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>CMRD-Net: An Improved Method for Underwater Image Enhancement</li>
            <li>Deep Multiple Length Hashing via Multi-task Learning</li>
            <li>Color Image Denoising via Tensor Robust PCA with Nonconvex and Nonlocal Regularization</li>
            <li>Conditioned Image Retrieval for Fashion using Contrastive Learning and CLIP-based Features</li>
            <li>PBNet: Position-specific Text-to-image Generation by Boundary</li>
            <li>An Embarrassingly Simple Approach to Discrete Supervised Hashing</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-mainPurple 
              font-headingStyle tracking-semiWide">*Short Paper List - Part 2</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Towards Transferable 3D Adversarial Attack</li>
            <li>Delay-sensitive and Priority-aware Transmission Control for Real-time Multimedia Communications</li>
            <li>Impression of a Job Interview training agent that gives rationalized feedback ~Should Virtual Agent Give Advice with Rationale</li>
            <li>A Coarse-to-fine Approach for Fast Super-Resolution with Flexible Magnification</li>
            <li>Automatically Generate Rigged Character from Single Image</li>
            <li>Flat and Shallow: Understanding Fake Image Detection Models by Architecture Profiling</li>
            <li>Multi-branch Semantic Learning Network for Text-to-Image Synthesis</li>
            <li>Attention-based Dual-Branches Localization Network for Weakly Supervised Object Localization</li>
            <li>Pose-aware Outfit Transfer between Unpaired in-the-wild Fashion Images</li>
            <li>Explore before Moving: A Feasible Path Estimation and Memory Recalling Framework for Embodied Navigation</li>
            <li>Utilizing Resource-Rich Language Datasets for End-to-End Scene Text Recognition in Resource-Poor Languages</li>
            <li>PLM-IPE: A Pixel-Landmark Mutual Enhanced Framework for Implicit Preference Estimation</li>
            <li>Adaptive Viewport Margins Using Head Motion for Improving User Experience in Immersive Video</li>
            <li>Chinese White Dolphin Detection in the Wild</li>
            <li>BAND: A Benchmark Dataset for Bangla News Audio Classification</li>
            <li>A comparison study: the impact of age and gender distribution on age estimation</li>
            <li>Spherical Image Compression Using Spherical Wavelet Transform</li>
            <li>FQM-GC: Full-reference Quality Metric for Colored Point Cloud Based on Graph Signal Features and Color Features</li>
            <li>Cross-layer Navigation Convolutional Neural Network for Fine-grained Visual Classification</li>
            <li>NoisyActions2M: A Multimedia Dataset for Video Understanding from Noisy Labels</li>
          </ul>
        </section>

        <footer className="pb-0">
          <p className="text-xs mt-0 sm:mt-8 mb-0 text-center sm:text-left">
            Last updated on {dateModifiedFormatted}.
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default ProgramAtAGlance;
