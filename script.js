window.onload = function () {
  const commandText = document.getElementById('loading-text');
  let dots = 0;

  const interval = setInterval(() => {
    dots = (dots + 1) % 4;
    commandText.innerHTML =
      '> Loading modules' + '.'.repeat(dots) + '<span class="blinking-cursor">|</span>';
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
    document.getElementById('boot-screen').style.display = 'none';
    document.getElementById('main-screen').classList.remove('hidden');
    document.getElementById('chat-terminal-icon').classList.remove('hidden');
  }, 5000);

  setInterval(() => {
    const clock = document.getElementById('clock');
    if (clock) {
      const now = new Date();
      clock.textContent = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  }, 1000);
};

let windowCount = 0;


function openFolder(name) {
  const template = document.getElementById('window-template');
  const newWindow = template.cloneNode(true);
  newWindow.classList.remove('hidden', 'maximized', 'minimized');
  newWindow.classList.add('window');
  newWindow.id = `window-${windowCount++}`;

  const header = newWindow.querySelector('.window-header');
  const title = newWindow.querySelector('.window-title');
  const body = newWindow.querySelector('.window-body');
  const closeBtn = newWindow.querySelector('.close-btn');
  const minimizeBtn = newWindow.querySelector('.minimize-btn');
  const maximizeBtn = newWindow.querySelector('.maximize-btn');

  title.textContent = name;

  switch (name) {
    case 'About Me':
      body.innerHTML = `
        <h2>Hello 👋</h2>
        <p>I'm <strong>Archi Goyal</strong>, a creative developer passionate about design & interaction.</p>
        <p>I thrive in creating seamless user experiences through intuitive interfaces and cutting-edge AI solutions.</p> 
        <p>Explore my portfolio to see elegant frontend designs and innovative AI projects. 💻</p>
      `;
      break;

 case 'Tech Stack':
  body.innerHTML = `
    <h2>🧰 Tech Stack</h2>
    <div class="tech-grid">
      <div class="stack-icon" title="HTML5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
          <path fill="#E44D26" d="M14.021 90.034 6 0h88.187l-8.022 89.985L50.02 100"/>
          <path fill="#F16529" d="M50.093 92.344V7.39h36.048l-6.88 76.811"/>
          <path fill="#EBEBEB" d="M22.383 18.4h27.71v11.036H34.488L35.51 40.74h14.584v11.01H25.397zm3.5 38.893h11.084l.778 8.823 12.348 3.306v11.521l-22.654-6.32"/>
          <path fill="#fff" d="M77.706 18.4H50.044v11.036h26.64zm-2.018 22.34H50.044v11.035h13.612l-1.288 14.341-12.324 3.306v11.473l22.606-6.271"/>
        </svg>
      </div>
       <div class="stack-icon" title="css3">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#264DE4" d="m94.175 0-8.033 89.99L50.034 100l-36.01-9.996L6 0z"/><path fill="#2965F1" d="m79.265 84.26 6.864-76.9H50.087v84.988z"/><path fill="#EBEBEB" d="m24.396 40.74.99 11.039h24.702V40.74zm25.692-22.342h-27.68l1.003 11.038h26.676zm-.001 62.495V69.408l-.048.013-12.294-3.32-.786-8.803H25.878l1.547 17.332 22.612 6.277z"/><path fill="#fff" d="m63.642 51.779-1.281 14.316-12.312 3.323v11.484l22.63-6.272.166-1.865 2.594-29.06.27-2.965L77.7 18.398H50.05v11.038h15.555L64.599 40.74H50.05v11.04z"/></svg>
      </div>

            <div class="stack-icon" title="electron">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#2DD0ED" d="M36.547 21.494c-13.068-2.38-23.4.111-27.519 7.243-3.073 5.322-2.195 12.38 2.13 19.923a1.341 1.341 0 1 0 2.326-1.334C9.587 40.532 8.828 34.44 11.35 30.077c3.42-5.925 12.635-8.147 24.716-5.946a1.341 1.341 0 1 0 .48-2.637zM17.953 57.828c5.284 5.807 12.149 11.253 19.978 15.774 18.956 10.944 39.136 13.87 49.081 7.088a1.34 1.34 0 0 0-1.509-2.215c-8.901 6.07-28.071 3.291-46.232-7.194-7.596-4.386-14.243-9.66-19.335-15.256a1.34 1.34 0 1 0-1.983 1.803"/><path fill="#2DD0ED" d="M83.841 56.198c8.557-10.108 11.545-20.276 7.436-27.393-3.024-5.237-9.417-8.003-17.912-8.113a1.341 1.341 0 0 0-.036 2.68c7.64.1 13.149 2.482 15.627 6.773 3.412 5.912.748 14.979-7.16 24.322a1.34 1.34 0 1 0 2.045 1.73M61.851 21.94c-7.737 1.658-15.971 4.899-23.88 9.464C18.402 42.703 5.637 59.362 7.41 71.442a1.34 1.34 0 1 0 2.65-.39C8.488 60.327 20.588 44.535 39.31 33.726c7.672-4.43 15.646-7.567 23.103-9.166a1.34 1.34 0 0 0-.562-2.62"/><path fill="#2DD0ED" d="M30.148 79.817C34.623 92.307 41.94 100 50.172 100c6.002 0 11.555-4.091 15.885-11.295a1.342 1.342 0 0 0-1.947-1.784q-.215.167-.348.403c-3.892 6.474-8.673 9.997-13.59 9.997-6.836 0-13.364-6.861-17.5-18.408a1.34 1.34 0 0 0-1.2-.913 1.34 1.34 0 0 0-1.323 1.817zm40.866-2.445c2.316-7.4 3.559-15.938 3.559-24.835 0-22.2-7.77-41.338-18.837-46.252a1.34 1.34 0 0 0-1.087 2.45c9.87 4.383 17.245 22.545 17.245 43.802 0 8.63-1.206 16.9-3.437 24.035a1.34 1.34 0 0 0 .623 1.606 1.34 1.34 0 0 0 1.934-.806m25.237-1.312a6.413 6.413 0 1 0-12.825-.082 6.413 6.413 0 0 0 12.825.082m-2.68 0a3.734 3.734 0 1 1-7.467-.001 3.734 3.734 0 0 1 7.467.001m-83.157 6.414a6.412 6.412 0 1 0 0-12.827 6.412 6.412 0 0 0-5.926 8.868 6.41 6.41 0 0 0 5.926 3.959m0-2.68a3.734 3.734 0 1 1 0-7.468 3.734 3.734 0 0 1 0 7.468"/><path fill="#2DD0ED" d="M50.172 12.827a6.412 6.412 0 1 0 0-12.827 6.413 6.413 0 1 0 0 12.827m0-2.68a3.735 3.735 0 0 1-2.64-6.373 3.73 3.73 0 0 1 4.4-.653 3.734 3.734 0 0 1-1.76 7.027zm.98 46.927a4.643 4.643 0 0 1-5.547-5.368A4.64 4.64 0 0 1 49.192 48a4.642 4.642 0 0 1 1.96 9.072z"/></svg>
      </div>

            <div class="stack-icon" title="react">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 101 100"><path fill="#61DAFB" d="M50.307 58.816a8.816 8.816 0 1 0 0-17.632 8.816 8.816 0 0 0 0 17.632"/><path stroke="#61DAFB" stroke-width="5" d="M50.307 68.063c26.126 0 47.306-8.087 47.306-18.063s-21.18-18.062-47.306-18.062C24.18 31.938 3 40.024 3 50s21.18 18.063 47.307 18.063Z"/><path stroke="#61DAFB" stroke-width="5" d="M34.664 59.031C47.727 81.658 65.321 95.957 73.96 90.97c8.64-4.988 5.053-27.374-8.01-50C52.885 18.342 35.291 4.043 26.652 9.03s-5.052 27.374 8.011 50Z"/><path stroke="#61DAFB" stroke-width="5" d="M34.664 40.969c-13.063 22.626-16.65 45.012-8.01 50 8.638 4.988 26.232-9.311 39.295-31.938s16.65-45.012 8.01-50c-8.638-4.988-26.232 9.311-39.295 31.938Z"/></svg>
      </div>

            <div class="stack-icon" title="threejs">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 103 104"><path stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.287" d="M26.702 102 2 2l99.023 28.51z" clip-rule="evenodd"/><path stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.287" d="m51.493 16.257 12.342 50.015L14.35 52.013z" clip-rule="evenodd"/><path stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.287" d="m39.215 58.797-6.13-24.846 24.584 7.057zM26.952 9.136l6.13 24.845-24.584-7.057zm49.167 14.163 6.13 24.846-24.585-7.058zM39.217 58.814l6.13 24.845-24.584-7.057z" clip-rule="evenodd"/></svg>
      </div>

            <div class="stack-icon" title="java">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#5382A1" d="M36.753 77.336s-3.822 2.222 2.72 2.974c7.924.904 11.973.774 20.706-.879 0 0 2.296 1.44 5.502 2.687-19.576 8.39-44.304-.486-28.928-4.782M34.36 66.387s-4.286 3.173 2.26 3.85c8.464.873 15.149.945 26.716-1.283 0 0 1.6 1.622 4.116 2.51-23.668 6.92-50.03.545-33.092-5.077"/><path fill="#E76F00" d="M54.527 47.815c4.823 5.554-1.268 10.551-1.268 10.551s12.248-6.322 6.623-14.24C54.63 36.743 50.6 33.074 72.41 20.425c0 0-34.234 8.55-17.883 27.39"/><path fill="#5382A1" d="M80.418 85.434s2.827 2.33-3.115 4.133c-11.3 3.423-47.03 4.456-56.956.136-3.568-1.552 3.124-3.706 5.228-4.159 2.195-.475 3.45-.387 3.45-.387-3.968-2.795-25.648 5.49-11.012 7.861 39.913 6.473 72.757-2.914 62.405-7.584M38.59 55.044s-18.174 4.317-6.436 5.884c4.956.664 14.837.514 24.04-.258 7.522-.634 15.075-1.983 15.075-1.983s-2.653 1.136-4.571 2.446c-18.457 4.854-54.11 2.596-43.846-2.37 8.68-4.195 15.738-3.72 15.738-3.72m32.603 18.224c18.762-9.75 10.088-19.118 4.033-17.856-1.484.309-2.146.576-2.146.576s.551-.863 1.603-1.236c11.978-4.212 21.19 12.42-3.867 19.007 0 0 .29-.26.377-.491"/><path fill="#E76F00" d="M59.882 0s10.39 10.395-9.855 26.377C33.793 39.2 46.325 46.51 50.021 54.861c-9.477-8.55-16.432-16.077-11.766-23.082C45.103 21.496 64.075 16.51 59.882 0"/><path fill="#5382A1" d="M40.434 99.686c18.009 1.153 45.663-.64 46.318-9.161 0 0-1.259 3.23-14.883 5.796-15.371 2.892-34.329 2.555-45.573.7 0 0 2.302 1.906 14.138 2.665"/></svg>
      </div>

            <div class="stack-icon" title="python">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="url(#a)" d="M49.64 0C24.254 0 25.839 11.009 25.839 11.009l.028 11.406h24.225v3.424H16.245S0 23.997 0 49.61c0 25.615 14.179 24.707 14.179 24.707h8.462V62.432s-.457-14.18 13.952-14.18H60.62s13.5.219 13.5-13.046V13.273S76.17 0 49.64 0M36.282 7.67a4.354 4.354 0 0 1 4.358 4.358 4.356 4.356 0 0 1-6.027 4.028 4.35 4.35 0 0 1-2.69-4.028 4.355 4.355 0 0 1 4.359-4.358"/><path fill="url(#b)" d="M50.36 99.48c25.387 0 23.802-11.009 23.802-11.009l-.028-11.405H49.908V73.64h33.847S100 75.485 100 49.869c0-25.615-14.179-24.706-14.179-24.706H77.36v11.886s.457 14.179-13.952 14.179H39.38s-13.5-.218-13.5 13.047v21.933S23.83 99.48 50.36 99.48m13.359-7.67a4.355 4.355 0 0 1-4.028-6.026 4.35 4.35 0 0 1 4.028-2.69 4.355 4.355 0 0 1 4.027 6.027 4.355 4.355 0 0 1-4.027 2.69"/><defs><linearGradient id="a" x1="9.61" x2="59.167" y1="8.948" y2="58.01" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="b" x1="40.028" x2="93.247" y1="40.453" y2="90.762" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs></svg>
      </div>

            <div class="stack-icon" title="flask">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#000" d="M29.883 84.434c-3.81-2.996-7.873-5.87-10.65-9.914C13.39 67.386 8.891 59.127 5.815 50.447 3.956 44.804 3.32 38.753.923 33.327c-2.507-3.941.43-8.249 4.747-9.501 1.921-.37 5.3-2.182 1.222-.887-3.657 2.684-4.011-2.435-.262-2.759 2.56-.34 3.502-2.435 2.626-4.321-2.746-1.792 6.662-3.76 1.928-6.433-4.932-5.32 6.898-6.345 3.98-.303-.7 4.647 8.266-.851 6.186 4.515 2.113 2.576 7.916.586 7.772 4.2 3.08.212 4.137 2.804 7.028 3.003 2.997 1.353 8.428 2.42 9.448 5.796-2.973 2.353-9.856-4.862-10.187 1.653.898 9.624.669 19.537 4.19 28.7 1.665 5.55 5.702 9.918 9.348 14.24 3.49 4.233 8.215 7.213 13.031 9.721 4.225 1.994 8.78 3.315 13.385 4.144 1.867-1.428 5.164-6.74 8.078-4.5.138 2.517-5.782 5.26-.279 4.982 3.232-.975 5.474 2.5 8.135-.635 2.452 2.905 10.192-1.855 8.447 4.082-2.359 1.522-5.8.602-8.162 2.696-3.896-1.946-6.998 1.741-11.312 1.275-4.79.858-9.662 1.204-14.519 1.212-7.967-.63-16.102-.895-23.682-3.67-4.268-1.24-8.436-3.671-12.188-6.103m6.728 2.915c4.17 1.803 8.246 3.704 12.815 4.276 7.25 1.009 14.735 2.56 22.01 1.145-3.293-1.487-6.697.58-9.977-1.063-3.934.846-8.155-.215-12.155-.739-4.548-2.026-9.456-3.419-13.715-6.048-5.322-1.944 2.752 2.493 4.19 2.852 3.326 1.888-3.659-.968-4.644-1.753-2.786-1.563-3.141-1.237-.276.35.578.338 1.147.693 1.752.98m-7.933-5.606c4.04 1.496-.018-2.84-1.868-2.59-.82-1.422-3.134-2.321-1.502-3.085-2.936 1.019-3.076-3.876-4.455-3.176-3.106-.981-1.209-4.455-4.908-6.588-.338-2.248-3.676-4.198-4.74-7.588-.47-1.736-3.771-6.721-1.743-2.082 1.726 4.466 4.763 8.292 7.291 12.112 1.963 3.637 4.28 7.438 7.855 9.708 1.206 1.156 2.369 2.927 4.07 3.289M17.04 68.965c.142-.61.739 1.32 0 0m16.477 14.572c-1.287-.505.894-.4 0 0m2.192.8c-1 .617-.227-1.105 0 0m2.746 1.145c-2.014-.785 1.307-1.245 0 0m4.705 2.622c-2.542-.443.794-1.174 0 0m-9.034-6.298c-2.623-.018 2.03-1.313 0 0m2.059 1.027c-.734.311-.058-.695 0 0m10.292 6.424c1.654 1.044 9.662 2.288 4.648.428-.84.177-9.297-2.392-4.648-.428M30.137 76.53c-2.568-.769-.16-.696 0 0m4.792 2.793c-2.588-.671 1.247-.87 0 0m4.03 2.47c-2.903-.677 1.79-.674 0 0m-10.771-7.386c1.94 1.489 7.83.19 2.973-.889-2.21-1.178-7.193-1.985-3.797.71zm13.5 8.24c-3.39-.787.81-1.378 0 0m-4.102-3.26c4.748 1.343-3.992-3.003-1.171-.494l.625.282zm8.226 4.754c-4.061-.62 4.496.043 0 0M26.458 71.806c-1.11.07-.176-.837 0 0m26.96 16.602c-1.468 1.125.12-1.513 0 0M34.13 76.505c-1.404-.033-.272-.797 0 0m-7.246-5.224c-3.534-1.138 2.581-.155 0 0m-8.585-5.55c-2.808-2.224-.32-1.236 0 0m22.537 14.303c-.473-.54-.223.118 0 0m14.027 8.607c-.764.312-.045-.823 0 0m-15.269-9.89c-2.201-.32.253-1.061 0 0m-10.45-6.622c-3.076-1.298 1.92-.206 0 0m17.677 10.984c-2.916-.579 2.992-1.185 0 0m-9.195-6.241c3.45.444-4.103-2.347-.756-.25zm11.987 7.37c3.22-1.925 2.159 4.508 5.463.544 3.26-2.38-2.815 2.942 1.202.424 2.906-1.943 7.197.921 9.908 1.855 1.949-.095 3.845 1.686 5.843.602 3.847-1.035-7.523-1.537-4.543-3.375-3.52 1.025-6.12-1.221-7.853-3.476-3.948-.912-8.514-2.93-10.485-6.425-.803-1.312 1.161.185-.694-1.96-2.379-2.116-3.567-4.518-5.164-7.091-1.908-1.018-2.13-4.014-2.324-.1.016-2.47-2.303-4.133-2.869-3.442-.01-2.379 2.481-1.186.737-2.946-.375-2.466-1.611-5.035-1.983-7.818-.578-1.342-.082-4.216-1.97-1.179-.688 3.21-.229-3.944.842-1.585 1.404-2.408-.505-2.125-.583-1.79.915-2.032.579-4.913-.24-3.814.489-2.153.771-7.924-.729-6.901.91-2.252 1.725-10.303-2.223-7.233-1.6.022-4.37.58-5.68 1.232 4.107 2.263-.413.817-2.085.457-.217 2.095-1.873 1.189-3.941 1.21 3.303.409-1.609 3.379-3.504 2.225-2.461 1.176 2.124 4.113.049 5.02.255 1.37-3.77-.494-3.455 2.667-2.39-1.005-.329 3.75.867 2.142 4.064 1.1 2.861 3.607 2.964 5.99-.662 1.387-3.27-3.263-.58-3.048-2.121-3.446-2.347-1.245-4.11.356-.41.116 4.497 2.277 1.418 3.346 2.709.418 2.786 2.788 3.338 4.288 1.627 1.695 1.294-1.873 3.242.165-1.233-1.815-6.53-5.115-2.265-4.056-.023-1.828-.771-3.301.535-3.265 1.294-2.344-1.354 5.777 1.562 2.798.807-.352 1.007-2.345 2.459.189 2.107 2.073.76 3.576-2.213 1.677.532 1.805 3.978 2.45 3.33 5.272.687 2.482 1.647 1.568 2.484 1.424.657 2.411 1.03.638 1.06-.51 3.007.644 2.303 2.422 3.244 3.663 2.072.936-2.966-6.338.591-2.186 3.743 3.378 1.404 4.788-1.955 4.247 2.126-.172 2.812 2.873 5.47 2.767 2.425 1.153 4.066 5.583-.113 3.739-1.449-1.307-6.579-2.92-2.389-.434 3.87 1.792 6.942 2.864 10.674 5.113 2.671 1.907 3.825 4.091 4.837 4.523-2.244 1.072-6.764-.856-3.408-1.447-2.093-.382-4.448-1.44-2.443 1.168 1.705 1.423 6.04 1.273 6.818 1.434-.66 1.452-1.79 1.567.027 1.68-2.027 1.08.65 1.247.837 1.864M45.47 72.54c-1.233-1.29-1.551-3.705-.219-1.603.684.275 2.19 3.946.22 1.603m13.496 8.572c.022.585.769-.05 0 0M43.522 69.378c-.047-1.949.447 1.504 0 0m-1.34-1.804c-1.551-2.997 1.955.848 0 0M25.927 56.355c.448 1.559.91-.242 0 0m12.936 7.012c.56-2.101.657 1.763 0 0m-9.14-6.355c-.643-1.159 1.349 1.088 0 0m7.844 2.515c-1.469-3.292 1.04-1.798.325.539zm-13.525-9.02c-.657-1.08-1.744-4.25-1.394-5.216.317 1.575 3.35 6.78 1.488 2.155-2.058-3.875 2.46 1.259 2.925 2.225.216.962-1.27-.262-.263 1.992-1.837-2.567-1.084 1.419-2.756-1.156m-4.18-2.88c.172-2.512.957 1.721 0 0m1.88.646c.897-1.895 1.521 2.642 0 0m-4.523-3.499c-1.557-1.546-2.682-2.971.073-.96 1.062.042-2.36-3.24.255-1.042 2.75.501 1.358 4.508-.328 2.002m2.376-.062c.48.882.904-.895 0 0m1.462.47c-1.37-2.57 1.662 1.076 0 0m-2.907-2.779c-4.524-4.026 5.686 2.106.74.747zm12.963 7.532c-1.958-1.174-.519-8.264.149-3.415 1.903-.615-.105 2.505 1.315 2.476-.224 1.968-.86 2.676-1.464.94m4.795 2.834c.192-2.137.404 1.46 0 0m-.833-.823c.022 1.075.215-.913 0 0M19.038 41.081c-2.906-4.01 8.447 4.056 1.861 1.017-.688-.18-1.516-.244-1.86-1.017m9.233 4.895c-.276-3.377.614.56 0 0m7.01 4.497c.04 1.272.542-1.924 0 0M19.483 39.55c1.728-.369 7.16 3.034 2.171.973-.554-.614-1.735-.335-2.17-.973m14.834 7.394c.185-3.452 1.031-2.062.006.494zM20.769 38.35c.703-1.032-1.869-4.668.37-1.304.968.77 2.802 1.288 1.183 1.611 2.546 2.247-.621.61-1.553-.307m12.815 7.517c.428 2.304.486-3.933 0 0m-14.285-11.15c.284.717.538-.23 0 0m3.343 1.99c.86-1.805 1.587 2.013 0 0m9.428 5.244c-.009-.693.178 1.009 0 0m-.546-1.209c-1.309-3.228 1.217 1.71 0 0m-.803-2.116c-.22-1.334.746 1.676 0 0m1.307-2.126c-.898-1.583 1.134-6.973 1.361-3.63-.948 2.605-.274 4.063.388.568 1.221-2.75-.264 5.427-1.749 3.062m1.344-8.018c.087.58.392-.48 0 0m-2.244 44.222c-.532-.464.067.296 0 0m4.623 2.339c2.572.66 2.559-.4.234-.715-1.25-1.163-5.194-2.397-1.663-.144.233.592.972.578 1.429.859m-9.13-6.065c1.416 1.057 5.336 2.995 2.018.403 1.118-1.3-2.142-1.992-1.06-2.861-2.751-1.684-2.17-1.534-.243-1.48-3.306-1.479.477-1.368.3-2.125-1.276-.252-6.332-2.248-3.357.163-3.024-1.541-.721.575-1.635.35-3.093-.842 2.754 2.357-.492 1.562 1.775 1.407 4.776 3.602.75 1.488-.53.764 2.881 1.92 3.718 2.5m4.835 2.778c-2.883-2.314 5.88 1.895 0 0M56.207 86.75c-.803.995.076-1.166 0 0m2.544 1.071c1.357-1.314.056 2.094 2.248-.322.024-1.729-.068-2.75-2.52-.65-.675.375-.978 1.969.272.972M18.368 62.46c-2.92-1.63-.417-1.637 0 0m2.717 1.78c-3.6-1.514-1.01-1.673 0 0m15.454 9.32c1.509 1.34 6.93.984 1.833.166-.755-1.117-4.794-.848-1.833-.166m21.245 13.12c-2.25.87 2.323-1.948 0 0m4.83 3.32c-1 .273.015-.626 0 0m.008-.876c-2.492.16 2.571-2.725 0 0M11.687 56.865c-2.192-3.128-1.363-4.533-3.477-7.087-.4-1.952-3.626-6.384-1.668-1.69 1.793 2.747 2.325 6.998 5.145 8.777m50.129 31.393c-1.942-1.332 4.731-3.058 0 0m3.611 1.415c-1.498-.426 2.37-2.035 0 0M17.563 59.002c-1.751-.129.678-1.009 0 0m47.11 29.704c2.294-1.478-.528-1.252-.416.136zM33.54 69.083c-1.211.085-.078-.999 0 0m1.924 1.107c-.94.194-.611-1.236 0 0m32.89 19.516c2.94-2.12-1.781-.406-.617.402zm-1.125-.544c-2.528.89 2.394-2.006 0 0m5.75 3.83c-1.953-.35 1.608-1.077 0 0M19.037 58.274c2.155.482 8.61 5.306 4.802.333-1.951-.577-.781-5.346-2.77-4.502 1.335 2.231 1.098 3.18-1.706 1.774-3.524-1.72-1.98.853-1.292 1.562-.938.213 1.242.815.965.833M9.22 50.52c.386-1.595-3.552-8.778-1.86-3.599.611 1.085.55 3.141 1.86 3.6M27.238 61.63c-1.11-.928-.052-.131 0 0m2.732.636c-3.02-.687-.001-1.69 0 0m23.678 14.926c-1.785-.027-.452-1.155 0 0m1.137.83c-.656.126-.168-.646 0 0m9.385 5.912c-1.127-.085.903-.667 0 0m-50.047-32.16c-2.765-.713 2.582-1 0 0m37.44 23.587c-1.645.415-.028-1.672 0 0m-38.46-25.964c-1.534-.37 1.659-.56 0 0m4.814 2.331c-.509.208-.03-.55 0 0m58.71 36.003c2.133-.432 6.993 1.086 7.778-.565-2.59-.063-8.96-1.828-9.261.42l.567.09zm-57.18-35.617c-1.32-.063.037-1.694 0 0M6.79 43.334c-2.187-.488-.575-3.227 0 0m3.018.76c-2.763-.933.037-1.037 0 0m1.724.847c-.498-.405-.39.51 0 0m10.853 6.96c-1.21-.347.51-.468 0 0m-12-8.871c-3.496-.366-.292-2.438 0 0m-6.188-4.015c-.603.424-.088-1.124 0 0m.92-.695c-.79.17-.15-1.334 0 0m5.085 3.036c2.15-.845-3.916-1.748-.44-.16zM78.26 83.394c-1.75-.39 1.376-1.262 0 0m8.221 4.261c-1.388.215.552-1.631 0 0M10.724 38.69c-1.705.314.226-1.578 0 0m-7.236-4.847c-.389-2.229-.335-6.14 3.382-4.817-4.962.985 3.434 6.167 2.374 2.075 2.087.102 4.082-1.233 2.987.794 4.111-.454 6.961-4.02 10.932-3.52 3.094-.41 6.476-.72 9.809-1.965 2.741-.197 5.38-3.148 3.877-4.897-3.738-.316-7.65.152-11.78.973-4.578.951-8.737 2.76-13.355 3.535-4.502.605.905 1.666-.384 1.903-2.35.815 2.801 1.365-.305 2.224-1.919-.364-3.915-1.023-3.096-3.045-4.312.56-8.102 2.349-4.695 6.737zM13.88 28.55c1.01-3.725 5.416 3.065 1.657.494-.45-.336-1.188-.61-1.657-.494m.196-1.807c.776.61 1.46-1.087 0 0m1.853.03c.132-1.714 4.243.907.678.617zm2.535-1.02c.266.963.926-1.08 0 0m.649-.434c1.54-1.852 8.728-1.182 3.467-.18-1.41-1.062-2.49.626-3.467.18m9.38-1.446c-.235-5.058 4.659 1.798 0 0m2.66-.014c.974-2.55 3.776-1.023.45-.512.073.271-.097 1.316-.45.512M9.674 37.382c-3.086-1.545 2.908-1.78 0 0m2.15.597c-2.215-.44 1.02-1.084 0 0M5.49 33.483c-1.966-.485 1.66-1.276 0 0m85.846 53.705c-1.27.668.048-1.48 0 0m-8.724-5.953c-1.12.15.248-1.704 0 0m11.122 6.528c2.323.007 7.038-.722 1.984-.72-.793.124-4.621.098-1.984.72m-80.02-50.829c1.88-.129 2.942-2.073-.363-1.962-5.121-.53 4.518 1.754-.657 1.1-.696.461.98.99 1.02.862m1.656.838c-.58.641-.196-1.207 0 0m1.964-5.237c-1.129-.27.816-1.011 0 0m-6.252-10.45c3.355-1.14 7.943-2.423 9.526.563-1.611-1.94-.65-3.85.873-1.014 2.153 2.87 3.23-1.305 1.83-2.268 1.596 1.983 3.411 2.92 1.069.126 2.545-3.062-5.097.4-6.834.366-.836.374-8.628 1.987-6.464 2.228m1.967-3.765c1.913-1.444 6.616.86 3.598-1.435-.295-.26-6.61 1.74-3.598 1.435m6.975.288c2.239.058-.966-3.008 1.702-1.619-.438-1.431-3.107-1.7-4.411-2.271-.738 1.308 1.502 3.908 2.709 3.89m-5.753-6.33c-1.357.532.775-1.05 0 0m2.851.682c3.609-.479-.92-1.554-.727-.039zM11.8 8.794c-2.541-3.316 4.778.557 2.196-2.915-2.172-1.73-4.26 1.947-2.197 2.915m32.606 17.563c1.165-2.066-4.811-2.785-.785-.733.37.125.287.875.785.733"/></svg>
      </div>

            <div class="stack-icon" title="django">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#2BA977" d="M46.206 0h16.342v74.898c-8.37 1.583-14.533 2.206-21.2 2.206C21.39 77.084 11 68.167 11 51.042c0-16.5 11.02-27.209 28.098-27.209 2.65 0 4.669.209 7.108.834zm.573 38.164c-1.914-.625-3.491-.833-5.51-.833-8.265 0-13.04 5.041-13.04 13.877 0 8.602 4.565 13.352 12.935 13.352 1.808 0 3.28-.102 5.615-.415z"/><path fill="#2BA977" d="M89.27 25.844v37.5c0 12.915-.967 19.125-3.806 24.48-2.65 5.147-6.141 8.393-13.355 11.979l-15.163-7.146c7.213-3.352 10.704-6.315 12.934-10.835 2.334-4.623 3.07-9.978 3.07-24.061V25.844zM71.304 0h16.342v16.604H71.303z"/></svg>
      </div>

            <div class="stack-icon" title="mongodb">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#599636" d="m50.146.273 2.668 5.012c.6.925 1.25 1.744 2.016 2.506a70 70 0 0 1 6.262 7.08c4.521 5.938 7.57 12.531 9.749 19.662 1.306 4.356 2.015 8.824 2.069 13.343.218 13.508-4.413 25.107-13.75 34.747a40 40 0 0 1-4.905 4.194c-.925 0-1.363-.71-1.744-1.363a11.2 11.2 0 0 1-1.362-3.921c-.328-1.635-.544-3.269-.438-4.956v-.763c-.075-.162-.89-75.157-.566-75.541"/><path fill="#6CAC48" d="M50.146.108c-.11-.22-.22-.054-.329.053.053 1.093-.328 2.068-.925 3-.656.924-1.524 1.634-2.396 2.396-4.844 4.194-8.656 9.259-11.709 14.924-4.062 7.624-6.156 15.796-6.75 24.398-.271 3.103.982 14.052 1.96 17.211 2.669 8.387 7.462 15.415 13.67 21.515 1.526 1.468 3.157 2.83 4.844 4.14.49 0 .544-.438.656-.763a15 15 0 0 0 .491-2.124l1.094-8.169z"/><path fill="#C2BFBF" d="M52.814 90.135c.11-1.25.71-2.287 1.362-3.321-.656-.272-1.143-.813-1.524-1.416-.33-.57-.601-1.173-.813-1.797-.762-2.287-.925-4.687-1.143-7.024V75.16c-.272.22-.329 2.069-.329 2.344a54 54 0 0 1-.98 7.353c-.163.98-.273 1.959-.876 2.83 0 .11 0 .22.053.382.981 2.887 1.25 5.827 1.416 8.824v1.094c0 1.306-.053 1.03 1.031 1.468.438.163.925.22 1.362.544.329 0 .382-.272.382-.49l-.163-1.797V92.7c-.053-.875.11-1.744.219-2.563z"/></svg>
      </div>

            <div class="stack-icon" title="firebase">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#FFA000" d="m61.405 36.118-10 9.311-9.284-18.733 4.796-10.77c1.212-2.15 3.194-2.177 4.407 0z"/><path fill="#F57F17" d="M51.409 45.425 14 80.22l28.126-53.523z"/><path fill="#FFCA28" d="M72.371 21.877c1.792-1.707 3.636-1.131 4.103 1.293l9.725 56.58-32.257 19.364c-1.13.633-4.13.88-4.13.88s-2.729-.332-3.774-.908L14 80.219z"/><path fill="#FFA000" d="M42.126 26.697 14 80.219 26.535 1.99c.47-2.425 1.844-2.672 3.084-.524z"/></svg>
      </div>

            <div class="stack-icon" title="sql">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#00546B" d="M92.11 77.066c-5.44-.137-9.657.415-13.194 1.934-1.02.413-2.653.414-2.789 1.726.544.552.612 1.45 1.089 2.209.817 1.38 2.244 3.245 3.536 4.212 1.428 1.104 2.857 2.208 4.353 3.175 2.652 1.657 5.645 2.623 8.23 4.28 1.497.966 2.992 2.21 4.488 3.245.749.552 1.224 1.45 2.177 1.795v-.207c-.477-.622-.613-1.519-1.088-2.21-.68-.69-1.36-1.311-2.04-2.002-1.973-2.692-4.421-5.04-7.074-6.972-2.176-1.52-6.938-3.59-7.821-6.145 0 0-.069-.068-.136-.137 1.496-.138 3.264-.69 4.693-1.105 2.312-.622 4.42-.484 6.8-1.105 1.089-.276 2.177-.621 3.265-.967v-.62c-1.224-1.243-2.108-2.9-3.4-4.074-3.469-3.038-7.278-6.007-11.222-8.492-2.11-1.38-4.83-2.278-7.074-3.452-.816-.414-2.176-.621-2.652-1.312-1.225-1.518-1.905-3.52-2.789-5.315-1.972-3.798-3.877-8.009-5.577-12.013-1.224-2.692-1.972-5.385-3.469-7.87-7.005-11.737-14.622-18.848-26.32-25.82-2.517-1.45-5.51-2.072-8.706-2.83-1.7-.07-3.4-.208-5.1-.278-1.09-.483-2.178-1.794-3.13-2.416C13.284 1.815 3.286-3.57.43 3.541c-1.837 4.487 2.72 8.906 4.284 11.184 1.157 1.588 2.652 3.383 3.469 5.178.476 1.173.611 2.417 1.088 3.66 1.088 3.036 2.108 6.42 3.537 9.25.748 1.45 1.564 2.969 2.516 4.28.544.76 1.496 1.105 1.7 2.348-.951 1.38-1.02 3.452-1.564 5.178-2.449 7.801-1.496 17.466 1.972 23.196 1.088 1.726 3.673 5.524 7.142 4.074 3.06-1.243 2.38-5.178 3.264-8.63.205-.83.069-1.38.476-1.933v.138c.953 1.933 1.904 3.797 2.789 5.73 2.108 3.383 5.78 6.904 8.841 9.252 1.633 1.242 2.925 3.382 4.966 4.142v-.208h-.137c-.408-.621-1.02-.897-1.564-1.38-1.224-1.243-2.585-2.762-3.536-4.143-2.857-3.866-5.374-8.146-7.618-12.565-1.088-2.14-2.04-4.487-2.924-6.627-.409-.83-.409-2.072-1.089-2.485-1.02 1.518-2.516 2.83-3.264 4.694-1.292 2.968-1.428 6.627-1.904 10.424-.273.07-.137 0-.273.14-2.176-.554-2.924-2.832-3.74-4.765-2.041-4.901-2.381-12.772-.613-18.433.477-1.45 2.517-6.006 1.701-7.387-.408-1.312-1.769-2.071-2.517-3.107-.884-1.312-1.836-2.968-2.448-4.418-1.633-3.866-2.449-8.147-4.217-12.013-.816-1.795-2.244-3.659-3.4-5.316-1.293-1.864-2.721-3.176-3.741-5.385-.34-.759-.817-2.002-.272-2.83.136-.553.407-.76.952-.898.884-.76 3.4.207 4.284.621 2.517 1.035 4.625 2.003 6.734 3.452.952.69 1.972 2.003 3.196 2.348h1.429c2.176.483 4.624.138 6.665.759 3.605 1.173 6.87 2.9 9.794 4.764 8.91 5.73 16.255 13.876 21.22 23.61.816 1.588 1.156 3.039 1.904 4.695 1.429 3.383 3.197 6.835 4.625 10.149 1.428 3.244 2.788 6.559 4.829 9.251 1.02 1.45 5.1 2.21 6.937 2.969 1.36.62 3.47 1.174 4.693 1.933 2.312 1.449 4.625 3.107 6.801 4.694 1.089.829 4.489 2.555 4.693 3.935"/><path fill="#00546B" d="M22.737 17.072c-1.156 0-1.972.139-2.788.345v.138h.136c.544 1.105 1.496 1.865 2.176 2.831.544 1.104 1.02 2.21 1.565 3.314.067-.07.135-.138.135-.138.953-.69 1.429-1.795 1.429-3.452-.409-.483-.477-.966-.817-1.45-.407-.69-1.292-1.035-1.836-1.588"/></svg>
      </div>

            <div class="stack-icon" title="aws">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#252F3E" d="M28.181 41.718c0 1.23.133 2.228.366 2.96.266.732.599 1.53 1.064 2.395.167.266.233.532.233.765 0 .332-.2.665-.632.998l-2.095 1.396c-.3.2-.599.3-.865.3-.332 0-.665-.166-.997-.466a10.3 10.3 0 0 1-1.198-1.563 26 26 0 0 1-1.03-1.962q-3.893 4.59-9.779 4.59c-2.794 0-5.022-.799-6.652-2.395S4.135 45.01 4.135 42.35c0-2.827.998-5.122 3.027-6.851s4.722-2.595 8.148-2.595c1.13 0 2.295.1 3.525.267 1.231.166 2.495.432 3.825.731v-2.428c0-2.527-.532-4.29-1.563-5.321-1.064-1.031-2.86-1.53-5.421-1.53-1.164 0-2.361.133-3.592.432-1.23.3-2.428.666-3.592 1.131a10 10 0 0 1-1.164.433c-.233.066-.4.1-.532.1-.466 0-.699-.333-.699-1.032v-1.63c0-.531.067-.93.233-1.163s.466-.466.931-.699q1.746-.898 4.191-1.497c1.63-.432 3.36-.631 5.188-.631 3.958 0 6.852.898 8.714 2.694 1.83 1.796 2.76 4.523 2.76 8.181v10.776zm-13.503 5.055c1.098 0 2.229-.2 3.426-.598 1.197-.4 2.261-1.131 3.16-2.129.532-.632.93-1.33 1.13-2.128s.333-1.763.333-2.894v-1.397a28 28 0 0 0-3.06-.565 25 25 0 0 0-3.126-.2c-2.229 0-3.858.433-4.956 1.33-1.098.899-1.63 2.163-1.63 3.825 0 1.564.4 2.728 1.23 3.526.8.831 1.963 1.23 3.493 1.23m26.707 3.592c-.599 0-.998-.1-1.264-.332-.266-.2-.499-.665-.698-1.297l-7.816-25.71c-.2-.665-.3-1.097-.3-1.33 0-.532.267-.831.799-.831h3.26c.631 0 1.063.1 1.296.332.266.2.466.666.666 1.297l5.587 22.018 5.188-22.018c.167-.665.366-1.097.632-1.297s.732-.332 1.33-.332h2.661c.632 0 1.065.1 1.33.332.267.2.5.666.633 1.297l5.255 22.284 5.753-22.284c.2-.665.433-1.097.665-1.297.267-.2.699-.332 1.298-.332h3.093c.532 0 .831.266.831.831 0 .166-.033.333-.066.532-.034.2-.1.466-.233.832L63.27 48.769q-.3.998-.699 1.297c-.266.2-.698.333-1.264.333h-2.86c-.632 0-1.064-.1-1.33-.333-.267-.233-.5-.665-.632-1.33L51.33 27.284l-5.122 21.419c-.167.665-.366 1.097-.632 1.33s-.732.332-1.33.332zm42.738.898c-1.73 0-3.46-.2-5.122-.598-1.663-.4-2.96-.832-3.825-1.33-.532-.3-.898-.633-1.03-.932-.134-.3-.2-.632-.2-.931v-1.696c0-.699.266-1.031.765-1.031q.3 0 .598.1c.2.066.5.199.832.332a18 18 0 0 0 3.658 1.164c1.33.266 2.628.4 3.958.4 2.095 0 3.725-.367 4.856-1.098s1.73-1.796 1.73-3.16c0-.931-.3-1.696-.899-2.328-.598-.632-1.73-1.197-3.359-1.73l-4.822-1.496c-2.428-.765-4.224-1.896-5.322-3.393-1.097-1.463-1.663-3.093-1.663-4.822q0-2.096.898-3.692a8.55 8.55 0 0 1 2.395-2.727c.998-.765 2.128-1.33 3.459-1.73S83.757 20 85.22 20c.732 0 1.497.033 2.229.133.765.1 1.463.233 2.162.366.665.166 1.297.332 1.895.532q.899.3 1.397.599c.466.266.798.532.998.831q.3.399.3 1.098v1.563c0 .698-.267 1.064-.766 1.064-.266 0-.698-.133-1.264-.399q-2.843-1.297-6.385-1.297c-1.896 0-3.393.3-4.424.931-1.03.632-1.563 1.597-1.563 2.96 0 .931.333 1.73.998 2.362s1.896 1.264 3.658 1.829l4.723 1.497c2.395.764 4.124 1.829 5.155 3.192s1.53 2.927 1.53 4.657c0 1.43-.3 2.727-.864 3.858-.6 1.13-1.397 2.128-2.428 2.926-1.031.832-2.262 1.43-3.692 1.863-1.497.466-3.06.698-4.756.698"/><path fill="#F90" fill-rule="evenodd" d="M90.409 67.427C79.466 75.51 63.569 79.8 49.899 79.8c-19.157 0-36.418-7.085-49.456-18.858-1.03-.932-.1-2.195 1.131-1.464 14.102 8.182 31.496 13.138 49.49 13.138 12.139 0 25.476-2.528 37.748-7.716 1.83-.832 3.393 1.197 1.597 2.527" clip-rule="evenodd"/><path fill="#F90" fill-rule="evenodd" d="M94.965 62.239c-1.397-1.796-9.246-.865-12.804-.433-1.064.134-1.23-.798-.266-1.496 6.252-4.39 16.53-3.127 17.727-1.663 1.197 1.497-.333 11.774-6.187 16.696-.898.765-1.762.366-1.363-.632 1.33-3.293 4.29-10.71 2.893-12.472" clip-rule="evenodd"/></svg>
      </div>
      
    </div>
  `;
  break;


    case 'My Work':
      body.innerHTML = `
        <h2>📁 Projects</h2>
        <ul class="project-list">
          <li><a href="https://github.com/archi243/desktop-portfolio.git" target="_blank">🌐 Portfolio Website</a></li>
          <li><a href="https://github.com/archi243/Portfolio2.git" target="_blank">📲 Resume Portfolio</a></li>
          <li><a href="hhttps://github.com/archi243/Day-Night-Animation.git" target="_blank">🎮 Css Animation</a></li>
        </ul>
      `;
      break;

    case 'Contact Me':
      body.innerHTML = `
        <h2>📨 Send a Message</h2>
        <form class="contact-form" action="https://formspree.io/f/xblyakll" method="POST" target="_blank">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message..." rows="4" required></textarea>
          <button type="submit">Send ✉️</button>
        </form>
      `;
      break;

    case 'Settings':
      body.innerHTML = `
        <h2>🛠️ Settings</h2>
        <label for="theme-select">🎨 Choose Theme:</label>
        <select id="theme-select">
          <option value="light">🌞 Light</option>
          <option value="dark">🌙 Dark</option>
          <option value="neon">🌈 Neon Retro</option>
        </select>
      `;
      setTimeout(() => {
        const themeSelect = body.querySelector('#theme-select');
        const savedTheme = localStorage.getItem('theme') || 'light';
        themeSelect.value = savedTheme;
        themeSelect.onchange = () => {
          const theme = themeSelect.value;
          applyTheme(theme);
          localStorage.setItem('theme', theme);
        };
      }, 0);
      break;

    case 'Chat Terminal':
      body.innerHTML = `
        <h2>💬 Chat Assistant</h2>
        <div class="chat-terminal">
          <div class="chat-log" id="chat-log"></div>
          <input type="text" class="chat-input" id="chat-input" placeholder="Ask me something..." />
        </div>
      `;
      setTimeout(() => {
        const input = body.querySelector('#chat-input');
        const log = body.querySelector('#chat-log');
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            const msg = input.value.trim();
            if (!msg) return;
            log.innerHTML += `<div class="user-msg">> ${msg}</div>`;
            input.value = '';
            let reply = "I'm not sure I understand.";
            if (msg.includes('hello') || msg.includes('hi')) reply = "Hi there! How can I assist you?";
            else if (msg.includes('your name')) reply = "I'm your personal OS Assistant.";
            else if (msg.includes('projects')) reply = "Check out 'My Work' folder to see my projects!";
            else if (msg.includes('theme')) reply = "Try exploring the 'Settings' to change themes.";
            else if (msg.includes('who made you')) reply = "I was built by Archi Goyal 💻";
            setTimeout(() => {
              log.innerHTML += `<div class="bot-msg">${reply}</div>`;
              log.scrollTop = log.scrollHeight;
            }, 500);
          }
        });
      }, 0);
      break;

    default:
      body.innerHTML = `<p>You opened the <strong>${name}</strong> folder!</p>`;
  }

  document.getElementById('main-screen').appendChild(newWindow);

  let prevStyles = {};
  closeBtn.onclick = () => newWindow.remove();

  maximizeBtn.onclick = () => {
    if (!newWindow.classList.contains('maximized')) {
      prevStyles = {
        left: newWindow.style.left,
        top: newWindow.style.top,
        width: newWindow.style.width,
        height: newWindow.style.height
      };
      newWindow.classList.add('maximized');
    } else {
      newWindow.classList.remove('maximized');
      Object.assign(newWindow.style, prevStyles);
    }
  };

  minimizeBtn.onclick = () => {
    if (newWindow.classList.contains('maximized')) {
      newWindow.classList.remove('maximized');
      Object.assign(newWindow.style, prevStyles);
    }
    newWindow.classList.toggle('minimized');
  };

  let isDragging = false, offsetX = 0, offsetY = 0, currentX = 0, currentY = 0;
  let animationFrame;

  function updatePosition() {
    if (isDragging && !newWindow.classList.contains('maximized')) {
      newWindow.style.left = `${currentX - offsetX}px`;
      newWindow.style.top = `${currentY - offsetY}px`;
      animationFrame = requestAnimationFrame(updatePosition);
    }
  }

  header.addEventListener('mousedown', (e) => {
    if (newWindow.classList.contains('maximized')) return;
    isDragging = true;
    offsetX = e.clientX - newWindow.offsetLeft;
    offsetY = e.clientY - newWindow.offsetTop;
    newWindow.style.zIndex = windowCount + 100;
    animationFrame = requestAnimationFrame(updatePosition);
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      currentX = e.clientX;
      currentY = e.clientY;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    cancelAnimationFrame(animationFrame);
  });
}

