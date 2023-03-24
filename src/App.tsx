import React, { useEffect, useState } from 'react'
import { Layout } from './components/Layout'
import { SwatchList } from './controllers/SwatchList'
import './App.css'
import { DetailView } from './controllers/DetailView'
import { AWSConfig } from './config/aws'


const PAGE_SIZE = 12

function App() {
  const [selectedColor, setSelectedColor] = useState('')
  const [colorList, setColorList] = useState([])
  const [hexList, setHexList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)


  const handleSelectColor = (hex: string) => {
    setSelectedColor(hex)
  }

  const handleDeselectColor = () => {
    setSelectedColor('')
  }

  const handleRandom = () => {
    const random = hexList[Math.floor(Math.random() * hexList.length)]
    setSelectedColor(random)
  }

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    const getColors = async () => {
      const colorsUrl = `${AWSConfig.apiUri}/colors`
      const resp = await fetch(colorsUrl)
      const data = await resp.json()
      setColorList(data)
    }
    getColors()

    const getHexes = async () => {
      const hexesUrl = `${AWSConfig.apiUri}/hexes`
      const resp = await fetch(hexesUrl)
      const data = await resp.json()
      setHexList(data)
    }
    getHexes()
  }, [])

  return (
    <Layout
      handleSelectColor={handleSelectColor}
      handleRandom={handleRandom}
      colorList={colorList}
    >
      <div>
        {selectedColor === '' ? (
          <SwatchList
            handleSelectColor={handleSelectColor}
            hexList={hexList}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageSize={PAGE_SIZE}
            onPageChange={onPageChange}
          />
        ) : (
          <DetailView
            selectedColor={selectedColor}
            handleDeselectColor={handleDeselectColor}
          />
        )}
      </div>
    </Layout>
  )
}

export default App
