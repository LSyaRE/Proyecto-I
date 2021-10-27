PGDMP                     	    y            iniap    13.3    13.3 7    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    180704    iniap    DATABASE     a   CREATE DATABASE iniap WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE iniap;
                postgres    false            �            1259    197145 
   asignacion    TABLE     �   CREATE TABLE public.asignacion (
    id_perdepa integer NOT NULL,
    cedula_personas character varying(15) NOT NULL,
    id_departamentos integer NOT NULL,
    id_rol integer NOT NULL
);
    DROP TABLE public.asignacion;
       public         heap    postgres    false            �            1259    197141    asignacion_id_departamentos_seq    SEQUENCE     �   CREATE SEQUENCE public.asignacion_id_departamentos_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.asignacion_id_departamentos_seq;
       public          postgres    false    209            �           0    0    asignacion_id_departamentos_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.asignacion_id_departamentos_seq OWNED BY public.asignacion.id_departamentos;
          public          postgres    false    207            �            1259    197139    asignacion_id_perdepa_seq    SEQUENCE     �   CREATE SEQUENCE public.asignacion_id_perdepa_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.asignacion_id_perdepa_seq;
       public          postgres    false    209            �           0    0    asignacion_id_perdepa_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.asignacion_id_perdepa_seq OWNED BY public.asignacion.id_perdepa;
          public          postgres    false    206            �            1259    197143    asignacion_id_rol_seq    SEQUENCE     �   CREATE SEQUENCE public.asignacion_id_rol_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.asignacion_id_rol_seq;
       public          postgres    false    209            �           0    0    asignacion_id_rol_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.asignacion_id_rol_seq OWNED BY public.asignacion.id_rol;
          public          postgres    false    208            �            1259    197133    conexion    TABLE     �  CREATE TABLE public.conexion (
    id_conexion integer NOT NULL,
    num_serie_ordenador integer NOT NULL,
    id_impresora integer NOT NULL,
    ip_lan_conexion character varying(20),
    ip_wifi_conexion character varying(20),
    mcadd_lan_conexion character varying(20) NOT NULL,
    macadd_wifi_conexion character varying(50),
    tipo_conexion character varying(10) NOT NULL
);
    DROP TABLE public.conexion;
       public         heap    postgres    false            �            1259    197131    conexion_id_impresora_seq    SEQUENCE     �   CREATE SEQUENCE public.conexion_id_impresora_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.conexion_id_impresora_seq;
       public          postgres    false    205            �           0    0    conexion_id_impresora_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.conexion_id_impresora_seq OWNED BY public.conexion.id_impresora;
          public          postgres    false    204            �            1259    197113    departamentos    TABLE     D  CREATE TABLE public.departamentos (
    id_departamentos integer NOT NULL,
    nom_departamento character varying(50) NOT NULL,
    num_computadoras_departamentos integer NOT NULL,
    num_laptops_departamentos integer NOT NULL,
    num_impresoras_departamentos integer NOT NULL,
    aforo_departamentos integer NOT NULL
);
 !   DROP TABLE public.departamentos;
       public         heap    postgres    false            �            1259    197125 
   impresoras    TABLE     �   CREATE TABLE public.impresoras (
    id_impresora integer NOT NULL,
    id_departamento integer NOT NULL,
    marca_impresora character varying(30) NOT NULL,
    tipo_impresora character varying(20)
);
    DROP TABLE public.impresoras;
       public         heap    postgres    false            �            1259    197123    impresoras_id_impresora_seq    SEQUENCE     �   CREATE SEQUENCE public.impresoras_id_impresora_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.impresoras_id_impresora_seq;
       public          postgres    false    203            �           0    0    impresoras_id_impresora_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.impresoras_id_impresora_seq OWNED BY public.impresoras.id_impresora;
          public          postgres    false    202            �            1259    197118 	   ordenador    TABLE       CREATE TABLE public.ordenador (
    num_serie_ordenador integer NOT NULL,
    cedula_personas character varying(15) NOT NULL,
    nom_ordenador character varying(10) NOT NULL,
    marca_ordenador character varying(50) NOT NULL,
    modelo_ordenador character varying(50) NOT NULL
);
    DROP TABLE public.ordenador;
       public         heap    postgres    false            �            1259    197161    personas    TABLE     M  CREATE TABLE public.personas (
    cedula_personas character varying(15) NOT NULL,
    nombre_personas character varying(50) NOT NULL,
    apellido_personas character varying(50) NOT NULL,
    correo_inst_personas character varying(50) NOT NULL,
    "contraseña_personas" character varying(50),
    num_contacto_personas integer
);
    DROP TABLE public.personas;
       public         heap    postgres    false            �            1259    197155    rol    TABLE     �   CREATE TABLE public.rol (
    id_rol integer NOT NULL,
    nombre_rol character varying(20) NOT NULL,
    desc_rol character varying(250)
);
    DROP TABLE public.rol;
       public         heap    postgres    false            �            1259    197153    rol_id_rol_seq    SEQUENCE     �   CREATE SEQUENCE public.rol_id_rol_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.rol_id_rol_seq;
       public          postgres    false    211            �           0    0    rol_id_rol_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.rol_id_rol_seq OWNED BY public.rol.id_rol;
          public          postgres    false    210            F           2604    197148    asignacion id_perdepa    DEFAULT     ~   ALTER TABLE ONLY public.asignacion ALTER COLUMN id_perdepa SET DEFAULT nextval('public.asignacion_id_perdepa_seq'::regclass);
 D   ALTER TABLE public.asignacion ALTER COLUMN id_perdepa DROP DEFAULT;
       public          postgres    false    206    209    209            G           2604    197149    asignacion id_departamentos    DEFAULT     �   ALTER TABLE ONLY public.asignacion ALTER COLUMN id_departamentos SET DEFAULT nextval('public.asignacion_id_departamentos_seq'::regclass);
 J   ALTER TABLE public.asignacion ALTER COLUMN id_departamentos DROP DEFAULT;
       public          postgres    false    209    207    209            H           2604    197150    asignacion id_rol    DEFAULT     v   ALTER TABLE ONLY public.asignacion ALTER COLUMN id_rol SET DEFAULT nextval('public.asignacion_id_rol_seq'::regclass);
 @   ALTER TABLE public.asignacion ALTER COLUMN id_rol DROP DEFAULT;
       public          postgres    false    208    209    209            E           2604    197136    conexion id_impresora    DEFAULT     ~   ALTER TABLE ONLY public.conexion ALTER COLUMN id_impresora SET DEFAULT nextval('public.conexion_id_impresora_seq'::regclass);
 D   ALTER TABLE public.conexion ALTER COLUMN id_impresora DROP DEFAULT;
       public          postgres    false    204    205    205            D           2604    197128    impresoras id_impresora    DEFAULT     �   ALTER TABLE ONLY public.impresoras ALTER COLUMN id_impresora SET DEFAULT nextval('public.impresoras_id_impresora_seq'::regclass);
 F   ALTER TABLE public.impresoras ALTER COLUMN id_impresora DROP DEFAULT;
       public          postgres    false    202    203    203            I           2604    197158 
   rol id_rol    DEFAULT     h   ALTER TABLE ONLY public.rol ALTER COLUMN id_rol SET DEFAULT nextval('public.rol_id_rol_seq'::regclass);
 9   ALTER TABLE public.rol ALTER COLUMN id_rol DROP DEFAULT;
       public          postgres    false    210    211    211            �          0    197145 
   asignacion 
   TABLE DATA           [   COPY public.asignacion (id_perdepa, cedula_personas, id_departamentos, id_rol) FROM stdin;
    public          postgres    false    209   D       �          0    197133    conexion 
   TABLE DATA           �   COPY public.conexion (id_conexion, num_serie_ordenador, id_impresora, ip_lan_conexion, ip_wifi_conexion, mcadd_lan_conexion, macadd_wifi_conexion, tipo_conexion) FROM stdin;
    public          postgres    false    205   8D       �          0    197113    departamentos 
   TABLE DATA           �   COPY public.departamentos (id_departamentos, nom_departamento, num_computadoras_departamentos, num_laptops_departamentos, num_impresoras_departamentos, aforo_departamentos) FROM stdin;
    public          postgres    false    200   UD       �          0    197125 
   impresoras 
   TABLE DATA           d   COPY public.impresoras (id_impresora, id_departamento, marca_impresora, tipo_impresora) FROM stdin;
    public          postgres    false    203   rD       �          0    197118 	   ordenador 
   TABLE DATA           {   COPY public.ordenador (num_serie_ordenador, cedula_personas, nom_ordenador, marca_ordenador, modelo_ordenador) FROM stdin;
    public          postgres    false    201   �D       �          0    197161    personas 
   TABLE DATA           �   COPY public.personas (cedula_personas, nombre_personas, apellido_personas, correo_inst_personas, "contraseña_personas", num_contacto_personas) FROM stdin;
    public          postgres    false    212   �D       �          0    197155    rol 
   TABLE DATA           ;   COPY public.rol (id_rol, nombre_rol, desc_rol) FROM stdin;
    public          postgres    false    211   
E       �           0    0    asignacion_id_departamentos_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.asignacion_id_departamentos_seq', 1, false);
          public          postgres    false    207            �           0    0    asignacion_id_perdepa_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.asignacion_id_perdepa_seq', 1, false);
          public          postgres    false    206            �           0    0    asignacion_id_rol_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.asignacion_id_rol_seq', 1, false);
          public          postgres    false    208            �           0    0    conexion_id_impresora_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.conexion_id_impresora_seq', 1, false);
          public          postgres    false    204            �           0    0    impresoras_id_impresora_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.impresoras_id_impresora_seq', 1, false);
          public          postgres    false    202            �           0    0    rol_id_rol_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.rol_id_rol_seq', 1, false);
          public          postgres    false    210            W           2606    197165    personas cedula_personas 
   CONSTRAINT     c   ALTER TABLE ONLY public.personas
    ADD CONSTRAINT cedula_personas PRIMARY KEY (cedula_personas);
 B   ALTER TABLE ONLY public.personas DROP CONSTRAINT cedula_personas;
       public            postgres    false    212            Q           2606    197138    conexion id_conexion 
   CONSTRAINT     [   ALTER TABLE ONLY public.conexion
    ADD CONSTRAINT id_conexion PRIMARY KEY (id_conexion);
 >   ALTER TABLE ONLY public.conexion DROP CONSTRAINT id_conexion;
       public            postgres    false    205            K           2606    197117    departamentos id_departamentos 
   CONSTRAINT     j   ALTER TABLE ONLY public.departamentos
    ADD CONSTRAINT id_departamentos PRIMARY KEY (id_departamentos);
 H   ALTER TABLE ONLY public.departamentos DROP CONSTRAINT id_departamentos;
       public            postgres    false    200            O           2606    197130    impresoras id_impresora 
   CONSTRAINT     _   ALTER TABLE ONLY public.impresoras
    ADD CONSTRAINT id_impresora PRIMARY KEY (id_impresora);
 A   ALTER TABLE ONLY public.impresoras DROP CONSTRAINT id_impresora;
       public            postgres    false    203            S           2606    197152    asignacion id_perdepa 
   CONSTRAINT     [   ALTER TABLE ONLY public.asignacion
    ADD CONSTRAINT id_perdepa PRIMARY KEY (id_perdepa);
 ?   ALTER TABLE ONLY public.asignacion DROP CONSTRAINT id_perdepa;
       public            postgres    false    209            U           2606    197160 
   rol id_rol 
   CONSTRAINT     L   ALTER TABLE ONLY public.rol
    ADD CONSTRAINT id_rol PRIMARY KEY (id_rol);
 4   ALTER TABLE ONLY public.rol DROP CONSTRAINT id_rol;
       public            postgres    false    211            M           2606    197122    ordenador num_serie 
   CONSTRAINT     b   ALTER TABLE ONLY public.ordenador
    ADD CONSTRAINT num_serie PRIMARY KEY (num_serie_ordenador);
 =   ALTER TABLE ONLY public.ordenador DROP CONSTRAINT num_serie;
       public            postgres    false    201            \           2606    197191 #   asignacion asignacion_departamentos    FK CONSTRAINT     �   ALTER TABLE ONLY public.asignacion
    ADD CONSTRAINT asignacion_departamentos FOREIGN KEY (id_departamentos) REFERENCES public.departamentos(id_departamentos) MATCH FULL;
 M   ALTER TABLE ONLY public.asignacion DROP CONSTRAINT asignacion_departamentos;
       public          postgres    false    209    200    2891            ]           2606    197196    asignacion asignacion_rol    FK CONSTRAINT     �   ALTER TABLE ONLY public.asignacion
    ADD CONSTRAINT asignacion_rol FOREIGN KEY (id_rol) REFERENCES public.rol(id_rol) MATCH FULL;
 C   ALTER TABLE ONLY public.asignacion DROP CONSTRAINT asignacion_rol;
       public          postgres    false    211    209    2901            Z           2606    197181    conexion conexion_impresoras    FK CONSTRAINT     �   ALTER TABLE ONLY public.conexion
    ADD CONSTRAINT conexion_impresoras FOREIGN KEY (id_impresora) REFERENCES public.impresoras(id_impresora) MATCH FULL;
 F   ALTER TABLE ONLY public.conexion DROP CONSTRAINT conexion_impresoras;
       public          postgres    false    203    2895    205            Y           2606    197171 #   impresoras impresoras_departamentos    FK CONSTRAINT     �   ALTER TABLE ONLY public.impresoras
    ADD CONSTRAINT impresoras_departamentos FOREIGN KEY (id_departamento) REFERENCES public.departamentos(id_departamentos) MATCH FULL;
 M   ALTER TABLE ONLY public.impresoras DROP CONSTRAINT impresoras_departamentos;
       public          postgres    false    203    2891    200            X           2606    197166    ordenador ordenadores_personas    FK CONSTRAINT     �   ALTER TABLE ONLY public.ordenador
    ADD CONSTRAINT ordenadores_personas FOREIGN KEY (cedula_personas) REFERENCES public.personas(cedula_personas) MATCH FULL;
 H   ALTER TABLE ONLY public.ordenador DROP CONSTRAINT ordenadores_personas;
       public          postgres    false    2903    201    212            [           2606    197186    asignacion persona_asignacion    FK CONSTRAINT     �   ALTER TABLE ONLY public.asignacion
    ADD CONSTRAINT persona_asignacion FOREIGN KEY (cedula_personas) REFERENCES public.personas(cedula_personas) MATCH FULL;
 G   ALTER TABLE ONLY public.asignacion DROP CONSTRAINT persona_asignacion;
       public          postgres    false    212    2903    209            �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �   N   x�347526607�����K,����IL�,��qˠ<��Č�|���\Ό��DNK.C�F�4�[�Y���Yp��qqq �'}      �      x������ � �     