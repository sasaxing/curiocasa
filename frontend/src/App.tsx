import './App.css'
import ImageGallery from './components/ImageGallery-with-sidebar'


function App() {
  return (
    <div>
      <h1>我的家庭博物馆 CurioCasa</h1>
      <div className="container">
        {/* <ImageUploader onUpload={setImages} /> */}
        <ImageGallery />
      </div>
    </div>
    
  )
}

export default App
