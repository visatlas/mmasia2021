import React from "react";

export default function PreviewMode() {
  return (
    <div className="bg-blue-300 flex justify-center items-center h-6">
      <small className="font-medium text-center">You are currently in preview mode.&nbsp;
        <a className="underline" href={`${process.env.GATSBY_PRODUCTION_SITE_URL}`} target="_blank" rel="noreferrer">
          Visit the main page.
        </a>
      </small>
    </div>
  );
}
