import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container">
      <div className="leftSection">
        <div className="info">
          <div className="logo">
            <h1 className="logoText">Navab Store</h1>
          </div>
          <p className="desc">
          This shop isn't just about products; it's a transformative hub for lifestyle enthusiasts. It offers a unique outlook on living.
          </p>
          <div className="icons">
            <div className="icon">
              <Image src="/facebook.png" alt="Facebook" width={35} height={35} />
            </div>
            <div className="icon">
              <Image src="/instagram.png" alt="Instagram" width={35} height={35} />
            </div>
            <div className="icon">
              <Image src="/twitter.png" alt="Twitter" width={35} height={35} />
            </div>
            <div className="icon">
              <Image src="/youtube.png" alt="YouTube" width={38} height={38} />
            </div>
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
              <li><Link href="/categories" style={{ color: 'white' }}>Categories</Link></li>
              <li><Link href="/cart" style={{ color: 'white' }}>Cart</Link></li>
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
              <li><Link href="http://www.instagram.com" target="_blank" style={{ color: 'white' }}>Instagram</Link></li>
              <li><Link href="http://www.youtube.com" target="_blank" style={{ color: 'white' }}>YouTube</Link></li>
              <li><Link href="http://www.facebook.com" target="_blank" style={{ color: 'white' }}>Facebook</Link></li>
              <li><Link href="http://www.twitter.com" target="_blank" style={{ color: 'white' }}>Twitter</Link></li>
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

        .icon {
          width: 46px; /* Set fixed width */
          height: 46px; /* Set fixed height */
          transition: transform 0.3s ease;
        }

        .icon:hover {
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
