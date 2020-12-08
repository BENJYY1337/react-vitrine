import React from 'react'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SocialNetwork from '../components/SocialNetwork'
import ButtonsBottom from '../components/ButtonsBottom'

const Contact = () => {
  return (
    <main>
      <div className="contact">
        <Navigation />
        <Logo />
        {/* contact form */}
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue du code</p>
              <p>08200 Sedan</p>
            </div>

          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0697987929" className="hover">
                <p style={{ cursor: 'pointer' }} className="clipboard" onClick={() => {
                  alert('Téléphone copié !')
                }}>06 97 98 79 29</p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="sv@gmail.com" className="hover">
                <p style={{ cursor: 'pointer' }} className="clipboard" onClick={() => {
                  alert('Email copié !')
                }}>sv@gmail.com</p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Benjamin Pernot - 2020</p>
          </div>
        </div>
        <ButtonsBottom left={'/project-4'} />
      </div>
    </main>
  )
}

export default Contact
