# GoatHinata X (GHX) 0.2.0

**GHX is a merged development build, not a claim that every legacy command has been individually verified.**

## Included in this package
- GoatBot Pro V1 retained as the primary runtime and Messenger login foundation.
- GoatBot Pro command and event set retained.
- 152 HinataBot command files added where their filenames do not collide with the GoatBot foundation.
- HinataBot's unique `autoinvite` event added.
- Existing GoatBot Pro dashboard and database implementation retained.
- Original license and copyright notices preserved.
- Credentials, Facebook appstate and generated session/database files excluded.

## Deploy (Railway / Node.js host)
1. Create a new Node.js service from this project.
2. Use Node.js 20.x.
3. Install dependencies with `npm install`.
4. Copy `account.txt.example` to `account.txt` locally and replace its contents with your own valid Facebook appstate JSON. Never commit or share this file.
5. Review `config.json` and `configCommands.json`. Add your own Facebook admin IDs to `adminBot`. Configure SQLite or your own MongoDB URI if desired.
6. Set the service start command to `npm start`.
7. Set the platform's `PORT` variable if required. The included root `index.js` exposes `/health`.
8. Check logs for successful login and listener startup. If Facebook rejects the session or changes its login flow, renew your own session and review the FCA adapter compatibility.

## Important
- This is an unofficial Facebook Messenger automation project using an FCA-compatible library. Facebook may change its systems and cause login or listener failures. No third-party project can guarantee perpetual compatibility or account safety.
- Do not use this for spam, unsolicited messaging, credential collection, or bypassing platform security.
- Some imported commands depend on external APIs, API keys, native packages, or third-party services. They may need per-command configuration and have not all been integration-tested.
- Filename collisions were resolved in favor of GoatBot Pro. Review `docs/HINATA_COLLISIONS.txt` before choosing to replace any upstream implementation.
- `npm install` and the syntax audit should be run in your deployment environment. Native modules such as `canvas` and `sqlite3` may require compatible build tooling.
- Keep your deployment private until you have completed the security and command review.

## Checks
- `npm run check`: syntax-checks JavaScript files.
- `npm run audit:commands`: generates `docs/COMMAND_CATALOG.json`.
- `npm start`: starts the original GoatBot Pro runtime entrypoint.

## Source attribution
See `docs/INTEGRATION_LEDGER.md` and `licenses/`. Preserve all upstream attribution and license files. GHX-authored integration metadata is credited to Helal.
