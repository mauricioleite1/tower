import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { languageLogin } from '../language';
import { UserPreferences } from '../../context/user';
import styles from '../../styles/components/_login.module.scss';
import { auth, provider } from '../../lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks.ts';
import { login } from '../../redux/userSlice';


// import lg from 'public/images/bg/lg.jpg';

const Login = ({ setShowLogin }) => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.user.preferences.language);
  // const count = useAppSelector((state) => state.user.email);

  const [user, setUser] = useState({
    email: null,
    password: null,
  });
  const [passwordReveal, setPasswordReveal] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    // console.log(user.email, user.password);

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const { user } = result;

        setShowLogin(false);

        dispatch(login({
          displayName: user.displayName,
          email: user.email,
        }));

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleInput = ({ target: { value, name } }) => {
    setUser({ ...user, [name]: value });
  };

  const revealPassword = () => {
    setPasswordReveal(!passwordReveal);
  };

  const outsideClick = ({ target: { id } }) => {
    if (id === 'login') {
      setShowLogin(false);
    }
  };

  return (
    <form
      className={styles.container}
      id="login"
      onClick={outsideClick}
      // onSubmit={ signIn }
    >
      <div
        className={styles.left}
        style={{
          backgroundImage: 'url(/images/bg/lg.jpg)',
          backgroundPositionX: '-45px',
        }}
      >
        <h1>{languageLogin[language].bannerTitle}</h1>
        <h3>{languageLogin[language].bannerParagraph}</h3>
      </div>

      <div className={styles.right}>
        <div className="login__title">
          <ion-icon name="close-outline" onClick={() => setShowLogin(false)} />

          <h2 style={{ fontWeight: '600' }}>
            {languageLogin[language].signin}
          </h2>
          <h4 style={{ fontWeight: '300', width: '400px', textAlign: 'right' }}>
            {languageLogin[language].notamember}{' '}
            <Link href="/register" passHref={true}>
              <span style={{ fontWeight: 'bold', color: 'var(--ac-main)' }}>
                {languageLogin[language].register}
              </span>
            </Link>
          </h4>
        </div>

        <input
          placeholder="Email or Username"
          type="email"
          name="email"
          onChange={handleInput}
        />

        <div className={styles.password}>
          <input
            placeholder="Password"
            type={passwordReveal ? 'text' : 'password'}
            name="password"
            onChange={handleInput}
          />
          {!passwordReveal ? (
            <ion-icon onClick={revealPassword} name="eye-off-outline" />
          ) : (
            <ion-icon onClick={revealPassword} name="eye-outline" />
          )}
        </div>

        <div className="keep-logged-div">
          <input type="checkbox" id="keep-loggedin" />
          <label htmlFor="keep-loggedin">
            <h4>{languageLogin[language].keepMe}</h4>
          </label>
        </div>

        <button type="submit" className="button btn-login">
          LOGIN
        </button>

        <Link href="/forgotpassword" passHref={true}>
          <h4 className={styles.link}>Need help?</h4>
        </Link>

        <div className="login__options">
          <hr
            style={{
              color: 'white',
              opacity: '0.4',
              width: '100%',
            }}
          />
          <h2 style={{ fontWeight: '600' }}>Or continue with</h2>
          <div className="continuewith-buttons">
            <a
              href="https://www.bungie.net"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              <svg viewBox="0 0 308 294.1" className="ico-svg">
                <path
                  d="M304.21 156.86l-14.03-10.43V0L158.12 6.38 26.06.01v37.37L5.5 29.2l-.19-.08-.2-.05a4.31 4.31 0 00-1.08-.15h-.19c-1.08.05-2.08.53-2.8 1.33a3.98 3.98 0 00-1.03 2.9c.08 1.36.82 2.58 1.99 3.27l22.34 13.81 1.72 1.06v96.09c.19 41.28 31.34 76.24 62.06 101.57 30.24 24.79 60.84 40.43 64.69 42.36l2.89 1.47 1.54.77 1.08.54 5.1-2.79c2.55-1.27 33.81-17.04 64.69-42.36 27.95-23.03 56.09-54.07 61.12-90.54l10.96 5.4.28.14.3.08c.4.11.79.16 1.15.16 1.19-.03 2.2-.48 2.94-1.28.74-.79 1.13-1.82 1.08-2.9a3.98 3.98 0 00-1.73-3.14zM30.7 4.88l127.42 6.14h.12l127.31-6.15v138.11l-4.36-3.24-1.91-1.42.05-4.6V10.7l-121.15 5.9-121.14-5.9v31.04l-6.34-2.52V4.88zm202.97 37.49v-5.69h20.88L242.4 65.44h-6.74l9.99-23.07h-11.98zm-82.52 60.66c3.08 1.24 4.73 4.36 4.73 4.36l7.59 13.88 24.69 16.31c-2.19 3.97-2.98 7.11-3.38 8.36-.18.6-.25.89-.25.91l3.54 18.68c-.18.06-.35.08-.53.14-4.26 1.42-8.15 3.63-12.27 5.97l-2.04 1.15-.16.09c-.73.41-1.45.82-2.19 1.21l-.07.04-.07.04c-.96.56-1.96 1.02-3.18 1.46-1.83.66-3.67 1.01-5.33 1.01-2.2 0-3.96-.48-5.12-.8-.37-.1-.69-.19-.94-.25l-.08-.02-.08-.02c-2.98-.55-7.45-4.39-11.04-7.47-2.41-2.06-4.68-4.02-6.87-5.41-.89-.57-1.99-1.15-3.45-1.81l-.29-.14c-.08-.04-.17-.08-.25-.11l5.71-20.03a.304.304 0 01-.05-.07l-22.63-36.89c-.57-.74-.48-1.78.16-2.41l15.44-28.73c.25-.39.63-.65 1.05-.76.14-.04.28-.06.43-.06h.06c.33 0 .67.09.96.28l14.87 6.27c.02.01.04.02.04.03l16.72 7.49c.91.37 1.32 1.44.94 2.38l-6.93 11.07c-.29.7-.95 1.13-1.64 1.15h-.04c-.22 0-.45-.04-.66-.13l-15.84-6.35-2.39 3.93c-.03.01 2.46.99 10.84 5.25zm81.9 87.83c.36 0 .75-.04 1.14-.08.4-.04.8-.08 1.18-.08.91 0 1.72.23 2.07 1.23.73 2.05-1.77 4.4-2.3 6.25-.22.76-.11 1.78-.38 2.57-1.13 3.19-3.67 5.96-5.31 8.89-.39-.02-.93-.19-1.28-.39-1.71-.93 3.87-7.43 4.32-8.21 1.07-1.82-9.28-1.82-9.88-2.12-2.16-1.06-3.77-3.83-4.6-5.99-.85-2.22-1.56-6.31 1.32-7.34.39-.14.79-.18 1.18-.18.28 0 .56.02.84.04.27.02.56.04.83.04.4 0 .8-.04 1.19-.18 1.05-.39 1.96-1.61 2.64-2.38-3.04-2.44-5.88-3.32-8.68-3.32-4.82 0-9.53 2.62-14.95 4.51-3.68.7-7.09 1.25-8.61 1.56-6.48 1.32-12.94 6.88-18.06 8.58 0 0-6.54 2.46-13.29 2.46-.66 0-1.32-.02-1.97-.07-7.39-.58-12.21-.63-23.29-9.98-5.76-4.56-7.24-7.84-22.24-10.99-6.63-1.33-12.68-2.88-12.32-6.58.1-2.33 4.05-4.54 3.02-6.88-.54-1.23-1.07-4.19-.17-6.12-1.9-3.6-3.64-4.39-8.78-5.99-2.76-.86-5.23-.89-5.55-.89h-.04l-.15.03c.2 1.03.25 2.11.07 3.14-.73 3.91-2.03 8.12-5.72 8.12-.28 0-.56-.02-.86-.07-.21-.57 2.11-3.24-1.6-7.6-2.23-2.57-6.75-9.92-1.86-13.42.33-.23.75-.5 1.27-.75.06-.04.12-.07.18-.1 1.23-.59 2.96-1.14 5.25-1.14 2.63 0 5.99.73 10.16 2.92 1.07.92 8.28 1.95 13.25 2.8.92.15 1.77.31 2.49.46 5.41 1.07 9.54 6.09 5.74 9.86-2.47 2.03-6.42 4.82-4.5 5.71.06.02.13.05.21.09.19.02.48.08.85.15.21.05.42.09.62.14 1.55.36 3.08.71 4.55 1.08.13.04.25.07.37.09.25.07.5.13.75.2 2.92.79 6.26 1.8 9.14 2.95.22.08.44.17.65.27.35.15.66.3.99.45 1.08.49 2.1.99 2.92 1.52 5.58 3.58 13.14 12.3 19.37 13.46 1.08.25 3.57 1.15 6.98 1.15 1.96 0 4.24-.35 6.72-1.25 1.25-.45 2.52-.99 3.87-1.78.83-.44 1.63-.89 2.44-1.34 4.69-2.64 9.04-5.29 13.59-6.81 2.07-.69 4.18-1.16 6.39-1.25.07 0 .14-.01.21-.01 3.19-.36 6.26-.54 7.22-.85 4.77-1.5 9.65-3.23 14.63-3.23 1.78 0 3.58.22 5.38.76 3.9 1.15 6.99 3.81 9.37 7.02.99 1.33 5.87 8.17 4.54 9.87-1.48 1.92-4.72 3.96-5.12 6.52-.31 2.08.49 2.48 1.61 2.48zm-53.55 37.92c.61.02.38.84.81.65.41-.2.76-.26 1.01.42.32.89-.83.53-.53.91.39.51-.94 2.34-1.77 2.74-.83.38-.8-.64-1.41-.65-.63-.02-.43.39-.72-.13-.29-.51-.08-.92.24-1.21.32-.3-.05-.83-.05-.83l-1.52-4.78-12.73 10.34 12.8 11.36s2.09 4.38 1.05 4.33c-2.56-.09-4.29-.46-4.29-.46l-14.15-11.5-14.15 11.5s-1.73.37-4.29.46c-1.05.04 1.05-4.33 1.05-4.33l12.8-11.36-12.73-10.34-1.52 4.78s-.37.53-.05.83c.32.3.53.7.24 1.21-.29.52-.09.11-.72.13-.61.01-.58 1.03-1.41.65-.83-.39-2.16-2.23-1.77-2.74.3-.38-.85-.01-.54-.91.25-.68.59-.62 1.01-.42.43.19.19-.62.81-.65.89-.02 1.26-6.67 1.26-6.67l-7.86-6.94-1.16-1.37s-1.23.24-2.07-.55c-.85-.79-1.1-3-.26-4.01.79-.94 2.48-1.12 3.94.29.83.79.67 1.68.67 1.68l1.42 1.2 8.31 6.32s6.6-2.24 6.54-2.85c-.06-.61.78-.48.54-.87-.25-.38-.36-.73.31-1.05.85-.42.62.76.97.42.46-.45 2.49.6 2.98 1.37.48.77-.55.86-.49 1.48.06.6.45.37-.03.71-.48.36-.92.18-1.25-.1-.47-.37-.21-.56-.21-.56l-5.18 3.47 12.83 11.39 12.83-11.39-5.18-3.47s.26.19-.21.56c-.33.28-.77.45-1.25.1-.48-.34-.09-.11-.03-.71.06-.62-.97-.71-.49-1.48.5-.77 2.52-1.82 2.98-1.37.34.34.12-.85.97-.42.67.32.57.67.31 1.05-.24.39.6.26.54.87-.05.61 6.54 2.85 6.54 2.85l8.31-6.32 1.42-1.2s-.17-.89.66-1.68c1.46-1.41 3.15-1.23 3.94-.29.84 1.01.59 3.22-.26 4.01-.84.79-2.07.55-2.07.55l-1.16 1.37-7.86 6.94c.03-.01.4 6.65 1.28 6.67zM162.88 61.85l-8.77 14.56-2.15-.92-.5-.22-2.25-.95-11.37-4.86 9.84-16.57c.34-.56.92-.87 1.53-.88h.06c.3 0 .61.08.89.24l12.07 7.14a1.8 1.8 0 01.65 2.46zm3.17 2.02c.33-.54.9-.84 1.5-.86h.06c.32 0 .64.08.93.26l11.03 6.53c.86.51 1.12 1.63.6 2.47l-.52.84c-.03.05-.08.08-.11.14l-4.21 6.78-3.94 6.32a5.116 5.116 0 00-2.09-2.86c-.37-.3-.77-.57-1.24-.76l-10.68-4.79 8.67-14.07zm-.41 37.88l5.7-9.05 10.98-17.72c.34-.55.93-.85 1.55-.85h.03c.31 0 .63.09.92.27l9.92 5.84c.84.52 1.1 1.63.58 2.47l-9.86 15.72-1.3 2.11-5.39 8.6c-.08.14-.14.28-.21.42-.35.49-.89.78-1.46.78h-.02c-.32 0-.65-.09-.95-.27l-9.91-5.85a1.785 1.785 0 01-.58-2.47zm15.9 9.13l15.41-24.57c.36-.54.95-.85 1.54-.85h.02c.33 0 .66.08.95.26l7.86 4.69c.86.52 1.12 1.63.6 2.47l-15.43 24.57c-.34.54-.94.85-1.54.85h-.03c-.31 0-.64-.08-.92-.26l-7.88-4.7c-.85-.5-1.11-1.61-.58-2.46zM3.66 33.61a.767.767 0 01-.38-.61.76.76 0 01.73-.79h.02c.1 0 .27.04.27.04l32.75 13.02 55.04 21.88-1.65-30.65 44.48 31.49s-.51-.21-1.27-.21c-.36 0-.78.05-1.22.18-1.38.42-1.7 1.31-1.7 1.31l-.74 1.42c-.02.02-.04.03-.05.05l-.06.1-.05.1-8.13 15.13-11.32-7.91-4.78 18.44-68.56-42.36-6.34-3.92-4.64-2.87-22.4-13.84zm221.5 211.76c-30.42 24.96-61.44 40.62-63.89 41.84l-3.05 1.66-.43-.22-1.44-.73v-.01l-1.29-.65c-2.69-1.33-33.64-16.98-63.99-41.89-30.41-24.98-60.34-59.22-60.37-97.99V54.17l4.62 2.85 1.72 1.07v89.33c0 73.92 113.79 131.88 118.64 134.31l2.61 1.33 2.42-1.33c4.7-2.37 112.44-57.31 118.27-128.37l4.79 2.36 1.04.52c-4.12 35.1-31.57 66.08-59.65 89.13zm76.79-84.44h-.02c-.11 0-.28-.05-.28-.05L289.71 155l-4.5-2.22-6.07-2.99-48.09-23.69-4.85 32.59-59.29-39.66-8.12-14.96 25.99 14.69 3.52 2.1c.47.29 1.01.47 1.57.58.39.11.79.19 1.19.19h.04c1.16 0 2.26-.47 3.1-1.27.41-.34.78-.72 1.06-1.18l1.89-3.01 1.81-2.67 13.69 11.3L217 96.09l62.23 46.28 23.09 17.17c.2.13.34.35.36.61.01.42-.32.77-.73.78z"
                  fill="black"
                ></path>
              </svg>
              <h4>Bungie</h4>
            </a>
            {/* <Link href="" passHref={true}> */}
            <a
              href="https://www.bungie.net"
              target="_blank"
              rel="noreferrer"
              className="button"
              onClick={ signIn }
            >
              <svg viewBox="0 0 400 400" className="ico-svg">
                <path
                  d="M142.9 24.2C97.6 39.7 59 73.6 37.5 116.5 30 131.3 24.6 147 21.3 163.3c-8.2 40.4-2.5 83.5 16.1 120.3 12.1 24 29.5 45.4 50.5 62.1 19.9 15.8 43 27.6 67.6 34.1 31 8.3 64 8.1 95.2 1 28.2-6.5 54.9-20 76.2-39.6 22.5-20.7 38.6-47.9 47.1-77.2 9.3-31.9 10.5-66 4.7-98.8h-175v72.6h101.4c-3.9 23.2-17.7 44.4-37.2 57.5-12.3 8.3-26.4 13.6-41 16.2-14.6 2.5-29.8 2.8-44.4-.1-14.9-3-29-9.2-41.4-17.9-19.8-13.9-34.9-34.2-42.6-57.1-7.9-23.3-8-49.2 0-72.4 5.6-16.4 14.8-31.5 27-43.9 15-15.4 34.5-26.4 55.6-30.9 18-3.8 37-3.1 54.6 2.2 15 4.5 28.8 12.8 40.1 23.6L310 80.8c6-6.1 12.3-12 18.1-18.3-17.3-16-37.7-28.9-59.9-37.1-40-14.8-85-15.1-125.3-1.2z"
                  fill="white"
                ></path>
                <path
                  d="M142.9 24.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
                  fill="black"
                ></path>
                <path
                  d="M21.4 163.2c3.3-16.2 8.7-32 16.2-46.8 20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3-18.8-36.7-24.5-79.8-16.3-120.2z"
                  fill="black"
                ></path>
                <path
                  d="M203.7 165.1h175c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H203.6c.1-24.2.1-48.4.1-72.6z"
                  fill="black"
                ></path>
                <path
                  d="M37.5 283.5c20.3-15.7 40.6-31.5 60.9-47.3 7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62z"
                  fill="black"
                ></path>
              </svg>
              <h4>Google</h4>
            </a>

            {/* </Link> */}
            {/* <Link to="" className="button">
              <svg viewBox="0 0 400 400" className="ico-svg"><path d="M142.9 24.2C97.6 39.7 59 73.6 37.5 116.5 30 131.3 24.6 147 21.3 163.3c-8.2 40.4-2.5 83.5 16.1 120.3 12.1 24 29.5 45.4 50.5 62.1 19.9 15.8 43 27.6 67.6 34.1 31 8.3 64 8.1 95.2 1 28.2-6.5 54.9-20 76.2-39.6 22.5-20.7 38.6-47.9 47.1-77.2 9.3-31.9 10.5-66 4.7-98.8h-175v72.6h101.4c-3.9 23.2-17.7 44.4-37.2 57.5-12.3 8.3-26.4 13.6-41 16.2-14.6 2.5-29.8 2.8-44.4-.1-14.9-3-29-9.2-41.4-17.9-19.8-13.9-34.9-34.2-42.6-57.1-7.9-23.3-8-49.2 0-72.4 5.6-16.4 14.8-31.5 27-43.9 15-15.4 34.5-26.4 55.6-30.9 18-3.8 37-3.1 54.6 2.2 15 4.5 28.8 12.8 40.1 23.6L310 80.8c6-6.1 12.3-12 18.1-18.3-17.3-16-37.7-28.9-59.9-37.1-40-14.8-85-15.1-125.3-1.2z" fill="rgb(98,98, 255)"></path><path d="M142.9 24.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z" fill="rgb(98,98, 255)"></path><path d="M21.4 163.2c3.3-16.2 8.7-32 16.2-46.8 20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3-18.8-36.7-24.5-79.8-16.3-120.2z" fill="rgb(98,98, 255)"></path><path d="M203.7 165.1h175c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H203.6c.1-24.2.1-48.4.1-72.6z" fill="rgb(98,98, 255)"></path><path d="M37.5 283.5c20.3-15.7 40.6-31.5 60.9-47.3 7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62z" fill="rgb(98,98, 255)"></path></svg>
              <h4>Xbox</h4>
            </Link> */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
