J.H. Pastry — Portfolio

How to publish (GitHub Pages):
1) Create a repository on GitHub (e.g., jh-pastry).
2) Upload all files from this folder into the repo root (home.html, index.html, about.html, /assets, favicon.png).
3) In the repo, go to Settings → Pages → Build and deployment:
   - Source: Deploy from a branch
   - Branch: main (root)
4) Your site will appear at https://<your-username>.github.io/jh-pastry/
   - Set home.html as the homepage by sharing the exact URL or by naming it index.html if desired.

Gallery — how to add photos (no code editing):
- Drop images into /assets/img/gallery/ and name them 01.jpg, 02.jpg, 03.jpg ... (or .png/.jpeg/.webp).
- Optional: add captions by placing a text file with the same number, e.g., 01.txt (plain text).
- To remove a photo, move it into /assets/img/archive/ or delete it.

Assets you can swap anytime (keep the same filenames):
- Entrance image: /assets/img/entrance/photo1.jpg
- About portrait: /assets/img/about/aboutphoto.jpg
- Logo: /assets/img/logo.png

Safety & privacy:
- No analytics or external scripts except the font CDN (Fontshare for Satoshi).
- You can remove the font import in assets/css/style.css if you prefer fully local assets.