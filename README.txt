NIKKILA & KIRTHIK — COMPLETE FAMILY WEDDING INVITATION
English + Tamil, GitHub Pages package

RUN LOCALLY
This is a static HTML, CSS and JavaScript website. No npm install, build
step, backend or database is required.

Option 1 - Open directly
Open index.html in your web browser. Keep all the supplied files together
in this folder so the styles, images, music and calendar links can load.

Option 2 - Run a local web server (requires Python 3)
1. Open a terminal and run:

   cd /home/janesh/Downloads/family-invitation-github-pages
   python3 -m http.server 8000 --bind 127.0.0.1

   If you moved the folder, use its new location in the cd command.
2. Open http://127.0.0.1:8000/ in your browser.
3. After editing a file, save it and refresh the browser to see the change.
4. Press Ctrl+C in the terminal to stop the server.

If port 8000 is already in use, replace 8000 with 8001 in both the command
and the browser address. On Windows, use py -3 instead of python3.
An internet connection is needed to load the Google Fonts and open maps.
The music tries to start when the page opens. If your browser blocks it,
tap the page or press a key to start it. Use the music button to pause
and resume playback.

PUBLISH WITH GITHUB PAGES
1. Unzip this package on your computer.
2. Create a new GitHub repository, for example: family-wedding-invitation.
3. Open the unzipped folder.
4. In GitHub, choose Add file > Upload files.
5. Select every file INSIDE this folder at once: index.html, styles.css,
   script.js, the four .webp illustrations, wedding-melody.mp3,
   the two .ics calendar files, and the two original-invitation .jpg images.
   Do not upload the ZIP itself or its containing folder.
6. Commit to the main branch.
7. Under Settings > Pages, choose Deploy from a branch; main; / (root).
8. Your public address will be:
   https://kirthikroshan.github.io/family-wedding-invitation/
   (if that is the repository name you chose).

All paths are relative to index.html. You do NOT need an assets folder.
The language toggle, print button, map link, calendar downloads,
family-details list and original scanned invitation pages are all static.
The original Tamil wedding-inspired instrumental tries to play automatically
when the page opens. If the browser blocks autoplay with sound, it retries
on a guest's first tap or key press. The music button pauses and resumes
playback; music stays paused until the guest presses play again.

TO USE YOUR OWN WEDDING MUSIC
1. Export your song as an MP3 and rename it wedding-melody.mp3.
2. Replace the existing file of the same name in the repository root.
3. Commit the replacement. There is no need to edit index.html.
   Alternatively, if you prefer a different MP3 filename, change the
   src="wedding-melody.mp3" attribute in index.html to match it exactly.
4. Music tries to start automatically. Some browsers require a tap or key
   press first. Guests can pause and resume using the music button.
   Very large MP3s can load slowly on phones.

The published invitation includes relatives' names and three family phone
numbers from the printed card. GitHub Pages is public, so confirm that your
families are comfortable showing this information before sharing the link.

Important: Confirm every name, qualification and event detail with the
original printed invitation before distributing to guests.
