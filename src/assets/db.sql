-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.accompainment_types (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name_en text NOT NULL,
  name_es text,
  name_pt text,
  is_enabled boolean NOT NULL DEFAULT true,
  CONSTRAINT accompainment_types_pkey PRIMARY KEY (id)
);
CREATE TABLE public.request_accompainments (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  service_req_id uuid NOT NULL,
  accompainment_id bigint NOT NULL,
  CONSTRAINT request_accompainments_pkey PRIMARY KEY (id),
  CONSTRAINT request_accompainments_service_req_id_fkey FOREIGN KEY (service_req_id) REFERENCES public.service_requests(id),
  CONSTRAINT request_accompainments_accompainment_id_fkey FOREIGN KEY (accompainment_id) REFERENCES public.accompainment_types(id)
);
CREATE TABLE public.roles (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  role_name text,
  CONSTRAINT roles_pkey PRIMARY KEY (id)
);
CREATE TABLE public.service_duration_types (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  duration_en text NOT NULL,
  duration_es text,
  duration_pt text,
  CONSTRAINT service_duration_types_pkey PRIMARY KEY (id)
);
CREATE TABLE public.service_languages (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  lang_en text NOT NULL,
  lang_es text,
  lang_pt text,
  CONSTRAINT service_languages_pkey PRIMARY KEY (id)
);
CREATE TABLE public.service_req_statuses (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  status_en text NOT NULL,
  status_es text,
  status_pt text,
  CONSTRAINT service_req_statuses_pkey PRIMARY KEY (id)
);
CREATE TABLE public.service_requests (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  fullname text NOT NULL,
  nationality text NOT NULL,
  email text NOT NULL,
  whatsapp_number text NOT NULL,
  main_service bigint,
  accompaniment_other text,
  service_language_id bigint,
  service_date timestamp with time zone NOT NULL,
  service_duration_id bigint,
  spanish_survival boolean NOT NULL DEFAULT false,
  spanish_daily boolean NOT NULL DEFAULT false,
  spanish_conversational boolean NOT NULL DEFAULT false,
  spanish_class_modality smallint,
  additional_message text,
  accept_data_policy boolean NOT NULL,
  accept_contact boolean NOT NULL,
  status_id bigint,
  CONSTRAINT service_requests_pkey PRIMARY KEY (id),
  CONSTRAINT service_requests_main_service_fkey FOREIGN KEY (main_service) REFERENCES public.service_types(id),
  CONSTRAINT service_requests_service_language_id_fkey FOREIGN KEY (service_language_id) REFERENCES public.service_languages(id),
  CONSTRAINT service_requests_service_duration_id_fkey FOREIGN KEY (service_duration_id) REFERENCES public.service_duration_types(id),
  CONSTRAINT service_requests_status_id_fkey FOREIGN KEY (status_id) REFERENCES public.service_req_statuses(id)
);
CREATE TABLE public.service_types (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name_en text NOT NULL,
  name_es text,
  name_pt text,
  CONSTRAINT service_types_pkey PRIMARY KEY (id)
);
CREATE TABLE public.usuarios (
  id uuid NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  email text NOT NULL,
  username text NOT NULL,
  rol_id bigint,
  CONSTRAINT usuarios_pkey PRIMARY KEY (id),
  CONSTRAINT usarios_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id),
  CONSTRAINT usarios_rol_id_fkey FOREIGN KEY (rol_id) REFERENCES public.roles(id)
);