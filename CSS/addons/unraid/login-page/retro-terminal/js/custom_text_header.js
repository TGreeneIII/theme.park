
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre> _______   ____ ________  __  _________
 /_  __/ | / / //_/ ____/  /  |/  / ____/
  / / /  |/ / ,&lt; / / __   / /|_/ / __/   
 / / / /|  / /| / /_/ / /  /  / / /___   
/_/ /_/ |_/_/ |_\____(_)_/  /_/_____/   
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header