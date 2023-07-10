import main from '../assets/main-image.png'

function Main(props) {


    return (
        <div className="main">
          <div className='main-h1-h4'>
            <h1 className='main-h1'>Catchy Title</h1>
            <h4 className='main-h4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Mattis pellentesque id nibh tortor.</h4>
          </div>
          <div className='main-button-image-div'>
            <button className='main-button'>Get your free consultation!</button>
            <img src={main} alt='computer monitors' className='main-image' width={'300px'}></img>
          </div>

        </div>
    )

};

export default Main;