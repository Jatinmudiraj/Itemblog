import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container">
      <div className="leftSection">
        <div className="info">
          <div className="logo">
            <h1 className="logoText">Item Blog</h1>
          </div>
          <p className="desc">
            This blog is not just a product blog; it's a game-changer blog for life. It brings a fresh perspective to life.
          </p>
          <div className="icons">
            <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
            <Image src="/instagram.png" alt="Instagram" width={18} height={18} />
            <Image src="/tiktok.png" alt="TikTok" width={18} height={18} />
            <Image src="/youtube.png" alt="YouTube" width={18} height={18} />
          </div>
        </div>
      </div>
      <div className="rightSection">
        <div className="links">
          <div className="list">
            <h2 className="listTitle">Links</h2>
            <ul>
              <li><Link href="/" style={{ color: 'white' }}>Homepage</Link></li>
              <li><Link href="/products" style={{ color: 'white' }}>All Products</Link></li>
              <li><Link href="/" style={{ color: 'white' }}>About</Link></li>
              <li><Link href="/" style={{ color: 'white' }}>Contact</Link></li>
            </ul>
          </div>
          <div className="list">
            <h2 className="listTitle">Tags</h2>
            <ul>
              <li><Link href="/" style={{ color: 'white' }}>Style</Link></li>
              <li><Link href="/" style={{ color: 'white' }}>Fashion</Link></li>
              <li><Link href="/" style={{ color: 'white' }}>Coding</Link></li>
              <li><Link href="/" style={{ color: 'white' }}>Travel</Link></li>
            </ul>
          </div>
          <div className="list">
            <h2 className="listTitle">Social Media</h2>
            <ul>
              <li><Link href="/" style={{ color: 'white' }}>Instagram</Link></li>
              <li><Link href="/" style={{ color: 'white' }}>YouTube</Link></li>
              <li><Link href="/" style={{ color: 'white' }}>Facebook</Link></li>
              <li><Link href="/" style={{ color: 'white' }}>Twitter</Link></li>
            </ul>
          </div>
          <div className="list">
            <h2 className="listTitle">Blog</h2>
            <ul>
              <li><Link href="/" style={{ color: 'white' }}>Latest Posts</Link></li>
              <li><Link href="/" style={{ color: 'white' }}>Trending</Link></li>
              <li><Link href="/" style={{ color: 'white' }}>Featured</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          padding: 10px;
          background-color: #1f1f1f;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .leftSection,
        .rightSection {
          flex: 1;
          text-align: center;
        }

        .info {
          max-width: 400px;
          margin: 0 auto;
          margin-bottom: 30px;
        }

        .logoText {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #fff;
        }

        .desc {
          font-weight: 300;
          line-height: 1.6;
          margin-bottom: 20px;
          color: #ccc;
        }

        .icons {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .icons img {
          transition: transform 0.3s ease;
        }

        .icons img:hover {
          transform: scale(1.2);
        }

        .links {
          display: flex;
          gap: 50px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .list {
          max-width: 200px;
          text-align: center;
          margin-bottom: 30px;
        }

        .listTitle {
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 10px;
          color: #fff;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          margin-bottom: 10px;
        }

        li a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        li a:hover {
          color: #fff;
        }

        @media screen and (max-width: 768px) {
          .container {
            padding: 30px;
            flex-direction: column;
            align-items: center;
          }

          .list {
            max-width: 100%;
          }

          .listTitle {
            margin-top: 20px;
          }
        }
      `}</style>

    </footer>
  );
};

export default Footer;
