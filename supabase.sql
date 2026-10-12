-- PRASANN admin setup: Supabase > SQL Editor में पूरा paste करके Run करें
create table if not exists products(
  id uuid primary key default gen_random_uuid(),
  name text not null, name_hi text,
  category text not null check (category in ('Snacks','Indian Meals','South Indian Meals','Fast Food','Sweets')),
  price_per_kg numeric check (price_per_kg is null or price_per_kg >= 0),
  status text not null default 'coming_soon' check (status in ('available','coming_soon')),
  image_url text, created_at timestamptz default now());
create table if not exists stories(
  id uuid primary key default gen_random_uuid(),
  image_url text not null, caption text,
  created_at timestamptz default now(),
  expires_at timestamptz not null default (now() + interval '24 hours'));
create table if not exists admins(user_id uuid primary key references auth.users on delete cascade);

create or replace function is_admin() returns boolean language sql security definer set search_path=public stable as
$$ select exists(select 1 from admins where user_id = auth.uid()) $$;

alter table products enable row level security;
alter table stories enable row level security;
alter table admins enable row level security;

create policy "products read" on products for select using (true);
create policy "products admin write" on products for all using (is_admin()) with check (is_admin());
create policy "stories read live" on stories for select using (expires_at > now() or is_admin());
create policy "stories admin write" on stories for all using (is_admin()) with check (is_admin());
create policy "admins self read" on admins for select using (user_id = auth.uid());

insert into storage.buckets(id,name,public) values('media','media',true) on conflict do nothing;
create policy "media read" on storage.objects for select using (bucket_id='media');
create policy "media admin insert" on storage.objects for insert with check (bucket_id='media' and is_admin());
create policy "media admin update" on storage.objects for update using (bucket_id='media' and is_admin());
create policy "media admin delete" on storage.objects for delete using (bucket_id='media' and is_admin());

insert into products(name,name_hi,category,status)
select 'PRASANN Kaju Shape Snacks','प्रसन्न काजू शेप स्नैक्स','Snacks','available'
where not exists(select 1 from products);

-- खुद को admin बनाने के लिए (पहले Authentication > Users में अपना email से user बनाएँ),
-- फिर नीचे की line में अपना email डालकर अलग से Run करें:
-- insert into admins(user_id) select id from auth.users where email='YOUR_EMAIL';
