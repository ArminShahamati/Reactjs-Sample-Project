var React =require('react');
var ReactDOM=require('react-dom');


class App extends React.Component{
render(){
  return(
  <div>
  <Header/>
  <Main/>
  <Footer/>
  </div>
  );
}
}




class Header extends React.Component{
  render(){
    return(
      <header>
      <nav>
      <h1>Header</h1>
      </nav>
      </header>
    );
  }
}
class Main extends React.Component{
  render(){
    return(
      <div>
      <p>Lorem Ipsum Dolor Site Amet.Lorem Ipsum Dolor Site Amet.Lorem Ipsum Dolor Site Amet.Lorem Ipsum Dolor Site Amet.</p>
      </div>
    );
  }
}
class Footer extends React.Component{
  render(){
    return(
        <h2>Footer Page</h2>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('main'));
