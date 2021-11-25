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

        <section className="text-sm">
          <p className="text-lg">ACM Multimedia Asia 2021 will be held in a hybrid mode by offering both online and offline events. 
              A live in-person PhD School with an online-broadcasting component will be enabled. It is physically 
              held in Beijing, Chengdu, Sydney and Brisbane simultaneously on Day 3. This brand new session targets 
              research students and early career researchers interested in exploring emerging research topics in 
              Multimedia. It provides strategies on how to approach PhD study and pursue research excellence 
              (e.g., Keynote 3), opportunities to communicate with senior researchers (e.g., on-site tutorials), 
              and PhD presentation training (e.g., PhD lightning talk competition).</p>
          <h3 className="text-2xl font-bold">Live Lightning Talks</h3>
          <br/><br/>
          <div className="mb-6 w-full overflow-x-scroll md:overflow-hidden table">
            <table className="table-custom mb-0 text-center table-auto overflow-x-scroll md:overflow-hidden">
              <tbody className="border-t text-gray-600 table-text font-normal">
                <tr className="bg-gray-100">
                  <td colSpan="3" className="font-bold">HDR Lightning Talks</td>
                  <td colSpan="1" className="font-bold">Speaker</td>
                  <td colSpan="2" className="font-bold">Affliation</td>
                  <td colSpan="2" className="font-bold">Legend - Team</td>
                </tr>
                <tr>
                    <td colSpan="3">A Framework of Noisy-Label Learning by Semi-Supervised Learning</td>
                    <td colSpan="1">Zhuowei Wang</td>
                    <td colSpan="2">UTS</td>
                    <td rowSpan="4" colSpan="2">Beijing</td>
                </tr>
                <tr>
                    <td colSpan="3">Attention Learning in Human Action Recognition</td>
                    <td colSpan="1">Kumie Gedamu</td>
                    <td colSpan="2">UESTC</td>
                    {/* <td colSpan="2"></td> */}
                </tr>
                <tr>
                    <td colSpan="3">Brain-Machine Interface for Web Search</td>
                    <td colSpan="1">Ziyi Ye</td>
                    <td colSpan="2">Tsinghua</td>
                    {/* <td colSpan="2"></td> */}
                </tr>
                <tr>
                    <td colSpan="3">CausalRec: Causal Inference for Visual Debiasing in Visually-Aware Recommendation</td>
                    <td colSpan="1">Ruihong Qiu</td>
                    <td colSpan="2">UQ</td>
                    {/* <td colSpan="2"></td> */}
                </tr>
                <tr>
                    <td colSpan="3">Federated Prototype Learning over Heterogeneous Devices</td>
                    <td colSpan="1">Yue Tan</td>
                    <td colSpan="2">UTS</td>
                    <td rowSpan="4" colSpan="2">Sydney</td>
                </tr>
                <tr>
                    <td colSpan="3">Multi-VAE: Learning Disentangled View-common and View-peculiar Visual Representations for Multi-view Clustering</td>
                    <td colSpan="1">Jie Xu</td>
                    <td colSpan="2">UESTC</td>
                    {/* <td colSpan="2"></td> */}
                </tr>
                <tr>
                    <td colSpan="3">Few shot talking face synthesis with diversified styles</td>
                    <td colSpan="1">Haozhe Wu</td>
                    <td colSpan="2">Tsinghua</td>
                    {/* <td colSpan="2"></td> */}
                </tr>
                <tr>
                    <td colSpan="3">Early Detection of Sugarcane Disease Using Hyperspectral Imaging</td>
                    <td colSpan="1">Dong Bao</td>
                    <td colSpan="2">Griffith University</td>
                    {/* <td colSpan="2"></td> */}
                </tr>
                <tr>
                    <td colSpan="3">Into-the-Unknown: Uncertainty Evaluation for Multimedia Environments</td>
                    <td colSpan="1">Xuesong Wang</td>
                    <td colSpan="2">UNSW</td>
                    <td rowSpan="4" colSpan="2">Chengdu</td>
                </tr>
                <tr>
                    <td colSpan="3">Towards Semantical and Interactive Image Manipulation</td>
                    <td colSpan="1">Sitong Su</td>
                    <td colSpan="2">UESTC</td>
                    {/* <td colSpan="2"></td> */}
                </tr>
                <tr>
                    <td colSpan="3">Mental Health Computing via Harvesting Social Media Data</td>
                    <td colSpan="1">Tiancheng Shen</td>
                    <td colSpan="2">Tsinghua</td>
                    {/* <td colSpan="2"></td> */}
                </tr>
                <tr>
                    <td colSpan="3">Improving Generalization of Feature Distillation</td>
                    <td colSpan="1">Yudong Chen</td>
                    <td colSpan="2">UQ</td>
                    {/* <td colSpan="2"></td> */}
                </tr>
                <tr>
                    <td colSpan="3">Generalization and Specialization in Zero-shot Learning</td>
                    <td colSpan="1">Yun Li</td>
                    <td colSpan="2">UNSW</td>
                    <td rowSpan="4" colSpan="2">Brisbane</td>
                </tr>
                <tr>
                    <td colSpan="3">Why Temporality is important for Knowledge Graph?</td>
                    <td colSpan="1">Jiasheng Zhang</td>
                    <td colSpan="2">UESTC</td>
                    {/* <td colSpan="2"></td> */}
                </tr>
                <tr>
                    <td colSpan="3">Relevance Estimation with Multimodal Information Sources</td>
                    <td colSpan="1">Junqi Zhang</td>
                    <td colSpan="2">Tsinghua</td>
                    {/* <td colSpan="2"></td> */}
                </tr>
                <tr>
                    <td colSpan="3">Learning to Diversify for Single Domain Generalization</td>
                    <td colSpan="1">Zijian Wang</td>
                    <td colSpan="2">UQ</td>
                    {/* <td colSpan="2"></td> */}
                </tr>
              </tbody>
            </table>
          </div>
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

export default PhDSchool;
