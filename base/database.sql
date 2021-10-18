PGDMP         #            	    y            iniap     12.8 (Ubuntu 12.8-1.pgdg18.04+1)     14.0 (Ubuntu 14.0-1.pgdg18.04+1) 
    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    17778    iniap    DATABASE     Z   CREATE DATABASE iniap WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'es_EC.UTF-8';
    DROP DATABASE iniap;
                postgres    false            �            1255    25974    json_users_listado()    FUNCTION       CREATE FUNCTION public.json_users_listado() RETURNS text
    LANGUAGE plpgsql
    AS $$ 
declare
	Respuesta json;

begin 

select 
array_to_json (array_agg (row_to_json(datos)))
from(
	select * 
	from users
) as datos into Respuesta;

return Respuesta;
end;
$$;
 +   DROP FUNCTION public.json_users_listado();
       public          postgres    false            �            1255    25972    json_users_listado(integer)    FUNCTION       CREATE FUNCTION public.json_users_listado(_id integer) RETURNS integer
    LANGUAGE plpgsql
    AS $$ 
declare
	Respuesta json;

begin 

select 
array_to_json (array_agg (row_to_json(datos)))
from(
	select * 
	from users
) as datos into Respuesta;

return Respuesta;
end;
$$;
 6   DROP FUNCTION public.json_users_listado(_id integer);
       public          postgres    false            �            1259    17779    prueba    TABLE     �   CREATE TABLE public.prueba (
    id_prueba integer,
    nombre character varying(50),
    descripcion character varying(100)
);
    DROP TABLE public.prueba;
       public         heap    postgres    false            �            1259    17782    users    TABLE        CREATE TABLE public.users (
    id_user integer,
    nombre character varying(50),
    password_user character varying(100)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �          0    17779    prueba 
   TABLE DATA           @   COPY public.prueba (id_prueba, nombre, descripcion) FROM stdin;
    public          postgres    false    202   �
       �          0    17782    users 
   TABLE DATA           ?   COPY public.users (id_user, nombre, password_user) FROM stdin;
    public          postgres    false    203          �   ?   x�3�(*MMJ4�,NU�Ȭ�W(�KT( �)��*�$*$%��̔Ē�b.#�#b5��qqq ��!9      �   T   x�3����K,����t0202�2�K�I-�LD3�*�(E2����I�44261�2����M*J��54�t�I�CҌ)���� �"U     