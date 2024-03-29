import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa'
import stylesAC from './Scss/AboutContact.module.scss'

interface ContactTypes {
  numero: number | string
  email: string
  emailHref: string
  facebook: string
  facebookHref: string
  instagram: string
  instagramHref: string
}

export default function Contact({
  numero,
  email,
  emailHref,
  facebook,
  facebookHref,
  instagram,
  instagramHref
}: ContactTypes) {
  return (
    <div className={stylesAC.Container}>
      <div
        className={`${stylesAC.ContainerImgAll} ${stylesAC.ImgAboutContact}`}
      ></div>
      <div className={stylesAC.ContainerListChildrenAll}>
        <h2>Contato</h2>
        <ul className={stylesAC.InfoList}>
          <li>
            <span>
              <FaPhoneAlt />
            </span>
            <p>{numero}</p>
          </li>

          <li>
            <a href={emailHref}>
              <span>
                <FaRegEnvelope />
              </span>
              <p>{email}</p>
            </a>
          </li>

          <li>
            <a href={facebookHref}>
              <span>
                <FaFacebook />
              </span>
              <p>{facebook}</p>
            </a>
          </li>

          <li>
            <a href={instagramHref}>
              <span>
                <FaInstagram />
              </span>
              <p>{instagram}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export function About() {
  return (
    <div className={stylesAC.Container}>
      <div className={stylesAC.ContainerListChildrenAll}>
        <h2>Sobre</h2>
        <ul>
          <li>
            <h3>Horarios de atendimento para almoço:</h3>
          </li>
          <li>
            <p>De segunda a sábado das 11:00 ás 13:00</p>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Horarios de atendimento para janta:</h3>
          </li>
          <li>
            <p>De segunda a sexta das 18:00 ás 21:00</p>
          </li>
          <li>
            <p>E aos sábados das 19:00 ás 00:00</p>
          </li>
        </ul>
      </div>
      <div
        className={`${stylesAC.ContainerImgAll} ${stylesAC.ImgAboutContact}`}
      ></div>
    </div>
  )
}
