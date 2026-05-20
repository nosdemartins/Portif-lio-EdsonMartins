import { useEffect, useState } from 'react'
import './ScrollButton.css'

function ScrollButton() {
  const [direcao, setDirecao] = useState('down')

  useEffect(() => {
    function handleScroll() {
      const totalHeight = document.documentElement.scrollHeight
      const scrolledFromTop = window.scrollY + window.innerHeight
      const posicaoAtual = window.scrollY

      if (totalHeight - scrolledFromTop < 50) {
        setDirecao('up')
      } 
      
      else if (posicaoAtual < 50) {
        setDirecao('down')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleClick() {
    const secoes = Array.from(document.querySelectorAll('header, section, footer'))
    const posicaoAtual = window.scrollY

   
    if (direcao === 'up') {
      const secaoAnterior = secoes.reverse().find(secao => {
        return secao.offsetTop < posicaoAtual - 10 
      })

      if (secaoAnterior) {
        window.scrollTo({ top: secaoAnterior.offsetTop, behavior: 'smooth' })
        if (secaoAnterior.offsetTop === 0) {
          setDirecao('down')
        }
      } else {
        
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setDirecao('down')
      }
    } 
  
    else {
      
      const proximaSecao = secoes.find(secao => {
        return secao.offsetTop > posicaoAtual + 10
      })

      if (proximaSecao) {
        window.scrollTo({ top: proximaSecao.offsetTop, behavior: 'smooth' })
      } else {
       
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
        setDirecao('up')
      }
    }
  }

  return (
    <button
      className={`scroll-btn ${direcao}`}
      onClick={handleClick}
    >
      {direcao === 'up' ? '↑' : '↓'}
    </button>
  )
}

export default ScrollButton