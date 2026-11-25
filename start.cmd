@echo off
cd /d "%~dp0"
echo Starting Advanced Medical Microbiology study site...
echo Open http://localhost:8017 in your browser. Close this window to stop the server.
start "" http://localhost:8017
python -m http.server 8017
