import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const PhDSchool = ({ location }) => {
  const datePublished = "2021-11-26";
  const dateModified = "2021-11-26";
  const dateModifiedFormatted = "26 November, 2021";
  const pageMeta = {
    title: "PhD School",
    description: "PhD School",
    datePublished,
    dateModified,
    pathname: location.pathname
  };

  return (
    <Layout location={location} footerWide>
      <Seo pageMeta={pageMeta} />
      <div className="max-w-7xl mx-auto py-10 px-8 lg:px-24">
        <h1 className="text-4xl mb-10 font-extrabold font-headingStyle tracking-semiWide text-semiBlack">
          PhD School
        </h1>

        <section>
          <p>ACM Multimedia Asia 2021 will be held in a hybrid mode by offering both online and offline events.
            A live in-person PhD School with an online-broadcasting component will be enabled. It is physically
            held in Beijing, Chengdu, Sydney and Brisbane simultaneously on Day 3. This brand new session targets
            research students and early career researchers interested in exploring emerging research topics in
            Multimedia. It provides strategies on how to approach PhD study and pursue research excellence
            (e.g., Keynote 3), opportunities to communicate with senior researchers (e.g., on-site tutorials),
            and PhD presentation training (e.g., PhD lightning talk competition).</p>
          <h2 className="text-2xl font-bold mt-4 sm:mt-6 mb-6 text-mainPurple 
              font-headingStyle tracking-semiWide">Live Lightning Talks</h2>

          <div className="mb-4 w-full overflow-x-scroll md:overflow-hidden">
            <table className="table-auto md:table-fixed table-custom text-center text-gray-700 overflow-x-scroll md:overflow-hidden">

              <thead>
                <tr className="bg-gray-100">
                  <th className="w-2/3">PhD Lightning Talks</th>
                  <th>Speaker</th>
                  <th>Affliation*</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>A Framework of Noisy-Label Learning by Semi-Supervised Learning</td>
                  <td>Zhuowei Wang</td>
                  <td>UTS</td>
                </tr>
                <tr>
                  <td>Attention Learning in Human Action Recognition</td>
                  <td>Kumie Gedamu</td>
                  <td>UESTC</td>
                </tr>
                <tr>
                  <td>Brain-Machine Interface for Web Search</td>
                  <td>Ziyi Ye</td>
                  <td>Tsinghua</td>
                </tr>
                <tr className="divide">
                  <td>CausalRec: Causal Inference for Visual Debiasing in Visually-Aware Recommendation</td>
                  <td>Ruihong Qiu</td>
                  <td>UQ</td>
                </tr>
                <tr>
                  <td>Federated Prototype Learning over Heterogeneous Devices</td>
                  <td>Yue Tan</td>
                  <td>UTS</td>
                </tr>
                <tr>
                  <td>Multi-VAE: Learning Disentangled View-common and View-peculiar Visual Representations for Multi-view Clustering</td>
                  <td>Jie Xu</td>
                  <td>UESTC</td>
                </tr>
                <tr>
                  <td>Few shot talking face synthesis with diversified styles</td>
                  <td>Haozhe Wu</td>
                  <td>Tsinghua</td>
                </tr>
                <tr className="divide">
                  <td>Early Detection of Sugarcane Disease Using Hyperspectral Imaging</td>
                  <td>Dong Bao</td>
                  <td>Griffith</td>
                </tr>
                <tr>
                  <td>Into-the-Unknown: Uncertainty Evaluation for Multimedia Environments</td>
                  <td>Xuesong Wang</td>
                  <td>UNSW</td>
                </tr>
                <tr>
                  <td>Towards Semantical and Interactive Image Manipulation</td>
                  <td>Sitong Su</td>
                  <td>UESTC</td>
                </tr>
                <tr>
                  <td>Mental Health Computing via Harvesting Social Media Data</td>
                  <td>Tiancheng Shen</td>
                  <td>Tsinghua</td>
                </tr>
                <tr className="divide">
                  <td>Improving Generalization of Feature Distillation</td>
                  <td>Yudong Chen</td>
                  <td>UQ</td>
                </tr>
                <tr>
                  <td>Generalization and Specialization in Zero-shot Learning</td>
                  <td>Yun Li</td>
                  <td>UNSW</td>
                </tr>
                <tr>
                  <td>Why Temporality is important for Knowledge Graph?</td>
                  <td>Jiasheng Zhang</td>
                  <td>UESTC</td>
                </tr>
                <tr>
                  <td>Relevance Estimation with Multimodal Information Sources</td>
                  <td>Junqi Zhang</td>
                  <td>Tsinghua</td>
                </tr>
                <tr>
                  <td>Learning to Diversify for Single Domain Generalization</td>
                  <td>Zijian Wang</td>
                  <td>UQ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <h3 className="font-bold text-lg mb-4">*Abbreviations</h3>
        <ul className="list-inside list-disc space-y-1">
          <li><span className="font-semibold">Griffith:</span> &nbsp;Griffith University</li>
          <li><span className="font-semibold">Tsinghua:</span> &nbsp;Tsinghua University</li>
          <li><span className="font-semibold">UESTC:</span> &nbsp;University of Electronic Science and Technology of China</li>
          <li><span className="font-semibold">UNSW:</span> &nbsp;University of New South Wales</li>
          <li><span className="font-semibold">UQ:</span> &nbsp;University of Queensland</li>
          <li><span className="font-semibold">UTS:</span> &nbsp;University of Technology Sydney</li>
        </ul>

        <footer className="pb-0">
          <p className="text-xs mt-0 sm:mt-8 mb-0 text-center sm:text-left">
            Last updated on {dateModifiedFormatted}.
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default PhDSchool;
