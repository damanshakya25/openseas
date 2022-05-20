
import './App.css';
import logo from './img/logo.png';
import ntfs from './img/NFTS.png';
import wallet from './img/Vector.png';
import frame from './img/frame.png';
import notable from './img/Notable.png';
import slider from './img/slider.png';
import slider2 from './img/slider2.png';

function App() {
  return (
    <div className='App'>
      <div className="cover">
        <div className='coverside1'>
          <div className='coverside1in'>
            <div className='logo'>
                <span><img src={logo} alt="" /></span> <span>OpenSea</span>
            </div>
            <div className="cover1metter">
              <h1>Discover. Collect. & Sell. Extraordinary <br/><span><img src={ntfs} alt="" /></span></h1>
              <p className='Ontheworld'><br />
                On the world’s first & largest NFT <br/>
                marketplace.
              </p>
            <div/>
            <div className="coverbutton">
              <button className='coverbutton1'>
                Explore
              </button>
              <button className='coverbutton2'>
                Create
              </button>
            </div>
            <p className='getfeature'>
              Get Featured On The Homepage
            </p>
          </div>
        </div>
      </div>
        <div className='coverside2'>
          <div className="coverside1in">
            <div className="coverside21">
              <div className="topbar">
                <span>
                  <div className='searchbar'>
                    <button><i class="fa fa-search" aria-hidden="true"></i></button>
                    <input type="search" placeholder='Search'/>
                  </div>
                </span>
                <span>
                  <img src={wallet} alt="" />
                </span>
                <span className='toggle'>
                  <button><i class="fa fa-bars" aria-hidden="true"></i></button>
                </span>
              </div>
              <div className="frame">
                <img src={frame} alt="" />
              </div>
              <div className="soulcurry">
                <h2>SoulCurryArt</h2>
                <p>A play of light and shade, chairoscurso is the <br/> realm between the light and dark</p>
              </div>
              <div className='placebid'>
                <button>
                  Place Bid
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="CreateSell">
        <div className="CreateSell1">
          <div>
            <h1>Create & Sell Your NFT’s</h1>
            <h3>A play of  light and shade, chairoscuro is the <br /> realm between the light and dark.</h3>
            <div className='CreateSell11'>
              <div className='createsell'>
                <div>
                  <h2>
                    Set up your wallet
                  </h2>
                  <p>
                    Once you’ve set up your wallet of choice, connect it to OpenSea. Learn about the wallets we support.
                  </p>
                </div>
              </div>

              <div className='createsell'>
                <div>
                  <h2>
                    Create  your  collection
                  </h2>
                  <p>
                    Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary. 
                  </p>
                </div>
              </div>

              <div className='createsell'>
                <div>
                  <h2>
                    Add  your  NFT’s
                  </h2>
                  <p>
                    Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs stats, and unlockable content.
                  </p>
                </div>
              </div>

              <div className='createsell'>
                <div>
                  <h2>
                    List  them  for  sale
                  </h2>
                  <p>
                    Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs.
                  </p>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>

      <div className="notable">
        <div className='notable1'>
          <div className="notable11">
            <div>
              <img src={notable} alt="" />
            </div>
            <div className='notabletext'>
              <h1>
                Notable  Drops
              </h1>
              <p>
                Upload your work (image, video, audio, <br /> or 3D art), add a title and description, <br /> and customize your NFTs stats, and <br /> unlockable content.
              </p><br /><br /><br />
              <button className='coverbutton1'>
                View All
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="companies">
        <div className="companies1">
        </div>
      </div>

      <div className="trending">
        <div className='trending1'>
          <div className="trending11">
            <div className="trend">
              <h1>
                Trending in All Categories
              </h1><br />
              <h4>
                A play of light and shade, chairoscuro is the <br /> realm between the light and dark.
              </h4>
            </div><br /><br /><br />
            <div className="sideofslider">
              <p><span className='recent'>Recently Added</span><span className='recent1'> Mostly used</span></p>
            </div>
            <div className="slider">
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src={slider} alt="First slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={slider} alt="Second slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={slider} alt="Third slide"/>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="category">
        <div className="category1">
          <button className='categorybutton'>
            Explore Marketplace
          </button>
        </div>
      </div>

      <div className="wewill">
        <div className="wewill1">
          <button className='wewillbutton'>
            View all
          </button>
        </div>
      </div>

      <div className="resourse">
        <div className="resourse1">
        <div className="slider2">
              <div id="carouselExampleIndicators" class="carousel slide secondslider" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src={slider2} alt="First slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={slider2} alt="Second slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={slider2} alt="Third slide"/>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>

            </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer1">
          <div className='emailbar'>
            <input type="email" placeholder='Email address...'/>
            <button>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
