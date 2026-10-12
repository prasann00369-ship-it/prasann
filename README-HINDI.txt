PRASANN ADMIN PANEL — सेटअप (Android phone पर)

1) Supabase खोलें > अपना project > SQL Editor > New query.
   "supabase.sql" फाइल का पूरा text paste करें > Run.
2) Authentication > Users > Add user: अपना email और password डालें (Auto confirm चुनें).
3) SQL Editor में नई query चलाएँ (अपना email डालकर):
   insert into admins(user_id) select id from auth.users where email='आपका_EMAIL';
4) Project Settings > API से "Project URL" और "anon public key" कॉपी करें,
   config.js खोलकर YOUR_SUPABASE_URL और YOUR_SUPABASE_ANON_KEY की जगह paste करें.
   (service_role key कभी यहाँ न डालें!)
5) GitHub में अपनी PRASANN वाली repository में ये 3 फाइलें upload करें:
   admin.html, config.js  (supabase.sql upload करना ज़रूरी नहीं).
   Existing फाइलें overwrite न करें.
6) Pages चालू होने पर खोलें: https://आपका-username.github.io/आपकी-repo/admin.html
