alter table "public"."podcasts" drop constraint "podcasts_slug_key";
alter table "public"."podcasts" add constraint "podcasts_slug_key" unique ("slug");
\