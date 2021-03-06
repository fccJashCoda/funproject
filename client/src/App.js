import './App.css';
import Clock from './clock/Clock';

function App() {
  return (
    <div className='App'>
      <header class=''>
        <div class='top-left-corner'>
          <div class='links'>Links</div>
          <div class='searchbar'>
            <span class='search_underline'></span>
            <form action=''>
              <label for='search'>
                <i class='fas fa-search'></i>
              </label>
              <input type='text' id='search' placeholder='Search' />
            </form>
          </div>
        </div>
        <div class='widgetbar'>
          <div class='widget'>
            <div class='add-widget'>
              <i class='fas fa-plus-circle'></i>
            </div>
          </div>
          <div class='widget'>
            <div class='temperature'>21deg</div>
          </div>
        </div>
      </header>
      <main class=''>
        <div class='appcore'>
          <div class='clock'>
            <Clock user={{ name: 'Boss' }} />
          </div>
          <form action=''>
            <label for='goal'>
              <input type='text' id='goal' />
            </label>
          </form>
        </div>
      </main>
      <footer>
        <div class='bottom-left'>
          <div class='settings'>
            <i class='fas fa-cogs'></i>
          </div>
          <div class='imageInfo'>someplace, there</div>
        </div>
        <div class='quote'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
          esse!
        </div>
        <div class='todo'>Todo</div>
      </footer>
    </div>
  );
}

export default App;
