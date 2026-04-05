# Aura Vibes

Aura Vibes is a lightweight static web app with:
1. A **login page** with light/dark mode and social sign-up UI.
2. A **mood selection page** that opens a modal music player.
3. Mood-based embeds for **Spotify** and **YouTube**.

## Project Structure

| File | Purpose |
| --- | --- |
| `index.html` | Login page |
| `login.css` | Login page styling + dark theme |
| `login.js` | Theme toggle and login-button enable/disable logic |
| `home.html` | Mood selection page |
| `style.css` | Mood page styling and modal UI |
| `script.js` | Mood modal behavior and platform player embeds |
| `Images/` | Logos, backgrounds, and social icons |

## How to Run

This project is static (no build tools required).

1. Clone/download the repo.
2. Open `index.html` in your browser.
3. Enter any text in both login fields to enable the **Login** button.

## Current Behavior

### Login Page
- Uses relative asset paths so CSS/JS/images load correctly.
- Login button stays disabled until both fields contain text.
- Theme toggle switches between light and dark visual styles.

### Mood Page
- Click a mood card to open a modal.
- Choose Spotify or YouTube to load the corresponding embedded player.
- Click outside the modal or the close icon to dismiss it.

## Notes

- Authentication is UI-only (no backend validation yet).
- Social buttons are presentational in the current version.
