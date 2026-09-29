# Birthday Love Website ❤️

A romantic interactive birthday surprise website built with HTML, CSS and JavaScript.

## Pages

1. `index.html` — Secret entry
   - Password: `0812`
   - Hint: "No hint... only you know that date ❤️"

2. `memories.html` — Birthday memories
   - Replace the sample photo files in `images/`
   - Scroll animations
   - Birthday wish button

3. `wish.html` — Final surprise
   - Password: `1225`
   - Birthday celebration
   - Personal message
   - Video section
   - Final message

## Add Your Photos

Put your files here:

```text
images/photo1.jpg
images/photo2.jpg
images/photo3.jpg
images/photo4.jpg
images/photo5.jpg
images/photo6.jpg
```

You can add more cards inside `memories.html`.

## Add Your Video

Put your MP4 video here:

```text
video/birthday.mp4
```

## Change Passwords

Open:

```text
js/script.js
```

Change:

```javascript
const FIRST_PASSWORD = "0812";
const SECOND_PASSWORD = "1225";
```

## Run Locally

You can simply open `index.html` in a browser.

For the best experience, use VS Code with Live Server.

## Free Hosting — GitHub Pages

1. Create a GitHub repository.
2. Upload all files.
3. Push to GitHub.
4. Open **Settings → Pages**.
5. Select the branch containing the website.
6. Save.
7. Open the generated GitHub Pages URL.

## Important

This is a romantic surprise website, not a secure authentication system. The passwords are visible to anyone who inspects the JavaScript source.


## Optional Background Music 🎵

Create this folder/file:

```text
audio/birthday-music.mp3
```

After the second password is unlocked, the site will try to start the music. The Music button at the bottom-right can pause/play it.

Browsers may block automatic audio in some situations, so the button remains available.

## Cinematic Features

- Typewriter intro
- Floating hearts and sparkles
- Premium glass/cinematic cards
- Image hover zoom
- Scroll reveal animations
- Second-secret reveal
- Confetti celebration
- Floating heart burst
- Animated cake/balloons
- Background music control
- Responsive mobile design


## Personalize The Intro ❤️

Open `index.html` and change:

```html
<span id="herName">YOUR NAME</span>
```

to the name you want displayed.

## Personalize Memories

Each memory card now has:
- Photo
- Date
- Memory title
- Short memory caption

Replace `ADD DATE`, titles and descriptions directly in `memories.html`.

## Final Wish Typing Effect

The final birthday letter is typed automatically after the second password is unlocked.

Edit the text inside `typeWishLetter()` in:

```text
js/script.js
```
