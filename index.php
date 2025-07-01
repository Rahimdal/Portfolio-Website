<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Web Developer Portfolio</title>
   
 <link rel="stylesheet" href="home-page/css/style.css" />
</head>
<body>

  <?php include 'navbar.php';?>


  <div class="cursor-dot" id="cursorDot"></div>
  <div class="cursor-arrow" id="cursorArrow">→</div>



 <!-- Loader Line -->
  <div class="loader-line"></div>
  <!-- Loader Text -->
  <div class="loader-text">Loading 0%</div>

  <!-- Hero Section -->
  <div class="hero">
    <video id="heroVideo" src="home-page/video/original-f3df7a2eb20cb3df3d87dcc89b5abc87.mp4" muted loop playsinline></video>
 
  </div>

  <!-- New Section -->
<section class="reveal-section">
    <h1 id="main-title"></h1>
  </section>

  <div></div>
  <section class="scroll-section">
    <div class="content">
      <div class="text">
        <h2>Frontend Developer</h2>
        <p font-size="1rem">I’m a passionate Frontend Developer who creates clean, responsive web experiences using HTML, CSS, JavaScript, React.js, and Vue.js. I bring designs to life with GSAP animations and build dynamic sites on WordPress and Shopify.</p>
      </div>
      <div class="image-wrapper">
        <img src="home-page/img/ChatGPT Image Jul 1, 2025, 12_37_39 PM-Picsart-AiImageEnhancer.png" alt="Demo Image" />
      </div>
    </div>
  </section>





<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js" integrity="sha512-NcZdtrT77bJr4STcmsGAESr06BYGE8woZdSdEgqnpyqac7sugNO+Tr4bGwGF3MsnEkGKhU2KL2xh6Ec+BqsaHA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js" integrity="sha512-P2IDYZfqSwjcSjX0BKeNhwRUH8zRPGlgcWl5n6gBLzdi4Y5/0O4zaXrtO4K9TZK6Hn1BenYpKowuCavNandERg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="home-page/js/script.js"></script>
<script src="home-page/js/text.js"></script>
</body>
</html>
