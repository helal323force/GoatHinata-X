# Railway Deployment

1. Upload/push this folder to a private GitHub repository.
2. Create a Railway project and deploy from that repository.
3. Ensure Node 20 is selected.
4. Set build command: `npm install`
5. Set start command: `npm start`
6. Add a persistent volume if you want SQLite, appstate, and generated data to survive redeploys. Mount it at the project path used by the service, or move these files to a dedicated persistent path and update configuration accordingly.
7. Add your own `account.txt` appstate privately after deployment or through a secure secret/file mechanism supported by your host. Do not commit it.
8. Review `config.json`, including `adminBot`, database and dashboard settings.
9. Verify `/health` and inspect the runtime logs.

**Do not expose the dashboard publicly without HTTPS, strong authentication and a review of the legacy dashboard's authentication/session configuration.**
