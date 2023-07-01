// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const a = new Node(4);
// const b = new Node(2);
// const c = new Node(6);
// const d = new Node(1);
// const e = new Node(3);
// // a.left = b;
// // a.right = c;
// // b.left = d;
// // b.right = e;

// // const getMinimumDifference = (root) => {};
// // const arr = [];

// // function inorder(root, arr) {
// //   if (root === null) return;
// //   inorder(root.left, arr);
// //   arr.push(root.val);
// //   inorder(root.right, arr);
// // }

// //           4
// //          / \
// //         2   6
// //        / \
// //        1  3
const myData = {
  news: [
    {
      title: "Hydrogen VS Electric Cars",
      text: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      text: " What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      text: " Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ],
  more: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  laptops: [
    {
      image: "image-retro-pcs.jpg",
      title: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades?",
    },
    {
      image: "image-top-laptops.jpg",
      title: "Top 10 Laptops of 2022",
      text: "Our best picks for various needs and budgets",
    },
    {
      image: "image-gaming-growth.jpg",
      title: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
    },
  ],
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
const { useState } = React;

function App() {
  return (
    <main>
      <Header />
      <Main />
      <Laptops />
    </main>
  );
}

function Header() {
  const [showNav, setShowVan] = useState(false);

  return (
    <header>
      <div className="container header">
        <Logo />
        <ul className={`navbar ${showNav && "show"}`}>
          <IconButton
            className="close-icon"
            onHandle={() => setShowVan(!showNav)}
            iconImage="./images/icon-menu-close.svg"
          />
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categoreis</li>
        </ul>
        <IconButton
          className="menue-icon"
          onHandle={() => setShowVan(!showNav)}
          iconImage="./images/icon-menu.svg"
        />
      </div>
    </header>
  );
}
function Logo() {
  return (
    <div className="logo">
      <img src="./images/logo.svg" alt="logo" />
    </div>
  );
}

function IconButton({ className, iconImage, onHandle }) {
  return (
    <div className={className} onClick={onHandle}>
      <img src={iconImage} alt="close" />
    </div>
  );
}
//./images/icon-menu-close.svg

//"./images/icon-menu.svg"
function Main() {
  return (
    <div className="container grid">
      <MainPhoto />
      <News />
      <div className="big-title">The Bright Future of Web 3.0?</div>
      <More />
    </div>
  );
}
function MainPhoto() {
  return (
    <div className="main-photo">
      <picture>
        <source
          media="(max-width:767px)"
          srcSet="./images/image-web-3-mobile.jpg"
        />
        <img src="./images/image-web-3-desktop.jpg" alt="desktop" />
      </picture>
    </div>
  );
}
function News() {
  return (
    <div className="news">
      <h3>New</h3>
      {myData.news.map((item, ind) => (
        <div key={ind}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
function More() {
  return (
    <div className="more">
      <p>{myData.more}</p>
      <button>read more</button>
    </div>
  );
}
function Laptops() {
  return (
    <div className="container laptops">
      {myData.laptops.map((item, ind) => (
        <div key={ind} className="laptop">
          <div className="laptop-image">
            <img src={`./images/${item.image}`} alt="laptop" />
          </div>
          <div>
            <span>0{ind + 1}</span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
