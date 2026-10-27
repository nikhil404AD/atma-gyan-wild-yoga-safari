<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All business content (contact, packages, articles, images) lives in `src/data/*`; components read from there so content stays editable in one place.
- Research/verification notes render only when `import.meta.env.DEV` (via `DevNote` and `/research`) so unverified claims never reach production.
- Booking inquiries are composed client-side and sent via WhatsApp/email links; no backend stores them yet.
