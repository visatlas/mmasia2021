import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto bottom-0">
      <div className="global-wrapper py-0 flex sm:block flex-col items-center md:items-start">
        <div className="mb-4 flex flex-wrap justify-around lg:justify-between lg:space-x-10">
          <a style={{ width: "160px" }} className="mb-4 md:mb-0" href="https://www.acm.org/" target="_blank" rel="noreferrer">
            {/* ACM Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" clipRule="evenodd" viewBox="0 0 207 72" height="55">
              <title>ACM</title>
              <g fill="#231F20" fillRule="nonzero">
                <path d="M92.1 34.453l-.782 2.579h-1.715l2.916-9.099h2.119l2.957 9.099h-1.782l-.823-2.579H92.1zm2.606-1.256l-.715-2.241c-.176-.553-.324-1.174-.459-1.701h-.027c-.135.526-.271 1.161-.432 1.701l-.702 2.241h2.335zM98.472 35.492c.364.229 1.08.486 1.674.486.729 0 1.053-.311 1.053-.742 0-.446-.27-.662-1.08-.959-1.283-.432-1.81-1.134-1.81-1.917 0-1.161.959-2.052 2.484-2.052.729 0 1.364.176 1.754.392l-.338 1.161a2.9 2.9 0 00-1.389-.378c-.595 0-.918.297-.918.702 0 .418.311.608 1.147.918 1.201.419 1.742 1.026 1.756 1.998 0 1.202-.932 2.065-2.673 2.065-.797 0-1.513-.189-1.998-.459l.338-1.215zM103.898 35.492c.365.229 1.08.486 1.674.486.73 0 1.055-.311 1.055-.742 0-.446-.271-.662-1.08-.959-1.283-.432-1.811-1.134-1.811-1.917 0-1.161.959-2.052 2.484-2.052.729 0 1.363.176 1.756.392l-.338 1.161a2.909 2.909 0 00-1.391-.378c-.594 0-.918.297-.918.702 0 .418.311.608 1.148.918 1.201.419 1.74 1.026 1.753 1.998 0 1.202-.932 2.065-2.671 2.065-.797 0-1.514-.189-1.998-.459l.337-1.215zM112.27 37.18c-1.85 0-3.295-1.27-3.295-3.389 0-2.16 1.418-3.483 3.402-3.483 1.957 0 3.268 1.377 3.268 3.375 0 2.417-1.701 3.497-3.36 3.497h-.015zm.052-1.201c.945 0 1.607-.918 1.607-2.255 0-1.026-.459-2.214-1.595-2.214-1.174 0-1.646 1.147-1.646 2.241 0 1.269.635 2.228 1.619 2.228h.015zM121.637 36.828c-.35.162-1.039.338-1.861.338-2.053 0-3.389-1.322-3.389-3.361 0-1.971 1.35-3.497 3.658-3.497.607 0 1.229.135 1.605.297l-.297 1.255c-.271-.135-.66-.256-1.256-.256-1.269 0-2.023.931-2.011 2.133 0 1.351.877 2.12 2.011 2.12.567 0 .985-.122 1.311-.258l.229 1.229zM123.488 29.512c-.555 0-.918-.405-.918-.891 0-.513.377-.904.93-.904.568 0 .918.392.932.904 0 .486-.363.891-.932.891h-.012zm-.824 7.519v-6.575h1.66v6.575h-1.66zM131.02 35.451c0 .595.027 1.176.107 1.58h-1.498l-.121-.729h-.041c-.391.513-1.08.877-1.943.877-1.32 0-2.064-.959-2.064-1.957 0-1.647 1.475-2.498 3.899-2.484v-.108c0-.432-.176-1.147-1.336-1.147-.646 0-1.321.202-1.77.486l-.324-1.08c.486-.297 1.338-.581 2.376-.581 2.105 0 2.713 1.336 2.713 2.781v2.362h.002zm-1.62-1.633c-1.176-.014-2.295.229-2.295 1.229 0 .648.418.945.943.945a1.37 1.37 0 001.312-.904c.041-.122.041-.244.041-.365v-.905h-.001zM134.396 28.769v1.688h1.578v1.242h-1.578v2.889c0 .811.215 1.215.85 1.215.297 0 .459-.014.648-.067l.024 1.255c-.244.096-.688.176-1.203.176-.618 0-1.116-.202-1.43-.539-.365-.379-.527-.986-.527-1.85V31.7h-.932v-1.242h.932v-1.229l1.638-.46zM137.852 29.512c-.555 0-.918-.405-.918-.891 0-.513.377-.904.93-.904.568 0 .921.392.935.904 0 .486-.36.891-.935.891h-.012zm-.825 7.519v-6.575h1.66v6.575h-1.66zM143.156 37.18c-1.85 0-3.293-1.27-3.293-3.389 0-2.16 1.416-3.483 3.4-3.483 1.959 0 3.268 1.377 3.268 3.375 0 2.417-1.701 3.497-3.361 3.497h-.014zm.055-1.201c.945 0 1.605-.918 1.605-2.255 0-1.026-.459-2.214-1.592-2.214-1.179 0-1.648 1.147-1.648 2.241 0 1.269.635 2.228 1.621 2.228h.014zM147.691 32.414c0-.756-.025-1.39-.053-1.958h1.44l.082.986h.041c.297-.513 1.012-1.134 2.104-1.134 1.146 0 2.336.743 2.336 2.822v3.901h-1.662v-3.712c0-.945-.351-1.661-1.254-1.661-.662 0-1.121.473-1.297.972-.056.135-.08.337-.08.526v3.875h-1.662v-4.617h.005zM157.992 37.031v-5.333h-.891v-1.242h.891v-.283c0-.851.23-1.701.797-2.241.486-.459 1.148-.634 1.715-.634.445 0 .797.081 1.053.162l-.104 1.282a2.03 2.03 0 00-.72-.122c-.819 0-1.094.688-1.094 1.499v.337h1.445v1.242h-1.432v5.333h-1.66zM164.635 37.18c-1.85 0-3.293-1.27-3.293-3.389 0-2.16 1.416-3.483 3.4-3.483 1.959 0 3.268 1.377 3.268 3.375 0 2.417-1.701 3.497-3.361 3.497h-.014zm.054-1.201c.942 0 1.604-.918 1.604-2.255 0-1.026-.459-2.214-1.592-2.214-1.178 0-1.646 1.147-1.646 2.241 0 1.269.635 2.228 1.619 2.228h.015zM169.17 32.576c0-.891-.012-1.539-.053-2.12h1.43l.068 1.242h.041c.324-.918 1.094-1.391 1.809-1.391.162 0 .256.014.391.041v1.553a2.638 2.638 0 00-.498-.041c-.78 0-1.338.5-1.483 1.255a3.476 3.476 0 00-.039.5v3.416h-1.662l-.004-4.455zM96.798 51.762c-.392.188-1.256.404-2.362.404-2.889 0-4.644-1.809-4.644-4.576 0-2.997 2.092-4.793 4.873-4.793 1.094 0 1.862.217 2.2.393l-.351 1.322a4.495 4.495 0 00-1.782-.351c-1.85 0-3.186 1.159-3.186 3.348 0 1.998 1.161 3.267 3.172 3.267.661 0 1.363-.135 1.809-.32l.271 1.306zM100.606 52.18c-1.85 0-3.294-1.269-3.294-3.389 0-2.16 1.417-3.482 3.401-3.482 1.958 0 3.267 1.377 3.267 3.375 0 2.416-1.701 3.496-3.361 3.496h-.013zm.054-1.201c.946 0 1.606-.918 1.606-2.254 0-1.024-.459-2.215-1.592-2.215-1.175 0-1.647 1.147-1.647 2.241 0 1.269.635 2.228 1.62 2.228h.013zM105.141 47.414c0-.756-.025-1.391-.053-1.957h1.418l.08.973h.041c.311-.514.904-1.121 2.025-1.121.863 0 1.539.485 1.822 1.215h.024c.229-.361.5-.635.797-.82.379-.26.797-.395 1.351-.395 1.08 0 2.188.742 2.188 2.852v3.874h-1.619V48.4c0-1.094-.379-1.741-1.176-1.741-.566 0-.984.405-1.16.878a1.73 1.73 0 00-.08.553v3.942h-1.621v-3.808c0-.918-.365-1.565-1.133-1.565-.621 0-1.041.485-1.203.932-.053.177-.08.364-.08.554v3.891h-1.621v-4.622zM116.387 47.645c0-.865-.027-1.563-.055-2.188h1.459l.08 1.014h.027c.485-.744 1.256-1.162 2.254-1.162 1.514 0 2.768 1.297 2.768 3.351 0 2.376-1.498 3.521-2.996 3.521-.824 0-1.512-.351-1.85-.877h-.027v3.401h-1.66v-7.06zm1.66 1.632c0 .162.014.311.041.459.176.675.756 1.16 1.471 1.16 1.053 0 1.674-.877 1.674-2.174 0-1.16-.565-2.104-1.633-2.104-.688 0-1.322.499-1.498 1.229-.026.135-.055.28-.055.418v1.012zM129.969 50.061c0 .782.025 1.434.053 1.974h-1.44l-.082-.985h-.041c-.283.459-.934 1.137-2.119 1.137-1.188 0-2.281-.719-2.281-2.863v-3.859h1.66v3.577c0 1.094.354 1.796 1.229 1.796.677 0 1.106-.459 1.271-.893.068-.135.095-.322.095-.514v-3.97h1.662v4.604h-.004v-.004h-.003zM133.465 43.77v1.688h1.578V46.7h-1.578v2.889c0 .81.215 1.216.85 1.216.297 0 .459-.015.648-.068l.027 1.259c-.244.094-.689.175-1.203.175-.621 0-1.119-.202-1.43-.54-.365-.378-.527-.983-.527-1.853v-3.074h-.932V45.46h.932v-1.23l1.635-.46zM136.92 44.512c-.553 0-.918-.404-.918-.891 0-.514.379-.905.932-.905.566 0 .918.392.935.905 0 .484-.365.891-.935.891h-.014zm-.824 7.519v-6.574h1.662v6.574h-1.662zM139.35 47.414c0-.756-.024-1.391-.055-1.957h1.445l.08.984h.041c.297-.512 1.012-1.133 2.104-1.133 1.148 0 2.338.739 2.338 2.818v3.898h-1.66v-3.713c0-.941-.354-1.658-1.256-1.658-.662 0-1.121.474-1.297.973a1.531 1.531 0 00-.082.525v3.873h-1.658v-4.61zM152.822 51.072c0 1.378-.283 2.363-.973 2.984-.677.604-1.636.795-2.537.795-.838 0-1.729-.188-2.295-.525l.362-1.256c.418.242 1.119.5 1.916.5 1.08 0 1.894-.567 1.894-1.984v-.566h-.027c-.379.58-1.039.975-1.918.975-1.633 0-2.793-1.354-2.793-3.217 0-2.156 1.404-3.469 2.982-3.469 1.014 0 1.594.485 1.901 1.025h.026l.064-.877h1.445c-.027.445-.055.984-.055 1.891v3.727l.008-.003zm-1.66-2.983c0-.161-.014-.312-.055-.444-.176-.605-.646-1.064-1.353-1.064-.932 0-1.616.812-1.616 2.146 0 1.121.563 2.023 1.604 2.023.619 0 1.16-.404 1.35-1.014.057-.161.068-.394.068-.582l.002-1.065zM164.742 48.318c-.053-1.174-.121-2.578-.107-3.82h-.041a47.874 47.874 0 01-1.08 3.482l-1.336 3.939h-1.27l-1.215-3.888a45.1 45.1 0 01-.918-3.537h-.027a202.563 202.563 0 01-.16 3.875l-.203 3.655h-1.553l.607-9.098h2.188l1.188 3.657c.324 1.065.607 2.146.838 3.159h.039a48.51 48.51 0 01.904-3.174l1.256-3.646h2.16l.527 9.101h-1.621l-.176-3.705zM173.113 50.452c0 .594.025 1.174.107 1.579h-1.498l-.121-.729h-.041c-.396.513-1.08.878-1.945.878-1.322 0-2.064-.959-2.064-1.957 0-1.646 1.471-2.498 3.9-2.484v-.109c0-.432-.174-1.147-1.336-1.147-.648 0-1.322.203-1.768.486l-.324-1.08c.483-.297 1.336-.58 2.375-.58 2.104 0 2.715 1.336 2.715 2.78v2.363zm-1.621-1.634c-1.174-.014-2.295.229-2.295 1.229 0 .646.418.945.945.945.676 0 1.146-.434 1.309-.905a1.1 1.1 0 00.041-.364v-.905zM179.498 51.829c-.352.162-1.039.337-1.863.337-2.053 0-3.389-1.323-3.389-3.361 0-1.971 1.35-3.496 3.658-3.496.607 0 1.229.135 1.607.297l-.3 1.256c-.271-.135-.662-.256-1.256-.256-1.271 0-2.022.934-2.015 2.135 0 1.35.879 2.117 2.015 2.117a3.35 3.35 0 001.312-.256l.231 1.227zM180.517 42.434h1.668v3.914h.022a2.18 2.18 0 01.824-.742 2.352 2.352 0 011.146-.297c1.119 0 2.295.742 2.295 2.852v3.874h-1.662v-3.699c0-.942-.35-1.674-1.268-1.674-.648 0-1.107.432-1.297.932a1.508 1.508 0 00-.066.499v3.942h-1.662v-9.601zM188.867 44.512c-.553 0-.918-.404-.918-.891 0-.514.379-.905.932-.905.566 0 .918.392.932.905 0 .484-.362.891-.932.891h-.014zm-.824 7.519v-6.574h1.662v6.574h-1.662zM191.297 47.414c0-.756-.027-1.391-.055-1.957h1.445l.08.984h.041c.297-.512 1.012-1.133 2.104-1.133 1.146 0 2.336.739 2.336 2.818v3.898h-1.66v-3.713c0-.941-.354-1.658-1.256-1.658-.662 0-1.121.474-1.295.973a1.485 1.485 0 00-.082.525v3.873h-1.66l.002-4.61zM199.99 49.21c.041 1.188.973 1.701 2.025 1.701.77 0 1.311-.122 1.819-.298l.244 1.135c-.565.243-1.354.418-2.295.418-2.138 0-3.392-1.311-3.392-3.32 0-1.822 1.105-3.537 3.213-3.537 2.136 0 2.834 1.756 2.834 3.199 0 .311-.024.555-.053.702h-4.395zm2.889-1.161c.014-.607-.256-1.605-1.363-1.605-1.022 0-1.457.934-1.522 1.605h2.885zM205.58 47.576c0-.891-.014-1.539-.055-2.119h1.432l.068 1.242h.039c.324-.92 1.094-1.391 1.809-1.391.162 0 .258.012.393.039V46.9a2.732 2.732 0 00-.5-.041c-.783 0-1.336.5-1.481 1.257a2.858 2.858 0 00-.041.5v3.415h-1.66l-.004-4.455zM211.533 45.457l1.174 3.523c.137.401.285.901.379 1.269h.041c.094-.364.215-.864.35-1.282l1.027-3.51h1.768l-1.646 4.48c-.903 2.457-1.512 3.552-2.28 4.227-.662.566-1.337.783-1.742.837l-.377-1.392c.282-.066.621-.215.957-.459.312-.201.688-.594.918-1.039.057-.12.098-.215.098-.297a.866.866 0 00-.082-.323l-2.416-6.034h1.831z"
                  transform="translate(-10 -4)"></path>
              </g>
              <g transform="translate(-10 -4)">
                <path fill="url(#_Linear1)" fillRule="nonzero" d="M46 76L10 40 46 4l36 36-36 36z"></path>
                <circle cx="46" cy="40" r="22.072" fill="#FFFFFE"></circle>
                <circle cx="46" cy="40" r="19.865" fill="url(#_Linear2)"></circle>
                <g fill="#FFFFFE" fillRule="nonzero">
                  <path d="M34.434 43.867c-.203.17-.387.322-.547.457a3.186 3.186 0 01-.65.41 4.12 4.12 0 01-.777.293c-.252.062-.604.1-1.057.1-.844 0-1.545-.283-2.102-.852-.559-.566-.836-1.281-.836-2.146 0-.713.141-1.281.424-1.721.283-.438.691-.783 1.223-1.039.539-.26 1.18-.441 1.928-.545a34.402 34.402 0 012.412-.238v-.051c0-.527-.195-.891-.582-1.092-.389-.203-.969-.303-1.746-.303-.35 0-.76.064-1.23.193a9.71 9.71 0 00-1.375.492h-.254V35.51c.295-.086.771-.186 1.432-.303a11.357 11.357 0 011.992-.176c1.648 0 2.85.275 3.602.824.752.547 1.129 1.385 1.129 2.51v6.514h-2.984v-1.012h-.002zm0-1.49v-1.982c-.502.051-.906.096-1.215.13a3.91 3.91 0 00-.912.218c-.26.09-.461.228-.605.411-.143.183-.215.429-.215.729 0 .447.121.752.359.922.238.166.592.246 1.061.246.258 0 .521-.059.793-.176.269-.115.513-.285.734-.498zM43.967 45.127c-.791 0-1.516-.1-2.172-.299a4.582 4.582 0 01-1.709-.92 4.18 4.18 0 01-1.119-1.559c-.267-.627-.4-1.365-.4-2.22 0-.914.145-1.691.436-2.334a4.388 4.388 0 011.178-1.582 4.62 4.62 0 011.684-.879 7.148 7.148 0 012.018-.287 7.092 7.092 0 013.184.768v2.561h-.387a6.572 6.572 0 00-.439-.375 4.116 4.116 0 00-.568-.377 3.648 3.648 0 00-.732-.303 3.173 3.173 0 00-.914-.123c-.764 0-1.354.264-1.771.795-.418.529-.627 1.24-.627 2.137 0 .957.223 1.674.67 2.143.447.47 1.039.707 1.779.707.375 0 .705-.045.99-.129a3.123 3.123 0 001.246-.672c.143-.125.266-.24.367-.342h.385v2.551a29.3 29.3 0 00-.594.256 5.334 5.334 0 01-.686.234c-.291.08-.562.143-.816.184a6.356 6.356 0 01-1.003.065zM60.076 44.881v-4.783c0-.471-.01-.869-.025-1.193-.018-.322-.068-.588-.154-.793a.864.864 0 00-.398-.447c-.179-.093-.432-.141-.758-.141-.227 0-.453.051-.674.146a4.8 4.8 0 00-.729.426v6.785h-2.984v-4.783c0-.465-.01-.861-.029-1.189-.021-.326-.072-.592-.158-.797a.864.864 0 00-.398-.447c-.179-.093-.43-.141-.748-.141-.244 0-.484.057-.719.17a5.225 5.225 0 00-.684.402v6.785h-2.984v-9.562h2.984v1.055a7.986 7.986 0 011.379-.971 3.003 3.003 0 011.455-.352c.586 0 1.1.141 1.541.418.443.279.781.693 1.014 1.244.574-.533 1.115-.943 1.623-1.23.508-.287 1.023-.432 1.545-.432.443 0 .84.072 1.191.215.354.143.65.354.895.639.268.307.467.67.6 1.094.135.424.201.977.201 1.656v6.227l-2.986-.001z"></path>
                </g>
              </g>
              <defs>
                <linearGradient id="_Linear1" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(90 21.001 25) scale(71.9998)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#66B9E2"></stop>
                  <stop offset="0.13" stopColor="#60B7E1"></stop>
                  <stop offset="0.31" stopColor="#50B0DE"></stop>
                  <stop offset="0.51" stopColor="#35A4D9"></stop>
                  <stop offset="0.72" stopColor="#0F95D2"></stop>
                  <stop offset="0.8" stopColor="#008ECF"></stop>
                  <stop offset="1" stopColor="#008ECF"></stop>
                </linearGradient>
                <linearGradient id="_Linear2" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(0 -41.0827 41.0827 0 46 59.865)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#76BFE4"></stop>
                  <stop offset="0.12" stopColor="#70BDE3"></stop>
                  <stop offset="0.28" stopColor="#60B6E0"></stop>
                  <stop offset="0.46" stopColor="#45ABDB"></stop>
                  <stop offset="0.66" stopColor="#1F9BD5"></stop>
                  <stop offset="0.8" stopColor="#008ECF"></stop>
                  <stop offset="1" stopColor="#008ECF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a style={{ width: "160px" }} className="mb-4 md:mb-0 flex justify-center items-center" href="http://www.sigmm.org/" target="_blank" rel="noreferrer">
            <StaticImage src="../images/footer/SIGMM Logo.png" alt="SIGMM Logo" width={140} placeholder="tracedSVG" />
          </a>
          <a style={{ width: "160px" }} className="mb-4 md:mb-0 flex justify-center items-center" href="https://www.uq.edu.au/" target="_blank" rel="noreferrer">
            <StaticImage src="../images/footer/UQ Logo.png" alt="UQ Logo" height={50} placeholder="tracedSVG" />
          </a>
          <a style={{ width: "160px" }} className="mb-4 md:mb-0 flex justify-center items-center" href="https://www.griffith.edu.au/" target="_blank" rel="noreferrer">
            <StaticImage src="../images/footer/Griffith Logo.png" alt="Griffith University Logo" height={47} placeholder="tracedSVG" />
          </a>
        </div>
        <div className="flex flex-row justify-between lg:mt-5">
          <small className="text-center">© 2021 <a className="hover:underline" href="https://www.acmmmasia.org/" target="_blank" rel="noreferrer">ACM Multimedia Asia Conference</a>. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}
