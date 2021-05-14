import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default function Footer() {
  return (
    <footer className="text-secondary bg-light border-top" style={{ marginTop: "auto" }}>
      <div className="global-wrapper py-0">
        <div className="d-flex justify-content-between flex-wrap mb-4">
          <StaticImage src="../images/footer/ACM Logo.png" alt="ACM Logo" height={50} />
          <StaticImage src="../images/footer/SIGMM Logo.jpg" alt="SIGMM Logo" height={50} />
          <StaticImage src="../images/footer/UQ Logo.jpg" alt="UQ Logo" height={50} />
          <StaticImage src="../images/footer/Griffith Logo.png" alt="Griffith Logo" height={50} />
        </div>
        <small className="mb-0">© {new Date().getFullYear()} ACM Multimedia Asia. All Rights Reserved.</small>
      </div>
    </footer>
  )
}