function applyTheme(theme) {
  const root = document.documentElement;
  switch (theme) {
    case 'dark':
      root.style.setProperty('--bg-color', '#1a1a1a');
      root.style.setProperty('--text-color', '#eee');
      root.style.setProperty('--accent-color', '#333');
      root.style.setProperty('--border-color', '#444');
      root.style.setProperty('--titlebar-color', '#333');
      root.style.setProperty('--titlebar-text', '#0ff');
      break;
    case 'neon':
      root.style.setProperty('--bg-color', '#0f001a');
      root.style.setProperty('--text-color', '#ff00ff');
      root.style.setProperty('--accent-color', '#ff00ff');
      root.style.setProperty('--border-color', '#00ffff');
      root.style.setProperty('--titlebar-color', '#1a0033');
      root.style.setProperty('--titlebar-text', '#00ffff');
      break;
    default:
      root.style.setProperty('--bg-color', 'white');
      root.style.setProperty('--text-color', 'black');
      root.style.setProperty('--accent-color', '#fcd6e0');
      root.style.setProperty('--border-color', 'pink');
      root.style.setProperty('--titlebar-color', '#ffccdd');
      root.style.setProperty('--titlebar-text', '#d40069');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const startMenu = document.getElementById('start-menu');
  if (startBtn && startMenu) {
    startBtn.addEventListener('mouseenter', () => startMenu.classList.remove('hidden'));
    startBtn.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!startMenu.matches(':hover')) startMenu.classList.add('hidden');
      }, 200);
    });
    startMenu.addEventListener('mouseenter', () => startMenu.classList.remove('hidden'));
    startMenu.addEventListener('mouseleave', () => startMenu.classList.add('hidden'));
    startBtn.addEventListener('click', () => startMenu.classList.toggle('hidden'));
    document.addEventListener('click', (e) => {
      if (!startBtn.contains(e.target) && !startMenu.contains(e.target)) {
        startMenu.classList.add('hidden');
      }
    });
  }

  applyTheme(localStorage.getItem('theme') || 'light');
});
