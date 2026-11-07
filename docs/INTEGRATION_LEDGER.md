# GHX Source Integration Ledger

## Runtime foundation
- GoatBot Pro V1 supplied archive: retained as the primary runtime foundation.
- Startup, login, FCA adapter, message/event handler, database controllers, config, and original dashboard remain in their upstream paths.
- Original source notices and license files are preserved in `licenses/` and in retained source files.

## HinataBot integration
- HinataBot V3 unique command files copied into `scripts/cmds/`: 152.
- Filename collisions kept on the GoatBot Pro implementation: 99.
- Additional Hinata event handlers integrated: 1.
- Existing duplicate event names were not copied over the GoatBot Pro event implementation.
- HinataBot copyright and license notices are preserved in `licenses/`.

## Collision policy
GoatBot Pro wins exact/case-insensitive filename collisions because it is the selected runtime foundation. The skipped Hinata variants are listed in `docs/HINATA_COLLISIONS.txt` for manual review. This avoids accidental overwrites and case-sensitive deployment surprises.

## Security exclusions
- Original `account.txt`, Facebook appstate, `fb_dtsg_data.json`, package lockfiles, generated databases, logs and caches are not included.
- Sensitive config values have been blanked. Replace credentials only through your private deployment environment or local untracked files.
- Rotate credentials and invalidate sessions if the supplied archives were shared outside a trusted environment.

## Author credits
New GHX-specific documentation and integration metadata are credited to Helal. Upstream author credits remain intact. Do not remove original author headers or license notices.
