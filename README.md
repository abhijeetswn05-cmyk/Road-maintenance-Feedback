# RoadCare Portal (static version)
Citizens report road issues; an admin reviews and deletes reports.

## Run with Live Server
1. Open this folder in VS Code.
2. Right-click `index.html` -> "Open with Live Server".
(Any static server also works, e.g. `python -m http.server`.)

## Pages (all linked from the top menu)
- index.html     citizen report form
- login.html     admin login (admin / password123, see js/app.js)
- forgot.html    password hint via security question
- dashboard.html admin table with delete (login required)

Reports are stored in your browser (localStorage). Tailwind loads from a CDN, so internet is needed for styling.
