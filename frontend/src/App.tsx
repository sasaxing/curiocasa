import './App.css'
import AddNewItem from './components/AddNewItem'
import ImageGallery from './components/ImageGallery'


function App() {
  return (
    <div>
      <div>
        <h1>我的家庭博物馆 CasaAntika</h1>
        <div className="container">
          {/* <ImageUploader onUpload={setImages} /> */}
          <ImageGallery />
        </div>
      </div>
      <div>
        <h1>管理者界面</h1>
        <AddNewItem></AddNewItem>
      </div>
    </div>
    
  )
}

export default App
