<template>
    <div>
        <div class="links">
        <ul class="links__list" style="--item-total:8">
          <li class="links__item" style="--item-count:1">
            <a class="links__link" href="https://www.datalogics.com/redact-information-in-pdf/">
                <img class="links__icon" src="https://img.icons8.com/ios-filled/FFFFFF/cyber-security.png"> 
              <span class="links__text">Security</span>
            </a>
          </li>
          <li class="links__item" style="--item-count:2">
            <a class="links__link" href="https://www.datalogics.com/compress-pdf-file-size">
                <img class="links__icon" src="https://img.icons8.com/ios-filled/FFFFFF/module.png"> 
              <span class="links__text">Optimization</span></a>
          </li>
          <li class="links__item" style="--item-count:3">
            <a class="links__link" href="https://www.datalogics.com/merge-multiple-pdfs-into-one-pdf/">
              <img class="links__icon" src="https://img.icons8.com/ios-filled/FFFFFF/content.png">
              <span class="links__text">Content <br> Modification</span></a>
          </li>
          <li class="links__item" style="--item-count:4">
            <a class="links__link" href="https://www.datalogics.com/convert-pdf-to-pdfa-for-archiving/">
              <img class="links__icon" src="https://img.icons8.com/ios-filled/FFFFFF/edit-property.png">
              <span class="links__text">Document Conversion</span></a>
          </li>
          <li class="links__item" style="--item-count:5">
            <a class="links__link" href="https://www.datalogics.com/extract-images-from-pdfs/">
              <img class="links__icon" src="https://img.icons8.com/ios-filled/512/FFFFFF/photo-editor.png">
              <span class="links__text">Image <br> Extraction</span></a>
          </li>

          <li class="links__item" style="--item-count:6">
            <a class="links__link" href="https://www.datalogics.com/flatten-pdf-forms/">
              <img class="links__icon" src="https://img.icons8.com/ios-filled/FFFFFF/test-passed.png">
              <span class="links__text">Forms <br> Management</span></a>
          </li>

          <li class="links__item" style="--item-count:7">
            <a class="links__link" href="https://www.datalogics.com/search-text-in-pdf/">
              <img class="links__icon" src="https://img.icons8.com/ios-filled/FFFFFF/fine-print.png">
              <span class="links__text">Text <br> Search</span></a>
          </li>

          <li class="links__item" style="--item-count:8">
            <a class="links__link" href="https://www.datalogics.com/extract-text-from-pdf/">
              <img class="links__icon" src="https://img.icons8.com/ios-filled/512/FFFFFF/paste-as-text.png">
              <span class="links__text">Text <br> Extraction</span></a>
          </li>
        </ul>
      </div>
    </div>
</template>


<style>
        :root {
  --base-grid: 8px;
  --colour-white: #fff;
  --colour-dlblue: #0C70F2;
  --orange-gradient:radial-gradient(circle, rgba(242,57,36,1) 0%, rgba(242,162,12,1) 35%, rgba(242,212,36,1) 100%);
}

*, :after, :before {
    box-sizing: border-box;
}

html {
  margin: 0;
  padding: 0;
  background-position: 100%;
}

body {
  font-family: Josefin Sans, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #051026;
}

.links {
  --link-size: calc(var(--base-grid)*16);
  color: var(--colour-dlblue);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.links__list {
  position: relative;
  list-style: none;
}

.links__item {
  width: var(--link-size);
  height: var(--link-size);
  position: absolute;
  top: 0;
  left: 0;
  margin-top: calc(var(--link-size)/-8);
  margin-left: calc(var(--link-size)/-8);
  --angle: calc(360deg/var(--item-total));
  --rotation: calc(140deg + var(--angle)*var(--item-count));
  transform: rotate(var(--rotation)) translate(calc(var(--link-size) + var(--base-grid)*18)) rotate(calc(var(--rotation)*-1));
}

.links__link {
  opacity: 0;
  transition: a;
  animation: on-load .3s ease-in-out forwards;
  animation-delay: calc(var(--item-count)*150ms);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}


.links__icon {
  width: calc(var(--base-grid)*6);
  height: calc(var(--base-grid)*6);
  transition: all .3s ease-in-out;
  fill: var(--colour-white);
}

.links__text {
  position: absolute;
  width: 100%;
  left: 0;
  text-align: center;
  height: calc(var(--base-grid)*3.5);
  font-size: calc(var(--base-grid)*1.5);
  font-weight: 700;
  display: none;
  bottom: calc(var(--base-grid)*5.5);
  animation: text .3s ease-in-out forwards;
  color: var(--colour-white);
}

.links__link:after {
  content: "";
  background-color: transparent;
  width: var(--link-size);
  height: var(--link-size);
  border: 2px solid var(--colour-dlblue);
  display: block;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
}

.links__link:hover .links__icon {
  transition: all .3s ease-in-out;
  transform: translateY(calc(var(--base-grid)*-1));
}

.links__link:hover .links__text {
  display: block;
}

.links__link:hover:after {
  transition: all .3s cubic-bezier(.37,.74,.15,1.65);
  transform: scale(1.5);
  opacity: 1;
}

@keyframes on-load {
  0% {
    opacity: 0;
    transform: scale(.3);
    transform : rotate(45deg) ;
  }
  70% {
    opacity: .7;
    transform: scale(1.1);
    transform : rotate(45deg) translate(125px);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    transform : rotate(45deg) translate(125px) rotate(-45deg);
  }
}

@keyframes spinner {
  0% {
    transform : rotate(45deg) ;
  }

  100% {
    transform : rotate(45deg) translate(125px) rotate(-45deg);
  }
}

@keyframes spin-right {
  
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spinner-right {
  0% {
      opacity: 1;
      transform: rotate(0deg)translate(-160px)rotate(0deg);
  }
  100%{
    opacity: 1;
    transform: rotate(360deg)translate(-165px)rotate(-360deg);
  }
}


@keyframes text {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(calc(var(--base-grid)*5));
  }
}

</style>