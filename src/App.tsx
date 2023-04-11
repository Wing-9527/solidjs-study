import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  let [show, setShow] = createSignal(true)

  function clickShow() {
    setShow(!show())
  }

  // ? For
  const [cats, setCats] = createSignal([
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	]);

  function clickAddCat() {
    // cats().push({ id: '1-dhy', name: 'dhy' })
    setCats([
      ...cats(),
      { id: '1-dhy', name: 'dhy' }
    ])
  }

  return (
    // <div class={styles.App}>
    //   <header class={styles.header}>
    //     <img src={logo} class={styles.logo} alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       class={styles.link}
    //       href="https://github.com/solidjs/solid"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Solid
    //     </a>
        
    //     <div style={{display: show() ? 'block' : 'none'}}>is show</div>

    //     <button onClick={click}>click me!</button>
    //   </header>
    // </div>

    <>
      <div style={{display: show() ? 'block' : 'none'}}>is show</div>
      <button onClick={clickShow}>click show</button>

      {
        cats().map(item => <div>{item.id + ' --- ' + item.name}</div>)
      }

    <button onClick={clickAddCat}>click addCat</button>
    </>
  );
};

export default App;
